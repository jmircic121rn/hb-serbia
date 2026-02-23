import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = ({ onBack }) => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#000',
      color: '#fff',
      padding: '80px 20px',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* Dugme za nazad */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -5 }}
        style={{
          position: 'fixed',
          top: '40px',
          left: '40px',
          background: 'transparent',
          border: 'none',
          color: '#666',
          cursor: 'pointer',
          fontSize: '12px',
          letterSpacing: '2px',
          zIndex: 100
        }}
      >
        ← NAZAD
      </motion.button>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* UVOD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#rgba(255, 180, 120, 0.8)', textTransform: 'uppercase' }}>Globalni Eksperti</h2>
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0' }}>
            Hansen Beck je globalni ekspert i partner za kreiranje pozitivne i održive poslovne transformacije.
          </h1>
        </motion.div>

        {/* PURPOSE, VISION, MISSION */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          {[
            { title: "Zašto to radimo - Svrha", text: "Naša strast je stvaranje trenutaka učenja koji menjaju život jer verujemo da svako ima potencijal da briljira." },
            { title: "Čemu težimo – Vizija", text: "Bićemo preferirani globalni partner za one koji traže odlične rezultate kroz impresivna iskustva učenja, koja omogućavaju pozitivne promene u ponašanju." },
            { title: "Šta radimo - Misija", text: "Omogućavamo preduzećima da rastu razvijajući ljude da imaju pozitivan način razmišljanja, unapređene veštine i poboljšan uticaj." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              style={{ padding: '30px', borderLeft: '1px solid rgba(255,180,120,0.3)', background: 'rgba(255,255,255,0.02)' }}
            >
              <h4 style={{ fontSize: '12px', letterSpacing: '2px', color: '#666', marginBottom: '15px' }}>{item.title}</h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* VALUES */}
        <section style={{ marginBottom: '120px' }}>
          <h3 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '60px' }}>Ko smo mi i kako se ponašamo - Naše vrednosti</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <p style={{ color: 'rgba(255, 180, 120, 0.8)', fontWeight: 'bold' }}>Mi smo...</p>
              <ValueItem title="Autentični" desc="Iskreni smo, empatični i aktivno gradimo poverenje. Otvoreni smo i delimo svoje ranjivosti." />
              <ValueItem title="Pokretači (Driven)" desc="Završavamo stvari. Lično doprinosimo i aktivno angažujemo druge. Upravljamo i isporučujemo rezultate." />
              <ValueItem title="Volimo ono što radimo" desc="Volimo svoj posao i to pokazujemo!" />
            </div>
            <div>
              <p style={{ color: 'rgba(255, 180, 120, 0.8)', fontWeight: 'bold' }}>Verujemo u...</p>
              <ValueItem title="Istraživanje" desc="Dosledno smo radoznali, sa mentalitetom rasta. Napredujemo u promenama i imamo hrabrosti da zakoračimo u nepoznato." />
              <ValueItem title="Buđenje heroja" desc="Mi smo skromni izazivači. Otkrivamo i prepoznajemo potencijal u drugima. Omogućavamo ljudima da napreduju." />
              <ValueItem title="Vrednovanje različitosti" desc="Inkluzivni smo. Uživamo i obogaćeni smo različitošću. Pokazujemo poštovanje prema svima." />
            </div>
          </div>
        </section>

        {/* TIM EKSPERATA */}
        <motion.section style={{ marginBottom: '120px', background: 'rgba(255,180,120,0.05)', padding: '60px', borderRadius: '2px' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '30px' }}>Naš tim eksperata</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '17px' }}>
            Mi smo Hansen Beck. Osnovani od strane strastvenih poslovnih eksperata u 25 zemalja na 5 kontinenata sa preko 400 godina kolektivnog poslovnog iskustva.
            <br /><br />
            Kao globalni provajder poslovnih obuka, nismo se spojili slučajno. Okupili smo se zbog zajedničke strasti prema ličnom i profesionalnom razvoju. Naša svrha omogućavanja ljudima da postanu bolje verzije sebe proizašla je iz godina zajedničkog iskustva.
          </p>
        </motion.section>

        {/* IME - ISTORIJA */}
        <section style={{ paddingBottom: '100px' }}>
          <h4 style={{ color: '#666', letterSpacing: '3px', marginBottom: '20px' }}>KAKO SMO ODABRALI IME</h4>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, fontSize: '15px', lineHeight: '1.8', color: '#aaa' }}>
              Početkom 20. veka trka je bila u toku – ko će prvi stići do Južnog pola. Roald Amundsen je 14. decembra 1911. podigao zastavu, ali mi smo izabrali da odamo počast dvojici zaboravljenih ljudi – članovima posade i pilotima na ledu. Bez njihove stručnosti u navigaciji opasnim vodama, tim ne bi pobedio. Ta dva čoveka u pozadini fotografije bili su <strong>Ludvig Hansen i Andreas Beck</strong>.
              <br /><br />
              Kao i oni, mi imamo stručnost da vas opremimo za vaše uspešno putovanje. Zajedno vam omogućavamo da istražite svoje snage, savladate veštine i isporučite opipljive rezultate.
            </div>
            <div style={{ width: '300px', height: '375px', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
              <img src="/aboutus.jpg" alt="Hansen Beck Crew" style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Pomoćna komponenta za vrednosti
const ValueItem = ({ title, desc }) => (
  <div style={{ margin: '25px 0' }}>
    <h5 style={{ fontSize: '18px', marginBottom: '5px', color: '#fff' }}>{title}</h5>
    <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

export default AboutUs;