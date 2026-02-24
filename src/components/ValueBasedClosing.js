import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ValueBasedClosing = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const API_BASE_URL = process.env.REACT_APP_API_URL;

    const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    telefon: '',
    kompanija: '',
    trening: 'Zatvaranje prodaje zasnovano na vrednosti',
    datum: '',
    vreme: '',
    poruka: ''
});

const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/training/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Prijava uspešno poslata!");
        } else {
            alert("Greška prilikom slanja. Pokušajte ponovo.");
        }
    } catch (error) {
        console.error("Greška:", error);
    }
};

    const inputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    padding: '15px 10px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s',
    appearance: 'none', // Uklanja sistemsku strelicu na nekim mestima
    cursor: 'pointer'
};

    return (
        <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            
            {/* HERO SEKCIJA SA NOVOM EKLIPSOM */}
            <section style={{ 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 10%',
                position: 'relative',
                overflow: 'hidden'
            }}>
                
                {/* KOMPLEKSNA EKLIPSA (Preneta iz SuccessLine) */}
                <motion.div 
                    style={{
                        position: 'relative',
                        width: '350px',
                        height: '350px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '-20px',
                        zIndex: 5
                    }}
                >
                    {/* Sjaj u pozadini */}
                    <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
                    {/* Horizontalni zrak */}
                    <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 200, 150, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    {/* Prstenovi */}
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255,200,150,0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255,200,150,0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    {/* Glavna bela tačka (Sunce) */}
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 200, 150, 0.9)' }} />
                    {/* Crni krug (Zemlja/Senka) */}
                    <div style={{ position: 'relative', width: '280px', height: '280px', backgroundColor: '#050505', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 15px rgba(0,0,0,1)' }} />
                </motion.div>

                {/* TEKST HERO SEKCIJE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ zIndex: 10 }}
                >
                    <h4 style={{ color: 'rgba(255,180,120,0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>
                        Intenzivna jednodnevna radionica
                    </h4>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', lineHeight: '1.1', maxWidth: '900px', marginBottom: '30px' }}>
                        Zatvaranje prodaje <br /> zasnovano na vrednosti.
                    </h1>
                    <p style={{ fontSize: '18px', color: '#888', maxWidth: '700px', margin: '0 auto', fontStyle: 'italic', lineHeight: '1.6' }}>
                        "Skupo je!" – Da li je ovo kraj pregovora ili početak prodaje?
                    </p>
                </motion.div>
            </section>

            {/* MARKO I JANA SEKCIJA */}
            <section style={{ padding: '100px 10%', display: 'grid', gridTemplateColumns: window.innerWidth > 992 ? '1fr 1fr' : '1fr', gap: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '40px', color: 'rgba(255,180,120,1)' }}>Da li (pre)poznajete Marka i Janu?</h2>
                    <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>
                        <strong>Zamislite Marka.</strong> Poznaje klijenta, poznaje svoj proizvod, pripremio je fantastičnu ponudu. Na sastanku prikazuje sve karakteristike i pokazuje kako će njegovo rešenje doneti konkretne benefite. Svi klimaju glavom. Ali onda, na red dolazi cena. Direktor nabavke se namršti i kaže: „Sve je to lepo, Marko, ali vaša konkurencija nudi sličnu stvar za 20% manje. Imate li prostora za korekciju?“ U tom trenutku, Markov um radi prekovremeno, hvata se u mrežu izgovora i pravdanja, poseže za popustom i rizikuje da izgubi i profit i poziciju strateškog partnera.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <p style={{ color: '#aaa', lineHeight: '1.8', marginTop: '83px' }}>
                        <strong>A sada, zamislite Janu.</strong> Jana je majstor u uspostavljanju kontakta i prezentovanju rešenja. Njen sastanak teče odlično; klijent oduševljeno prati svaku reč i slaže se da njena ponuda rešava probleme. U vazduhu se oseća da je posao završen, da samo treba čuti ono magično „Da!“. Ali Jana okleva. Umesto da samouvereno „zaključi“, nastavlja da priča, dodaje još detalja, očekujući da će klijent sam doneti odluku. Na kraju, klijent kaže: „Sve ovo zvuči sjajno. Razmisliću, pa ću vam se javiti.“ Nedelje prolaze. Jana šalje e-mailove, zove, ali odgovora nema.
                    </p>
                </motion.div>
            </section>

            {/* MANIFEST SEKCIJA */}
            <section style={{ backgroundColor: '#0a0a0a', padding: '100px 10%', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '30px' }}>
                        Ova intenzivna jednodnevna radionica menja igru. Namenjena je svakom prodajnom profesionalcu koji se prepoznaje u ovim scenarijima. Donosimo potpuno drugačiju perspektivu i konkretne alate za transformaciju vašeg pristupa završnici prodajnog procesa. Umesto oklevanja, straha ili defanzive, fokusiramo se na razumevanje psihologije donošenja odluka, suštinski uticaj na klijenta i jasnu komunikaciju vrednosti.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#aaa', marginBottom: '40px' }}>
                        Prestanite da pregovarate protiv sebe i gubite poslove na „Razmisliću“ ili Skupo je“. Hrabro i jasno naplatite pravu vrednost svog rada i samouvereno vodite klijenta do zaključenja posla. Budite prodavac od koga klijenti žele da kupe – ne zato što spuštate cenu ili ih agresivno “jurite”, već zato što jedini razumete koliko njihov uspeh zaista vredi i što ste proces zaključenja učinili prirodnim i neizbežnim izborom.
                    </p>
                    <h3 style={{ marginTop: '50px', fontSize: '22px', fontWeight: '800', color: 'rgba(255,180,120,1)' }}>
                        Jer, u svetu Prodaje zasnovane na vrednosti, zatvaranje prodaje ne tiče se iznosa koji klijent plaća, već prepoznavanja vrednosti koju dobija.
                    </h3>
                </div>
            </section>

            {/* ŠTA ČINI RADIONICU VREDNOM */}
            <section style={{ padding: '100px 10%' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '60px' }}>Šta čini ovu radionicu vrednom?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {[
                        { t: "Faza istraživanja", d: "Majstorstvo otkrivanja stvarnih potreba; preusmeravanje fokusa sa “šta vam treba” na “šta se dešava ako (ne) rešite problem“." },
                        { t: "Pretvaranje cene u investiciju", d: "Prevođenje karakteristika u merljive benefite za klijenta; kvantifikaciju vrednosti čime cena postaje investicija, a vi partner od poverenja." },
                        { t: "Prevazilaženje prigovora", d: "Strategija za samouvereno rešavanje prigovora koji se pojave u fazi zatvaranja prodaje." },
                        { t: "Etičko vođenje", d: "Alati za prelazak iz faze prezentacije u fazu zatvaranja, kao i principi etičkog vođenja klijenta do odluke." },
                        { t: "Taktičko zatvaranje", d: "Umeće prepoznavanja signala spremnosti kod klijenta – trenutka kada je klijent spreman za odluku – prirodno vođenje razgovora do zaključenja, bez pritiska ili neprijatnosti." },
                        { t: "Dobiti „Da“ alat", d: "Rezultat? Više zatvorenih poslova, stabilniji prihodi, veći profit, jača pozicija na tržištu, veće samopouzdanje." }
                    ].map((item, i) => (
                        <div key={i} style={{ borderLeft: '1px solid rgba(255,180,120,0.3)', paddingLeft: '20px' }}>
                            <h4 style={{ color: 'rgba(255,180,120,1)', marginBottom: '10px', fontSize: '18px' }}>{item.t}</h4>
                            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRENER SEKCIJA */}
            <section style={{ padding: '100px 10%', backgroundColor: '#0a0a0a' }}>
                <div style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', gap: '50px', alignItems: 'flex-start' }}>
                    {/* VIZUELNI DEO SA OKVIROM (Success Line stil) */}
                    <div style={{ position: 'relative', width: '280px', height: '350px', flexShrink: 0, margin: window.innerWidth <= 992 ? '0 auto 40px auto' : '0' }}>
                        {/* Narandžasti okvir u pozadini */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '15px', 
                            left: '-15px', 
                            width: '100%', 
                            height: '100%', 
                            border: '1px solid rgba(255, 180, 120, 0.4)', 
                            zIndex: 0 
                        }} />
                        
                        {/* Slika trenera */}
                        <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            backgroundColor: '#111', 
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 1,
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <img 
                                src="/ivana.jpg" 
                                alt="Ivana Bojović" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
                            />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: 'rgba(255,180,120,1)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '10px', marginBottom: '10px' }}>Ko je tu za Vas?</h4>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '5px' }}>Ivana Bojović</h2>
                        <p style={{ color: '#666', marginBottom: '20px' }}>Biznis trener</p>
                        <div style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', maxWidth: '800px' }}>
                            <p style={{ marginBottom: '15px' }}>
                                Magistar nauka internacionalnog menadžmenta (Beograd, London). Počev od 2003. godine skupljala je svoja iskustva kao šef prodaje mt:s u Telekom-u Srbija, uz učešće u različitim projektima kao što su uspostavljanje prodajnih kanala m:tel-a u Crnoj Gori ili kontakt centra Univerzijade u Beogradu. 2008.godine uspostavlha i rukovodi trening centrom u Telekom-u Srbija.
                            </p>
                            <p style={{ marginBottom: '15px' }}>
                                Interno je sertifikovan trener za usluge mobilne i fiksne telefonije. 2010. godine prelazi u Orion telekom i bavi se prodajom, brigom o korisnicima, upravljanjem kvalitetom menadžmenta, treninzima, a zatim preuzima odgovornost izvršnog direktora operacija.
                            </p>
                            <p style={{ marginBottom: '15px' }}>
                                Nakon što se pridružila SBB-u i timu United Group-e, u narednih 9 godina uspostavlja i razvija trening centre i UG Akademiju kao krovni strateški i operativni hub, podržavajući poslovne napore grupe na 7 različitih telko tržišta. Ivana je organizovala i isporučila mnogobrojne biznis treninge. U decembru 2024, Ivana se pridružila Hansen Beck timu kao biznis trener.
                            </p>
                            <p style={{ color: '#fff', fontWeight: '700', marginTop: '25px', marginBottom: '10px' }}>
                                Ivana je licencirani trener komunikacionih veština, specijalizovana u sledećim oblastima:
                            </p>
                            <ul style={{ paddingLeft: '18px', color: '#888' }}>
                                <li>Prodajna komunikacija.</li>
                                <li>Prezentacione veštine.</li>
                                <li>Vođenje ljudi.</li>
                                <li>Customer journey setup.</li>
                                <li>Upravljanje procesima.</li>
                                <li>Transformacija kompanijske kulture u cilju unapređenja korisničkog iskustva.</li>
                                <li>Korporativna edukacija i alati za razvoj treninga.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* KONTAKT FORMA */}
<section style={{ maxWidth: '1000px', margin: '100px auto', padding: '0 20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>Rezervišite Vaše mesto.</h2>
        <p style={{ color: '#666' }}>Hajde da pričamo o postizanju Vaših ciljeva! Odgovorićemo na Vaš upit u roku od 24 sata.</p>
    </div>

    <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '30px' }}>
        <input 
            name="ime"
            value={formData.ime}
            onChange={handleInputChange}
            placeholder="Ime" 
            style={inputStyle} 
            required 
        />
        <input 
            name="prezime"
            value={formData.prezime}
            onChange={handleInputChange}
            placeholder="Prezime" 
            style={inputStyle} 
            required 
        />
        <input 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail" 
            type="email" 
            style={inputStyle} 
            required 
        />
        <input 
            name="telefon"
            value={formData.telefon}
            onChange={handleInputChange}
            placeholder="Broj telefon" 
            style={inputStyle} 
            required 
        />
        <input 
            name="kompanija"
            value={formData.kompanija}
            onChange={handleInputChange}
            placeholder="Naziv kompanije" 
            style={inputStyle} 
        />

        {/* Naziv treninga je fiksiran */}
        <input 
            name="trening"
            value={formData.trening}
            placeholder="Naziv Treninga" 
            style={{...inputStyle, opacity: 0.7}} 
            readOnly 
        />

        {/* IZBOR DATUMA */}
        <select 
            name="datum"
            value={formData.datum}
            onChange={handleInputChange}
            style={inputStyle} 
            required
        >
            <option value="" disabled>Izaberite datum</option>
            <option value="14. maj">14. maj</option>
            <option value="23. jun">23. jun</option>
        </select>

        {/* IZBOR VREMENA */}
        <select 
            name="vreme"
            value={formData.vreme}
            onChange={handleInputChange}
            style={inputStyle} 
            required
        >
            <option value="" disabled>Izaberite vreme</option>
            <option value="09:00 - 17:00">09:00 - 17:00</option>
        </select>

        <textarea 
            name="poruka"
            value={formData.poruka}
            onChange={handleInputChange}
            placeholder="Vaš komentar" 
            style={{ ...inputStyle, gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1', height: '120px' }} 
        />

        <button type="submit" style={{ 
            gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1', 
            padding: '20px', 
            background: 'rgba(255,180,120,1)', 
            color: '#000', 
            fontWeight: '900', 
            border: 'none', 
            cursor: 'pointer', 
            marginTop: '20px',
            letterSpacing: '2px'
        }}>
            POŠALJI PRIJAVU
        </button>
    </form>
</section>

            {/* FOOTER SHORT */}
            <footer style={{ padding: '50px 10%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '12px', color: '#444' }}>
                © 2026 HANSEN BECK SRBIJA. SVA PRAVA ZADRŽANA.
            </footer>
        </div>
    );
};

export default ValueBasedClosing;