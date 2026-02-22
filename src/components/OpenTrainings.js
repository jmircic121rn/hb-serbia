import React from 'react';
import { motion } from 'framer-motion';

// Pomoćna komponenta za kartice treninga koja prati stil portala
const TrainingCard = ({ title, description, duration, mentors, onClick }) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}
    style={{
      background: 'linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.9) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: '30px',
      borderRadius: '2px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '350px',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #fff, transparent)', opacity: 0.2 }} />

    <div>
      <h4 style={{ color: '#666', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>{duration}</h4>
      <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px', letterSpacing: '-0.5px' }}>{title}</h3>
      <p style={{ color: '#999', fontSize: '13px', lineHeight: '1.6', fontWeight: '300' }}>{description}</p>
      {mentors && <p style={{ color: '#fff', fontSize: '11px', marginTop: '15px', fontStyle: 'italic' }}>Mentori: {mentors}</p>}
    </div>

    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
      style={{
        marginTop: '30px',
        padding: '12px 20px',
        background: 'transparent',
        border: '1px solid #fff',
        color: '#fff',
        fontSize: '10px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}
    >
      Više informacija
    </motion.button>
  </motion.div>
);

const OpenTrainings = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '100px' }}
    >
      {/* MINI EKLIPSA U UGLU (Kao potpis stila) */}
      <div style={{ position: 'fixed', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', position: 'relative', zIndex: 1 }}>

        {/* HERO SEKCIJA */}
        <header style={{ marginBottom: '100px' }}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            style={{ fontSize: '12px', letterSpacing: '6px', color: '#666', textTransform: 'uppercase', marginBottom: '20px' }}
          >
            Inspiracija za pozitivnu transformaciju
          </motion.h2>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '56px', fontWeight: '900', maxWidth: '800px', lineHeight: '1.1', marginBottom: '40px' }}
          >
            Uradite nešto za sebe sa našim <span style={{ color: '#444' }}>otvorenim treninzima.</span>
          </motion.h1>
          <p style={{ color: '#888', maxWidth: '700px', lineHeight: '1.8', fontSize: '16px' }}>
            Hansen Beck otvoreni trening nije uobičajena obuka. Osmišljen je tako da podstakne transformaciju načina razmišljanja čije je krajnje odredište istinska profesionalna izvrsnost.
          </p>
        </header>

        {/* GRID SA PROGRAMIMA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '150px'
        }}>
          <TrainingCard
            title="Moć uticaja: Tanka linija uspeha"
            duration="Specijalni Masterclass"
            description="Od dobrog do nezaboravnog javnog nastupa. Zamislite da vaš glas pokreće promene."
            mentors="Vesna Damjanić, Goran Bogdan, Nikola Mirčić"
            onClick={() => onNavigate('SUCCESS_LINE')} 
          />
          <TrainingCard
            title="Inspirativno Liderstvo 1.0"
            duration="4 meseca / 6 dana"
            description="Program dizajniran za menadžere koji žele da unaprede liderske veštine i osiguraju trajne rezultate."
            onClick={() => alert("Stranica u pripremi")}
          />
          <TrainingCard
            title="Izvrsnost u prodaji 1.0"
            duration="4 meseca"
            description="Usavršite prodajnu komunikaciju i steknite samopouzdanje kojim ćete obezbediti bolje rezultate."
            onClick={() => alert("Stranica u pripremi")}
          />
          <TrainingCard
            title="Uverljiva prezentacija 1.0"
            duration="2 meseca"
            description="Vaš uticaj, vaša moć. Naučite kako da ostvarite snažan utisak i inspirišete na akciju."
            onClick={() => alert("Stranica u pripremi")}
          />
          <TrainingCard
            title="Umetnost pregovaranja 1.0"
            duration="2 meseca"
            description="Strategije efektivne kolaboracije sa ciljem postizanja vrednosnog dogovora."
            onClick={() => alert("Stranica u pripremi")}
          />
        </div>

        {/* TESTIMONIALS SEKCIJA */}
        <section style={{ borderTop: '1px solid #222', paddingTop: '100px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '60px', fontWeight: '800', letterSpacing: '1px' }}>
            Šta su učesnici rekli o nama:
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px'
          }}>

            {/* Marija Čeleketić - Pinoles */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255, 180, 120, 0.4)' }}
              style={testimonialCardStyle}
            >
              <p style={testimonialTextStyle}>
                "Visokokvalitetni i specijalizovani kursevi iz oblasti liderstva, korporativne komunikacije,
                motivacije zaposlenih i prodajnih veština. Nikola stvara intenzivan i dinamičan ambijent
                u kojem uvek želite da saznate i pružite više. Treninzi su vrlo praktični i inspirišući.
                Nakon sedam godina saradnje, Hansen Beck bi uvek bio na prvom mestu ličnog izbora."
              </p>
              <div style={{ marginTop: '20px' }}>
                <h4 style={authorNameStyle}>Marija Čeleketić</h4>
                <span style={authorCompanyStyle}>Pinoles</span>
              </div>
            </motion.div>

            {/* Stojan Jovanović - SBB */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255, 180, 120, 0.4)' }}
              style={testimonialCardStyle}
            >
              <p style={testimonialTextStyle}>
                "Trening sa Hansen Beck-om nije bio samo profesionalni razvoj – to je bilo iskustvo
                koje menja način razmišljanja. Metodologija i pristup su me osvojili jer su praktični
                i usmereni na stvarne promene. Hansen Beck mi je pomogao da postanem bolji lider,
                bolji komunikator i na kraju bolji trener. Topla preporuka svima!"
              </p>
              <div style={{ marginTop: '20px' }}>
                <h4 style={authorNameStyle}>Stojan Jovanović</h4>
                <span style={authorCompanyStyle}>SBB</span>
              </div>
            </motion.div>

            {/* Marija Simić Savić - Ekomar */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255, 180, 120, 0.4)' }}
              style={testimonialCardStyle}
            >
              <p style={testimonialTextStyle}>
                "Stekli smo ključna znanja iz efikasne komunikacije, uticaja i prodaje ideja.
                Unapredili smo interne procese i identifikovali potrebu za proširenjem resursa.
                Razvili smo strategije aktivnog slušanja kako bismo osnažili organizacionu
                održivost i efikasnost u ostvarivanju misije."
              </p>
              <div style={{ marginTop: '20px' }}>
                <h4 style={authorNameStyle}>Marija Simić Savić</h4>
                <span style={authorCompanyStyle}>Ekomar</span>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </motion.div>
  );
};

const testimonialCardStyle = {
  background: 'linear-gradient(145deg, rgba(15,15,15,0.9) 0%, rgba(5,5,5,1) 100%)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.4s ease',
  position: 'relative'
};

const testimonialTextStyle = {
  color: '#aaa',
  fontSize: '14px',
  lineHeight: '1.7',
  fontStyle: 'italic',
  marginBottom: '20px'
};

const authorNameStyle = {
  fontSize: '15px',
  fontWeight: '700',
  color: '#fff',
  margin: 0,
  letterSpacing: '0.5px'
};

const authorCompanyStyle = {
  fontSize: '11px',
  color: 'rgba(255, 180, 120, 0.7)',
  textTransform: 'uppercase',
  letterSpacing: '2px'
};

export default OpenTrainings;