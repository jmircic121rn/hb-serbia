import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

const SaturnPlanet = ({ title, subtitle, glowColor, onClick, delay, isSelected, small, noEntrance, dimmed, inline, isMobile }) => {
  const planetWidth = small
    ? (isMobile ? '80px' : '110px')
    : (isMobile ? '100px' : '180px');

  const imgSize = small ? (isMobile ? '70px' : '90px') : (isMobile ? '80px' : '140px');

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
      }}
    >
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

      <div style={{
        textAlign: inline ? 'left' : 'center',
        zIndex: 10,
        paddingTop: inline ? '18px' : '0px',
        paddingLeft: inline ? '20px' : '0px'
      }}>
        <h3 style={{
          fontSize: isMobile ? '9px' : '13px',
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
          fontSize: small ? (isMobile ? '10px' : '14px') : (isMobile ? '11px' : '16px'),
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const menuLevel = searchParams.get('menu') || 'main';

  const [showOptions, setShowOptions] = useState(menuLevel !== 'main');
  const [myJourneyExpanded, setMyJourneyExpanded] = useState(false);
  const t = translations[language].eclipse;

  useEffect(() => {
    if (menuLevel !== 'main') {
      setShowOptions(true);
    }
  }, [menuLevel]);

  // Eclipse visual dimensions
  const eclipseSize = isMobile ? 230 : 350;
  const ringSize = isMobile ? 194 : 284;
  const circleSize = isMobile ? 190 : 280;
  const dotRight = isMobile ? 19 : 30;
  const dotSize = isMobile ? 6 : 8;
  const beamWidth = isMobile ? 130 : 200;
  const beamRight = isMobile ? -40 : -65;

  const BrandLogo = () => (
    <motion.img
      src="/logo.png"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        position: 'absolute',
        top: isMobile ? '20px' : '40px',
        left: isMobile ? '20px' : '40px',
        width: isMobile ? '90px' : '180px',
        height: 'auto',
        zIndex: 100,
        filter: 'brightness(1.5)'
      }}
    />
  );

  const LanguagePicker = () => (
    <div style={{
      position: 'absolute',
      top: isMobile ? '20px' : '40px',
      right: isMobile ? '20px' : '40px',
      zIndex: 100,
      display: 'flex',
      gap: '12px',
      background: 'rgba(255,255,255,0.05)',
      padding: isMobile ? '6px 12px' : '8px 15px',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      {['sr', 'en'].map((l) => (
        <span
          key={l}
          onClick={() => setLanguage(l)}
          style={{
            cursor: 'pointer',
            fontSize: isMobile ? '10px' : '12px',
            fontWeight: '900',
            color: language === l ? '#fff' : '#666',
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

      {/* Eclipse visual */}
      <motion.div
        animate={{
          y: showOptions ? (isMobile ? -30 : -60) : 0,
          scale: showOptions ? 0.9 : (isMobile ? 1.3 : 1.6)
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          width: `${eclipseSize}px`,
          height: `${eclipseSize}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '-60px',
          zIndex: 5,
        }}
      >
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            position: 'absolute', width: '110%', height: '110%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)',
            filter: 'blur(40px)', zIndex: 1
          }}
        />
        <div style={{
          position: 'absolute',
          width: `${beamWidth}px`,
          height: '5px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)',
          clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)',
          filter: 'blur(1px)',
          zIndex: 7,
          right: `${beamRight}px`,
          top: '51%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', width: `${ringSize}px`, height: `${ringSize}px`, borderRadius: '50%',
          background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)',
          filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4
        }} />
        <div style={{
          position: 'absolute', width: `${ringSize}px`, height: `${ringSize}px`, borderRadius: '50%',
          background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)',
          filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4
        }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            right: `${dotRight}px`,
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: '#fff',
            borderRadius: '50%',
            zIndex: 10,
            boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.9)'
          }}
        />
        <div style={{
          position: 'relative',
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          backgroundColor: '#000',
          borderRadius: '50%',
          zIndex: 5,
          boxShadow: '0 0 15px rgba(0,0,0,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }} />
      </motion.div>

      {/* Text + menu */}
      <div style={{ textAlign: 'center', zIndex: 20, width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
        <motion.h1
          animate={{
            y: showOptions ? (isMobile ? -30 : -50) : 0,
            opacity: showOptions ? 0.4 : 1,
            scale: showOptions ? 0.9 : 1
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: isMobile ? '36px' : '82px',
            fontWeight: '900',
            lineHeight: '0.9',
            letterSpacing: isMobile ? '-1px' : '-3px',
            margin: 0,
            fontFamily: "'PT Serif', serif"
          }}
        >
          {t.mainTitle}
        </motion.h1>

        <motion.p
          onClick={() => !showOptions && setShowOptions(true)}
          animate={{
            opacity: showOptions ? 0.3 : 1,
            marginBottom: showOptions ? '30px' : '50px'
          }}
          whileHover={!showOptions ? { color: '#fff', letterSpacing: '6px' } : {}}
          style={{
            fontSize: isMobile ? '9px' : '11px',
            color: '#666',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginTop: isMobile ? '14px' : '20px',
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
              <div style={{ display: 'flex', gap: isMobile ? '16px' : '30px' }}>
                <SaturnPlanet
                  title={t.planets.whoWeAre.title}
                  subtitle={t.planets.whoWeAre.subtitle}
                  glowColor="rgba(255, 255, 255, 0.6)"
                  delay={0.1}
                  dimmed={myJourneyExpanded}
                  onClick={() => onProceed('ABOUT')}
                  isMobile={isMobile}
                />
                <SaturnPlanet
                  title={t.planets.explore.title}
                  subtitle={t.planets.explore.subtitle}
                  glowColor="rgba(255, 255, 255, 0.6)"
                  delay={0.3}
                  onClick={() => isMobile ? navigate('/?menu=assessment') : setMyJourneyExpanded(prev => !prev)}
                  isMobile={isMobile}
                />
              </div>

              {/* Sub-planets — desktop only */}
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
                      gap: '0px',
                      alignItems: 'flex-start',
                      marginLeft: '10px',
                      marginTop: '15px',
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
                          isMobile={isMobile}
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
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                gap: isMobile ? '10px' : '30px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: '100vw',
                padding: isMobile ? '0 8px' : '0',
                boxSizing: 'border-box',
              }}
            >
              <SaturnPlanet
                title={t.planets.b2b.title}
                subtitle={t.planets.b2b.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.1}
                onClick={() => onProceed('INTERNAL_TRAININGS')}
                isMobile={isMobile}
              />
              <SaturnPlanet
                title={t.planets.individual.title}
                subtitle={t.planets.individual.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.2}
                onClick={() => onProceed('OPEN_TRAININGS')}
                isMobile={isMobile}
              />
              <SaturnPlanet
                title={t.planets.analysis.title}
                subtitle={t.planets.analysis.subtitle}
                glowColor="rgba(255, 255, 255, 0.6)"
                delay={0.3}
                onClick={() => onProceed('INTRO')}
                isMobile={isMobile}
              />
              <div
                onClick={() => navigate('/')}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginTop: isMobile ? '8px' : '0',
                  position: isMobile ? 'relative' : 'absolute',
                  bottom: isMobile ? 'auto' : '-40px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  opacity: 0.5,
                  letterSpacing: '2px'
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
