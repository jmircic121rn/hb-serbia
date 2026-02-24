import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leaderQuestions40 } from '../data/leaderQuestions40';

const Assessment = ({ onFinish, onQuestionChange }) => {
  const [language, setLanguage] = useState('sr');
  const [questionSet, setQuestionSet] = useState('40');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const dataSource = useMemo(() => {
    if (questionSet === '80') return leaderQuestions40; 
    return leaderQuestions40;
  }, [questionSet]);

  const flatQuestions = useMemo(() => {
    const langData = dataSource[language];
    return Object.values(langData).flat();
  }, [language, dataSource]);

  useEffect(() => {
    window.scrollTo(0, 0); // Resetuje skrol na vrh pri svakoj promeni pitanja
    setCurrentIndex(0);
    setAnswers([]);
  }, [questionSet]);

  if (!flatQuestions.length) return null;

  const currentQ = flatQuestions[currentIndex];
  const progress = ((currentIndex + 1) / flatQuestions.length) * 100;

  const handleAnswer = (score) => {
    const newAnswers = [...answers, { id: currentQ.id, score }];
    
    // Smooth scroll na vrh za sledeće pitanje
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
      minHeight: '100vh', // Menjamo height u minHeight
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      padding: '0 8%',
      overflowX: 'hidden' // Sprečava horizontalni skrol zbog animacija
    }}>
      
      {/* HEADER */}
      <div style={{ padding: '40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0 }}>
        <div>
          <span style={{ color: '#ffffff', fontSize: '10px', letterSpacing: '2px', fontWeight: '700', textTransform: 'uppercase' }}>
            {currentQ.pillar}
          </span>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '6px' }}>
             {currentQ.facet}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px' }}>
            {['40', '80'].map(size => (
              <button key={size} onClick={() => setQuestionSet(size)} style={{
                  background: questionSet === size ? '#ffffff' : 'transparent',
                  color: questionSet === size ? '#000' : '#888',
                  border: 'none', fontSize: '10px', cursor: 'pointer', padding: '6px 14px', borderRadius: '8px', fontWeight: '700', transition: '0.3s ease'
              }}>
                {size} Qs
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px' }}>
            {['sr', 'eng'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} style={{
                  background: language === lang ? '#ffffff' : 'transparent',
                  color: language === lang ? '#000' : '#888',
                  border: 'none', fontSize: '10px', cursor: 'pointer', padding: '6px 14px', borderRadius: '8px', fontWeight: '700', textTransform: 'uppercase', transition: '0.3s ease'
              }}>
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN: Smanjen margin i uklonjen paddingBottom */}
      <div style={{ 
        maxWidth: '850px', 
        margin: '40px auto 20px auto', // Smanjen gornji i donji razmak
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
              {currentQ.text}
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

      {/* FOOTER: Sada stoji odmah ispod pitanja */}
      <div style={{ 
        padding: '20px 0 60px 0', // Smanjen gornji padding
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
           <span>PROGRESS: {currentIndex + 1} / {flatQuestions.length}</span>
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