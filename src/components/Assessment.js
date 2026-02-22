import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockQuestions } from '../data/mockQuestions';

const Assessment = ({ onFinish, onQuestionChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Računamo progres unutar komponente
  const progress = ((currentIndex + 1) / mockQuestions.length) * 100;

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    if (currentIndex < mockQuestions.length - 1) {
      setAnswers(newAnswers);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      onQuestionChange(nextIndex);
    } else {
      onFinish(newAnswers);
    }
  };

  return (
    <div className="bars-question-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      
      {/* GLAVNI SADRŽAJ (PITANJA) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Apple-style easing
        >
          <span className="category-tag">Expedition Step {currentIndex + 1}</span>
          <h2 className="question-text" style={{ marginBottom: '40px' }}>{mockQuestions[currentIndex].scenario}</h2>

          <div className="bars-options-list">
            {mockQuestions[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.score)}
                className="bars-option-btn"
              >
                <span className="bars-option-number">0{idx + 1}</span>
                <span style={{ fontWeight: '600' }}>{option.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* APPLE STYLE PROGRESS BAR (Uvek fiksiran na dnu kontejnera) */}
      <div style={{ marginTop: '80px', width: '100%', paddingBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          marginBottom: '12px' 
        }}>
          <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#999', textTransform: 'uppercase', fontWeight: '500' }}>
            Base Camp
          </span>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#000', fontWeight: '600' }}>
            {Math.round(progress)}% Complete
          </span>
          <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#999', textTransform: 'uppercase', fontWeight: '500' }}>
            South Pole
          </span>
        </div>
        
        {/* Track (Pozadina) */}
        <div style={{ 
          width: '100%', 
          height: '2px', 
          background: '#E5E5E5', 
          borderRadius: '10px',
          overflow: 'hidden' 
        }}>
          {/* Fill (Ono što se puni) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "circOut" }}
            style={{ 
              height: '100%', 
              background: '#000', 
              borderRadius: '10px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment;