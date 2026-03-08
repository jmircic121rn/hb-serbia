import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HBInput, HBTextArea, HBSelect, HBButton } from '../components/UIComponents';

const SuccessLine = () => {
    const API_BASE_URL = process.env.REACT_APP_API_URL;
    const formRef = useRef(null);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [formData, setFormData] = useState({
        ime: '',
        prezime: '',
        email: '',
        telefon: '',
        kompanija: '',
        trening: 'Moć uticaja: Tanka linija uspeha',
        datum: '14. i 15. april 2026.',
        kod: '',
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
        <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <style>
                {`
                    select option { background-color: #111 !important; color: #fff !important; }
                    input::placeholder, textarea::placeholder { color: #555; }
                `}
            </style>

            {/* HERO SEKCIJA - VELIKA EKLIPSA 500px */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 10%', position: 'relative', overflow: 'hidden' }}>
                <motion.div style={{ position: 'relative', width: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-20px', zIndex: 5 }}>
                    <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.15) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(60px)', zIndex: 1 }} />
                    <div style={{ position: 'absolute', width: '300px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-100px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', width: '404px', height: '404px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <div style={{ position: 'absolute', width: '404px', height: '404px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '45px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.9)' }} />
                    <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: '#000', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 20px rgba(0,0,0,1)' }} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 10, marginTop: '-160px', position: 'relative' }}>
                    <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>Specijalni Masterclass</h4>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: '900', lineHeight: '1.0', maxWidth: '1000px', marginBottom: '30px', letterSpacing: '-2px' }}>
                        TANKA LINIJA <br /> <span style={{ color: '#222' }}>USPEHA</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#888', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', lineHeight: '1.6' }}>Od dobrog do nezaboravnog javnog nastupa. Moć uticaja.</p>
                </motion.div>
            </section>

            {/* STORYTELLING SEKCIJA */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', color: '#ccc', lineHeight: '1.8', fontSize: '17px' }}>
                    <p>Zamislite raskošnu koncertnu dvoranu. Simfonijski orkestar se naštimava, a zatim besprekorno izvedi delo. Svaka nota je precizna, svaki segment savršeno sinhronizovan. To je prelepo, dirljivo i tehnički briljantno – izvedba koja zaslužuje gromoglasan aplauz. Ovo je slično „dobrom“ govoru. Govornik zna strukturu, jasno iznosi poente i angažuje publiku. Razume osnove i dobro ih primenjuje.</p>
                    <p style={{ color: '#fff', fontStyle: 'italic', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '20px' }}>A sada, zamislite slabo osvetljen džez klub. Saksofonista se sprema za nastup, atmosfera je gusta od iščekivanja. Zna melodiju, akorde, ali nešto više je u igri. Zatvara oči, a prsti plešu, improvizujući solo koji je istovremeno tehnički blistav i duboko emotivan. Oseća energiju prostora, odgovara na nju, transformiše je. On više ne svira samo note; on priča priču, stvara iskustvo koje odjekuje dugo nakon što poslednji akord izbledi.</p>
                    <p>Ovo je „džez“ u javnom nastupu – retka sposobnost da se poveže, inspiriše i transformiše u trenutku. I simfonijski muzičar i džez saksofonista poseduju veštinu, tehniku i znanje. Znaju kako da izazovu aplauz. Ali džez muzičar poseduje nešto više: sposobnost da se adaptira, improvizuje i duboko poveže. Slično tome, mnogi mogu da održe kompetentan govor, ali malo njih može da učini da njihov glas zaista odjekne, inspiriše na akciju i transformiše perspektive.</p>
                    <p>Zato ova radionica nije za svakoga. Rezervisana je za vizionare i lidere sa strašću za izvrsnošću, sa iskustvom u vođenju, nastupanju i donošenju odluka. Za one koji znaju da autoritet ne dolazi iz titule, već iz načina na koji utičemo na mišljenje, inspirišemo rast, oblikujemo odluke.</p>
                

                    <div style={{ textAlign: 'center', marginTop: '80px', padding: '60px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: '22px', color: '#fff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', fontWeight: '600' }}>
                            Javni nastup nije forma. On je povod.<br />
                            <span style={{ color: '#666', fontWeight: '300', fontSize: '18px' }}>Ako ne pokrene misao, pitanje ili promenu, nije vredan pažnje.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ŠTA ČINI RADIONICU VREDNOM */}
<section style={{ padding: '120px 0', backgroundColor: '#080808', width: '100%' }}>
    <div style={{ padding: '0 10%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
            fontSize: '32px', 
            fontWeight: '900', 
            marginBottom: '60px', 
            textAlign: 'center' 
        }}>
            Šta čini Tanku liniju uspeha izuzetnom?
        </h2>

        {/* Grid 2x2 */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
            gap: '60px 40px',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            {[
                { t: "Reči koje pokreću, glas koji traje", d: "Da li se vaše reči samo čuju ili i odjekuju? Zamislite da vaš glas pokreće promene i transformiše perspektive. Prava moć je u tome da vaša poruka inspiriše, motiviše i ostavlja traga koji menja budućnost." },
                { t: "Prednost", d: "Naš mentorski tim spaja iskustvo javnog nastupa, komunikacije i scenske umetnosti. Pružićemo vam alate i tehnike koje odmah možete primeniti, uz podršku i povratne informacije prilagođene vašim ciljevima." },
                { t: "Vrednost", d: "Alati, preporuke i razmena iskustava koje dobijate pomažu vam da ostvarite veći uticaj i dublje veze – i u poslu i u svakodnevnom životu. Podržaćemo vas da ovladate tehnikama koje jačaju samopouzdanje i omogućavaju da uživate u svakom nastupu." },
                { t: "Rezultat", d: "Vaš javni nastup prelazi iz „dobrog” u „maestralan“. Povećavate samopouzdanje i kontrolu pred publikom, ostvarujete ciljeve i inspirišete druge svojom komunikacijom." }
            ].map((item, i) => (
                <div key={i} style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '20px' }}>
                    <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>{item.t}</h4>
                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{item.d}</p>
                </div>
            ))}
        </div>
    </div>

    {/* CENTRIRANO DUGME PO SREDINI CELOG EKRANA */}
    <div style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '80px' 
    }}>
        <HBButton 
            onClick={scrollToForm} 
            style={{ 
                width: 'auto', 
                padding: '18px 60px',
                minWidth: '250px' 
            }}
        >
            Prijavite se odmah!
        </HBButton>
    </div>
</section>

            {/* POZIVNICA SEKCIJA */}
<section style={{ maxWidth: '850px', margin: '0 auto', padding: '100px 20px' }}>
    <h3 style={{ 
        color: '#fff', 
        letterSpacing: '4px', 
        textTransform: 'uppercase', 
        fontSize: '14px', 
        marginBottom: '60px', 
        textAlign: 'center',
        opacity: 0.8
    }}>
        Ovo je pozivnica za:
    </h3>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {[
            { 
                bold: "Brušenje vaših jedinstvenih snaga u javnom nastupu.", 
                text: "Pomoći ćemo vam da identifikujete ono što već radite dobro i to podignete na viši nivo." 
            },
            { 
                bold: "Čitanje i razumevanje publike.", 
                text: "Osnažićemo vas da efikasnije prepoznajete neverbalne signale i da se trenutno prilagodite." 
            },
            { 
                bold: "Ovladavanje tehnikama", 
                text: "koje vam omogućavaju da budete svoji, a istovremeno maksimalno uticajni." 
            }
        ].map((item, idx) => (
            <div key={idx} style={{ 
                display: 'flex', 
                gap: '20px', 
                alignItems: 'flex-start',
                lineHeight: '1.6' 
            }}>
                {/* Custom Marker umesto obične tačke */}
                <span style={{ color: '#fff', fontSize: '18px', marginTop: '-2px' }}>—</span>
                <p style={{ margin: 0, fontSize: '17px', color: '#aaa' }}>
                    <strong style={{ color: '#fff', fontWeight: '700' }}>{item.bold}</strong> {item.text}
                </p>
            </div>
        ))}
    </div>

    {/* DATUM & LOKACIJA CARD */}
    <div style={{ 
        marginTop: '80px', 
        padding: '40px', 
        background: 'linear-gradient(145deg, #0a0a0a 0%, #111 100%)', 
        border: '1px solid #222',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
    }}>
        {/* Suptilni pozadinski glow za akcenat na bitne informacije */}
        <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <p style={{ 
            margin: '0 0 15px 0', 
            fontSize: '11px', 
            color: '#666', 
            letterSpacing: '3px', 
            textTransform: 'uppercase',
            position: 'relative'
        }}>
            Termin i lokacija masterclass-a
        </p>
        <p style={{ 
            fontSize: '22px', 
            fontWeight: '900', 
            color: '#fff', 
            margin: 0,
            position: 'relative',
            letterSpacing: '-0.5px'
        }}>
            14. i 15. april 2026. <span style={{ color: '#444', margin: '0 10px', fontWeight: '300' }}>|</span> Ložionica, Beograd <span style={{ color: '#444', margin: '0 10px', fontWeight: '300' }}>|</span> 1000€ + PDV
        </p>
    </div>
</section>

            {/* KO JE TU ZA VAS SEKCIJA */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
                <h2 style={{ fontSize: '42px', fontWeight: '900', textAlign: 'center', marginBottom: '100px' }}>Ko je tu za Vas?</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    <MentorCard
                        name="Vesna Damjanić"
                        image="/vesnadamjanic.jpeg"
                        title="Novinarka"
                        desc={
                            <>
                                <p style={{ marginBottom: '15px' }}>Vesna Damjanić je istaknuta novinarka i glavna i odgovorna urednica Bloomberg Adria televizije, sa više od dve decenije iskustva u medijima i komunikacijama. Specijalizovana za ekonomske, finansijske i biznis teme, Vesna je izgradila karijeru u informativnom programu Radio-televizije Srbije, gde je 14 godina uređivala i vodila brojne emisije, žive programe i intervjue sa ključnim domaćim i svetskim akterima ekonomskih i političkih tokova. Izveštavala je sa najvažnijih domaćih, regionalnih, ali i međunarodnih događaja, uključujući Davos Biznis Forum, i kreirala brojne emisije i reportaže o ekonomskim trendovima u Evropi i SAD-u.</p>
                                <p style={{ marginBottom: '15px' }}>Vesna je diplomirala novinarstvo na Fakultetu političkih nauka u Beogradu. Specijalizovala je elektronsko novinarstvo i ekonomsko izveštavanje na programima edukacije BBC-ja i Rojtersa u Londonu i Berlinu.</p>
                                <p>Trenutno pohađa master studije Executive MBA na Rome Business School, usmerene na razvoju strateškog liderstva i menadžmenta. Završila je i trening Inspirativnog liderstva u organizaciji Hansen beck-a a aktivno se usavršava za liderske pozicije u medijima.</p>
                            </>
                        }
                    />

                    {/* NIKOLA MIRČIĆ */}
                    <MentorCard
                        name="Nikola Mirčić"
                        image="/nikolamircic.jpeg"
                        side="right"
                        title="Biznis trener"
                        desc={
                            <>
                                <p style={{ marginBottom: '10px' }}><strong>Master of Science in Global Human Resource Management, University of Liverpool.</strong></p>
                                <p style={{ marginBottom: '15px' }}>Suosnivač globalne kompanije za trening i razvoj zaposlenih Hansen Beck. Aktivan Hansen Beck trener. Počevši od 1993. godine, Nikola je skupljao svoja iskustva kroz saradnju sa različitim IT kompanijama. Od 1998. do 2001. radio je kao sertifikovani Microsoft trener za infrastrukturna rešenja. U martu 2001. je postao deo Microsoft tima u Srbiji, sa zadatkom edukacije lokalnog tržišta o novim tehnologijama. U julu 2002. postao je jedan od prvih zaposlenih u novo-otvorenoj firmi Microsoft Srbija. Tokom sledećih 7 godina vodio je prodaju u segmentu malih i srednjih preduzeća, razvijajući i vodeći tim od 15 ljudi.</p>
                                <p style={{ marginBottom: '15px' }}>Poslednju godinu u Microsoftu proveo je u Ukrajini na poziciji menadžera za borbu protiv softverske piraterije. Od januara 2010. godine Nikola se pridružio kompaniji Gustav Kaeser Training International otvaranjem franšize za teritoriju Srbije i Crne Gore. Od 2019. Nikola je suosnivač internacionalne treninge kompanije Hansen Beck GmbH. Od početka 2010 Nikola je licenciran trener komunikacionih veština, specijalizovan u sledećim oblastima:</p>
                                <ul style={{ paddingLeft: '18px', color: '#888', listStyleType: 'square' }}>
                                    <li>Komunikacija kao alat: Navesti druge na akciju!</li>
                                    <li>Uticaj kao preduslov za postizanje natprosečnih uspeha.</li>
                                    <li>Razvoj i transformacija organizacione kulture.</li>
                                    <li>Razvoj i vođenje timova visokih performansi.</li>
                                    <li>Prodaja rešenja.</li>
                                    <li>Veština pripreme i vođenja uspešnih pregovora.</li>
                                    <li>Držanje uverljivih prezentacija.</li>
                                    <li>Upravljanje projektima.</li>
                                    <li>Insights Discovery analiza ličnih preferenci.</li>
                                </ul>
                            </>
                        }
                    />
                    
                    {/* PLACEHOLDER GOST IZNENAĐENJA */}
                    <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px dashed #222' }}>
                        <div style={{ width: '280px', height: '350px', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', color: '#111' }}>?</div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '28px', color: '#333' }}>Specijalni gost iznenađenja</h3>
                            <p style={{ color: '#444' }}>Otkrivamo uskoro...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PORUKA TIMA I FORMA */}
            <section style={{ textAlign: 'center', padding: '100px 20px', color: '#888' }}>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', fontStyle: 'italic' }}>„Dobrodošli na putovanje na kojem kombinujemo stručnost, autentičnost i emocionalnu inteligenciju. Mi ne težimo da stvorimo još jednog “savršenog” govornika, već da oslobodimo Vaš jedinstveni potencijal!“</p>
                <p style={{ marginTop: '20px', fontWeight: '900', color: '#fff' }}>Hansen Beck Tim</p>
            </section>

            <section ref={formRef} style={{ maxWidth: '1000px', margin: '60px auto 100px', padding: '60px 40px', background: '#080808', border: '1px solid #111' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>Rezervišite Vaše mesto.</h2>
                    <p style={{ color: '#666' }}>Popunite formular i kliknite na pošalji. Kontakt: 064 2789283.</p>
                </div>

                <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <HBInput name="ime" placeholder="Ime" value={formData.ime} onChange={handleInputChange} required />
                    <HBInput name="prezime" placeholder="Prezime" value={formData.prezime} onChange={handleInputChange} required />
                    <HBInput name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} required />
                    <HBInput name="telefon" placeholder="Broj telefona" value={formData.telefon} onChange={handleInputChange} required />
                    <HBInput name="kompanija" placeholder="Naziv kompanije" value={formData.kompanija} onChange={handleInputChange} />
                    <HBInput name="kod" placeholder="Kod sa vizit karte (opciono)" value={formData.kod} onChange={handleInputChange} />
                    
                    <HBSelect name="datum" value={formData.datum} onChange={handleInputChange} required>
                        <option value="14. i 15. april 2026.">14. i 15. april 2026. (Ložionica)</option>
                    </HBSelect>
                    
                    <HBInput name="trening" value={formData.trening} readOnly style={{ opacity: 0.6 }} />

                    <HBTextArea name="poruka" placeholder="Vaša poruka ili očekivanja od radionice" value={formData.poruka} onChange={handleInputChange} style={{ gridColumn: 'span 2' }} />
                    <HBButton type="submit" style={{ gridColumn: 'span 2' }}>Pošalji prijavu</HBButton>
                </form>
            </section>

            <footer style={{ padding: '50px 10%', textAlign: 'center', fontSize: '11px', color: '#333', letterSpacing: '2px' }}>
                © 2026 HANSEN BECK SRBIJA. SVA PRAVA ZADRŽANA.
            </footer>
        </div>
    );
};

// POMOĆNA KOMPONENTA ZA MENTORE
const MentorCard = ({ name, title, desc, image, side = 'left' }) => (
    <div style={{ display: 'flex', flexDirection: side === 'left' ? 'row' : 'row-reverse', alignItems: 'start', gap: '60px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: '320px', height: '420px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: '15px', left: side === 'left' ? '-15px' : '15px', width: '100%', height: '100%', border: '1px solid rgba(255, 255, 255, 0.1)', zIndex: 0 }} />
            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1, filter: 'grayscale(10%)' }} />
        </div>
        <div style={{ flex: 1, minWidth: '300px', textAlign: side === 'left' ? 'left' : 'right' }}>
            <h3 style={{ fontSize: '32px', margin: '0', fontWeight: '900' }}>{name}</h3>
            <h4 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', margin: '10px 0 25px 0' }}>{title}</h4>
            <p style={{ color: '#888', lineHeight: '1.8', fontSize: '15px', fontWeight: '300' }}>{desc}</p>
        </div>
    </div>
);

export default SuccessLine;