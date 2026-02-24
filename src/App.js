import React, { useEffect, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Komponente
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

// Kompas komponenta sa suptilnim pokretom
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
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,180,120,0.15)" strokeWidth="0.5" />
        <text x="50" y="8" fontSize="7" fill="#ffb478" textAnchor="middle" fontWeight="900">N</text>
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line key={deg} x1="50" y1="15" x2="50" y2="20" transform={`rotate(${deg} 50 50)`} stroke="rgba(255,180,120,0.2)" strokeWidth="0.5" />
        ))}
        <motion.g animate={{ rotate: rotation }} transition={{ type: 'spring', stiffness: 15, damping: 20 }} style={{ originX: '50px', originY: '50px' }}>
          <path d="M50 15 L54 50 L50 85 L46 50 Z" fill="#ffb478" />
          <circle cx="50" cy="50" r="2.5" fill="#0a0a0a" stroke="#ffb478" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // GLOBALNA STANJA
  const [step, setStep] = useState('PREINTRO');
  const [eclipseMenu, setEclipseMenu] = useState('main');
  const [language, setLanguage] = useState('sr'); // Globalni jezik
  const [assessmentType, setAssessmentType] = useState(null); // 'LEADER' ili 'EMPLOYEE'

  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, step]);

  const handleNavigate = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
    } else {
      setStep(target);
      if (location.pathname !== '/') navigate('/');
    }
  };

  // Funkcija koja se poziva kada korisnik klikne "Započni samoprocenu" na Landing stranici
  const handleStartJourney = (type) => {
    setAssessmentType(type); // Pamti da li je lider ili zaposleni
    setStep('START'); // Šalje na formu (LeadForm)
  };

  const goBack = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setStep('OPEN_TRAININGS');
      setEclipseMenu('assessment');
      return;
    }

    if (step === 'PREINTRO' && eclipseMenu === 'assessment') {
      setEclipseMenu('main');
      return;
    }

    switch (step) {
      case 'ABOUT':
      case 'TRAINERS':
        setStep('PREINTRO');
        setEclipseMenu('main');
        break;
      case 'OPEN_TRAININGS':
      case 'INTRO':
        setStep('PREINTRO');
        setEclipseMenu('assessment');
        break;
      case 'START':
        setStep('INTRO');
        break;
      case 'PRIVACY':
        setStep('START');
        break;
      case 'TEST':
        setStep('START');
        break;
      case 'RESULT':
        setStep('PREINTRO');
        setEclipseMenu('assessment');
        break;
      default:
        setStep('PREINTRO');
        setEclipseMenu('main');
    }
  };

  const handlePortalChoice = (choice) => {
    if (choice === 'ABOUT') setStep('ABOUT');
    else if (choice === 'TRAINERS') setStep('TRAINERS');
    else if (choice === 'INTERNAL' || choice === 'INTRO') setStep('INTRO');
    else if (choice === 'OPEN_TRAININGS') setStep('OPEN_TRAININGS');
    else setStep('INTRO');
  };

  const handleFinish = async (finalAnswers) => {
    setStep('LOADING');
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userData,
          responses: finalAnswers,
          type: assessmentType, // Šaljemo tip na backend
          lang: language
        })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        setStep('RESULT');
      } else {
        setErrorMsg(data.message || "Greška.");
        setStep('START');
      }
    } catch (error) { setStep('START'); }
  };

  const handleLeadSubmit = (data) => {
    setUserData(data);
    setStep('TEST');
  };

  const showSidebar = ['INTRO', 'START', 'PRIVACY', 'TEST', 'LOADING', 'RESULT'].includes(step) && location.pathname === '/';

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* BACK DUGME */}
      {((step !== 'PREINTRO' || eclipseMenu !== 'main') || location.pathname !== '/') && step !== 'LOADING' && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={goBack}
          style={{
            position: 'fixed', top: '30px', left: '30px', zIndex: 9999,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
            color: 'rgba(255, 180, 120, 0.8)', backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '10px 15px', borderRadius: '50px', backdropFilter: 'blur(10px)',
            fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px',
            border: '1px solid rgba(255, 180, 120, 0.2)'
          }}
        >
          <span>←</span> BACK
        </motion.div>
      )}

      <Routes>
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />

        <Route path="/" element={
          location.pathname === '/' ? (
            <div style={{ width: '100%', minHeight: '100vh' }}>

              {step === 'PREINTRO' && (
                <EclipseIntro
                  onProceed={handlePortalChoice}
                  menuLevel={eclipseMenu}
                  setMenuLevel={setEclipseMenu}
                  language={language}
                  setLanguage={setLanguage} // <--- DODAJ OVU LINIJU
                />
              )}
              {step === 'ABOUT' && <AboutUs onBack={() => setStep('PREINTRO')} />}
              {step === 'TRAINERS' && <Trainers onBack={() => setStep('PREINTRO')} />}
              {step === 'OPEN_TRAININGS' && <OpenTrainings onNavigate={handleNavigate} />}

              {showSidebar && (
                <div className="pd-split-container" style={{
                  display: 'flex', width: '100%', minHeight: '100vh',
                  flexDirection: window.innerWidth < 1024 ? 'column' : 'row'
                }}>
                  {/* SIDEBAR SA KOMPASOM */}
                  <div className="pd-sidebar" style={{
                    width: window.innerWidth < 1024 ? '100%' : '380px',
                    backgroundColor: '#050505', borderRight: '1px solid rgba(255, 180, 120, 0.1)',
                    color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    padding: '60px 40px', position: window.innerWidth < 1024 ? 'relative' : 'sticky',
                    top: 0, height: window.innerWidth < 1024 ? 'auto' : '100vh', zIndex: 100, overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none', backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

                    <div className="sidebar-header" style={{ position: 'relative', zIndex: 2 }}>
                      <img src="/logo.png" alt="Logo" style={{ marginTop: '20px', width: '160px', opacity: 0.9, marginBottom: '40px' }} />
                      <SidebarCompass />
                      <div style={{ color: 'rgba(255, 180, 120, 0.6)', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>The Expedition</div>
                      <h1 style={{ fontSize: '28px', fontWeight: '900', lineHeight: '1.1', color: '#fff' }}>Ideal Profile <br /> Assessment</h1>
                      <div style={{ width: '40px', height: '2px', backgroundColor: '#ffb478', marginTop: '20px' }} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
                      <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,180,120,0.4)', display: 'flex', justifyContent: 'space-between' }}>
                        <span>LOC: 90°00′S 0°00′E</span>
                        <span>VER: 2.0.4</span>
                      </div>
                    </div>
                  </div>

                  {/* GLAVNI SADRŽAJ SA PROSLEĐENIM JEZIKOM */}
                  <div className="pd-content" style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
                    {step === 'INTRO' && (
                      <LandingPage
                        onStart={handleStartJourney}
                        language={language}
                        setLanguage={setLanguage}
                      />
                    )}
                    {step === 'START' && (
                      <LeadForm
                        language={language}
                        errorMsg={errorMsg}
                        setLanguage={setLanguage}
                        onNext={handleLeadSubmit}
                        onPrivacyClick={() => setStep('PRIVACY')}
                      />
                    )}
                    {step === 'PRIVACY' && (
                      <div style={{ padding: '40px' }}>
                        <PrivacyPolicy language={language} onBack={() => setStep('START')} />
                      </div>
                    )}
                    {step === 'TEST' && (
                      <Assessment
                        language={language}
                        type={assessmentType}
                        onFinish={handleFinish}
                      />
                    )}
                    {step === 'LOADING' && <LoadingScreen language={language} />}
                    {step === 'RESULT' && (
                      <ResultView
                        report={report}
                        userData={userData}
                        language={language}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : null
        } />
      </Routes>
    </div>
  );
}

export default App;