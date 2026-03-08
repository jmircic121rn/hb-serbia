import React, { useEffect, useState } from 'react'; // Vraćen useState i useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

const isMobile = window.innerWidth < 768;

const SaturnPlanet = ({ title, subtitle, glowColor, onClick, delay, isSelected, small, noEntrance, dimmed, inline }) => {
  const planetWidth = small
    ? (isMobile ? '80px' : '110px')
    : (isMobile ? '110px' : '180px');

  const imgSize = small ? (isMobile ? '70px' : '90px') : (isMobile ? '90px' : '140px');

  return (
    <motion.div
      initial={noEntrance ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      animate={{
        opacity: dimmed ? 0.35 : 1,
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0]
      }}
      transition={{
        opacity: noEntrance ? {} : { duration: 1, delay: delay },
        scale: noEntrance ? {} : { duration: 1, delay: delay },
        y: {
          duration: 4 + Math.random() * 2,
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
      whileHover={{ scale: dimmed ? 1 : 1.05 }}
      onClick={onClick}
      style={{
        cursor: dimmed ? 'default' : 'pointer',
        width: inline ? 'auto' : planetWidth,
        display: 'flex',
        flexDirection: inline ? 'row' : 'column',
        alignItems: 'center',
        gap: inline ? '14px' : 0,
        position: 'relative',
        transform: isMobile ? 'scale(0.85)' : 'scale(1)',
      }}
    >
      {/* Selected orbit ring */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 16px rgba(255, 255, 255, 0.12)',
            zIndex: 8,
            pointerEvents: 'none'
          }}
        />
      )}

      {!inline && (
        <div style={{
          position: 'absolute',
          top: '10%',
          width: '80%',
          height: '60%',
          background: glowColor,
          filter: 'blur(35px)',
          borderRadius: '50%',
          opacity: isSelected ? 0.35 : 0.25,
          zIndex: 0
        }} />
      )}

      {!inline && (
        <div style={{
          position: 'relative',
          width: imgSize,
          height: imgSize,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '15px',
          zIndex: 2
        }}>
          <img
            src="/planet.png"
            alt={subtitle}
            style={{
              width: '90%',
              height: '90%',
              objectFit: 'contain',
              filter: dimmed
                ? 'grayscale(1) brightness(0.5)'
                : isSelected
                  ? 'drop-shadow(0 0 14px rgba(255,255,255,0.3)) brightness(1.15)'
                  : 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
            }}
          />
        </div>
      )}

      <div style={{ textAlign: inline ? 'left' : 'center', zIndex: 10 }}>
        <h3 style={{
          fontSize: isMobile ? '7px' : '9px',
          letterSpacing: '2px',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '4px',
          textTransform: 'uppercase',
          fontFamily: "'PT Sans', sans-serif"
        }}>
          {title}
        </h3>
        <div style={{ height: '1px', width: '20px', background: 'rgba(255,255,255,0.2)', margin: inline ? '0 0 8px' : '0 auto 8px' }} />
        <span style={{
          fontSize: small ? (isMobile ? '8px' : '10px') : (isMobile ? '10px' : '12px'),
          fontWeight: '700',
          letterSpacing: '1px',
          color: '#fff',
          lineHeight: '1.2',
          display: 'block',
          textTransform: 'uppercase',
          fontFamily: "'PT Sans', sans-serif"
        }}>
          {subtitle}
        </span>
      </div>
    </motion.div>
  );
};

const subContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  exit:   { transition: { staggerChildren: 0.06, staggerDirection: -1 } }
};

const subPlanetVariants = {
  hidden:   { opacity: 0, x: 35, scale: 0.75 },
  visible:  { opacity: 1, x: 0,  scale: 1,    transition: { type: 'spring', stiffness: 240, damping: 24 } },
  exit:     { opacity: 0, x: 25, scale: 0.78, transition: { duration: 0.2, ease: 'easeIn' } }
};

