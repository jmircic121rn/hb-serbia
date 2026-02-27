import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SuccessLine = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
                backgroundColor: '#050505', 
                color: '#fff', 
                minHeight: '100vh', 
                paddingBottom: '100px', 
                fontFamily: 'Inter, sans-serif', 
                overflow: 'hidden',
                position: 'relative'
            }}
        >            
            {/* HERO SEKCIJA SA EKLIPSOM */}
            <section style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative'
            }}>
                
                <motion.div 
                    style={{
                        position: 'relative',
                        width: '350px',
                        height: '350px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        scale: 1,
                        marginBottom: '-40px',
                        zIndex: 5
                    }}
                >
                    <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
                                        <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                                        <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                                        <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                                        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.9)' }} />
                    <div style={{
          position: 'relative',
          width: '280px',
          height: '280px',
          backgroundColor: '#000',
          borderRadius: '50%',
          zIndex: 5,
          boxShadow: '0 0 15px rgba(0,0,0,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <motion.img
            src="/logo.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1, duration: 2 }}
            style={{
              width: '220px',
              height: 'auto',
              objectFit: 'contain',
              filter: 'grayscale(100%) brightness(1.5)'
            }}
          />
        </div>                </motion.div>

                <div style={{ zIndex: 20 }}>
                    <motion.h2
                        initial={{ opacity: 0, letterSpacing: '10px' }}
                        animate={{ opacity: 1, letterSpacing: '4px' }}
                        style={{ fontSize: '12px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}
                    >
                        Masterclass Serijal
                    </motion.h2>
                    <motion.h1 style={{ fontSize: 'clamp(40px, 8vw, 70px)', fontWeight: '900', lineHeight: '0.9', margin: '0 0 20px 0' }}>
                        TANKA LINIJA <br /> <span style={{ color: '#222' }}>USPEHA</span>
                    </motion.h1>
                    <p style={{ maxWidth: '600px', color: '#888', fontSize: '18px', lineHeight: '1.6', fontWeight: '300' }}>
                        Od dobrog do nezaboravnog javnog nastupa. Moć uticaja.
                    </p>
                </div>
            </section>

                {/* STORYTELLING SEKCIJA */}
                <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
                    <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '60px', alignItems: 'start' }}>
                            <div>
                                <h3 style={{ color: '#fff', fontSize: '14px', letterSpacing: '2px', marginBottom: '30px', textTransform: 'uppercase' }}>Koncept</h3>
                                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
                                    Zamislite raskošnu koncertnu dvoranu. Simfonijski orkestar se naštimava, a zatim besprekorno izvodi delo. Svaka nota je precizna, svaki segment savršeno sinhronizovan. To je izvedba koja zaslužuje gromoglasan aplauz. Ovo je slično <strong>„dobrom“</strong> govoru.
                                </p>
                                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px' }}>
                                    Govornik zna strukturu, jasno iznosi poente i angažuje publiku. Razume osnove i dobro ih primenjuje.
                                </p>
                            </div>
                            <div style={{ paddingTop: window.innerWidth > 768 ? '100px' : '0' }}>
                                <p style={{ color: '#fff', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px', fontStyle: 'italic', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '20px' }}>
                                    A sada, zamislite slabo osvetljen džez klub. Saksofonista se sprema za nastup, atmosfera je gusta od iščekivanja. Zna melodiju, ali nešto više je u igri. Zatvara oči, a prsti plešu, improvizujući solo koji je istovremeno tehnički blistav i duboko emotivan.
                                </p>
                                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '16px' }}>
                                    On više ne svira samo note; on priča priču, stvara iskustvo koje odjekuje. Ovo je <strong>„džez“ u javnom nastupu</strong> – retka sposobnost da se poveže, inspiriše i transformiše u trenutku.
                                </p>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '100px', padding: '60px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <p style={{ fontSize: '20px', color: '#fff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                                "Javni nastup nije forma. On je povod. Ako ne pokrene misao, pitanje ili promenu, nije vredan pažnje."
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* DETALJI PROGRAMA */}
                <section style={{ backgroundColor: '#080808', padding: '120px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '60px', fontWeight: '900' }}>Šta čini Tanku liniju uspeha izuzetnom?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                            <FeatureBlock title="Reči koje pokreću" desc="Da li se vaše reči samo čuju ili i odjekuju? Prava moć je u tome da vaša poruka inspiriše, motiviše i ostavlja traga koji menja budućnost." />
                            <FeatureBlock title="Prednost" desc="Naš mentorski tim spaja iskustvo medija, komunikacije i scenske umetnosti. Pružamo alate koje odmah možete primeniti uz podršku prilagođenu vašim ciljevima." />
                            <FeatureBlock title="Vrednost" desc="Alati i razmena iskustava pomažu vam da ostvarite veći uticaj i dublje veze – i u poslu i u svakodnevnom životu. Podržaćemo vas da ovladate tehnikama koje jačaju samopouzdanje i omogućavaju da uživate u svakom nastupu." />
                            <FeatureBlock title="Rezultat" desc="Vaš javni nastup prelazi iz „dobrog” u „maestralan”. Povećavate samopouzdanje i kontrolu, inspirišući druge svojom autentičnom komunikacijom." />
                        </div>
                    </div>
                </section>

                {/* POZIVNICA SEKCIJA */}
                <section style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px' }}>
                    <h3 style={{ color: '#fff', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '40px', textAlign: 'center' }}>Ovo je pozivnica za:</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px', color: '#ccc', lineHeight: '2' }}>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}> <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span> Brušenje vaših jedinstvenih snaga u javnom nastupu.</li>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}> <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span> Čitanje i razumevanje publike (neverbalni signali i trenutna adaptacija).</li>
                        <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}> <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span> Ovladavanje tehnikama koje omogućavaju da budete svoji, a maksimalno uticajni.</li>
                    </ul>
                </section>

                {/* MENTORI SEKCIJA */}
                <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '100px', fontWeight: '900', textAlign: 'center' }}>Ko je tu za Vas?</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
                        <MentorCard
                            name="Vesna Damjanić"
                            image="/vesnadamjanic.png"
                            title="Novinarka i glavna urednica Bloomberg Adria"
                            desc="Vesna Damjanić je istaknuta novinarka i glavna i odgovorna urednica Bloomberg Adria televizije, sa više od dve decenije iskustva u medijima i komunikacijama. Specijalizovana za ekonomske, finansijske i biznis teme, Vesna je izgradila karijeru u informativnom programu Radio-televizije Srbije, gde je 14 godina uređivala i vodila brojne emisije, žive programe i intervjue sa ključnim domaćim i svetskim akterima ekonomskih i političkih tokova."
                        />
                        <MentorCard
                            name="Goran Bogdan"
                            image="/goranbogdan.jpeg"
                            side="right"
                            title="Glumac"
                            desc="Goran Bogdan je istaknuti hrvatski glumac, prepoznat i u regionu i na međunarodnoj sceni. Diplomirao je ekonomiju, a 2012. godine završio studije glume na Akademiji dramske umjetnosti u Zagrebu. Od tada je ostvario više od 40 filmskih uloga, među kojima se izdvajaju Otac (2020), Agape (2017) i međunarodne TV serije Fargo i The Last Panthers."
                        />
                        <MentorCard
                            name="Nikola Mirčić"
                            image="/nikolamircic.jpeg"
                            title="Biznis trener i suosnivač Hansen Beck"
                            desc={
                                <>
                                    Master of Science in Global Human Resource Management (University of Liverpool).
                                    Suosnivač globalne kompanije Hansen Beck sa decenijskim iskustvom u transformaciji pojedinaca i timova. 
                                    Nikola je licencirani trener komunikacionih veština specijalizovan za uticaj i razvoj timova visokih performansi.
                                </>
                            } />
                    </div>
                </section>

                {/* LOGISTIKA */}
                <section style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(to bottom, #050505, #000)' }}>
                    <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '80px 40px', display: 'inline-block', width: '100%', maxWidth: '800px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '50px', flexWrap: 'wrap' }}>
                            <div>
                                <p style={{ color: '#666', letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>DATUM</p>
                                <p style={{ fontSize: '20px', fontWeight: '700' }}>Prva polovina 2026.</p>
                            </div>
                            <div>
                                <p style={{ color: '#666', letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>LOKACIJA</p>
                                <p style={{ fontSize: '20px', fontWeight: '700' }}>Beograd</p>
                            </div>
                        </div>
                        <button style={{ padding: '22px 60px', background: '#fff', color: '#000', border: 'none', fontWeight: '900', cursor: 'pointer', letterSpacing: '2px' }}>PRIJAVITE SE ODMAH</button>
                    </div>
                </section>

                {/* KONTAKT FORMA */}
                <section style={{ maxWidth: '1000px', margin: '100px auto', padding: '0 20px' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '50px', fontWeight: '900' }}>Rezervišite Vaše mesto.</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '30px' }}>
                        <input placeholder="Ime i prezime" style={inputStyle} />
                        <input placeholder="E-mail" style={inputStyle} />
                        <input placeholder="Telefon" style={inputStyle} />
                        <input placeholder="Naziv Kompanije" style={inputStyle} />
                        <textarea placeholder="Vaša poruka" style={{ ...inputStyle, gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1', height: '120px' }} />
                        <button style={{ gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1', padding: '20px', background: '#fff', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer', marginTop: '20px', letterSpacing: '2px' }}>POŠALJI PRIJAVU</button>
                    </div>
                </section>
        </motion.div>
    );
};

const FeatureBlock = ({ title, desc }) => (
    <div style={{ borderLeft: '1px solid #222', paddingLeft: '25px' }}>
        <h4 style={{ fontSize: '18px', marginBottom: '15px', color: '#fff' }}>{title}</h4>
        <p style={{ color: '#777', lineHeight: '1.6', fontSize: '15px' }}>{desc}</p>
    </div>
);

const MentorCard = ({ name, title, desc, image, side = 'left' }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
            display: 'flex',
            flexDirection: side === 'left' ? 'row' : 'row-reverse',
            alignItems: 'start',
            gap: '60px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 2
        }}
    >
        <div style={{ position: 'relative', width: '320px', height: '420px', flexShrink: 0 }}>
            {/* Bela bordura umesto narandžaste */}
            <div style={{ position: 'absolute', top: '15px', left: side === 'left' ? '-15px' : '15px', width: '100%', height: '100%', border: '1px solid rgba(255, 255, 255, 0.15)', zIndex: 0 }} />
            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1, filter: 'grayscale(20%)' }} />
        </div>
        <div style={{ flex: 1, minWidth: '300px', textAlign: side === 'left' ? 'left' : 'right' }}>
            <h3 style={{ fontSize: '32px', margin: '0', fontWeight: '900' }}>{name}</h3>
            <h4 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '10px 0 25px 0', lineHeight: '1.4' }}>{title}</h4>
            <p style={{ color: '#888', lineHeight: '1.8', fontSize: '15px', fontWeight: '300' }}>{desc}</p>
        </div>
    </motion.div>
);

const inputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #222',
    padding: '15px 0',
    color: '#fff',
    outline: 'none',
    fontSize: '15px',
    transition: 'border-color 0.3s'
};

export default SuccessLine;