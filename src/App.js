import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import LeadForm from './components/LeadForm';
import LoadingScreen from './components/LoadingScreen';
import ResultView from './components/ResultView';
import Assessment from './components/Assessment';
import EclipseIntro from './components/EclipseIntro';
import OpenTrainings from './components/OpenTrainings';
import SuccessLine from './components/SuccessLine';

function App() {
  const [step, setStep] = useState('PREINTRO');
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);

  const handlePortalChoice = (choice) => {
    if (choice === 'employee') {
      setStep('OPEN_TRAININGS');
    } else {
      setStep('INTRO');
    }
  };

  const handleFinish = async (finalAnswers) => {
    setStep('LOADING');
    try {
      const response = await fetch('http://localhost:5001/api/public-assessment/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, responses: finalAnswers })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        setStep('RESULT');
      } else {
        alert(data.message || "Greška pri čuvanju.");
        setStep('START');
      }
    } catch (error) {
      console.error("Greška:", error);
      setStep('RESULT');
    }
  };

  // LOGIKA ZA PRIKAZ SIDEBARA
  // Sidebar se prikazuje SAMO za korake koji su deo Assessment procesa
  const showSidebar = ['INTRO', 'START', 'TEST', 'LOADING', 'RESULT'].includes(step);

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* 1. FULLSCREEN EKRANI (Bez sidebara i split-containera) */}
      {step === 'PREINTRO' && (
        <EclipseIntro onProceed={handlePortalChoice} />
      )}

      {step === 'OPEN_TRAININGS' && (
        <div style={{ width: '100vw', minHeight: '100vh' }}>
          <OpenTrainings onNavigate={(target) => setStep(target)} />
        </div>
      )}

      {step === 'SUCCESS_LINE' && (
        <SuccessLine />
      )}

      {/* 2. ASSESSMENT FLOW (Sa sidebarom) */}
      {showSidebar && (
        <div className="pd-split-container" style={{ display: 'flex', minHeight: '100vh' }}>

          {/* SIDEBAR */}
          <div className="pd-sidebar" style={{
            width: '350px',
            backgroundColor: '#050505',
            borderRight: '1px solid rgba(255, 180, 120, 0.1)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 40px',
            position: 'sticky',
            top: 0,
            height: '100vh'
          }}>
            <div className="sidebar-header">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '50px' }}>
                <img src="/logo.png" alt="Hansen Beck" style={{ width: '180px', opacity: 0.9 }} />
              </motion.div>
              <div style={{ color: 'rgba(255, 180, 120, 0.6)', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
                The Expedition
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-1px', color: '#fff' }}>
                Ideal Profile <br /> Assessment
              </h1>

              <div className="sidebar-visual" style={{ marginTop: '80px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '160px', height: '160px', border: '1px solid rgba(255, 180, 120, 0.1)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', width: '120px', height: '120px', border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '50%' }}>
                  <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(255, 180, 120, 0.15)' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(255, 180, 120, 0.15)' }} />
                  <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255, 180, 120, 0.9)', fontSize: '10px', fontWeight: 'bold' }}>N</span>
                  <span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255, 255, 255, 0.2)', fontSize: '10px' }}>S</span>
                </div>
                <motion.div animate={{ rotate: [178, 182, 179, 181, 180] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'relative', width: '1px', height: '110px', background: 'linear-gradient(to bottom, rgba(255, 180, 120, 1) 50%, rgba(255, 255, 255, 0.2) 50%)', zIndex: 2 }}>
                  <div style={{ position: 'absolute', top: '-5px', left: '-2px', width: '5px', height: '5px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 10px rgba(255, 180, 120, 0.8)' }} />
                </motion.div>
              </div>
              <p style={{ marginTop: '60px', fontSize: '13px', color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Expertise to equip you for your successful journey."
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <p style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>© 2026 HansenBeck</p>
            </div>
          </div>

          {/* DESNI SADRŽAJ (Assessment steps) */}
          <div className="pd-content" style={{ flex: 1, backgroundColor: '#0a0a0a', overflowY: 'auto' }}>
            {step === 'INTRO' && <LandingPage onStart={() => setStep('START')} />}
            {step === 'START' && <LeadForm onNext={(data) => { setUserData(data); setStep('TEST'); }} />}
            {step === 'TEST' && <Assessment onFinish={handleFinish} onQuestionChange={() => { }} />}
            {step === 'LOADING' && <LoadingScreen />}
            {step === 'RESULT' && <ResultView report={report} userData={userData} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;