const EclipseIntro = ({ onProceed, language, setLanguage }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const menuLevel = searchParams.get('menu') || 'main';

  // Vraćamo showOptions i useEffect za početni sloj
  const [showOptions, setShowOptions] = useState(menuLevel !== 'main');
  const [myJourneyExpanded, setMyJourneyExpanded] = useState(false);
  const t = translations[language].eclipse;

  useEffect(() => {
    if (menuLevel !== 'main') {
      setShowOptions(true);
    }
  }, [menuLevel]);

  const BrandLogo = () => (
    <motion.img
      src="/logo.png"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        width: isMobile ? '100px' : '180px',
        height: 'auto',
        zIndex: 100,
        filter: 'brightness(1.5)'
      }}
    />
  );

  const LanguagePicker = () => (
    <div style={{
      position: 'absolute', top: '40px', right: '40px', zIndex: 100,
      display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      {['sr', 'en'].map((l) => (
        <span
          key={l}
          onClick={() => setLanguage(l)}
          style={{
            cursor: 'pointer', fontSize: '12px', fontWeight: '900',
            color: language === l ? '#ffff' : '#666',
            transition: '0.3s',
            letterSpacing: '1px'
          }}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </div>
  );

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
      fontFamily: "'PT Sans', sans-serif"
    }}>
      <BrandLogo />
      <LanguagePicker />

      <motion.div
        animate={{ 
            y: showOptions ? -60 : 0,
            scale: showOptions ? (menuLevel !== 'main' ? 1.1 : 1.1) : 1.6 
        }}
        style={{
          position: 'relative', width: '350px', height: '350px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginBottom: '-60px', zIndex: 5,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
        <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.9)' }} />
        <div style={{
          position: 'relative', width: '280px', height: '280px', backgroundColor: '#000',
          borderRadius: '50%', zIndex: 5, boxShadow: '0 0 15px rgba(0,0,0,1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
        }}>
        </div>
      </motion.div>

      <div style={{ textAlign: 'center', zIndex: 20 }}>
        <motion.h1
          animate={{
            y: showOptions ? -50 : 0,
            opacity: showOptions ? 0.4 : 1,
            scale: showOptions ? 0.9 : 1
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: isMobile ? '48px' : '82px',
            fontWeight: '900',
            lineHeight: '0.9',
            letterSpacing: '-3px',
            margin: 0,
            fontFamily: "'PT Serif', serif"
          }}
        >
          {t.mainTitle}
        </motion.h1>

        <motion.p
          onClick={() => !showOptions && setShowOptions(true)} // AKTIVIRA PRVI NIVO
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
          {menuLevel === 'main' ? t.selectDest : t.selectSys}
        </motion.p>

        <AnimatePresence mode="wait">
          {showOptions && menuLevel === 'main' && (
            <motion.div
              key="main-menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '0px',
              }}
            >
              {/* Main 2 planets */}
              <div style={{ display: 'flex', gap: isMobile ? '10px' : '30px' }}>
                <SaturnPlanet
                  title={t.planets.whoWeAre.title}
                  subtitle={t.planets.whoWeAre.subtitle}
                  glowColor="rgba(255, 255, 255, 0.6)"
                  delay={0.1}
                  dimmed={myJourneyExpanded}
                  onClick={() => onProceed('ABOUT')}
                />
                <SaturnPlanet
                  title={t.planets.explore.title}
                  subtitle={t.planets.explore.subtitle}
                  glowColor="rgba(255, 255, 255, 0.6)"
                  delay={0.3}
                  onClick={() => isMobile ? navigate('/?menu=assessment') : setMyJourneyExpanded(prev => !prev)}
                />
              </div>

              {/* Sub-planets — appear to the right on desktop only */}
              <AnimatePresence>
                {!isMobile && myJourneyExpanded && (
                  <motion.div
                    key="sub-planets"
                    variants={subContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      alignItems: 'flex-start',
                      marginLeft: '16px',
                      marginTop: '-10px',
                    }}
                  >
                    {[
                      { title: t.planets.b2b.title, subtitle: t.planets.b2b.subtitle, onClick: () => onProceed('INTERNAL_TRAININGS') },
                      { title: t.planets.individual.title, subtitle: t.planets.individual.subtitle, onClick: () => onProceed('OPEN_TRAININGS') },
                      { title: t.planets.analysis.title, subtitle: t.planets.analysis.subtitle, onClick: () => onProceed('INTRO') },
                    ].map((planet, i) => (
                      <motion.div key={i} variants={subPlanetVariants}>
                        <SaturnPlanet
                          title={planet.title}
                          subtitle={planet.subtitle}
                          glowColor="rgba(255, 255, 255, 0.6)"
                          delay={0}
                          small
                          noEntrance
                          inline
                          onClick={planet.onClick}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {showOptions && menuLevel === 'assessment' && (
            <motion.div
              key="assessment-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              style={{
                display: 'flex',
                gap: isMobile ? '5px' : '30px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: '100vw'
              }}            >
              <SaturnPlanet
                title={t.planets.b2b.title}
                subtitle={t.planets.b2b.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.1}
                onClick={() => onProceed('INTERNAL_TRAININGS')}
              />
              <SaturnPlanet
                title={t.planets.individual.title}
                subtitle={t.planets.individual.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.2}
                onClick={() => onProceed('OPEN_TRAININGS')}
              />
              <SaturnPlanet
                title={t.planets.analysis.title}
                subtitle={t.planets.analysis.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.3}
                onClick={() => onProceed('INTRO')}
              />
              <div
                onClick={() => navigate('/')} 
                style={{
                  position: 'absolute', bottom: '-40px', cursor: 'pointer',
                  fontSize: '10px', opacity: 0.5, letterSpacing: '2px'
                }}
              >
                ← {translations[language].common.back.toUpperCase()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EclipseIntro;