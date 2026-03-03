import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HBInput, HBTextArea, HBSelect, HBButton } from '../components/UIComponents';

const PerceptionBasedConversation = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const API_BASE_URL = process.env.REACT_APP_API_URL;
    const formRef = React.useRef(null);
        
    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [formData, setFormData] = useState({
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        kompanija: '',
        trening: 'Razgovor zasnovan na percepciji',
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

    return (
        <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh' }}>
            
            <style>
                {`
                    select option {
                        background-color: #111 !important;
                        color: #fff !important;
                    }
                    select option:disabled {
                        color: #666 !important;
                    }
                    input::placeholder, textarea::placeholder {
                        color: #555;
                    }
                `}
            </style>
            
           {/* HERO SEKCIJA - UVEĆANA EKLIPSA I PREKLAPANJE TEKSTA */}
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
    {/* KONTEJNER ZA EKLIPSU (Uvećan na 500px) */}
    <motion.div 
        style={{
            position: 'relative',
            width: '500px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '-20px',
            zIndex: 5
        }}
    >
        {/* Pozadinski Glow */}
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.15) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(60px)', zIndex: 1 }} />
        
        {/* Horizontalna linija */}
        <div style={{ position: 'absolute', width: '300px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-100px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        
        {/* Svetlosni prstenovi (Uvećani na 404px) */}
        <div style={{ position: 'absolute', width: '404px', height: '404px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
        <div style={{ position: 'absolute', width: '404px', height: '404px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
        
        {/* Diamond/Sparkle tačka (Pomerena na novu ivicu) */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '45px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.9)' }} />

        {/* CENTRALNI CRNI DISK (Uvećan na 400px, bez logoa) */}
        <div style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            backgroundColor: '#000',
            borderRadius: '50%',
            zIndex: 5,
            boxShadow: '0 0 20px rgba(0,0,0,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Logo je uklonjen radi minimalističkog overlap efekta */}
        </div>                
    </motion.div>

    {/* TEKST SEKCIJE (Podignut preko eklipse sa marginTop: -220px) */}
    <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        style={{ 
            zIndex: 10, 
            marginTop: '-160px', 
            position: 'relative' 
        }}
    >
        <h4 style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>
            Intenzivna jednodnevna radionica
        </h4>
        <h1 style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: '900', lineHeight: '1.1', maxWidth: '900px', marginBottom: '30px' }}>
            Razgovor zasnovan <br /> na percepciji.
        </h1>
        <p style={{ fontSize: '18px', color: '#888', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', lineHeight: '1.6' }}>
            „Ne treba nam ništa!“ – Da li je ovo kraj razgovora ili početak uticaja?
        </p>
    </motion.div>
</section>

            {/* PETAR I ANA SEKCIJA */}
            <section style={{ padding: '100px 10%', display: 'grid', gridTemplateColumns: window.innerWidth > 992 ? '1fr 1fr' : '1fr', gap: '80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '40px', color: '#fff' }}>Da li (pre)poznajete Petra i Anu?</h2>
                    <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>
                        <strong>Zamislite Petra.</strong> Petar započinje razgovor sa klijentom profesionalno. Postavlja pitanja, pažljivo sluša, pokazuje interesovanje. I onda čuje: „Ne treba nam ovo“, „Već imamo rešenje“. U tom trenutku, razgovor staje. Petar prihvata odgovor i ljubazno se povlači. Ne želi da bude napadan, da zvuči kao tipičan prodavac. Ne želi da „stvara problem koji ne postoji.“. Ipak, čini još jedan napor da „pojasni“ karakteristike i mogućnosti – koje niko nije tražio. <strong>Rezultat? Prilike nestaju pre nego što su uopšte to postale.</strong>
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <p style={{ color: '#aaa', lineHeight: '1.8', marginTop: window.innerWidth > 992 ? '83px' : '0' }}>
                        <strong>A sada, zamislite Anu.</strong> Ana odlično ulazi u razgovor, prezentuje benefite. U jednom trenutku, klijent odmahuje glavom, zahvaljuje se i kaže da ne vidi potrebu za takvim rešenjem. Da li je to apsolutna istina ili samo trenutna perspektiva klijenta? Ana razmišlja o nastavku „borbe“ i kako da promeni tu perspektivu jer zna da klijenti retko odbijaju rešenja – odbijaju razgovore koji ne dovode u pitanje njihovu trenutnu i buduću situaciju. Ana razmišlja <strong>„Šta da pitam sada?“</strong>
                    </p>
                </motion.div>
            </section>

            {/* MANIFEST SEKCIJA */}
            <section style={{ backgroundColor: '#0a0a0a', padding: '100px 10%', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff', marginBottom: '30px' }}>
                        Ova intenzivna jednodnevna radionica menja igru. Namenjena je svakom prodajnom profesionalcu koji se prepoznaje u ovim scenarijima. Donosimo potpuno drugačiju perspektivu i konkretne alate za transformaciju vašeg pristupa fazi otkrivanja potreba. Umesto čekanja na eksplicitne izjave o potrebama (što bi bilo idealno), fokusiramo se na vođenje razgovora koje stvara uvid u preoznavanje vrednosti i pre nego što se rešenje uopšte spomene.
                    </p>
                    <p 
                        onClick={scrollToForm} 
                        style={{ 
                            marginTop: '50px', 
                            fontSize: '22px', 
                            fontWeight: '800', 
                            color: '#fff', 
                            cursor: 'pointer'
                        }}
                    >
                        Prijavite se odmah!
                    </p>
                    <h3 style={{ marginTop: '50px', fontSize: '22px', fontWeight: '800', color: '#888' }}>
                        Jer, u svetu Razgovora zasnovanog na percepciji, prodaja ne počinje kada klijent izrazi potrebu, već kada mu pomognete da uvidi skriveni problem koji ne sme da ignoriše.
                        Prestanite da čekate da vam klijenti kažu da im nešto treba i gubite prilike zbog „Nemamo potrebe“. Pretvorite „Ne treba nam ništa!“ u „Ovo ne smemo da ignorišemo!”
                    </h3>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff' }}>
                        Vodite razgovore koji stvaraju uvid u vrednost pre nego što se rešenje uopšte spomene. Otkrijte klijentu skrivene neefikasnosti i rizike, pomozite mu da vidi svoju situaciju danas i sutra na potpuno nov način – bez pritiska ili konfrontacije. Budite prodavac koji ne „gura“ rešenja, već čini „nevidljivi“ problem nemogućim za ignorisanje, vodeći samouvereno prodajne razgovore baš tada kada drugi čuju „Ne“.
                    </p>
                </div>
            </section>

            {/* ŠTA ČINI RADIONICU VREDNOM */}
            <section style={{ padding: '100px 10%' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '60px' }}>Šta čini ovu radionicu vrednom?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {[
                        { t: "Majstorstvo prepoznavanja", d: "Kreiranje uvida koji pokreću kupovinu, preusmeravajući fokus sa 'šta vam treba' na 'šta gubite ako ne promenite trenutno stanje'." },
                        { t: "Otkrivanje skrivene neefikasnosti", d: "Jaz između klijentovog 'Imamo rešenje' i vašeg 'Kako vidite...?' – viđenje situacije iz potpuno nove perspektive." },
                        { t: "Vođenje diskusije sa autoritetom", d: "Razgovor kojim se ne samo prikupljaju informacije, već i oblikuje klijentova odluka, bez pritiska." },
                        { t: "Stvaranje relevantnosti i hitnosti", d: "Kontrola otpora i eventualnog pritiska na cenu pre nego što se rešenje uopšte spomene." },
                        { t: "Rezultat", d: "Više otvorenih prilika, dublji uvid kod klijenata, efikasnija priprema rešenja, jača pozicija u pregovorima, veće samopouzdanje." }
                    ].map((item, i) => (
                        <div key={i} style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '20px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '10px', fontSize: '18px' }}>{item.t}</h4>
                            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
                <p 
                    onClick={scrollToForm} 
                    style={{ 
                        marginTop: '50px', 
                        fontSize: '22px', 
                        fontWeight: '800', 
                        color: '#fff', 
                        cursor: 'pointer',
                        textAlign: 'center',
                        gridColumn: '1 / -1',
                        width: '100%'
                    }}
                >
                    Prijavite se odmah!
                </p>
            </section>

            {/* TRENER SEKCIJA */}
            <section style={{ padding: '100px 10%', backgroundColor: '#0a0a0a' }}>
                <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '60px', textAlign: 'center' }}>Ko je tu za Vas?</h2>
                <div style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', gap: '50px', alignItems: 'flex-start' }}>
                    <div style={{ position: 'relative', width: '280px', height: '350px', flexShrink: 0, margin: window.innerWidth <= 992 ? '0 auto 40px auto' : '0' }}>
                        <div style={{ 
                            position: 'absolute', 
                            top: '15px', 
                            left: '-15px', 
                            width: '100%', 
                            height: '100%', 
                            border: '1px solid rgba(255, 255, 255, 0.2)', 
                            zIndex: 0 
                        }} />
                        
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
                        <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '5px' }}>Ivana Bojović</h2>
                        <p style={{ color: '#444', marginBottom: '20px' }}>Biznis trener</p>
                        <div style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', maxWidth: '800px' }}>
                            <p style={{ marginBottom: '15px' }}>
                                Magistar nauka internacionalnog menadžmenta (Beograd, London). Počev od 2003. godine skupljala je svoja iskustva kao šef prodaje mt:s u Telekom-u Srbija, uz učešće u različitim projektima kao što su uspostavljanje prodajnih kanala m:tel-a u Crnoj Gori ili kontakt centra Univerzijade u Beogradu. 2008. godine uspostavlja i rukovodi trening centrom u Telekom-u Srbija.
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

            {/* KONTAKT FORMA - MODERNIZOVANA SA UI KOMPONENTAMA */}
<section ref={formRef} style={{ maxWidth: '1000px', margin: '100px auto', padding: '0 20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>Hajde da pričamo o postizanju Vaših ciljeva!</h2>
        <p style={{ color: '#666' }}>Popunite formular i kliknite na Pošalji da biste stupili u kontakt sa našim timom Hansen Beck u Srbiji. Odgovorićemo na Vaš upit u roku od 24 sata.</p>
    </div>

    <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <HBInput 
            name="ime" 
            placeholder="Ime" 
            value={formData.ime} 
            onChange={handleInputChange} 
            required 
        />
        <HBInput 
            name="prezime" 
            placeholder="Prezime" 
            value={formData.prezime} 
            onChange={handleInputChange} 
            required 
        />
        <HBInput 
            name="email" 
            type="email" 
            placeholder="E-Mail" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
        />
        <HBInput 
            name="telefon" 
            placeholder="Broj telefona" 
            value={formData.telefon} 
            onChange={handleInputChange} 
            required 
        />
        <HBInput 
            name="kompanija" 
            placeholder="Naziv kompanije" 
            value={formData.kompanija} 
            onChange={handleInputChange} 
        />
        <HBInput 
            name="trening" 
            value={formData.trening} 
            readOnly 
            style={{ opacity: 0.7 }} 
        />
        
        <HBSelect 
            name="datum" 
            value={formData.datum} 
            onChange={handleInputChange} 
            required
        >
            <option value="" disabled>Izaberite datum</option>
            <option value="12. Maj">12. Maj</option>
            <option value="21. Maj">21. Maj</option>
        </HBSelect>
        
        <HBSelect 
            name="vreme" 
            value={formData.vreme} 
            onChange={handleInputChange} 
            required
        >
            <option value="" disabled>Izaberite vreme</option>
            <option value="09:00 - 17:00">09:00 - 17:00</option>
        </HBSelect>

        <HBTextArea 
            name="poruka" 
            placeholder="Vaš komentar" 
            value={formData.poruka} 
            onChange={handleInputChange} 
            style={{ gridColumn: 'span 2' }} 
        />

        <HBButton type="submit" style={{ gridColumn: 'span 2' }}>
            POŠALJI PRIJAVU
        </HBButton>
    </form>
</section>

            <footer style={{ padding: '50px 10%', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '12px', color: '#444' }}>
                © 2026 HANSEN BECK SRBIJA. SVA PRAVA ZADRŽANA.
            </footer>
        </div>
    );
};

export default PerceptionBasedConversation;