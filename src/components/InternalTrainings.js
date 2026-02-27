import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InternalTrainings = () => {
    const [language, setLanguage] = useState('sr');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            category: "INTERNAL TRAININGS",
            title: "Your Next Conquest: Why Hansen Beck.",
            p1: "Your company's next great conquest isn't out there. It's within. It's in the untapped power of your people, the invisible forces of their behavior, and the very pulse of your culture. In a landscape demanding constant evolution, sustained success isn't merely about strategy—it's about mastering these internal dynamics.",
            p2: "Sounds familiar? You've heard the rhetoric, the endless promises of 'people development.' But how many truly dare to move beyond talk and unleash actual transformation?",
            p3: "This is where Hansen Beck steps in. We don't just deliver programs; we forge capabilities. Our approach bypasses generic solutions, blending sharp strategic foresight with agile, ground-level pragmatism. We're not outside observers; we become an integrated extension of your team, leveraging objective expertise to holistically rewire your organizational challenges—connecting people, processes, and technology for far-reaching, sustainable change.",
            p4: "Fuelled by an authentic curiosity and an unwavering passion to awaken the 'hero' in every individual, we engineer profound behavioral shifts. These aren't just conceptual; they're measurable, delivering staggering ROI: undeniable boosts in efficiency, soaring customer delight, and a thriving, future-ready talent ecosystem. Our commitment doesn't end with a project; it's a relentless partnership, guiding your ongoing ascent long after the final session.",
            p5: "Ready to transcend the ordinary? To dictate your own strategic destiny? The only question remaining is whether you're prepared to claim it. Your next undisputed conquest demands a partnership as exceptional as your ambition.",
            btn: "GET IN TOUCH"
        },
        sr: {
            category: "INTERNI TRENINZI",
            title: "Vaše Sledeće Osvajanje: Zašto Hansen Beck.",
            p1: "Sledeća velika pobeda vaše kompanije nije negde tamo. Ona je unutar vas. U neiskorišćenoj snazi vaših ljudi, nevidljivim silama njihovog ponašanja i samom pulsu vaše kulture. U okruženju koje zahteva neprestanu evoluciju, trajan uspeh nije samo pitanje strategije – on je u ovladavanju ovim unutrašnjim dinamikama.",
            p2: "Zvuči poznato? Čuli ste retoriku, bezbrojna obećanja o 'razvoju ljudi'. Ali koliko se lidera zaista usuđuje da pređe sa reči na dela i pokrene istinsku transformaciju?",
            p3: "Tu Hansen Beck stupa na scenu. Mi ne isporučujemo samo programe; mi gradimo sposobnosti. Naš pristup zaobilazi generička rešenja, spajajući oštroumni strateški uvid sa agilnim, prizemnim pragmatizmom. Nismo spoljni posmatrači; postajemo integrisani deo vašeg tima, koristeći objektivnu ekspertizu da holistički redefinišemo vaše organizacione izazove – povezujući ljude, procese i tehnologiju za dalekosežne, održive promene.",
            p4: "Vođeni autentičnom radoznalošću i nepokolebljivom strašću da probudimo 'heroja' u svakom pojedincu, mi orkestreramo duboke bihejvioralne promene. One nisu samo konceptualne; one su merljive, donoseći zapanjujući povraćaj investicije: neupitno povećanje efikasnosti, vrtoglavi rast zadovoljstva klijenata i procvat, za budućnost spreman ekosistem talenata. Naša posvećenost se ne završava sa projektom; to je neumorno partnerstvo, koje vodi vaš neprestani uspon dugo nakon poslednje sesije.",
            p5: "Spremni da prevaziđete uobičajeno? Da krojite sopstvenu stratešku sudbinu? Jedino pitanje koje ostaje jeste da li ste spremni da je učinite svojom. Vaše sledeće neprikosnoveno osvajanje zahteva partnerstvo izuzetno poput vaše ambicije.",
            btn: "KONTAKTIRAJTE NAS"
        }
    };

    const t = content[language];

    // Stil za slike sa hover efektom
    const imageContainerStyle = {
        width: '100%',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        marginBottom: '40px',
        position: 'relative',
        borderRadius: '2px'
    };

    const MotionImage = ({ src, alt, height }) => (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ ...imageContainerStyle, height: height }}
        >
            <motion.img 
                src={src} 
                alt={alt}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                }}
                initial={{ filter: 'grayscale(100%)', opacity: 0.7 }}
                whileHover={{ filter: 'grayscale(0%)', opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );

    return (
        <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            
            {/* --- LANGUAGE SWITCHER --- */}
            <div 
                style={{ 
                    position: 'fixed', top: '30px', right: '40px', zIndex: 99999,
                    display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', fontSize: '12px',
                    letterSpacing: '2px', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)'
                }}
            >
                <span onClick={() => setLanguage('sr')} style={{ cursor: 'pointer', opacity: language === 'sr' ? 1 : 0.4, transition: '0.3s' }}>SR</span>
                <span style={{ opacity: 0.2 }}>|</span>
                <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', opacity: language === 'en' ? 1 : 0.4, transition: '0.3s' }}>EN</span>
            </div>

            {/* HERO SEKCIJA */}
            <section style={{ 
                height: '100vh', display: 'flex', flexDirection: 'column', 
                justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                padding: '0 10%', position: 'relative', overflow: 'hidden'
            }}>
                <motion.div style={{ position: 'relative', width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-20px', zIndex: 5 }}>
                    <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
                    <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.9)' }} />
                    <div style={{ position: 'relative', width: '280px', height: '280px', backgroundColor: '#000', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 15px rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <motion.img src="/logo.png" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1, duration: 2 }} style={{ width: '220px', height: 'auto', objectFit: 'contain', filter: 'grayscale(100%) brightness(1.5)' }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 10 }}>
                    <h4 style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>
                        {t.category}
                    </h4>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', lineHeight: '1.1', maxWidth: '900px', marginBottom: '30px' }}>
                        {t.title.split(': ')[0]}: <br /> {t.title.split(': ')[1]}
                    </h1>
                </motion.div>
            </section>

            {/* SADRŽAJ STRANICE */}
            <section style={{ padding: '100px 10%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    
                    <MotionImage src="/images/t1.jpg" alt="Training 1" height="450px" />

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '18px', color: '#fff', lineHeight: '1.8', marginBottom: '60px' }}>
                        {t.p1}
                    </motion.p>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '40px', marginBottom: '60px' }}>
                        <MotionImage src="/images/t3.jpg" alt="Training 3" height="300px" />
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            style={{ fontSize: '18px', color: '#888', fontStyle: 'italic', lineHeight: '1.6', display: 'flex', alignItems: 'center' }}>
                            {t.p2}
                        </motion.p>
                    </div>

                    <div style={{ backgroundColor: '#0a0a0a', padding: '60px 40px', textAlign: 'left', marginBottom: '60px', border: '1px solid rgba(255,255,255,0.03)' }}>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#aaa', marginBottom: '30px' }}>
                            {t.p3}
                        </p>
                        
                        <div style={{ margin: '40px 0' }}>
                            <MotionImage src="/images/t5.jpg" alt="Training 5" height="350px" />
                        </div>

                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#aaa' }}>
                            {t.p4}
                        </p>
                    </div>

                    <div style={{ marginTop: '60px' }}>
                        <MotionImage src="/images/t6.jpg" alt="Training 6" height="400px" />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '80px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '40px', lineHeight: '1.4' }}>
                            {t.p5}
                        </h3>

                        <button style={{ 
                            padding: '20px 50px', 
                            background: '#fff', 
                            color: '#000', 
                            fontWeight: '900', 
                            border: 'none', 
                            cursor: 'pointer', 
                            letterSpacing: '2px',
                            transition: '0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            {t.btn}
                        </button>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '50px 10%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '12px', color: '#444' }}>
                © 2026 HANSEN BECK SRBIJA. SVA PRAVA ZADRŽANA.
            </footer>
        </div>
    );
};

export default InternalTrainings;