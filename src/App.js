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

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [step, setStep] = useState('PREINTRO');
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // Automatski skrol na vrh pri svakoj promeni stranice
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
    if (location.pathname !== '/') {
      navigate('/');
      setStep('OPEN_TRAININGS');
      return;
    }
    if (step === 'OPEN_TRAININGS') setStep('PREINTRO');
    else if (step === 'START') setStep('INTRO');
    else if (step === 'TEST') setStep('START');
    else if (step === 'INTRO') setStep('PREINTRO');
  };

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
    } catch (error) { setStep('START'); }
  };

  const handleLeadSubmit = (data) => {
    setUserData(data);
    setStep('TEST');
  };

  const showSidebar = ['INTRO', 'START', 'TEST', 'LOADING', 'RESULT'].includes(step) && location.pathname === '/';

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      
      {/* NAZAD DUGME */}
      {(step !== 'PREINTRO' || location.pathname !== '/') && step !== 'LOADING' && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
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
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />

        <Route path="/" element={
          <>
            {step === 'PREINTRO' && <EclipseIntro onProceed={handlePortalChoice} />}
            
            {step === 'OPEN_TRAININGS' && (
              <div style={{ width: '100vw', minHeight: '100vh' }}>
                <OpenTrainings onNavigate={handleNavigate} />
              </div>
            )}

            {showSidebar && (
              <div className="pd-split-container" style={{ display: 'flex', width: '100%', minHeight: '100vh', flexDirection: window.innerWidth < 1024 ? 'column' : 'row' }}>
                
                {/* VRAĆENI SIDEBAR SA SVIM ELEMENTIMA */}
                <div className="pd-sidebar" style={{
                  width: window.innerWidth < 1024 ? '100%' : '380px', flexShrink: 0,
                  backgroundColor: '#050505', borderRight: '1px solid rgba(255, 180, 120, 0.1)',
                  color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '60px 40px', position: window.innerWidth < 1024 ? 'relative' : 'sticky',
                  top: 0, height: window.innerWidth < 1024 ? 'auto' : '100vh', zIndex: 100
                }}>
                  <div className="sidebar-header">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '50px' }}>
                      <img src="/logo.png" alt="Hansen Beck" style={{ width: '160px', opacity: 0.9 }} />
                    </motion.div>

                    <div style={{ color: 'rgba(255, 180, 120, 0.6)', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
                      The Expedition
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-1px', color: '#fff' }}>
                      Ideal Profile <br /> Assessment
                    </h1>

                    {/* VRAĆEN KOMPAS */}
                    <div className="sidebar-visual" style={{ marginTop: '50px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', width: '160px', height: '160px', border: '1px solid rgba(255, 180, 120, 0.05)', borderRadius: '50%' }} />
                      <div style={{ position: 'absolute', width: '120px', height: '120px', border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '50%' }}>
                        <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(255, 180, 120, 0.08)' }} />
                        <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(255, 180, 120, 0.08)' }} />
                      </div>
                      <div style={{ position: 'absolute', width: '140px', height: '140px', color: 'rgba(255, 180, 120, 0.4)', fontSize: '10px', fontWeight: '700', letterSpacing: '1px' }}>
                        <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>N</span>
                        <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>S</span>
                        <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>E</span>
                        <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>W</span>
                      </div>
                      <motion.div animate={{ rotate: [178, 182, 180] }} transition={{ duration: 8, repeat: Infinity }}
                        style={{ position: 'relative', width: '1px', height: '100px', background: 'linear-gradient(to bottom, rgba(255, 180, 120, 1) 50%, rgba(255, 255, 255, 0.1) 50%)', zIndex: 2 }}>
                        <div style={{ position: 'absolute', top: '-2px', left: '-2.5px', width: '6px', height: '6px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px rgba(255, 180, 120, 1)' }} />
                      </motion.div>
                    </div>

                    <p style={{ marginTop: '50px', fontSize: '13px', color: '#555', fontStyle: 'italic', lineHeight: '1.6' }}>
                      "Expertise to equip you for your successful journey."
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                    <p style={{ fontSize: '9px', color: '#333', textTransform: 'uppercase', letterSpacing: '2px' }}>© 2026 HansenBeck</p>
                  </div>
                </div>

                {/* CONTENT EKRANI */}
                <div className="pd-content" style={{ flex: 1, backgroundColor: '#0a0a0a', position: 'relative', minWidth: 0, zIndex: 1 }}>
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