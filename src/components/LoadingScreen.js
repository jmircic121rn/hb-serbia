import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react'; // Menjamo Cpu za Compass radi teme

const messages = [
  "Navigating through your behavioral patterns...",
  "Calibrating the Compass with Hansen Beck standards...",
  "Mapping strengths against the 21st Century Antarctic...",
  "Identifying anchors and catalysts in your leadership...",
  "Finalizing your personalized growth expedition..."
];

const LoadingScreen = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#050505', // Tamna pozadina kao na landing-u
      color: '#fff',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px'
    }}>
      
      {/* ECLIPSE GLOW (Slično kao na landing-u, ali centrirano) */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 180, 120, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />

      {/* ROTIRAJUĆI KOMPAS (Eklipsa efekat) */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '50px' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{
            padding: '20px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 180, 120, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(255, 180, 120, 0.05)'
          }}
        >
          <Compass size={64} strokeWidth={1} color="rgba(255, 180, 120, 0.9)" />
        </motion.div>
        
        {/* Pulsirajući krug oko kompasa */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-10%', left: '-10%', right: '-10%', bottom: '-10%',
            border: '1px solid rgba(255, 180, 120, 0.5)',
            borderRadius: '50%',
            zIndex: -1
          }}
        />
      </div>

      <h2 style={{ 
        fontSize: '11px', 
        letterSpacing: '5px', 
        color: 'rgba(255, 180, 120, 0.8)', 
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: '20px'
      }}>
        Expedition Analysis
      </h2>
      
      <div style={{ height: '30px', marginBottom: '40px' }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '18px', 
              color: '#888', 
              fontWeight: '300', 
              fontStyle: 'italic',
              margin: 0
            }}
          >
            {messages[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* PROGRESS BAR - Minimalistički */}
      <div style={{ 
        width: '280px', 
        height: '1px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div 
          style={{ 
            height: '100%', 
            backgroundColor: 'rgba(255, 180, 120, 0.8)', 
            position: 'absolute' 
          }}
          initial={{ width: "0%", left: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 15, ease: "easeInOut" }}
        />
      </div>

      <p style={{ 
        marginTop: '20px', 
        fontSize: '10px', 
        color: '#444', 
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        Calculating magnetic north...
      </p>

      {/* NOISE TEKSTURA (Da se slaže sa landingom) */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        opacity: 0.02,
        pointerEvents: 'none',
        backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        zIndex: 5
      }} />
    </div>
  );
};

export default LoadingScreen;