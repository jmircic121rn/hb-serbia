import React, { useEffect, useState, useRef } from 'react';
import './App.css';
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
import InternalTrainings from './components/InternalTrainings';
import AssessmentIntro from './components/AssessmentIntro';


function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
            navigate('/assessment/intro');
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
    <div className="pd-split-container" style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row', 
      minHeight: '100vh',
      overflow: 'visible' 
    }}>
      

      <main className="pd-content" style={{ 
        flex: 1, 
        overflow: 'visible',
        paddingTop: isMobile ? '20px' : '100px'
      }}>
        {children}
      </main>
    </div>
  </div>
);

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      <Routes>
        {/* 1. PLANETE (Pre-intro) */}
        <Route path="/" element={
          <EclipseIntro
            onProceed={(choice) => {
              if (choice === 'ABOUT') navigate('/about');
              else if (choice === 'TRAINERS') navigate('/trainers');
              else if (choice === 'OPEN_TRAININGS') navigate('/open-trainings');
              else if (choice === 'INTERNAL_TRAININGS') navigate('/internal-trainings'); // 2. DODATA PUTANJA
              else navigate('/assessment'); // OVO SADA VODI NA URL /assessment
            }}
            language={language}
            setLanguage={setLanguage}
          />
        } />
        <Route path="/internal-trainings" element={<InternalTrainings language={language} />} />

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

        <Route path="/assessment/intro" element={
    <AssessmentLayout>
      <AssessmentIntro
        language={language} 
        onStart={() => navigate('/assessment/test')} 
      />
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