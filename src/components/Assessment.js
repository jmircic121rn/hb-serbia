import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Koristimo shortTermGoals iz tvog fajla
import { mockQuestions } from '../data/mockQuestions'; 

const Assessment = ({ onFinish, onQuestionChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // 1. TRANSFORMACIJA: Pretvaramo tvojih 40 faza (sa Core i Reflection) 
  // u ravan niz od 80 pitanja radi lakše navigacije
  const flatQuestions = useMemo(() => {
    return mockQuestions.flatMap(q => [
      { 
        id: `${q.id}-core`, 
        facet: q.facetName, 
        type: 'CORE CASE', 
        ...q.core 
      },
      { 
        id: `${q.id}-ref`, 
        facet: q.facetName, 
        type: 'REFLECTION', 
        ...q.reflection 
      }
    ]);
  }, []);

  // Safe check
  if (!flatQuestions.length) return null;

  const currentQ = flatQuestions[currentIndex];
  const progress = ((currentIndex + 1) / flatQuestions.length) * 100;

  const handleAnswer = (weight) => {
    const newAnswers = [...answers, { id: currentQ.id, weight }];
    
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
      display: 'flex', flexDirection: 'column', height: '100vh',
      backgroundColor: '#0a0a0a', color: '#fff', padding: '0 5%'
    }}>
      
      {/* HEADER: Info o napretku */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#ffb478', fontSize: '10px', letterSpacing: '2px', fontWeight: '700' }}>
            {currentQ.facet}
          </span>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', marginTop: '4px' }}>
            PHASE {Math.floor(currentIndex / 2) + 1} / {mockQuestions.length}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#ffb478' }}>
            STEP {currentIndex + 1} OF {flatQuestions.length}
          </span>
        </div>
      </div>

      {/* MAIN: Pitanje i opcije */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span style={{ 
              display: 'inline-block', padding: '4px 12px', borderRadius: '20px', 
              backgroundColor: 'rgba(255,180,120,0.1)', color: '#ffb478', 
              fontSize: '10px', marginBottom: '20px', border: '1px solid rgba(255,180,120,0.2)'
            }}>
              {currentQ.type}
            </span>

            <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: '600', lineHeight: '1.4', marginBottom: '40px', color: '#f0f0f0' }}>
              {currentQ.question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentQ.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#ffb478' }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswer(option.weight)}
                  style={{
                    padding: '18px 24px', textAlign: 'left', background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px',
                    color: '#ccc', cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex'
                  }}
                >
                  <span style={{ color: '#ffb478', marginRight: '15px', fontWeight: '700', fontFamily: 'monospace' }}>
                    {option.label}
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.5' }}>{option.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER: Minimalist Progress Bar */}
      <div style={{ paddingBottom: '40px' }}>
        <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{ 
              height: '100%', background: '#ffb478', position: 'absolute',
              boxShadow: '0 0 15px rgba(255,180,120,0.4)'
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', opacity: 0.3, fontSize: '9px', letterSpacing: '1px' }}>
          <span>BASE CAMP</span>
          <span>EXPEDITION COMPLETION: {Math.round(progress)}%</span>
          <span>SOUTH POLE</span>
        </div>
      </div>
    </div>
  );
};

export default Assessment;