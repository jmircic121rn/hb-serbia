import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Anchor, Map } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-scroll-container" style={{ 
      textAlign: 'left', 
      color: '#fff', // Promena na belu
      backgroundColor: '#000', // Crna pozadina kao eklipsa
      minHeight: '100vh',
      padding: '40px 10%'
    }}>
      
      {/* BACKGROUND DEKORACIJA (Kao korona eklipse) */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 180, 120, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* SEKCIJA 1: HERO & THE STORY */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '80px', position: 'relative', zIndex: 1 }}
      >
        <div style={{ 
          fontSize: '12px', 
          letterSpacing: '4px', 
          color: 'rgba(255, 180, 120, 0.7)', 
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          The Legend of the South Pole
        </div>
        
        <h1 style={{ fontSize: '64px', fontWeight: '900', lineHeight: '1', marginBottom: '40px', letterSpacing: '-2px' }}>
          Great Conquests <br/>Are Won in the <span style={{ color: '#444' }}>Backseat.</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }}>
          <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#ccc', fontWeight: '300' }}>
            On December 14th, 1911, Roald Amundsen made history. 
            The world cheered for the leader, but we honor the men in the shadows: 
            <strong style={{ color: '#fff' }}> Ludvig Hansen and Andreas Beck.</strong>
          </p>
          <div style={{ 
            borderLeft: '2px solid rgba(255, 180, 120, 0.3)', 
            padding: '10px 30px', 
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#888', fontStyle: 'italic' }}>
              "Without their expertise—navigating treacherous waters and adapting tools—the conquest would have been impossible."
            </p>
          </div>
        </div>
      </motion.section>

      {/* SEKCIJA 2: THE ANALOGY (Glassmorphism kartice) */}
      <section style={{ 
        marginBottom: '100px', 
        padding: '60px', 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '2px', // Oštrije ivice za profi izgled
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '30px', letterSpacing: '-1px' }}>Your Compass in the 21st Century</h2>
        <p style={{ fontSize: '18px', color: '#999', marginBottom: '60px', maxWidth: '800px' }}>
          Modern leadership is the new "Antarctic". Treacherous and unpredictable. 
          Just as Hansen and Beck provided the tools for victory, we equip you 
          to master your skills.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
          {[
            { Icon: Compass, title: "The Compass", text: "Our BARS methodology acts as your magnetic north." },
            { Icon: Map, title: "The Chart", text: "We map out behavioral blind spots traditional tests miss." },
            { Icon: Anchor, title: "The Stability", text: "Our coaching anchors new skills into tangible results." }
          ].map((item, i) => (
            <div key={i}>
              <item.Icon size={28} color="rgba(255, 180, 120, 0.8)" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEKCIJA 3: THE CALL TO ACTION */}
      <section style={{ textAlign: 'center', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '20px' }}>Ready to Begin Your Expedition?</h3>
        <p style={{ color: '#888', marginBottom: '50px', fontSize: '16px' }}>
          This assessment takes 8 minutes, but provides a lifetime of clarity.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 180, 120, 0.2)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart} 
          style={{ 
            padding: '20px 60px', 
            fontSize: '16px', 
            background: 'rgba(255, 180, 120, 0.7', 
            color: '#000', 
            border: 'none', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            cursor: 'pointer'
          }}
        >
          Start My Journey
        </motion.button>
      </section>

      {/* BROD - Modifikovan da bude suptilniji u mraku */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        zIndex: 10,
        pointerEvents: 'none',
        background: 'linear-gradient(to top, #000, transparent)' // Senka na dnu
      }}>
        <motion.div
          animate={{ x: ['-20vw', '110vw'] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <motion.img
            src="/ship.png"
            alt="Expedition Ship"
            style={{ 
              height: '60px', 
              opacity: 0.3, // Smanjen opacity da ne bode oči u dark modu
              filter: 'brightness(0.8) grayscale(1)' // Da se uklopi u estetiku
            }}
            animate={{ y: [0, -5, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* NOISE TEKSTURA (Za isti osećaj kao intro) */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        opacity: 0.03,
        pointerEvents: 'none',
        backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        zIndex: 5
      }} />
    </div>
  );
};

export default LandingPage;