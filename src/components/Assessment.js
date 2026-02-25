import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leaderQuestions40 } from '../data/leaderQuestions40';

const Assessment = ({ onFinish, onQuestionChange }) => {
  // Jezik inicijalizujemo na osnovu onoga što je sačuvano u LeadFormi
  const [language] = useState(() => {
    const savedLang = localStorage.getItem('appLanguage');
    return savedLang === 'en' ? 'eng' : 'sr';
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // flatQuestions sada direktno mapira podatke iz fiksne 40Qs baze
  const flatQuestions = useMemo(() => {
    const langData = leaderQuestions40[language];
    if (!langData) return [];
    // Spajamo sve stubove (pillars) u jedan niz
    return Object.values(langData).flat();
  }, [language]);

  useEffect(() => {
    const verifiedEmail = localStorage.getItem('userEmail');
    if (!verifiedEmail) {
      window.location.href = '/'; 
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  if (!flatQuestions.length) return null;

  const currentQ = flatQuestions[currentIndex];
  const progress = ((currentIndex + 1) / flatQuestions.length) * 100;

  const handleAnswer = (score) => {
  // Pronalazimo tekst opcije na osnovu score-a (opciono, ali dobro za AI)
  const selectedOptionText = currentQ.options.find(o => o.score === score)?.text || "";

  const newAnswers = [...answers, { 
    id: currentQ.id, 
    score: score,
    facet: currentQ.facet,      // Ključno za AI mapping
    pillar: currentQ.pillar,    // Ključno za AI mapping
    type: currentQ.type,
    questionText: currentQ.text,
    selectedText: selectedOptionText
  }];
  
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (currentIndex < flatQuestions.length - 1) {
    setAnswers(newAnswers);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (onQuestionChange) onQuestionChange(nextIndex);
  } else {
    onFinish(newAnswers);
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
      
      {/* HEADER: Uklonjeni selektori za Qs i Lang */}
      <div style={{ padding: '40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0 }}>
        <div>
          <span style={{ color: '#ffffff', fontSize: '10px', letterSpacing: '2px', fontWeight: '700', textTransform: 'uppercase' }}>
            {currentQ.pillar}
          </span>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '6px' }}>
             {currentQ.facet}
          </div>
        </div>
        
        {/* Status indicator umesto dugmića */}
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: '700' }}>
          {language === 'eng' ? 'LEADERSHIP ASSESSMENT' : 'PROCENA LEADERSHIP-A'}
        </div>
      </div>

      <div style={{ 
        maxWidth: '850px', 
        margin: '40px auto 20px auto', 
        width: '100%',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${language}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: '400', lineHeight: '1.4', marginBottom: '45px', color: '#f0f0f0' }}>
              {currentQ.text.includes(':') 
                ? currentQ.text.split(':').slice(1).join(':').trim() 
                : currentQ.text}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentQ.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswer(option.score)}
                  style={{
                    padding: '22px 28px', textAlign: 'left', background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
                    color: '#d1d1d1', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '15.5px', lineHeight: '1.5'
                  }}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ 
        padding: '20px 0 60px 0',
        width: '100%',
        maxWidth: '850px',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '12px', 
          fontSize: '10px', 
          color: 'rgba(255,255,255,0.2)', 
          letterSpacing: '1px' 
        }}>
           <span>{language === 'eng' ? 'PROGRESS' : 'NAPREDAK'}: {currentIndex + 1} / {flatQuestions.length}</span>
           <span>{Math.round(progress)}%</span>
        </div>
        <div style={{ 
          width: '100%', 
          height: '2px', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '2px', 
          overflow: 'hidden' 
        }}>
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              height: '100%', 
              background: '#ffb478',
              boxShadow: '0 0 10px rgba(255,180,120,0.3)' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment;