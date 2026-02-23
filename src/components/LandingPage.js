import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Anchor, Map } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-scroll-container" style={{ 
      textAlign: 'left', 
      color: '#fff', 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh',
      padding: '60px 40px', // FIKSNI PADDING umesto 10%
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      
      {/* BACKGROUND DEKORACIJA - absolute umesto fixed da ne beži van diva */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(255, 180, 120, 0.05) 0%, transparent 50%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* SEKCIJA 1: HERO */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '80px', position: 'relative', zIndex: 1 }}
      >
        <div style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(255, 180, 120, 0.7)', textTransform: 'uppercase', marginBottom: '20px' }}>
          The Legend of the South Pole
        </div>
        
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '40px' }}>
          Great Conquests <br/>Are Won in the <span style={{ color: '#333' }}>Backseat.</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#ccc', fontWeight: '300', margin: 0 }}>
            On December 14th, 1911, Roald Amundsen made history. 
            The world cheered for the leader, but we honor the men in the shadows: 
            <strong style={{ color: '#fff' }}> Ludvig Hansen and Andreas Beck.</strong>
          </p>
          <div style={{ borderLeft: '2px solid rgba(255, 180, 120, 0.3)', padding: '10px 25px', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#888', fontStyle: 'italic', margin: 0 }}>
              "Without their expertise—navigating treacherous waters and adapting tools—the conquest would have been impossible."
            </p>
          </div>
        </div>
      </motion.section>

      {/* SEKCIJA 2: THE ANALOGY */}
      <section style={{ 
        marginBottom: '100px', 
        padding: '40px', 
        background: 'rgba(255,255,255,0.02)', 
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px' }}>Your Compass in the 21st Century</h2>
        <p style={{ fontSize: '16px', color: '#999', marginBottom: '40px' }}>
          Modern leadership is the new "Antarctic". Treacherous and unpredictable. 
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {[
            { Icon: Compass, title: "The Compass", text: "Our BARS methodology acts as your magnetic north." },
            { Icon: Map, title: "The Chart", text: "We map out behavioral blind spots traditional tests miss." },
            { Icon: Anchor, title: "The Stability", text: "Our coaching anchors new skills into tangible results." }
          ].map((item, i) => (
            <div key={i}>
              <item.Icon size={24} color="rgba(255, 180, 120, 0.8)" style={{ marginBottom: '15px' }} />
              <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEKCIJA 3: CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '40px' }}>Ready to Begin?</h3>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart} 
          style={{ 
            padding: '18px 50px', 
            fontSize: '14px', 
            background: '#ffb478', 
            color: '#000', 
            border: 'none', 
            fontWeight: '900', 
            letterSpacing: '2px',
            cursor: 'pointer'
          }}
        >
          Start My Journey
        </motion.button>
      </section>

      {/* NOISE TEKSTURA */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        opacity: 0.02, pointerEvents: 'none',
        backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        zIndex: 5
      }} />
    </div>
  );
};

export default LandingPage;