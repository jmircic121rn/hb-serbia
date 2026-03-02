import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leaderQuestions40 } from '../data/leaderQuestions40';

const Assessment = ({ onFinish, onQuestionChange, language: propsLanguage }) => {
  // 1. Logika za jezik: prioritet ima prop, pa localStorage, pa default 'sr'
  const [language] = useState(() => {
    if (propsLanguage) return propsLanguage === 'en' ? 'eng' : 'sr';
    const savedLang = localStorage.getItem('appLanguage');
    return savedLang === 'en' ? 'eng' : 'sr';
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // 2. Mapiranje pitanja iz leaderQuestions40
  const flatQuestions = useMemo(() => {
    const langData = leaderQuestions40[language];
    if (!langData) return [];
    // Spajamo sve stubove (pillars) u jedan niz za linearni progres
    return Object.values(langData).flat();
  }, [language]);

  // 3. Provera verifikacije pri mount-u
  useEffect(() => {
    const verifiedEmail = localStorage.getItem('userEmail');
    const isVerified = localStorage.getItem('isVerified');
    
    if (!verifiedEmail && !isVerified) {
      console.warn("User not verified, redirecting to landing...");
      // window.location.href = '/assessment'; 
    }
  }, []);

  // 4. Scroll na vrh pri svakoj promeni pitanja
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  if (!flatQuestions || flatQuestions.length === 0) {
    return (
      <div style={{ color: '#fff', padding: '100px', textAlign: 'center' }}>
        Loading assessment questions...
      </div>
    );
  }

  const currentQ = flatQuestions[currentIndex];
  const progress = ((currentIndex + 1) / flatQuestions.length) * 100;

  const handleAnswer = (score) => {
    // Pronalazimo tekst opcije za čuvanje u bazi (korisno za AI analizu kasnije)
    const selectedOptionText = currentQ.options.find(o => o.score === score)?.text || "";

    const newAnswer = { 
      id: currentQ.id, 
      score: score,
      facet: currentQ.facet,
      pillar: currentQ.pillar,
      type: currentQ.type,
      questionText: currentQ.text,
      selectedText: selectedOptionText
    };

    const updatedAnswers = [...answers, newAnswer];

    if (currentIndex < flatQuestions.length - 1) {
      setAnswers(updatedAnswers);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      if (onQuestionChange) onQuestionChange(nextIndex);
    } else {
      // Slanje svih odgovora na finalnu obradu
      onFinish(updatedAnswers);
    }
  };

  return (
    <div className="assessment-wrapper" style={{
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      padding: '0 8%',
      overflowX: 'hidden'
    }}>
      
      
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: '700', letterSpacing: '1px' }}>
          {language === 'eng' ? 'HB COMPASS ASSESSMENT' : 'HB COMPASS PROCENA'}
        </div>

      {/* QUESTION BODY */}
      <div style={{ 
        maxWidth: '850px', 
        margin: '40px auto 20px auto', 
        width: '100%',
        flex: 1
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${language}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Tekst pitanja - uklanja prefikse ako postoje (npr "Scenario 1:") */}
            <h2 style={{ 
              fontSize: 'clamp(20px, 3.5vw, 26px)', 
              fontWeight: '400', 
              lineHeight: '1.5', 
              marginBottom: '50px', 
              color: '#f0f0f0' 
            }}>
              {currentQ.text.includes(':') && currentQ.text.length > 50
                ? currentQ.text.split(':').slice(1).join(':').trim() 
                : currentQ.text}
            </h2>

            {/* OPTIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentQ.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswer(option.score)}
                  style={{
                    padding: '24px 30px', 
                    textAlign: 'left', 
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '12px',
                    color: '#d1d1d1', 
                    cursor: 'pointer', 
                    transition: 'all 0.2s ease',
                    fontSize: '15.5px', 
                    lineHeight: '1.6'
                  }}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PROGRESS BAR FOOTER */}
      <div style={{ 
        padding: '40px 0 60px 0',
        width: '100%',
        maxWidth: '850px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '12px', 
          fontSize: '11px', 
          color: 'rgba(255,255,255,0.2)', 
          fontWeight: 'bold'
        }}>
           <span>{language === 'eng' ? 'PROGRESS' : 'NAPREDAK'}: {currentIndex + 1} / {flatQuestions.length}</span>
           <span>{Math.round(progress)}%</span>
        </div>
        <div style={{ 
          width: '100%', 
          height: '3px', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '4px', 
          overflow: 'hidden' 
        }}>
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            style={{ 
              height: '100%', 
              background: '#ffb478',
              boxShadow: '0 0 15px rgba(255,180,120,0.4)' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment;