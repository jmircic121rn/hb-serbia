import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Importi svih tvojih komponenti
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
          <path d="M50 15 L54 50 L50 50 L46 50 Z" fill="#ffb478" />
          <path d="M50 85 L54 50 L50 50 L46 50 Z" fill="rgba(255,255,255,0.2)" />
        </motion.g>
      </svg>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState('PREINTRO');
  const [eclipseMenu, setEclipseMenu] = useState('main');
  const [language, setLanguage] = useState('sr');
  const [assessmentType, setAssessmentType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const API_BASE_URL = 'http://localhost:5001';
  const checkIntervalRef = useRef(null);

  // App.js
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail && step === 'PREINTRO') {
      // Opciono: Možeš ga vratiti na test ako prepoznaš da je verifikovan
      // Ali za sada, polling na "živom" tabu je najsigurnija opcija.
    }
  }, [step]);

  // POLLING ZA VERIFIKACIJU
  useEffect(() => {
    // Dodajemo logove da vidimo da li polling uopšte radi
    if (step === 'WAIT_VERIFICATION' && userData?.email) {
      console.log("Checking status for:", userData.email);

      // App.js - unutar useEffect-a za polling
      checkIntervalRef.current = setInterval(async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/public-assessment/check-status?email=${userData.email}`);
          const data = await res.json();

          // Dodaj ovaj log da vidiš u konzoli "živog" taba da li proverava
          console.log("Provera statusa za", userData.email, "IsVerified:", data.isVerified);

          if (data.isVerified) {
            clearInterval(checkIntervalRef.current);
            setStep('TEST');
          }
        } catch (err) { console.error("Polling error:", err); }
      }, 3000);
    }

    return () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, [step, userData, API_BASE_URL]);

  // 2. FUNKCIJA ZA SUBMIT TESTA (Vraćena stara logika)
  const handleFinish = async (finalAnswers) => {
    setStep('LOADING');
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userData,
          responses: finalAnswers,
          type: assessmentType,
          lang: language
        })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        setStep('RESULT');
      } else {
        setErrorMsg(data.message || "Greška pri slanju.");
        setStep('START');
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStep('START');
    }
  };

  // App.js
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
      setStep('WAIT_VERIFICATION');
    } else {
      // PROVERA ŠIFRE GREŠKE
      if (result.code === 'ALREADY_DONE') {
        // Uzimamo prevod na osnovu trenutnog jezika u App.js
        const msg = translations[language].form.alreadyDone;
        setErrorMsg(msg);
      } else {
        setErrorMsg(translations[language].form.serverError);
      }
    }
  } catch (error) { 
    setErrorMsg(translations[language].form.serverError); 
  }
};

  const showSidebar = ['INTRO', 'START', 'PRIVACY', 'TEST', 'LOADING', 'RESULT', 'WAIT_VERIFICATION'].includes(step);

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Dugme za nazad (BACK) */}
      {((step !== 'PREINTRO' || eclipseMenu !== 'main') || location.pathname !== '/') && step !== 'LOADING' && (
        <div onClick={() => {
          if (location.pathname !== '/') navigate('/');
          else setStep('PREINTRO');
        }} className="back-btn-custom" style={{ cursor: 'pointer', zIndex: 1000 }}>
          <span>←</span> BACK
        </div>
      )}

      <Routes>
        {/* NEZAVISNE RUTE */}
        <Route path="/verify" element={<VerifyEmail />} />

        {/* Ostale stranice iz Eclipse menija */}
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />

        {/* GLAVNA RUTA (Logika step-ova) */}
        <Route path="/" element={
          <div style={{ width: '100%', minHeight: '100vh' }}>
            {step === 'PREINTRO' ? (
              <EclipseIntro
                onProceed={(choice) => {
                  if (choice === 'ABOUT') setStep('ABOUT');
                  else if (choice === 'TRAINERS') setStep('TRAINERS');
                  else if (choice === 'OPEN_TRAININGS') setStep('OPEN_TRAININGS');
                  else setStep('INTRO');
                }}
                menuLevel={eclipseMenu}
                setMenuLevel={setEclipseMenu}
                language={language}
                setLanguage={setLanguage}
              />
            ) : (
              <div className="main-layout-wrapper">
                {step === 'ABOUT' && <AboutUs onBack={() => setStep('PREINTRO')} />}
                {step === 'TRAINERS' && <Trainers onBack={() => setStep('PREINTRO')} />}
                {step === 'OPEN_TRAININGS' && <OpenTrainings onNavigate={(t) => { setStep(t); navigate('/'); }} />}

                {showSidebar && (
                  <div className="pd-split-container" style={{ display: 'flex' }}>
                    <div className="pd-sidebar" style={{ width: '350px', padding: '40px' }}>
                      <img src="/logo.png" alt="Logo" style={{ width: '160px' }} />
                      <SidebarCompass />
                      <h1 className="sidebar-title">Ideal Profile Assessment</h1>
                    </div>

                    <div className="pd-content" style={{ flex: 1 }}>
                      {step === 'INTRO' && <LandingPage onStart={(type) => { setAssessmentType(type); setStep('START'); }} language={language} setLanguage={setLanguage} />}
                      {step === 'START' && <LeadForm language={language} errorMsg={errorMsg} onNext={handleLeadSubmit} onPrivacyClick={() => setStep('PRIVACY')} setLanguage={setLanguage} />}
                      {step === 'PRIVACY' && <PrivacyPolicy language={language} onBack={() => setStep('START')} />}

                      {step === 'WAIT_VERIFICATION' && (
                        <div style={{ padding: '60px', color: '#fff' }}>
                          <h2>{language === 'sr' ? 'Skoro smo stigli.' : 'Almost there.'}</h2>
                          <p>{language === 'sr' ? 'Kliknite na link u mejlu koji smo vam poslali da nastavite sa testom.' : 'Click the link in the email we sent you to continue.'}</p>
                        </div>
                      )}

                      {step === 'TEST' && <Assessment language={language} type={assessmentType} onFinish={handleFinish} />}
                      {step === 'LOADING' && <LoadingScreen language={language} />}
                      {step === 'RESULT' && <ResultView report={report} userData={userData} language={language} />}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;