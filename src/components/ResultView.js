import React from 'react';
import { motion } from 'framer-motion';
import { HBButton } from './UIComponents'; // Korišćenje tvoje komponente

const ResultView = ({ userData, language = 'sr' }) => {
  const langKey = language === 'eng' || language === 'en' ? 'en' : 'sr';

  return (
    <div style={{ 
      minHeight: '100vh', // Dozvoljava skrolovanje ako zatreba, ali ne forsira centriranje u prazan prostor
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      padding: '60px 20px 100px 20px', // Smanjen gornji padding (sa 120px na 60px)
      backgroundColor: '#050505', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* POZADINSKI GLOW */}
      <motion.div 
        animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity }} 
        style={{ 
          position: 'absolute', 
          top: '10%', // Pozicioniran više ka vrhu
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(255, 180, 120, 0.1) 0%, rgba(255, 100, 50, 0) 70%)', 
          filter: 'blur(80px)', 
          zIndex: 1 
        }} 
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 2, position: 'relative', maxWidth: '600px' }}
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            fontSize: '60px', 
            marginBottom: '30px', 
            filter: 'drop-shadow(0 0 20px rgba(255,180,120,0.3))',
            display: 'inline-block'
          }}
        >
          📬
        </motion.div>
        
        <h4 style={{ 
          color: 'rgba(255, 255, 255, 0.3)', 
          letterSpacing: '5px', 
          textTransform: 'uppercase', 
          fontSize: '10px', 
          marginBottom: '15px' 
        }}>
            {langKey === 'en' ? 'Expedition Successful' : 'Ekspedicija Završena'}
        </h4>

        <h1 style={{ 
          fontSize: 'clamp(28px, 5vw, 42px)', 
          fontWeight: '900', 
          color: '#fff', 
          marginBottom: '20px', 
          lineHeight: '1.1'
        }}>
            {langKey === 'en' ? 'Your Report is on its way.' : 'Izveštaj je na putu.'}
        </h1>
        
        <p style={{ 
          fontSize: '17px', 
          color: '#888', 
          lineHeight: '1.7', 
          fontWeight: '300',
          marginBottom: '40px'
        }}>
            {langKey === 'en' ? 'Thank you, ' : 'Hvala, '}<strong>{userData?.firstName}</strong>. 
            {langKey === 'en' 
              ? ' Your personalized Strategic Insight Report has been sent to:' 
              : ' Tvoj personalizovani Strategic Insight Report je poslat na:'}
            <br />
            <span style={{ color: '#ffffff', fontWeight: '600' }}>
                {userData?.email}
            </span>
        </p>
        
        <div style={{ 
            padding: '25px', 
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '50px'
        }}>
            <p style={{ fontSize: '12px', color: '#555', fontStyle: 'italic', margin: 0, lineHeight: '1.5' }}>
                {langKey === 'en' 
                  ? 'Please check your inbox (and spam folder) within the next few minutes.'
                  : 'Molimo proveri inbox (i spam folder) u narednih nekoliko minuta.'}
            </p>
        </div>

        {/* KORIŠĆENJE HB BUTTON KOMPONENTE */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HBButton onClick={() => window.location.href = 'https://serbia.hansenbeck.com'}>
            {langKey === 'en' ? 'Return to Portal' : 'Povratak na Portal'}
          </HBButton>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultView;