import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortalDoor = ({ title, subtitle, glowColor, side, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover="open"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        width: '180px', // Blago prošireno radi dužine teksta na srpskom
        height: '260px',
        perspective: '1200px',
        position: 'relative',
      }}
    >
      <motion.div
        variants={{ open: { opacity: 1, scaleX: 1.3 } }}
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: '5%',
          right: '5%',
          height: '3px',
          background: glowColor,
          filter: 'blur(10px)',
          opacity: 0.4,
          zIndex: 0,
          transition: 'all 0.6s ease'
        }}
      />

      <motion.div
        variants={{
          open: { 
            rotateY: side === 'left' ? -40 : 40,
            x: side === 'left' ? -20 : 20,
            boxShadow: `0 0 50px ${glowColor}`,
            borderColor: 'rgba(255,255,255,0.3)'
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'linear-gradient(145deg, rgba(25,25,25,0.95) 0%, #050505 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          position: 'relative',
          transformOrigin: side === 'left' ? 'left center' : 'right center',
          transition: 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
      >
        <motion.div 
          variants={{
            open: { background: '#fff', boxShadow: '0 0 15px #fff', scaleY: 1.1 }
          }}
          style={{
            position: 'absolute',
            [side === 'left' ? 'right' : 'left']: '15px',
            top: '40%',
            width: '2px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.2)',
            transition: 'all 0.5s ease'
          }}
        />

        <div style={{ textAlign: 'center', padding: '0 15px', zIndex: 3 }}>
          <h3 style={{ fontSize: '7px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '12px', textTransform: 'uppercase' }}>
            {title}
          </h3>
          <div style={{ height: '1px', width: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 auto 12px' }} />
          <span style={{ 
            fontSize: '10px', 
            fontWeight: '700', 
            letterSpacing: '1px', 
            color: '#fff', 
            lineHeight: '1.4', 
            display: 'block',
            textTransform: 'uppercase'
          }}>
            {subtitle}
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={{ open: { opacity: 0.6, x: side === 'left' ? 30 : -30 } }}
        style={{
          position: 'absolute',
          inset: '20px',
          background: glowColor,
          filter: 'blur(35px)',
          zIndex: 1,
          opacity: 0,
          transition: 'all 0.8s ease'
        }}
      />
    </motion.div>
  );
};

const EclipseIntro = ({ onProceed }) => {
    const [showPortals, setShowPortals] = useState(false);

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
        }}>

            <motion.div 
                animate={{ 
                    y: showPortals ? -20 : 0 
                }}
                style={{
                    position: 'relative',
                    width: '350px',
                    height: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    scale: 1.2,
                    marginBottom: '-60px',
                    zIndex: 5,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
            >
                <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
                <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 200, 150, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255,200,150,0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255,200,150,0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 200, 150, 0.9)' }} />
                <div style={{ position: 'relative', width: '280px', height: '280px', backgroundColor: '#000', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 15px rgba(0,0,0,1)' }} />
            </motion.div>

            <div style={{ textAlign: 'center', zIndex: 20 }}>
                <motion.h1
                    animate={{ 
                        y: showPortals ? -10 : 0
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                        fontSize: '64px',
                        fontWeight: '900', 
                        lineHeight: '0.9', 
                        letterSpacing: '-2px', 
                        margin: 0 
                    }}
                >
                    Great Conquests <br />
                    Are Won in the <span style={{ color: '#444' }}>Backseat.</span>
                </motion.h1>

                <motion.p
                    onClick={() => !showPortals && setShowPortals(true)}
                    animate={{ 
                        opacity: showPortals ? 0.3 : 1,
                        marginBottom: showPortals ? '30px' : '50px'
                    }}
                    whileHover={!showPortals ? { color: '#fff', letterSpacing: '6px' } : {}}
                    style={{ 
                        fontSize: '11px', 
                        color: '#666', 
                        letterSpacing: '4px', 
                        textTransform: 'uppercase', 
                        marginTop: '20px',
                        cursor: showPortals ? 'default' : 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {showPortals ? "Odaberite vaš put" : "Izaberite vašu destinaciju"}
                </motion.p>

                <AnimatePresence>
                    {showPortals && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                            style={{ 
                                display: 'flex', 
                                gap: '50px', 
                                justifyContent: 'center',
                                perspective: '1500px'
                            }}
                        >
                            <PortalDoor 
                                title="B2B Rešenja" 
                                subtitle="Interni treninzi za kompanije" 
                                glowColor="rgba(255, 180, 120, 0.4)" 
                                side="left"
                                onClick={() => onProceed('leader')}
                            />
                            <PortalDoor 
                                title="Individualni razvoj" 
                                subtitle="Treninzi otvorenog tipa" 
                                glowColor="rgba(255, 255, 255, 0.2)" 
                                side="right"
                                onClick={() => onProceed('employee')}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EclipseIntro;