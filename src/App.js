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
import AboutUs from './components/AboutUs'; // <--- DODATO
import Trainers from './components/Trainers';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState('PREINTRO');
  const [eclipseMenu, setEclipseMenu] = useState('main'); // DODATO: Kontrola nivoa planeta
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

  const goBack = () => {
    // 1. Ako smo na ruti koja nije "/" (npr. /success-line)
    if (location.pathname !== '/') {
      navigate('/');
      setStep('OPEN_TRAININGS');
      setEclipseMenu('assessment'); // Vraća na druge tri planete
      return;
    }

    // 2. Logika za povratak unutar same eklipse (nivoi planeta)
    if (step === 'PREINTRO' && eclipseMenu === 'assessment') {
      setEclipseMenu('main');
      return;
    }

    // 3. Logika za povratak sa stranica na eklipsu
    switch (step) {
      case 'ABOUT':
      case 'TRAINERS':
        setStep('PREINTRO');
        setEclipseMenu('main'); // "Ko smo mi" i "Treneri" su na prvom nivou
        break;
      
      case 'OPEN_TRAININGS':
      case 'INTRO':
        setStep('PREINTRO');
        setEclipseMenu('assessment'); // OVO JE KLJUČ: Vraća na "zelim da znam o sebi" nivo
        break;

      case 'START':
        setStep('INTRO'); // Sa forme na LandingPage (koji je vezan za assessment nivo)
        break;

      case 'PRIVACY':
        setStep('START'); // Sa privatnosti na formu
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

  // PRILAGOĐENA FUNKCIJA ZA PORTAL (ECLIPSEINTRO)
  const handlePortalChoice = (choice) => {
    if (choice === 'ABOUT') setStep('ABOUT'); // <--- DODATO ZA ABOUT US
    else if (choice === 'TRAINERS') setStep('TRAINERS'); // <--- DODATO ZA TRENERA
    else if (choice === 'INTERNAL') setStep('INTRO');
    else if (choice === 'OPEN_TRAININGS') setStep('OPEN_TRAININGS');
else if (choice === 'INTRO') setStep('INTRO');
    else setStep('INTRO');
  };

  const handleFinish = async (finalAnswers) => {
    setStep('LOADING');
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, responses: finalAnswers })
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

  const showSidebar = ['INTRO', 'START', 'TEST', 'LOADING', 'RESULT'].includes(step) && location.pathname === '/';

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* GLAVNO NAZAD DUGME */}
      {/* Prikazuje se ako nismo na eklipsi ILI ako smo na drugom nivou planeta */}
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
        {/* OVE RUTE SU NEZAVISNE - Kada si na njima, "/" ruta se ignoriše */}
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />

        {/* GLAVNA RUTA - Sada sa dodatnom zaštitom unutra */}
        <Route path="/" element={
          location.pathname === '/' ? (
            <div style={{ width: '100%', minHeight: '100vh' }}>
              {/* 1. PORTAL LOGIKA */}
              {step === 'PREINTRO' && location.pathname === '/' && <EclipseIntro 
                  onProceed={handlePortalChoice} 
                  menuLevel={eclipseMenu}      // PROSLEĐENO
                  setMenuLevel={setEclipseMenu} // PROSLEĐENO
                />}
              {step === 'ABOUT' && location.pathname === '/' && <AboutUs onBack={() => setStep('PREINTRO')} />}
              {step === 'TRAINERS' && location.pathname === '/' && <Trainers onBack={() => setStep('PREINTRO')} />}
              {step === 'OPEN_TRAININGS' && location.pathname === '/' && <OpenTrainings onNavigate={handleNavigate} />}
              {step === 'PRIVACY' && <PrivacyPolicy />}

              {/* 2. ASSESSMENT LOGIKA */}
              {showSidebar && (
                <div className="pd-split-container" style={{ display: 'flex', width: '100%', minHeight: '100vh', flexDirection: window.innerWidth < 1024 ? 'column' : 'row' }}>
                  <div className="pd-sidebar" style={{
                    width: window.innerWidth < 1024 ? '100%' : '380px', flexShrink: 0,
                    backgroundColor: '#050505', borderRight: '1px solid rgba(255, 180, 120, 0.1)',
                    color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    padding: '60px 40px', position: window.innerWidth < 1024 ? 'relative' : 'sticky',
                    top: 0, height: window.innerWidth < 1024 ? 'auto' : '100vh', zIndex: 100
                  }}>
                    <div className="sidebar-header">
                      <img src="/logo.png" alt="Hansen Beck" style={{marginTop: '40px', width: '160px', opacity: 0.9, marginBottom: '50px' }} />
                      <div style={{ color: 'rgba(255, 180, 120, 0.6)', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>The Expedition</div>
                      <h1 style={{ fontSize: '24px', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-1px', color: '#fff' }}>Ideal Profile <br /> Assessment</h1>
                    </div>
                  </div>

                  <div className="pd-content" style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
                    {step === 'INTRO' && <LandingPage onStart={() => setStep('START')} />}
                    {step === 'START' && (
                      <LeadForm
                        errorMsg={errorMsg}
                        onNext={handleLeadSubmit}
                        onPrivacyClick={() => setStep('PRIVACY')} // <--- DODAJ OVU LINIJU
                      />
                    )}
                    {step === 'TEST' && <Assessment onFinish={handleFinish} />}
                    {step === 'LOADING' && <LoadingScreen />}
                    {step === 'RESULT' && <ResultView report={report} userData={userData} />}
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