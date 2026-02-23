import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SaturnPlanet = ({ title, subtitle, glowColor, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        // LEBDENJE: Pomera se gore-dole za 10px i blago se naginje
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0] 
      }}
      transition={{ 
        // Ulazna animacija (fade i scale)
        opacity: { duration: 1, delay: delay },
        scale: { duration: 1, delay: delay },
        // Beskonačno lebdenje (kreće nakon što se pojavi)
        y: { 
          duration: 4 + Math.random() * 2, // Različita brzina za svaku planetu
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay 
        },
        rotate: {
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
      whileHover="hover"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* PULSIRAJUĆI SJAJ - Ostaje isti */}
      <motion.div
        variants={{
          hover: { 
            opacity: [0.2, 0.5, 0.2], 
            scale: [1, 1.3, 1],
            transition: { repeat: Infinity, duration: 2 } 
          }
        }}
        style={{
          position: 'absolute',
          top: '20px',
          width: '80px',
          height: '80px',
          background: glowColor,
          filter: 'blur(30px)',
          borderRadius: '50%',
          opacity: 0,
          zIndex: 0
        }}
      />

      {/* SATURN VIZUAL - Ostaje isti */}
      <div style={{ 
        position: 'relative', 
        width: '140px', 
        height: '100px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '20px',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          border: `2px solid ${glowColor}`,
          borderRadius: '50%',
          transform: 'rotateX(75deg)',
          zIndex: 1,
          clipPath: 'inset(0% 0% 50% 0%)',
          opacity: 0.5,
        }} />

        <div style={{
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #444 0%, #000 100%)`,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `inset -8px -8px 20px #000`,
          zIndex: 2,
          position: 'relative'
        }} />

        <div style={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          border: `2px solid ${glowColor}`,
          borderRadius: '50%',
          transform: 'rotateX(75deg)',
          zIndex: 3,
          clipPath: 'inset(50% 0% 0% 0%)',
          boxShadow: `0 8px 15px ${glowColor}33`,
        }} />
      </div>

      {/* TEKST SEKCIJA */}
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <h3 style={{ fontSize: '7px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', textTransform: 'uppercase' }}>
          {title}
        </h3>
        <div style={{ height: '1px', width: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 auto 8px' }} />
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
  );
};

const EclipseIntro = ({ onProceed }) => {
    const [showOptions, setShowOptions] = useState(false);

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
                animate={{ y: showOptions ? -60 : 0 }}
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
                    animate={{ y: showOptions ? -40 : 0 }}
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
                    onClick={() => !showOptions && setShowOptions(true)}
                    animate={{ 
                        opacity: showOptions ? 0.3 : 1,
                        marginBottom: showOptions ? '40px' : '50px'
                    }}
                    whileHover={!showOptions ? { color: '#fff', letterSpacing: '6px' } : {}}
                    style={{ 
                        fontSize: '11px', 
                        color: '#666', 
                        letterSpacing: '4px', 
                        textTransform: 'uppercase', 
                        marginTop: '20px',
                        cursor: showOptions ? 'default' : 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {showOptions ? "Odaberite vaš sistem" : "Izaberite vašu destinaciju"}
                </motion.p>

                <AnimatePresence>
                    {showOptions && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            style={{ 
                                display: 'flex', 
                                gap: '30px', 
                                justifyContent: 'center'
                            }}
                        >
                            <SaturnPlanet 
                                title="B2B Rešenja" 
                                subtitle="Interni treninzi za kompanije" 
                                glowColor="rgba(255, 180, 120, 0.6)" 
                                delay={0.1}
                                onClick={() => onProceed('INTERNAL')}
                            />
                            <SaturnPlanet 
                                title="Individualni razvoj" 
                                subtitle="Treninzi otvorenog tipa" 
                                glowColor="rgba(255, 180, 120, 0.6)" 
                                delay={0.2}
                                onClick={() => onProceed('OPEN_TRAININGS')}
                            />
                            <SaturnPlanet 
                                title="Analiza kompetencija" 
                                subtitle="Profilisanje potencijala" 
                                glowColor="rgba(255, 180, 120, 0.6)" 
                                delay={0.3}
                                onClick={() => onProceed('INTRO')}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EclipseIntro;