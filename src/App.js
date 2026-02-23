import React, { useState } from 'react';
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

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State-ovi za Assessment deo
  const [step, setStep] = useState('PREINTRO');
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // Logika za navigaciju (podržava i URL i interne step-ove)
  const handleNavigate = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
    } else {
      setStep(target);
      if (location.pathname !== '/') navigate('/');
    }
  };

  const goBack = () => {
    // Ako smo na specifičnom URL-u (treningu), vrati nas na listu treninga
    if (location.pathname !== '/') {
      navigate('/');
      setStep('OPEN_TRAININGS');
      return;
    }

    // Standardna goBack logika za Assessment unutar "/"
    if (step === 'OPEN_TRAININGS') setStep('PREINTRO');
    else if (step === 'START') setStep('INTRO');
    else if (step === 'TEST') setStep('START');
    else if (step === 'INTRO') setStep('PREINTRO');
  };

  // HANDLERI ZA ASSESSMENT (ostaju isti)
  const handlePortalChoice = (choice) => {
    if (choice === 'INTERNAL') setStep('INTRO');
    else if (choice === 'OPEN_TRAININGS') setStep('OPEN_TRAININGS');
    else if (choice === 'ASSESSMENT') setStep('START');
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
    } catch (error) {
      setStep('START');
    }
  };

  const handleLeadSubmit = (data) => {
    setUserData(data);
    setStep('TEST');
  };

  const showSidebar = ['INTRO', 'START', 'TEST', 'LOADING', 'RESULT'].includes(step) && location.pathname === '/';

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      
      {/* GLOBALNI BACK BUTTON */}
      {(step !== 'PREINTRO' || location.pathname !== '/') && step !== 'LOADING' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goBack}
          style={{
            position: 'fixed', top: '30px', left: '30px', zIndex: 9999,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
            color: 'rgba(255, 180, 120, 0.8)', backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px 15px', borderRadius: '50px', backdropFilter: 'blur(5px)',
            fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'
          }}
        >
          <span>←</span> NAZAD
        </motion.div>
      )}

      <Routes>
        {/* RUTE ZA QR KODOVE */}
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />

        {/* GLAVNA RUTA (Assessment + Lista Treninga) */}
        <Route path="/" element={
          <>
            {step === 'PREINTRO' && <EclipseIntro onProceed={handlePortalChoice} />}
            
            {step === 'OPEN_TRAININGS' && (
              <div style={{ width: '100vw', minHeight: '100vh' }}>
                <OpenTrainings onNavigate={handleNavigate} />
              </div>
            )}

            {showSidebar && (
              <div className="pd-split-container">
                {/* SIDEBAR (Tvoj postojeći kod) */}
                <div className="pd-sidebar" style={{/* tvoj stil */}}>
                   {/* ... sadržaj sidebara sa kompasom ... */}
                </div>

                {/* CONTENT EKRANI */}
                <div className="pd-content" style={{ flex: 1 }}>
                  {step === 'INTRO' && <LandingPage onStart={() => setStep('START')} />}
                  {step === 'START' && <LeadForm errorMsg={errorMsg} onNext={handleLeadSubmit} />}
                  {step === 'TEST' && <Assessment onFinish={handleFinish} />}
                  {step === 'LOADING' && <LoadingScreen />}
                  {step === 'RESULT' && <ResultView report={report} userData={userData} />}
                </div>
              </div>
            )}
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;