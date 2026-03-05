import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leaderQuestions40 } from '../data/leaderQuestions40';

const Assessment = ({ onFinish, onQuestionChange, language: propsLanguage }) => {
  
  const language = propsLanguage === 'en' ? 'eng' : 'sr';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  // NOVI STATE-OVI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const flatQuestions = useMemo(() => {
    const langData = leaderQuestions40[language];
    if (!langData) return [];
    return Object.values(langData).flat();
  }, [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleAnswer = async (score) => {
    // Spreči klikove ako je slanje već u toku
    if (isSubmitting) return;

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
      // FINALNI SUBMIT
      setIsSubmitting(true);
      try {
        // Čekamo backend da obradi bodove i pošalje Report 1
        await onFinish(updatedAnswers);
        setIsFinished(true);
      } catch (err) {
        console.error("Submit error:", err);
        setIsSubmitting(false);
      }
    }
  };

  // 1. EKRAN ZA KRAJ (SUCCESS)
  if (isFinished) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', textAlign: 'center', padding: '0 20px'
      }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#ffb478' }}>
            {language === 'eng' ? 'Assessment Completed!' : 'Procena uspešno završena!'}
          </h2>
          <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.6', color: 'rgba(255,255,255,0.7)' }}>
            {language === 'eng' 
              ? 'Your Leadership Snapshot (Report 1) has been sent to your email. Please check your inbox (and spam folder) to see your scores.' 
              : 'Vaš Leadership Snapshot (Izveštaj 1) je upravo poslat na Vaš email. Proverite inbox (i spam folder) kako biste videli svoje rezultate.'}
          </p>
          <button 
            onClick={() => window.location.href = 'https://serbia.hansenbeck.com'}
            style={{
              marginTop: '40px', padding: '15px 35px', background: 'transparent', 
              border: '1px solid #ffb478', color: '#ffb478', borderRadius: '8px', 
              cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
            }}
          >
            {language === 'eng' ? 'Back to Website' : 'Povratak na sajt'}
          </button>
        </motion.div>
      </div>
    );
  }

  // 2. LOADING EKRAN DOK SERVER OBRAĐUJE
  if (isSubmitting) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <p style={{ letterSpacing: '2px', fontSize: '12px' }}>
            {language === 'eng' ? 'CALCULATING SCORES...' : 'OBRAĐUJEM REZULTATE...'}
          </p>
        </motion.div>
      </div>
    );
  }

  const currentQ = flatQuestions[currentIndex];
  const progress = ((currentIndex + 1) / flatQuestions.length) * 100;

return (
  <div className="assessment-wrapper" style={{
    display: 'flex', 
    flexDirection: 'column', 
    backgroundColor: '#0a0a0a', // Osiguraj da je ista kao pozadina roditelja ako je moguće
    color: '#fff',  
    width: '100%',
    paddingTop: '0px' // Resetovan padding
  }}>
    
    {/* Labela na samom vrhu - smanjen padding */}
    <div style={{ padding: '20px 0', textAlign: 'center' }}>
      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: '700', letterSpacing: '2px' }}>
        {language === 'eng' ? 'HB COMPASS ASSESSMENT' : 'HB COMPASS PROCENA'}
      </div>
    </div>

    {/* Glavni kontejner sa pitanjem - smanjena gornja margina na 0 */}
    <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pitanje - smanjen font-size i margin bottom za kompaktnost */}
          <p style={{ 
            fontSize: 'clamp(18px, 3vw, 24px)', 
            fontFamily: "'PT Sans', sans-serif",
            fontWeight: '400', 
            lineHeight: '1.4', 
            marginBottom: '30px', 
            color: '#f0f0f0',
            textAlign: 'center' // Centrirano pitanje lepše izgleda kad nema boxa
          }}>
            {currentQ.text.includes(':') && currentQ.text.length > 50
              ? currentQ.text.split(':').slice(1).join(':').trim() 
              : currentQ.text}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentQ.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleAnswer(option.score)}
                style={{
                  padding: '20px 25px', // Malo kompaktnije opcije
                  textAlign: 'left', 
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '10px',
                  color: '#d1d1d1', 
                  cursor: 'pointer', 
                  transition: '0.2s ease',
                  fontSize: '15px', 
                  lineHeight: '1.5'
                }}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* PROGRESS BAR - prati sadržaj */}
    <div style={{ padding: '40px 20px', width: '100%', maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '10px', color: 'rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
         <span>{language === 'eng' ? 'PROGRESS' : 'NAPREDAK'}: {currentIndex + 1}/{flatQuestions.length}</span>
         <span>{Math.round(progress)}%</span>
      </div>
      <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div animate={{ width: `${progress}%` }} style={{ height: '100%', background: '#ffffff' }} />
      </div>
    </div>
  </div>
);
};

export default Assessment;