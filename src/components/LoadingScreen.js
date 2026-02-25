import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

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
      width: '100vw', // Osigurava punu širinu ekrana
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#050505',
      color: '#fff',
      fontFamily: 'Inter, sans-serif',
      position: 'fixed', // Koristimo fixed da prekrije sve komponente tokom obrade
      top: 0,
      left: 0,
      overflow: 'hidden',
      padding: '20px',
      zIndex: 9999 // Mora biti iznad svega
    }}>
      
      {/* ECLIPSE GLOW - Promenjeno na BELO/SREBRNO */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      {/* ROTIRAJUĆI KOMPAS - Belo/Srebrno */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '50px' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{
            padding: '25px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.03)'
          }}
        >
          <Compass size={64} strokeWidth={1} color="rgba(255, 255, 255, 0.9)" />
        </motion.div>
        
        {/* Pulsirajući krugovi oko kompasa */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-15%', left: '-15%', right: '-15%', bottom: '-15%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            zIndex: -1
          }}
        />
      </div>

      <h2 style={{ 
        fontSize: '11px', 
        letterSpacing: '6px', 
        color: 'rgba(255, 255, 255, 0.7)', 
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: '25px',
        textAlign: 'center'
      }}>
        Expedition Analysis
      </h2>
      
      <div style={{ height: '40px', marginBottom: '40px', textAlign: 'center', width: '100%', maxWidth: '600px' }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '19px', 
              color: 'rgba(255,255,255,0.5)', 
              fontWeight: '300', 
              fontStyle: 'italic',
              margin: 0,
              padding: '0 20px'
            }}
          >
            {messages[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* PROGRESS BAR - Belo/Srebrno */}
      <div style={{ 
        width: '320px', 
        height: '1px', 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div 
          style={{ 
            height: '100%', 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            position: 'absolute' 
          }}
          initial={{ width: "0%", left: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 20, ease: "easeInOut" }}
        />
      </div>

      <p style={{ 
        marginTop: '25px', 
        fontSize: '10px', 
        color: '#666', 
        letterSpacing: '3px',
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        Calculating magnetic north...
      </p>

      {/* NOISE TEKSTURA */}
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