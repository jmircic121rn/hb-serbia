export const mockQuestions = [
  {
    id: 1,
    pillarId: 10, // Value-Driven Communication
    scenario: "Potencijalni klijent kaže da je vaša usluga preskupa u poređenju sa konkurencijom.",
    options: [
      { score: 1, text: "Odmah nudim popust kako bih osigurao ugovor." },
      { score: 3, text: "Objašnjavam naše funkcionalnosti i nadam se da će videti razliku u kvalitetu." },
      { score: 5, text: "Prebacujem fokus na njihov specifičan poslovni ROI i dugoročnu vrednost." }
    ]
  },
  {
    id: 2,
    pillarId: 2, // Emotional Intelligence
    scenario: "Shvatate da je vaš tim napravio manju grešku koju klijent još nije primetio.",
    options: [
      { score: 1, text: "Ćutim i popravljam to interno, nadajući se da nikada neće saznati." },
      { score: 3, text: "Čekam da klijent to sam pomene, a onda se izvinjavam i popravljam." },
      { score: 5, text: "Proaktivno obaveštavam klijenta, objašnjavam rešenje i gradim poverenje kroz iskrenost." }
    ]
  },
  {
    id: 3,
    pillarId: 4, // Personal Efficiency
    scenario: "Kalendar vam je pun, ali vas zove ključni klijent sa hitnim, ali ne i kritičnim zahtevom.",
    options: [
      { score: 1, text: "Ostavljam sve i radim do kasno, što vodi do stresa i sagorevanja." },
      { score: 3, text: "Pokušavam da ih uguram negde, kompromitujući kvalitet ostalih zadataka." },
      { score: 5, text: "Profesionalno upravljam očekivanjima i zakazujem termin koji odgovara obema stranama." }
    ]
  },
  {
    id: 4,
    pillarId: 5, // Conflict Resolution
    scenario: "Dva ključna člana tima imaju javnu raspravu tokom sastanka o strategiji.",
    options: [
      { score: 1, text: "Ignorišem to i prelazim na sledeći slajd kako bih izbegao neprijatnost." },
      { score: 3, text: "Govorim im da to reše privatno nakon sastanka." },
      { score: 5, text: "Olakšavam brzu, objektivnu diskusiju kako bih konflikt pretvorio u konstruktivno rešenje." }
    ]
  },
  {
    id: 5,
    pillarId: 1, // Leadership Mindset
    scenario: "Tim nije ispunio kvartalni cilj. Kako pristupate sastanku?",
    options: [
      { score: 1, text: "Fokusiram se na traženje krivca među članovima tima." },
      { score: 3, text: "Kažem da moramo raditi jače sledeći put i završavam sastanak." },
      { score: 5, text: "Analiziramo proces, preuzimam odgovornost kao lider i definišemo korektivne korake." }
    ]
  },
  {
    id: 6,
    pillarId: 8, // Adaptability
    scenario: "Uveden je novi softver za rad, ali se tim buni jer im je stari bio lakši.",
    options: [
      { score: 1, text: "Odlažem implementaciju dok se tenzije ne smire." },
      { score: 3, text: "Naređujem da moraju da ga koriste jer je to odluka firme." },
      { score: 5, text: "Organizujem radionicu gde ističem benefite za njihov svakodnevni rad i olakšavam tranziciju." }
    ]
  },
  {
    id: 7,
    pillarId: 3, // Delegation
    scenario: "Imate previše administrativnog posla koji vas sprečava da se bavite strategijom.",
    options: [
      { score: 1, text: "Nastavljam da radim sve sam jer niko to ne može uraditi kao ja." },
      { score: 3, text: "Dajem zadatke kolegama, ali ih stalno proveravam (micromanagement)." },
      { score: 5, text: "Delegiram zadatke uz jasna uputstva i ovlašćenja, fokusirajući se na rezultate." }
    ]
  },
  {
    id: 8,
    pillarId: 6, // Strategic Thinking
    scenario: "Klijent traži promenu u projektu koja će doneti kratkoročni profit, ali dugoročno naštetiti brendu.",
    options: [
      { score: 1, text: "Prihvatam odmah jer je profit trenutno najbitniji." },
      { score: 3, text: "Pokušavam da balansiram, ali na kraju popuštam klijentu." },
      { score: 5, text: "Edukujem klijenta o dugoročnim rizicima i predlažem alternativu koja čuva brend." }
    ]
  },
  {
    id: 9,
    pillarId: 7, // Coaching & Development
    scenario: "Član tima pokazuje potencijal, ali mu nedostaje samopouzdanja za veće zadatke.",
    options: [
      { score: 1, text: "Dajem mu samo jednostavne zadatke da ne bi pogrešio." },
      { score: 3, text: "Čekam da sam zatraži veću odgovornost." },
      { score: 5, text: "Dodeljujem mu mentora i postepeno povećavam izazove uz stalni feedback." }
    ]
  },
  {
    id: 10,
    pillarId: 9, // Reliability
    scenario: "Obećali ste izveštaj do petka, ali shvatate u četvrtak da nećete stići zbog nepredviđenih okolnosti.",
    options: [
      { score: 1, text: "Ne javljam ništa i šaljem izveštaj u ponedeljak." },
      { score: 3, text: "Šaljem nedovršen izveštaj samo da bih ispoštovao rok." },
      { score: 5, text: "Obaveštavam klijenta odmah, objašnjavam situaciju i dogovaram novi realan rok." }
    ]
  },
  {
    id: 11,
    pillarId: 3,
    scenario: "Član tima konstantno greši u zadatku koji mu je poveren.",
    options: [
      { score: 1, text: "Preuzimam zadatak i završavam ga sam." },
      { score: 3, text: "Opominjem ga pred celim timom kako bi se više potrudio." },
      { score: 5, text: "Sedam sa njim da analiziramo gde nastaje prekid i obezbeđujem mu dodatnu obuku." }
    ]
  },
  {
    id: 12,
    pillarId: 7,
    scenario: "Vaš najproduktivniji radnik želi da pređe na drugu poziciju unutar firme.",
    options: [
      { score: 1, text: "Blokiram transfer jer mi je neophodan na trenutnoj poziciji." },
      { score: 3, text: "Obećavam mu to u budućnosti, ali odlažem odluku unedogled." },
      { score: 5, text: "Podržavam njegov razvoj i odmah pravim plan za obuku njegove zamene." }
    ]
  },
  {
    id: 13,
    pillarId: 4,
    scenario: "Dobili ste tri hitna zadatka odjednom.",
    options: [
      { score: 1, text: "Pokušavam da radim sva tri istovremeno (multi-tasking)." },
      { score: 3, text: "Radim onaj koji mi se čini najlakšim da ga sklonim s puta." },
      { score: 5, text: "Rangiram ih po strateškom uticaju i fokusiram se na jedan po jedan." }
    ]
  },
  {
    id: 14,
    pillarId: 2,
    scenario: "Klijent je vidno iznerviran zbog kašnjenja koje nije vaša direktna krivica.",
    options: [
      { score: 1, text: "Krivim kolege ili dobavljače pred klijentom." },
      { score: 3, text: "Branim se objašnjavajući da je to viša sila." },
      { score: 5, text: "Empatično slušam, preuzimam odgovornost za rešavanje i nudim plan kompenzacije." }
    ]
  },
  {
    id: 15,
    pillarId: 5,
    scenario: "Primećujete da se u timu stvaraju klanovi koji ne komuniciraju međusobno.",
    options: [
      { score: 1, text: "Puštam ih da se sami snađu, to je deo dinamike." },
      { score: 3, text: "Organizujem običan team building (npr. piće posle posla) nadajući se najboljem." },
      { score: 5, text: "Uvodim zajedničke ciljeve koji zahtevaju saradnju oba 'klana' na projektu." }
    ]
  },
  {
    id: 16,
    pillarId: 1,
    scenario: "Dobili ste negativan feedback od nadređenog/borda.",
    options: [
      { score: 1, text: "Ulazim u defanzivu i objašnjavam zašto nisu u pravu." },
      { score: 3, text: "Prihvatam to formalno, ali ne menjam način rada." },
      { score: 5, text: "Tražim konkretne primere i pravim plan za poboljšanje performansi." }
    ]
  },
  {
    id: 17,
    pillarId: 8,
    scenario: "Tehnologija koju koristite postaje zastarela.",
    options: [
      { score: 1, text: "Ignorišem trendove dok god sistem nekako radi." },
      { score: 3, text: "Čekam da konkurencija prva implementira novu tehnologiju." },
      { score: 5, text: "Istražujem rešenja i predlažem postepenu digitalnu transformaciju." }
    ]
  },
  {
    id: 18,
    pillarId: 10,
    scenario: "Tokom prodajne prezentacije, klijent postavlja pitanje na koje ne znate odgovor.",
    options: [
      { score: 1, text: "Improvizujem i dajem polutačan odgovor kako ne bih ispao nestručan." },
      { score: 3, text: "Pokušavam da brzo promenim temu." },
      { score: 5, text: "Iskreno kažem da nemam tu informaciju trenutno i obećavam tačan odgovor u roku od par sati." }
    ]
  },
  {
    id: 19,
    pillarId: 9,
    scenario: "Član tima je prekršio strogo kompanijsko pravilo.",
    options: [
      { score: 1, text: "Gledam kroz prste jer je dobar radnik." },
      { score: 3, text: "Opominjem ga neformalno uz kafu." },
      { score: 5, text: "Primenjujem propisane mere dosledno, uz objašnjenje važnosti integriteta." }
    ]
  },
  {
    id: 20,
    pillarId: 6,
    scenario: "Imate budžet za samo jednu investiciju ove godine.",
    options: [
      { score: 1, text: "Ulažem u ono što donosi najbrži novac bez obzira na održivost." },
      { score: 3, text: "Delim budžet na male delove da svi u firmi budu donekle zadovoljni." },
      { score: 5, text: "Analiziram koja investicija najviše podržava viziju kompanije za naredne 3 godine." }
    ]
  },

  // 21-40: STRATEŠKI FOKUS I LIDERSKA ZRELOST
  {
    id: 21, pillarId: 3, scenario: "Vaš tim radi prekovremeno već tri nedelje.",
    options: [
      { score: 1, text: "Kažem im da je to normalno u ovoj industriji." },
      { score: 3, text: "Kupujem im picu i nadam se da će izdržati još malo." },
      { score: 5, text: "Analiziram uska grla u procesu i menjam raspored zadataka da smanjim opterećenje." }
    ]
  },
  {
    id: 22, pillarId: 7, scenario: "Junior kolega napravi grešku koja košta firmu 500€.",
    options: [
      { score: 1, text: "Tražim da on nadoknadi štetu iz svoje plate." },
      { score: 3, text: "Samo mu kažem da se to više ne ponovi." },
      { score: 5, text: "Gledam na to kao na investiciju u njegovu obuku i kreiramo kontrolnu listu da se greška ne ponovi." }
    ]
  },
  {
    id: 23, pillarId: 4, scenario: "Radite na važnom projektu, ali vas stalno prekidaju 'sitnim' pitanjima.",
    options: [
      { score: 1, text: "Odgovaram svima odmah, gubeći svoj fokus." },
      { score: 3, text: "Postajem vidno iznerviran na kolege." },
      { score: 5, text: "Uvodim 'fokus sate' kada nisam dostupan, osim za kritične hitne slučajeve." }
    ]
  },
  {
    id: 24, pillarId: 10, scenario: "Pišete važan mejl klijentu o povećanju cena.",
    options: [
      { score: 1, text: "Samo šaljem novi cenovnik bez objašnjenja." },
      { score: 3, text: "Izvinjavam se zbog povećanja i krivim inflaciju." },
      { score: 5, text: "Fokusiram se na dodatnu vrednost i inovacije koje smo uveli, opravdavajući novu cenu kroz ROI." }
    ]
  },
  {
    id: 25, pillarId: 1, scenario: "Postavljeni ste za menadžera tima koji je stariji od vas.",
    options: [
      { score: 1, text: "Pokušavam da nametnem autoritet silom i strogim pravilima." },
      { score: 3, text: "Povlačim se i puštam ih da rade šta žele." },
      { score: 5, text: "Pokazujem poštovanje prema njihovom iskustvu i tražim njihovo mišljenje dok gradim poverenje." }
    ]
  },
  {
    id: 26, pillarId: 5, scenario: "Sastanak tima se pretvara u besciljno ćaskanje.",
    options: [
      { score: 1, text: "Puštam ih, bitno je da vlada dobra atmosfera." },
      { score: 3, text: "Prekidam ih naglo i kažem da se vrate na posao." },
      { score: 5, text: "Vraćam fokus na unapred definisanu agendu i ciljeve sastanka." }
    ]
  },
  {
    id: 27, pillarId: 8, scenario: "Dolazi novi klijent sa potpuno drugačijim načinom rada od vašeg.",
    options: [
      { score: 1, text: "Insistiram da on prihvati naš način rada jer mi tako radimo godinama." },
      { score: 3, text: "Radim po starom i nadam se da on to neće primetiti." },
      { score: 5, text: "Prilagođavam naše procese njegovim potrebama, tražeći sinergiju." }
    ]
  },
  {
    id: 28, pillarId: 2, scenario: "Član tima ima privatnih problema koji utiču na njegov rad.",
    options: [
      { score: 1, text: "Kažem mu da ostavi privatne probleme kod kuće." },
      { score: 3, text: "Ignorišem situaciju dok se posao obavlja." },
      { score: 5, text: "Pokazujem razumevanje, nudim privremenu fleksibilnost i dogovaram kako da posao ne trpi." }
    ]
  },
  {
    id: 29, pillarId: 6, scenario: "Konkurencija je izbacila jeftiniju verziju vašeg proizvoda.",
    options: [
      { score: 1, text: "Odmah spuštam naše cene ispod njihovih." },
      { score: 3, text: "Ne radim ništa i nadam se da klijenti neće primetiti." },
      { score: 5, text: "Jačam poruku o našem kvalitetu, podršci i dodatnim vrednostima koje konkurent nema." }
    ]
  },
  {
    id: 30, pillarId: 9, scenario: "Dali ste reč timu da će dobiti bonus, ali firma ima loš kvartal.",
    options: [
      { score: 1, text: "Pravim se da nikada nisam to obećao." },
      { score: 3, text: "Krivim upravu firme pred timom." },
      { score: 5, text: "Otvoreno razgovaram sa timom o situaciji i tražim alternativne načine nagrađivanja." }
    ]
  },
  {
    id: 31, pillarId: 4, scenario: "Završili ste sve zadatke za danas ranije.",
    options: [
      { score: 1, text: "Odlazim kući odmah ili skrolujem po telefonu." },
      { score: 3, text: "Izmišljam sebi neki nebitan posao samo da bih delovao zauzeto." },
      { score: 5, text: "Koristim vreme za edukaciju ili strateško planiranje za sledeću nedelju." }
    ]
  },
  {
    id: 32, pillarId: 10, scenario: "Klijent traži uslugu koja nije u opisu ugovora.",
    options: [
      { score: 1, text: "Radim to besplatno samo da bi on bio srećan." },
      { score: 3, text: "Grubo ga odbijam pozivajući se na ugovor." },
      { score: 5, text: "Prihvatam da to uradimo, ali jasno definišem da je to dodatni rad koji se naplaćuje." }
    ]
  },
  {
    id: 33, pillarId: 3, scenario: "Novi radnik se ne uklapa u timsku kulturu.",
    options: [
      { score: 1, text: "Odmah mu dajem otkaz." },
      { score: 3, text: "Puštam ostale članove tima da ga 'disciplinuju'." },
      { score: 5, text: "Razgovaram sa njim o očekivanjima i pokušavam da pronađem zajednički jezik kroz mentoring." }
    ]
  },
  {
    id: 34, pillarId: 7, scenario: "Saznajete da član tima ide na kurs liderstva u slobodno vreme.",
    options: [
      { score: 1, text: "Plašim se da će mi uzeti posao i dajem mu teže zadatke." },
      { score: 3, text: "Ne reagujem, to je njegova privatna stvar." },
      { score: 5, text: "Pohvaljujem ga i dajem mu priliku da primeni naučeno na malom internom projektu." }
    ]
  },
  {
    id: 35, pillarId: 1, scenario: "Pobeda tima se slavi u firmi. Ko je zaslužan?",
    options: [
      { score: 1, text: "Ističem sebe jer sam ja sve organizovao." },
      { score: 3, text: "Kažem 'svi smo mi tim' bez isticanja konkretnih doprinosa." },
      { score: 5, text: "Javno imenujem pojedince i njihove doprinose koji su doveli do uspeha." }
    ]
  },
  {
    id: 36, pillarId: 5, scenario: "Klijent kritikuje rad vašeg kolege pred vama.",
    options: [
      { score: 1, text: "Slažem se sa klijentom kako bih mu se dodvorio." },
      { score: 3, text: "Ćutim i prelazim na drugu temu." },
      { score: 5, text: "Branim profesionalizam tima, ali prihvatam konstruktivnu kritiku za proces." }
    ]
  },
  {
    id: 37, pillarId: 8, scenario: "Vaša industrija dobija nove zakonske regulative.",
    options: [
      { score: 1, text: "Pokušavam da pronađem način da zaobiđem zakon." },
      { score: 3, text: "Čekam zadnji trenutak da primenim promene." },
      { score: 5, text: "Postavljam firmu kao lidera u usklađenosti (compliance) i koristim to kao marketing." }
    ]
  },
  {
    id: 38, pillarId: 6, scenario: "Tim predlaže inovaciju koja nosi rizik, ali veliki potencijal.",
    options: [
      { score: 1, text: "Odbijam odmah jer ne volim rizik." },
      { score: 3, text: "Kažem 'možda sledeće godine'." },
      { score: 5, text: "Pravim pilot projekat sa malim budžetom da testiramo ideju u praksi." }
    ]
  },
  {
    id: 39, pillarId: 2, scenario: "Kolega iz drugog sektora vas moli za pomoć, ali niste obavezni.",
    options: [
      { score: 1, text: "Odbijam ga jer to nije moj posao." },
      { score: 3, text: "Pomognem mu, ali posle svima pričam kako mi duguje uslugu." },
      { score: 5, text: "Pomažem ako imam vremena, jer je uspeh firme zajednički cilj." }
    ]
  },
  {
    id: 40, pillarId: 9, scenario: "Napravili ste obećanje koje ne možete ispuniti bez gubitka za firmu.",
    options: [
      { score: 1, text: "Kršim obećanje i pravim se da ga nisam dao." },
      { score: 3, text: "Ispunim ga tajno i nadam se da niko neće videti gubitak." },
      { score: 5, text: "Priznajem grešku, nudim kompromisno rešenje i čuvam integritet po svaku cenu." }
    ]
  }
];