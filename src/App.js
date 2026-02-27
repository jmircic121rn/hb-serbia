import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

// Importi komponenti
import LandingPage from './components/LandingPage';
import LeadForm from './components/LeadForm';
import LoadingScreen from './components/LoadingScreen';
import ResultView from './components/ResultView';
import Assessment from './components/Assessment';
import EclipseIntro from './components/EclipseIntro';
import OpenTrainings from './components/OpenTrainings';
import SuccessLine from './components/SuccessLine';
import ValueBasedClosing from './components/ValueBasedClosing';
import PerceptionBasedConversation from './components/PerceptionBasedConversation';
import PersonalResponsibility from './components/PersonalResponsibility';
import AboutUs from './components/AboutUs';
import Trainers from './components/Trainers';
import PrivacyPolicy from './components/PrivacyPolicy';
import VerifyEmail from './components/VerifyEmail';
import { translations } from './data/translations';

const SidebarCompass = () => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const driftInterval = setInterval(() => {
      setRotation(prev => prev + (Math.random() - 0.5) * 2);
    }, 2000);
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      setRotation(x);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(driftInterval);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', margin: '30px 0', opacity: 0.8 }}>
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,180,120,0.15)" strokeWidth="0.5" />
        <motion.g animate={{ rotate: rotation }} style={{ originX: '50px', originY: '50px' }}>
          <path d="M50 15 L54 50 L50 50 L46 50 Z" fill="#ffffff" />
          <path d="M50 85 L54 50 L50 50 L46 50 Z" fill="rgba(255,255,255,0.2)" />
        </motion.g>
      </svg>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [eclipseMenu, setEclipseMenu] = useState('main');
  const [language, setLanguage] = useState('sr');
  const [assessmentType, setAssessmentType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const checkIntervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // POLLING ZA VERIFIKACIJU (Prati rutu /assessment/verify)
  useEffect(() => {
    if (location.pathname === '/assessment/verify' && userData?.email) {
      checkIntervalRef.current = setInterval(async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/public-assessment/check-status?email=${userData.email}`);
          const data = await res.json();
          if (data.isVerified) {
            localStorage.setItem('userEmail', userData.email);
            localStorage.setItem('isVerified', 'true');
            clearInterval(checkIntervalRef.current);
            navigate('/assessment/test');
          }
        } catch (err) { console.error("Polling error:", err); }
      }, 3000);
    }
    return () => { if (checkIntervalRef.current) clearInterval(checkIntervalRef.current); };
  }, [location.pathname, userData, API_BASE_URL, navigate]);

  const handleLeadSubmit = async (data) => {
    setErrorMsg(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        setUserData(data);
        navigate('/assessment/verify');
      } else {
        setErrorMsg(result.code === 'ALREADY_DONE' ? translations[language].form.alreadyDone : translations[language].form.serverError);
      }
    } catch (error) { setErrorMsg(translations[language].form.serverError); }
  };

  const handleFinish = async (finalAnswers) => {
    navigate('/assessment/loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, responses: finalAnswers, type: assessmentType, lang: language })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        navigate('/assessment/results');
      } else {
        navigate('/assessment/form');
      }
    } catch (error) { navigate('/assessment'); }
  };

  const AssessmentLayout = ({ children }) => (
    <div className="main-layout-wrapper">
      <div className="pd-split-container" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '100vh' }}>
        <div className="pd-sidebar" style={{ 
          width: isMobile ? '100%' : '350px', padding: isMobile ? '60px 20px 20px 20px' : '40px',
          marginTop: isMobile ? '40px' : '70px', height: isMobile ? 'auto' : 'calc(100vh - 140px)',
          display: 'flex', flexDirection: isMobile ? 'row' : 'column',
          alignItems: 'center', justifyContent: isMobile ? 'space-around' : 'flex-start',
          borderRight: isMobile ? 'none' : '1px solid rgba(255,180,120,0.1)',
          borderBottom: isMobile ? '1px solid rgba(255,180,120,0.1)' : 'none'
        }}>
          <img src="/logo.png" alt="Logo" style={{ width: '200px' }} />
           <img src="/compass.png" alt="Logo" style={{ width: '180px', marginTop: '20px' }} />
        </div>
        <div className="pd-content" style={{ flex: 1 }}>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* --- UNIVERZALNO BACK DUGME --- */}
      {(location.pathname !== '/' || eclipseMenu !== 'main') && !location.pathname.includes('loading') && (
        <div 
          onClick={() => {
            if (location.pathname === '/' && eclipseMenu !== 'main') {
              setEclipseMenu('main');
            } else if (location.pathname.startsWith('/assessment')) {
               location.pathname === '/assessment' ? navigate('/') : navigate(-1);
            } else {
              navigate('/');
            }
          }} 
          className="back-btn-custom" 
          style={{ 
            position: 'fixed', top: '30px', left: '40px', cursor: 'pointer', zIndex: 99999,
            display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '12px',
            letterSpacing: '2px', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)',
            padding: '10px 15px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <span>←</span> BACK
        </div>
      )}

      <Routes>
        {/* 1. PLANETE (Pre-intro) */}
        <Route path="/" element={
          <EclipseIntro
            onProceed={(choice) => {
              if (choice === 'ABOUT') navigate('/about');
              else if (choice === 'TRAINERS') navigate('/trainers');
              else if (choice === 'OPEN_TRAININGS') navigate('/open-trainings');
              else navigate('/assessment'); // OVO SADA VODI NA URL /assessment
            }}
            menuLevel={eclipseMenu}
            setMenuLevel={setEclipseMenu}
            language={language}
            setLanguage={setLanguage}
          />
        } />

        {/* 2. LANDING PAGE (Sada ima svoj URL /assessment) */}
        <Route path="/assessment" element={
          <AssessmentLayout>
            <LandingPage 
              onStart={(type) => { setAssessmentType(type); navigate('/assessment/form'); }} 
              language={language} 
              setLanguage={setLanguage} 
            />
          </AssessmentLayout>
        } />

        {/* 3. FORMA */}
        <Route path="/assessment/form" element={
          <AssessmentLayout>
            <LeadForm 
              language={language} 
              errorMsg={errorMsg} 
              onNext={handleLeadSubmit} 
              onPrivacyClick={() => navigate('/politika-privatnosti')} 
              setLanguage={setLanguage} 
            />
          </AssessmentLayout>
        } />

        {/* 4. VERIFIKACIJA */}
        <Route path="/assessment/verify" element={
          <AssessmentLayout>
            <div style={{ padding: '60px', color: '#fff' }}>
              <h2>{language === 'sr' ? 'Skoro smo stigli.' : 'Almost there.'}</h2>
              <p>{language === 'sr' ? 'Kliknite na link u mejlu koji smo vam poslali.' : 'Click the link in the email we sent you.'}</p>
            </div>
          </AssessmentLayout>
        } />

        {/* 5. TEST */}
        <Route path="/assessment/test" element={
          <AssessmentLayout>
            <Assessment language={language} type={assessmentType} onFinish={handleFinish} />
          </AssessmentLayout>
        } />

        {/* 6. LOADING & REZULTAT */}
        <Route path="/assessment/loading" element={<LoadingScreen language={language} />} />
        <Route path="/assessment/results" element={<AssessmentLayout><ResultView report={report} userData={userData} language={language} /></AssessmentLayout>} />

        {/* --- OSTALE RUTE --- */}
        <Route path="/about" element={<AboutUs onBack={() => navigate('/')} />} />
        <Route path="/trainers" element={<Trainers onBack={() => navigate('/')} />} />
        <Route path="/open-trainings" element={<OpenTrainings onNavigate={(path) => navigate(path)} />} />
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy language={language} onBack={() => navigate(-1)} />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;