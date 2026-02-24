export const leaderQuestions = {
  sr: {
    RESULTS: [
      // FASETA 1: Postavljanje ciljeva i operativni fokus
      {
        id: "R1",
        facet: "Postavljanje ciljeva i operativni fokus",
        text: "Vaš tim je na pola puta kroz kvartal kada se iznenada pojave dva neočekivana projekta visokog prioriteta. Tim je već na 90% kapaciteta. Kako obično reagujete na ovo preopterećenje prilikom postavljanja ciljeva za sledeći kvartal?",
        options: [
          { score: 3, text: "Odmah pregledam trenutni operativni plan. Pauziram ili smanjujem prioritet zadatima manje vrednosti kako bih napravio mesta za nove projekte, osiguravajući da tim ostane fokusiran na specifične, ostvarive metrike i da su ciljevi generalno usklađeni sa strategijom." },
          { score: 5, text: "Analiziram strateški uticaj novog projekta u odnosu na sav tekući rad. Proaktivno pregovaram o rokovima ili smanjujem prioritet manje kritičnim operativnim zadacima kako bih stvorio prostor, zatim usmeravam tim da se fokusira samo na metrike najveće vrednosti, postavljajući nove standarde i optimizujući alokaciju resursa." },
          { score: 1, text: "Instrukcije timu da odmah preuzme novi projekat, očekujući da će svako apsorbovati dodatno opterećenje \"multitaskingom\" ili radom prekovremeno kako bi sprečili da postojeći zadaci propadnu, što često rezultira nejasnim ili nerealnim ciljevima." }
        ]
      },
      {
        id: "R2",
        facet: "Postavljanje ciljeva i operativni fokus",
        text: "Razmislite o poslednjem putu kada je vaš tim bio vidno preplavljen poslom. Koji ste primarni razlog identifikovali za ovu situaciju i kako ste obično rešavali kapacitet tima?",
        options: [
          { score: 1, text: "\"Jednostavno smo imali previše posla/Bili smo nedovoljno popunjeni,\" ili \"Borili smo se da primenimo SMART kriterijume, što je dovelo do nejasnih ciljeva.\"" },
          { score: 5, text: "\"Moj proces procene napora ili naš proces prijema posla je bio neispravan, pa sam implementirao sistemske promene,\" ili \"Aktivno sam usmeravao tim da postavi ambiciozne, dobro usklađene ciljeve.\"" },
          { score: 3, text: "\"Pogrešno smo procenili složenost specifičnog zadatka,\" ili \"Osigurao sam da ciljevi budu generalno usklađeni, ali sam video prostor za bolju prioritizaciju.\"" }
        ]
      },
      // FASETA 2: Rešavanje problema i donošenje odluka
      {
        id: "R3",
        facet: "Rešavanje problema i donošenje odluka",
        text: "Desila se kritična operativna greška koja utiče na klijenta. Osnovni uzrok nije jasan, a vaš tim paniči. Kakva je vaša neposredna reakcija i proces donošenja odluka?",
        options: [
          { score: 5, text: "Održavam smirenost, vodeći tim da pogleda izvan panike i koristi strukturiranu analizu. Ne samo da rešavam neposredni problem, već istovremeno implementiram novi sistemski okvir ili promenu procesa koja proaktivno sprečava da se ovakva klasa grešaka ikada više ponovi u celoj organizaciji." },
          { score: 1, text: "Brzo donosim odluku na osnovu dostupnih informacija kako bih zaustavio krvarenje, fokusirajući se na rešavanje neposrednog simptoma da bih zadovoljio klijenta odmah, često se boreći da identifikujem pravi problem ili se oslanjam na druge." },
          { score: 3, text: "Prikupljam relevantne podatke, konsultujem tim za input i donosim strukturiranu, pravovremenu odluku zasnovanu na jasnom obrazloženju. Implementiram popravku, a zatim zakazujem post-mortem kako bih metodički identifikovao osnovni uzrok i sprečio ponavljanje." }
        ]
      },
      {
        id: "R4",
        facet: "Rešavanje problema i donošenje odluka",
        text: "Koliko često smatrate da se operativni problemi koje ste lično nadgledali ili rešavali ponovo javljaju u istom ili sličnom obliku?",
        options: [
          { score: 3, text: "Povremeno; neki problemi se mogu ponovo javiti, posebno ako se kontekst promeni, ali generalno su moja rešenja efikasna." },
          { score: 1, text: "Često; mnogi problemi se ponovo javljaju, ili se često bavim simptomima, a ne osnovnim uzrocima." },
          { score: 5, text: "Retko; kada se problem reši kroz moje vođenje, obično se trajno rešava kroz sistemska poboljšanja." }
        ]
      },
      // FASETA 3: Upravljanje učinkom tima
      {
        id: "R5",
        facet: "Upravljanje učinkom tima",
        text: "Visokoproduktivan član tima propušta svoje ciljeve dva uzastopna meseca i deluje neangažovano. Kako rešavate ovaj jaz u učinku kako biste podstakli poboljšanje?",
        options: [
          { score: 1, text: "Čekam da vidim da li će se to popraviti sledećeg meseca, ili dajem generički \"treba da budemo bolji\" govor na timskom sastanku, često izbegavajući direktnu konfrontaciju ili jasnu komunikaciju o očekivanjima." },
          { score: 3, text: "Imam sastanak jedan na jedan da bih pregledao specifične metrike. Ponavljam standarde, dajem konstruktivne povratne informacije, i kolaborativno postavljam jasan vremenski okvir za poboljšanje, efikasno motivišući člana tima." },
          { score: 5, text: "Proaktivno ulazim u osnovnu motivaciju ili sistemske prepreke koje uzrokuju pad. Kreiram personalizovani plan razvoja koji usklađuje snage pojedinca sa timskim ciljevima, pretvarajući pad učinka u priliku za pozitivan rast koja utiče na širu efikasnost tima." }
        ]
      },
      {
        id: "R6",
        facet: "Upravljanje učinkom tima",
        text: "Koliko često vam se članovi tima obraćaju tražeći specifične savete o svom učinku, prepoznajući vašu sposobnost da pružite jasna očekivanja i delotvorne povratne informacije?",
        options: [
          { score: 5, text: "Često; članovi tima redovno se angažuju sa mnom u razvojnim razgovorima o svom učinku i rastu." },
          { score: 1, text: "Retko; članovi tima teže da izbegavaju diskusije o učinku sa mnom, ili dobijam žalbe na nejasna očekivanja." },
          { score: 3, text: "Povremeno; članovi tima traže input o specifičnim problemima, i generalno dajem jasne savete." }
        ]
      },
      // FASETA 4: Odgovor na krize
      {
        id: "R7",
        facet: "Odgovor na krize",
        text: "Iznenadna eksterna tržišna promena (npr. prekid u lancu snabdevanja ili problem sa PR-om) preti sposobnosti vašeg odeljenja da radi ove nedelje. Koji opis najbolje odgovara vašem ponašanju tokom prvih 24 sata krize?",
        options: [
          { score: 3, text: "Brzo aktiviram standardne protokole za krize. Jasno komuniciram timu, dodeljujem specifične uloge i fokusiram se na stabilizaciju operacija kako bih minimizirao neposredan uticaj i osigurao kontinuitet poslovanja." },
          { score: 1, text: "Postajem vidno pod stresom i reaktivan. Gledam u više rukovodstvo tražeći specifične instrukcije šta dalje, i borim se da komuniciram prioritete timu, što često dovodi do konfuzije i anksioznosti." },
          { score: 5, text: "Ostajem smiren i odlučan, proaktivno predviđajući sekundarne uticaje i prilagođavam strategiju u realnom vremenu novonastaloj situaciji. Efikasno komuniciram sa svim nivoima zainteresovanih strana, pretvarajući krizu u priliku za organizaciono učenje i otpornost." }
        ]
      },
      {
        id: "R8",
        facet: "Odgovor na krize",
        text: "Neposredno nakon situacije visokog pritiska ili krize, kako se članovi vašeg tima obično osećaju i kako to utiče na njihov naknadni učinak?",
        options: [
          { score: 5, text: "Energično, samouvereno, ili ponosno na to kako smo to rešili, često pokazujući povećanu otpornost i motivaciju za buduće izazove." },
          { score: 3, text: "Umorno, ali zadovoljno što smo uspeli, i brzo se vraćaju normalnoj produktivnosti." },
          { score: 1, text: "Ispcrpljeno, demoralisano, ili olakšano što je gotovo, što dovodi do pada morala ili produktivnosti nakon toga." }
        ]
      },
      // FASETA 5: Strateško razmišljanje i vizija
      {
        id: "R9",
        facet: "Strateško razmišljanje i vizija",
        text: "Vaša industrija doživljava brze promene zbog novih tehnologija i evoluirajućih tržišnih zahteva. Kako obično reagujete i usmeravate svoj tim u vezi sa ovim dugoročnim trendovima i potrebom za vizijom?",
        options: [
          { score: 1, text: "Sklon sam da se prvenstveno fokusiram na trenutne operativne performanse, verujući da su dugoročni trendovi previše udaljeni da bi uticali na današnji rad ili da je to tuđa odgovornost, što znači da su dugoročni planovi mog tima često reaktivni." },
          { score: 3, text: "Redovno zakazujem diskusije za analizu nove tržišne dinamike i novih tehnologija, i osiguravam da su dugoročni ciljevi mog tima generalno usklađeni sa poznatim budućim trendovima, jasno komunicirajući doprinos tima organizacionim ciljevima." },
          { score: 5, text: "Dosledno prevodim složenu tržišnu dinamiku u jasnu, ubedljivu viziju za svoj tim, proaktivno identifikujući strateške prilike ili pretnje. Osiguravam da dugoročni ciljevi mog tima aktivno oblikuju, a ne samo reaguju na budući organizacioni smer, i obučavam druge u strateškom predviđanju." }
        ]
      },
      {
        id: "R10",
        facet: "Strateško razmišljanje i vizija",
        text: "Koliko često inicijative vašeg tima srednjeg do dugog roka (npr. projekti planirani za 1-2 godine) zahtevaju značajno preusmeravanje ili čak otkazivanje jer su se tržišni trendovi ili organizaciona strategija neočekivano promenili?",
        options: [
          { score: 5, text: "Retko; inicijative tipično ostaju veoma relevantne i uticajne, demonstrirajući snažno predviđanje i proaktivno usklađivanje sa budućim trendovima." },
          { score: 1, text: "Često; mnoge inicijative su značajno izmenjene ili otkazane, što ukazuje na nedostatak predviđanja ili strateškog usklađivanja." },
          { score: 3, text: "Povremeno; neke inicijative zahtevaju manja prilagođavanja, ali generalno ostaju usklađene sa strateškim smerom." }
        ]
      },
      // FASETA 6: Implementacija procesa promena
      {
        id: "R11",
        facet: "Implementacija procesa promena",
        text: "Organizacija pokreće značajnu stratešku promenu koja zahteva veliku promenu u načinu rada vašeg tima. Kako obično pristupate planiranju i izvršavanju ovog procesa promene unutar vašeg tima?",
        options: [
          { score: 3, text: "Razvijam jasan plan implementacije za promenu, pružam neophodnu obuku i resurse, i pažljivo pratim napredak, efikasno vodeći svoj tim kroz tranziciju i rešavajući osnovni otpor." },
          { score: 5, text: "Aktivno zagovaram promenu, pretvarajući potencijalni otpor u angažman, i dizajniram sveobuhvatnu strategiju implementacije koja ne samo da osigurava glatko usvajanje, već i generiše nove, inovativne pristupe od tima koji premašuju početna očekivanja za uspeh promene." },
          { score: 1, text: "Komuniciram promenu kao direktivu, fokusirajući se na usklađenost, i često se borim sa identifikacijom ključnih zainteresovanih strana ili upravljanjem otporom, što može dovesti do značajnih kašnjenja u usvajanju." }
        ]
      },
      {
        id: "R12",
        facet: "Implementacija procesa promena",
        text: "Kada ste implementirali značajnu promenu u svom timu, koliko često je ona bila u potpunosti usvojena i održiva bez potrebe za ponovnim pregledom zbog preostalih problema ili novih tačaka otpora?",
        options: [
          { score: 1, text: "Retko; mnoge promene koje sam implementirao često gube zamah, nailaze na neočekivani otpor, ili zahtevaju ponovljene intervencije da bi se održale." },
          { score: 3, text: "Povremeno; većina promena se zadrži, ali su manja prilagođavanja ili naknadne provere ponekad potrebne nakon početne faze implementacije." },
          { score: 5, text: "Dosledno; moje inicijative za promene tipično postaju potpuno ugrađene kao novi načini rada, često premašujući početne ciljeve usvajanja i stvarajući trajan pozitivan uticaj." }
        ]
      },
      // FASETA 7: Inovacije i optimizacija procesa
      {
        id: "R13",
        facet: "Inovacije i optimizacija procesa",
        text: "Vaš tim upravlja kritičnim procesom koji pokazuje potencijal za značajno poboljšanje efikasnosti ili inovacije, ali takođe nosi inherentne rizike u njegovoj promeni. Kako obično pristupate pokretanju dugoročne optimizacije procesa i inovacija u ovoj oblasti?",
        options: [
          { score: 5, text: "Dosledno podstičem kulturu kontinuirane inovacije, izazivajući fundamentalne pretpostavke o postojećim procesima, osnažujući svoj tim da eksperimentiše sa novim rešenjima, i redovno implementiram transformativne promene koje značajno poboljšavaju dugoročnu operativnu izvrsnost za organizaciju." },
          { score: 3, text: "Ohrabrujem svoj tim da identifikuje i implementira redovna poboljšanja procesa, što dovodi do stabilnih, ali inkrementalnih poboljšanja u efikasnosti i delotvornosti unutar procesa." },
          { score: 1, text: "Sklon sam da održavam postojeći proces, fokusirajući se samo na manje, inkrementalne poboljšanja kada se pojavi jasan problem, često propuštajući prilike za značajno poboljšanje efikasnosti ili inovacije." }
        ]
      },
      {
        id: "R14",
        facet: "Inovacije i optimizacija procesa",
        text: "Tokom prošle godine, koliko značajnih, ne-inkrementalnih inovacija ili redizajna procesa je poteklo od vašeg tima koji su doveli do merljivog, trajnog poboljšanja u efikasnosti ili vrednosti za organizaciju?",
        options: [
          { score: 1, text: "Malo do nimalo; većina poboljšanja je bila inkrementalna, ili je zahtevala spoljno podsticanje." },
          { score: 3, text: "Jedno ili dva; moj tim je predložio i implementirao neke značajne inovacije koje su imale pozitivan uticaj." },
          { score: 5, text: "Tri ili više; moj tim je dosledan izvor značajnih inovacija i redizajna procesa koji dokazano poboljšavaju organizacionu vrednost." }
        ]
      },
      // FASETA 8: Razvoj resursa i timskih sposobnosti
      {
        id: "R15",
        facet: "Razvoj resursa i timskih sposobnosti",
        text: "Da bi ispunio buduće organizacione zahteve, vaš tim mora da razvije potpuno nove sposobnosti ili da stekne specijalizovane veštine koje trenutno ne poseduje. Kako strateški planirate i izvršavati ovaj dugoročni razvoj timskih sposobnosti?",
        options: [
          { score: 1, text: "Komuniciram potrebu za novim veštinama i očekujem od članova tima da ih steknu kroz samostalno učenje ili osnovne programe obuke, što često rezultira nedoslednim usvajanjem veština ili oslanjanjem na spoljno zapošljavanje." },
          { score: 5, text: "Dizajniram i implementiram sveobuhvatnu, višegodišnju strategiju za razvoj talenata koja uključuje strateško zapošljavanje, napredne puteve obuke, unakrsno funkcionalne projekte i snažno mentorstvo. Ovo proaktivno gradi visoko funkcionalan tim sposoban da se nosi sa budućim organizacionim izazovima i služi kao model za razvoj resursa." },
          { score: 3, text: "Identifikujem nedostatke u veštinama, alociram budžet za specifične programe obuke i razvoja za ključne članove tima, i pratim sticanje novih sposobnosti u odnosu na buduće potrebe, što dovodi do ciljanog poboljšanja veština." }
        ]
      },
      {
        id: "R16",
        facet: "Razvoj resursa i timskih sposobnosti",
        text: "Koliko često članovi tima pod vašim liderstvom demonstrativno razvijaju svoje sposobnosti do te mere da su promovisani na značajno izazovnije uloge, preuzimaju odgovornosti daleko izvan svog početnog opsega, ili su prepoznati kao interni eksperti?",
        options: [
          { score: 5, text: "Mnogi; značajan broj članova tima je značajno proširio svoje uloge ili karijere, često utičući na druge delove organizacije i postajući vredni budući lideri." },
          { score: 1, text: "Malo do nimalo; članovi tima prvenstveno rastu unutar svojih trenutnih uloga, ili traže napredovanje izvan mog tima ili organizacije." },
          { score: 3, text: "Neki; nekoliko pojedinaca je napredovalo ili proširilo svoje uloge, pokazujući rast u specifičnim oblastima zahvaljujući mojoj podršci." }
        ]
      }
    ], 
    MINDSET: [
      // FASETA 1: Samosvest
      {
        id: "M1",
        facet: "Samosvest",
        text: "Nakon što ste dobili konstruktivne povratne informacije od kolege o nenamernom negativnom uticaju vašeg stila komunikacije na nedavnom sastanku, kako obično obrađujete i delujete na ove povratne informacije?",
        options: [
          { score: 1, text: "Priznajem povratne informacije, ali ih brzo odbacujem interno, pripisujući percepciju kolege njihovoj sopstvenoj osetljivosti ili nesporazumu konteksta, često nesvestan svog pravog uticaja na druge." },
          { score: 5, text: "Ne samo da prihvatam povratne informacije, već aktivno tražim dodatne perspektive od drugih da bih razumeo obrasce i osnovne uzroke svog uticaja. Zatim razvijam plan za poboljšanje svoje komunikacije, proaktivno tražeći dodatna zapažanja i koristeći ovo samopoznavanje za optimalne performanse." },
          { score: 3, text: "Zahvaljujem kolegi, razmišljam o specifičnoj situaciji da bih razumeo svoje snage i slabosti, i svesno se trudim da modifikujem svoj komunikacijski pristup u sličnim budućim interakcijama, sporadično prihvatajući povratne informacije." }
        ]
      },
      {
        id: "M2",
        facet: "Samosvest",
        text: "Kada razmišljate o svom prošlom učinku (npr. kvartalno, godišnje), na šta se prvenstveno fokusirate i kako se to obično prevodi u akciju?",
        options: [
          { score: 3, text: "Fokusiram se na identifikaciju specifičnih oblasti za poboljšanje i postavljanje jasnih ciljeva za njihovo rešavanje, dosledno tražeći i reagujući na povratne informacije konstruktivno kako bih poboljšao svoj učinak." },
          { score: 1, text: "Prvenstveno se fokusiram na isticanje svojih postignuća i odbranu svih nedostataka objašnjavajući doprinoseće spoljne faktore, često ukazujući na otpornost prema dubokom ličnom rastu ili borbu za identifikaciju ličnih slepih tačaka." },
          { score: 5, text: "Identifikujem dublje bihejvioralne obrasce ili osnovna uverenja koja su doprinela i uspesima i neuspesima, zatim aktivno nastojim da evoluiram svoj pristup izvan površinskih rešenja, često utičući na organizacionu kulturu promovišući kontinuiranu samorefleksiju." }
        ]
      },
      // FASETA 2: Mentalni sklop rasta i agilnost učenja
      {
        id: "M3",
        facet: "Mentalni sklop rasta i agilnost učenja",
        text: "Zadatak vam je da vodite novu inicijativu koja zahteva stručnost u oblasti u kojoj imate ograničeno prethodno iskustvo, a inicijativa nailazi na rane poteškoće. Kako lično reagujete na ovu krivu učenja i početne neuspehe?",
        options: [
          { score: 5, text: "Otvoreno priznajem svoju granicu učenja, aktivno eksperimentišem sa novim pristupima, dosledno tražim i integrišem povratne informacije (čak i iz neuspeha), i transparentno delim svoj put učenja, pretvarajući neuspehe u vredne uvide za ceo tim ili organizaciju i inspirišući druge da prihvate izazove." },
          { score: 1, text: "Pokazujem oklevanje ili pokušavam da prebacim odgovornost za nepoznate aspekte, oslanjajući se na ustaljene metode ili spoljno vođenje, što ograničava moje lično učenje i može ometati napredak inicijative zbog verovanja da rast nije moguć u ovoj oblasti." },
          { score: 3, text: "Aktivno tražim nova znanja i resurse, učim samostalno ili uz podršku, i prilagođavam svoj pristup na osnovu povratnih informacija da bih se nosio sa izazovima, pokazujući rastuću spremnost da učim iz neuspeha i prihvatim nove ideje." }
        ]
      },
      {
        id: "M4",
        facet: "Mentalni sklop rasta i agilnost učenja",
        text: "Kada doživite značajan neuspeh ili grešku na projektu koji ste pokrenuli, kako obično reagujete i kakav je ishod?",
        options: [
          { score: 1, text: "Sklon sam da racionalizujem neuspeh, fokusirajući se na spoljne okolnosti ili nedostatke drugih uključenih, često me to čini otpornim na istraživanje sopstvenog doprinosa ishodu." },
          { score: 3, text: "Obavljam post-mortem da bih identifikovao šta je pošlo naopako i primenio naučene lekcije za slične buduće projekte, generalno posmatrajući neuspehe kao podatke za učenje." },
          { score: 5, text: "Otvoreno delim lekcije iz neuspeha širom organizacije, posmatrajući to kao vredne podatke za kolektivno učenje i rast, i koristim to da poboljšam svoje lične strategije za buduće izazove, dosledno transformišući neuspehe u sistemske uvide." }
        ]
      },
      // FASETA 3: Otpornost
      {
        id: "M5",
        facet: "Otpornost",
        text: "Doživljavate veliki profesionalni neuspeh (npr. ključni projekat koji ste zagovarali je otkazan, ili ste prebačeni za dugo željenu promociju). Kako se obično oporavljate i nastavljate efikasno voditi?",
        options: [
          { score: 3, text: "Privatno obrađujem neuspeh, a zatim se profesionalno ponovo angažujem, održavajući performanse i prisebnost, i fokusiram se na nastavak svojih odgovornosti bez značajnog dugoročnog uticaja." },
          { score: 1, text: "Postajem primetno povučen ili pesimističan na duži period, dozvoljavajući da neuspeh vidljivo utiče na moj moral i dosledan strateški učinak, teško mi je da prevaziđem izazove." },
          { score: 5, text: "Demonstriram izuzetnu mentalnu čvrstinu, otvoreno koristim neuspeh kao priliku za učenje, i brzo se okrećem novim strategijama, često inspirišući svoj tim modelovanjem prilagodljivosti i proaktivnog rešavanja problema u suočavanju sa nedaćama, i gradeći organizacionu otpornost." }
        ]
      },
      {
        id: "M6",
        facet: "Otpornost",
        text: "Tokom perioda visoke organizacione neizvesnosti ili stresa (npr. otpuštanja, ekonomska kriza), kako vaše ponašanje obično utiče na opšti moral i stabilnost tima?",
        options: [
          { score: 5, text: "Aktivno inspirišem poverenje i optimizam, transformišući anksioznost tima u odlučnost i podstičući osećaj kolektivne snage i svrhe tokom izazovnih vremena, dosledno gradeći otpornu organizacionu kulturu." },
          { score: 3, text: "Održavam staloženo i mirno prisustvo, što pomaže timu da ostane stabilan i fokusiran, sprečavajući širenje panike." },
          { score: 1, text: "Moja anksioznost ili stres često se prenose, vidno povećavajući strepnju tima i smanjujući moral, što može ometati njihov učinak." }
        ]
      },
      // FASETA 4: Spremnost na promene
      {
        id: "M7",
        facet: "Spremnost na promene",
        text: "Kompanija iznenada objavljuje veliku organizacionu restrukturaciju koja će promeniti linije izveštavanja i odgovornosti za vas i vaš tim. Kako obično reagujete na ovu vest interno i eksterno?",
        options: [
          { score: 1, text: "Privatno izražavam frustraciju ili cinizam o promeni pouzdanim kolegama, i fokusiram se na to kako da zaštitim svoj trenutni tim i procese od poremećaja, često se opirući novim idejama." },
          { score: 3, text: "Prihvatam promenu kao neophodnu, profesionalno je komuniciram svom timu, i marljivo prilagođavam svoje procese i planove kako bih se uskladio sa novom strukturom, upravljajući osnovnom neizvesnošću." },
          { score: 5, text: "Aktivno prihvatam promenu kao priliku za preispitivanje starih procesa i istraživanje novih sinergija. Proaktivno tražim informacije o strateškoj nameri nove strukture, i usmeravam svoj tim kroz tranziciju ističući prilike za rast, podstičući kulturu prilagodljivosti." }
        ]
      },
      {
        id: "M8",
        facet: "Spremnost na promene",
        text: "Koliko često aktivno zagovarate ili pokrećete značajne promene u dugogodišnjim procesima ili strukturama, čak i kada su trenutne metode \"dovoljno dobre\" ili udobne?",
        options: [
          { score: 5, text: "Često; stalno tražim načine za inovacije i poboljšanja, posmatrajući kontinuiranu evoluciju kao suštinski deo poslovanja, i čak uspevam u dinamičnim okruženjima." },
          { score: 1, text: "Retko; preferiram stabilnost i pokrećem promene samo kada je to apsolutno neophodno ili naređeno, često se borim da se prilagodim." },
          { score: 3, text: "Povremeno; predlažem promene za rešavanje jasnih neefikasnosti ili problema, pokazujući rastuću spremnost da prihvatim promene." }
        ]
      },
      // FASETA 5: Empatija
      {
        id: "M9",
        facet: "Empatija",
        text: "Član tima, poznat po visokim performansama, neočekivano otkriva da prolazi kroz tešku ličnu situaciju koja utiče na njegov rad. Kako obično reagujete?",
        options: [
          { score: 3, text: "Izražavam iskrenu brigu, pitam kakva podrška bi bila od pomoći (npr. fleksibilno radno vreme, preusmeravanje zadataka), i ponavljam da je njihovo blagostanje važno, dosledno slušajući i reagujući na njihove potrebe." },
          { score: 1, text: "Priznajem situaciju, ali se brzo vraćam na očekivanja posla, naglašavajući potrebu da član tima upravlja ličnim problemima kako ne bi uticali na timski učinak, često se boreći da razumem ili podelim njihova osećanja." },
          { score: 5, text: "Idem dalje od pukog nuđenja podrške; aktivno pomažem članu tima da razvije održivu strategiju suočavanja, povezujem ih sa internim ili eksternim resursima, i modelujem empatiju za ceo tim, vodeći inicijative za poboljšanje empatične odgovornosti i podstičući kulturu brige i podrške." }
        ]
      },
      {
        id: "M10",
        facet: "Empatija",
        text: "Koliko često smatrate da vaše akcije i reči čine da se drugi osećaju zaista saslušanim, shvaćenim i vrednovanim, čak i kada ne možete odmah rešiti njihov problem?",
        options: [
          { score: 5, text: "Dosledno; moje intervencije aktivno grade poverenje i odnos, inspirišući druge da se otvoreno izraze, i demonstrativno jačaju odnose kroz duboko razumevanje." },
          { score: 1, text: "Retko; ponekad propuštam signale koji ukazuju na osećanja ili potrebe drugih, a moji odgovori su često odbojni ili nekorisni, čineći da se drugi osećaju nečuto." },
          { score: 3, text: "Generalno; osiguravam da su osećanja članova tima priznata i shvaćena, a moji odgovori su podržavajući, što dovodi do osećaja da su saslušani." }
        ]
      },
      // FASETA 6: Timsko zalaganje i saradnja
      {
        id: "M11",
        facet: "Timsko zalaganje i saradnja",
        text: "Kritičan unakrsno funkcionalni projekat suočava se sa značajnim zastojem, a vaš tim mora da uloži dodatni napor ili da napravi kompromis u pogledu početnih preferencija radi većeg organizacionog cilja. Kako osiguravate da vaš tim ostane posvećen i usklađen?",
        options: [
          { score: 1, text: "Prenosim spoljni pritisak i očekujem od tima da se usaglasi, ali implicitno dozvoljavam da se izrazineprozadovoljstvo članova tima, često prioritizujući individualne brige u odnosu na šire timske ciljeve, što ometa punu posvećenost." },
          { score: 3, text: "Jasno objašnjavam stratešku važnost kolektivnog cilja, osiguravam da tim razume svoje individualne doprinose, i savetujem ih kroz izazove kako bih održao visok nivo angažovanja, efikasno sarađujući sa drugima." },
          { score: 5, text: "Aktivno podstičem snažan osećaj zajedničkog vlasništva nad kolektivnim ciljem, zagovarajući doprinos tima široj organizaciji, inspirišući članove tima da daju sve od sebe, i dosledno podstičem kulturu timskog rada i uzajamne podrške koja stvara visoko efikasne timove." }
        ]
      },
      {
        id: "M12",
        facet: "Timsko zalaganje i saradnja",
        text: "Kada se vaš tim suoči sa značajnim izazovom ili zastojem, koliko često članovi tima spontano preuzimaju inicijativu, dele odgovornost i aktivno sarađuju bez eksplicitnog traženja ili usmeravanja?",
        options: [
          { score: 5, text: "Dosledno; moj tim funkcioniše sa snažnim osećajem zajedničkog vlasništva, redovno deli znanje i resurse, i spontano se angažuje u kolaborativnom rešavanju problema, što rezultira visoko kohezivnom i efikasnom jedinicom." },
          { score: 1, text: "Retko; članovi tima često prioritizuju individualne zadatke, a saradnja zahteva moje direktno vođenje ili intervenciju, ponekad dovodeći do propuštenih prilika za zajednički uspeh." },
          { score: 3, text: "Povremeno; članovi tima pokazuju spremnost da podrže timske ciljeve kada su ohrabreni, i počinju da se angažuju u kolaborativnim naporima, demonstrirajući rastuće razumevanje zajedničkog uspeha." }
        ]
      },
      // FASETA 7: Mentalni sklop rešavanja konflikata
      {
        id: "M13",
        facet: "Mentalni sklop rešavanja konflikata",
        text: "Javlja se značajno neslaganje ili sukob unutar vašeg tima (ili između vašeg tima i drugog) koje ima potencijal da utiče na isporuku projekta ili moral tima. Kako obično pristupate rešavanju takvih sukoba?",
        options: [
          { score: 3, text: "Olakšavam uravnoteženu diskusiju kako bih razumeo obe strane, posredujem ka fer kompromisu ili rešenju, i osiguravam rešenje koje omogućava nastavak napretka, demonstrirajući rastuću spremnost da razumem osnovne uzroke." },
          { score: 1, text: "Sklon sam da izbegavam direktnu intervenciju, nadajući se da će se strane same rešiti, ili zauzimam odlučan stav koji rešava neposredni problem, ali može ostaviti osnovne tenzije nerešene i strane da se osećaju nečuto, posmatrajući sukob kao isključivo negativan." },
          { score: 5, text: "Aktivno preoblikujem sukobe kao prilike za rast i dublje razumevanje, vodeći strane da istraže osnovne interese, što često rezultira inovativnim rešenjima koja jačaju odnose i poboljšavaju buduću saradnju, dosledno podstičući kulturu u kojoj se sukobi konstruktivno rešavaju." }
        ]
      },
      {
        id: "M14",
        facet: "Mentalni sklop rešavanja konflikata",
        text: "Kada se pojave neslaganja ili sukobi unutar vašeg tima, koliko često ove diskusije dovode do jačanja odnosa i poboljšanih procesa, umesto samo privremenog primirja ili dugotrajnog nezadovoljstva?",
        options: [
          { score: 1, text: "Retko; sukobi često ostavljaju dugotrajne tenzije, ili se jedna strana oseća nečuto, što ukazuje na borbu za održavanje konstruktivnog stava." },
          { score: 5, text: "Dosledno; sukobi se transformišu u prilike za rast, što dovodi do jačih odnosa, robusnijih rešenja i vidljivo poboljšane timske dinamike." },
          { score: 3, text: "Povremeno; sukobi se rešavaju, a napredak se nastavlja, ali uticaj na odnose je neutralan ili samo blago pozitivan." }
        ]
      },
      // FASETA 8: Inkluzivno liderstvo
      {
        id: "M15",
        facet: "Inkluzivno liderstvo",
        text: "Vodite tim sa različitim pozadinama, iskustvima i stilovima komunikacije. Kako efikasno osiguravate da se svi glasovi čuju i vrednuju u kritičnim procesima donošenja odluka ili planiranja?",
        options: [
          { score: 3, text: "Aktivno tražim input od različitih članova tima i osiguravam okruženje poštovanja, što dovodi do generalno inkluzivne diskusije gde se različita gledišta razmatraju i cene." },
          { score: 1, text: "Generalno olakšavam diskusije, ali smatram da se određene perspektive (npr. tiši pojedinci, noviji zaposleni) ponekad previđaju ili nisu u potpunosti integrisane u konačne odluke, što ukazuje na moju ograničenu svest o tome kako izgraditi inkluzivno okruženje." },
          { score: 5, text: "Dosledno dizajniram i implementiram strategije za aktivno traženje, integrisanje i pojačavanje različitih perspektiva (čak i onih suprotstavljenih) u kritičnim strateškim odlukama, što rezultira robusnijim rešenjima i podstiče vidljivo inkluzivnu organizacionu kulturu koja koristi raznolikost za inovacije i snažan osećaj pripadnosti." }
        ]
      },
      {
        id: "M16",
        facet: "Inkluzivno liderstvo",
        text: "Koliko često pojedinci iz tradicionalno nedovoljno zastupljenih ili manje glasnih grupa unutar vašeg tima ili šire sfere uticaja aktivno dobrovoljno nude ideje, izazivaju pretpostavke ili vode inicijative, ukazujući na njihov osećaj osnaživanja i pripadnosti?",
        options: [
          { score: 1, text: "Retko; doprinosima često dominiraju nekolicina etabliranih ili glasnijih pojedinaca, a drugi deluju oklevajući da istupe." },
          { score: 5, text: "Dosledno; pojedinci iz svih pozadina aktivno i spontano doprinose idejama i liderstvom, što ukazuje na snažan osećaj pripadnosti, osnaživanja i aktivnog promovisanja različitih perspektiva." },
          { score: 3, text: "Povremeno; neki pojedinci iz nedovoljno zastupljenih grupa doprinose, posebno kada su eksplicitno pozvani, i generalno se osećaju vrednovanim." }
        ]
      },
      // FASETA 9: Odgovornost i vlasništvo
      {
        id: "M17",
        facet: "Odgovornost i vlasništvo",
        text: "Projekat visokog profila pod vašim direktnim sponzorstvom ne ispunjava svoje primarne ciljeve, što rezultira značajnim finansijskim ili reputacionim troškom za kompaniju. Kako obično rešavate ovaj ishod sa višim menadžmentom i svojim timom?",
        options: [
          { score: 5, text: "Ne samo da prihvatam punu odgovornost, već proaktivno identifikujem sistemske slabosti ili kulturne probleme unutar organizacije koji su doprineli neuspehu, zalažući se za šira organizaciona poboljšanja i inspirišući druge generisanjem akcija koje imaju najveći uticaj." },
          { score: 3, text: "Preuzimam punu odgovornost za ishod projekta, objašnjavam naučeno, i predstavljam jasan plan za korektivne akcije ili buduće sprečavanje, uvek svestan svoje odgovornosti i promovišem kulturu odgovornosti unutar tima." },
          { score: 1, text: "Predstavljam detaljan izveštaj ističući sve faktore koji doprinose, uključujući izazove izvan moje kontrole i specifične nedostatke članova tima, kako bih objasnio neuspeh, često izbegavajući punu odgovornost za ishode i zahtevajući vođenje da razumem svoju odgovornost." }
        ]
      },
      {
        id: "M18",
        facet: "Odgovornost i vlasništvo",
        text: "Kada dođe do manje nego idealnog rezultata na projektu koji vodite, kakav je vaš neposredan, dosledan interni odgovor (čak i ako nije uvek verbalizovan), i kako to utiče na vaše naknadne akcije?",
        options: [
          { score: 1, text: "\"Ko je odgovoran za ovo? Šta je pošlo naopako sa njihovim delom?\" ili \"Izbegavam preuzimanje vlasništva nad ishodima, prvenstveno se fokusirajući na spoljne faktore i nedostatak svesti o važnosti odgovornosti.\"" },
          { score: 3, text: "\"Šta mogu da naučim iz ovoga? Kako možemo poboljšati sledeći put?\" ili \"Prihvatam odgovornost i pokazujem rastuću spremnost da prihvatim odgovornost, demonstrirajući svoju posvećenost svojim odgovornostima.\"" },
          { score: 5, text: "\"Ovo je moja odgovornost. Kako mogu osigurati da se ovo više ne ponovi, i koje šire organizacione lekcije se mogu izvući?\" ili \"Samostalno preuzimam odgovornost za akcije i ishode, redovno preuzimajući odgovornost za timski i organizacioni uticaj.\"" }
        ]
      },
      // FASETA 10: Moć odlučivanja
      {
        id: "M19",
        facet: "Moć odlučivanja",
        text: "Morate doneti značajnu stratešku ili operativnu odluku koja bi mogla biti nepopularna kod nekih zainteresovanih strana ili uključivati značajan rizik. Kako obično postupate?",
        options: [
          { score: 1, text: "Često odlažem odluku ili tražim ekstenzivan konsenzus od široke grupe zainteresovanih strana, odlažući akciju dok se ne pojavi široko prihvaćeno kompromisno rešenje, što utiče na napredak tima zbog mog nedostatka samopouzdanja u moć odlučivanja." },
          { score: 5, text: "Samouvereno donosim uticajne odluke, čak i u dvosmislenim ili situacijama visokog pritiska, proaktivno upravljajući potencijalnim otporom, i dosledno modelujem odlučno liderstvo koje inspiriše poverenje i osnažuje druge da deluju, na kraju pokrećući organizacioni uspeh." },
          { score: 3, text: "Prikupljam neophodne informacije, konsultujem relevantne stručnjake, i donosim pravovremene, dobro obrazložene odluke, jasno komunicirajući obrazloženje i upravljajući očekivanjima sa zainteresovanim stranama, samostalno donoseći informisane i pravovremene izbore." }
        ]
      },
      {
        id: "M20",
        facet: "Moć odlučivanja",
        text: "Koliko često vam se drugi (članovi tima, kolege, više rukovodstvo) obraćaju specifično za vođenje o tome kako doneti tešku odluku ili razumeti šire implikacije njihovih sopstvenih izbora, ukazujući na vašu reputaciju odlučnog liderstva?",
        options: [
          { score: 5, text: "Često me traže kao mentora za složeno donošenje odluka i za osnaživanje drugih da deluju, dosledno demonstrirajući liderstvo u podsticanju kulture informisanog donošenja odluka." },
          { score: 1, text: "Retko; drugi mi se obično obraćaju za specifična uputstva o zadacima, a ne za strateške savete o odlukama, što ukazuje na nedostatak poverenja u moje sposobnosti donošenja odluka." },
          { score: 3, text: "Povremeno; smatram se pouzdanim izvorom saveta za teške probleme, i demonstriram rastuće samopouzdanje u svoje donošenje odluka." }
        ]
      },
      // FASETA 11: Strateško vlasništvo
      {
        id: "M21",
        facet: "Strateško vlasništvo",
        text: "Pokrenuta je nova organizaciona strategija ili vizija koja ima za cilj poremećaj tržišta, ali njena veka sa svakodnevnim operativnim radom vašeg tima nije odmah očigledna vašim članovima tima. Kako osiguravate da vaš tim razume i doprinese ovoj strategiji?",
        options: [
          { score: 3, text: "Olakšavam radionice za razlaganje strategije na ostvarive timske ciljeve i metrike, osiguravajući da svaki član tima razume svoj specifičan doprinos široj slici i usklađuje svakodnevne akcije sa strategijom." },
          { score: 1, text: "Prenosim novu strategiju timu u formalnoj prezentaciji, objašnjavajući ciljeve na visokom nivou, i očekujem od članova tima da povežu svoj rad sa njom, često propuštajući strateške veze ili im nedostaje svest o mojoj ulozi u široj slici." },
          { score: 5, text: "Aktivno zagovaram organizacionu strategiju, kontinuirano tražeći i stvarajući prilike za tim da inovira unutar ove vizije. Utičem na druge lidere da usklade svoje napore i pokreću proaktivne doprinose dugoročnom uspehu kompanije, na kraju oblikujući organizacionu strategiju." }
        ]
      },
      {
        id: "M22",
        facet: "Strateško vlasništvo",
        text: "Koliko često proaktivno pokrećete unakrsno funkcionalne diskusije ili saradnje isključivo da biste uskladili rad vašeg tima sa širim organizacionim strategijama, čak i kada to nije eksplicitno zahtevano?",
        options: [
          { score: 5, text: "Često; redovno nastojim da integrišem napore svog tima u širu viziju kompanije i utičem na druge timove ka zajedničkim strateškim ciljevima, pionirski usklađujući strategiju." },
          { score: 1, text: "Retko; moj fokus ostaje prvenstveno unutar zadataka i ciljeva mog tima, često propuštajući šire strateške veze." },
          { score: 3, text: "Povremeno; angažujem se kada se pojave specifične zavisnosti ili sukobi koji zahtevaju usklađivanje, i pokazujem rastuću svest o organizacionom uticaju." }
        ]
      },
      // FASETA 12: Liderstvo vođeno vrednostima
      {
        id: "M23",
        facet: "Liderstvo vođeno vrednostima",
        text: "Susrećete se sa izazovnom situacijom gde poštovanje vrednosti kompanije može doći u sukob sa kratkoročnim dobicima, ili članovi vašeg tima preispituju etičke implikacije odluke. Kako obično vodite u takvoj situaciji?",
        options: [
          { score: 1, text: "Prioritizujem postizanje kratkoročnih rezultata ili izbegavanje neposrednog sukoba, ponekad donoseći odluke koje nisu u skladu sa navedenim organizacionim vrednostima, i pokazujem ograničenu svest o uticaju takvog neusklađivanja." },
          { score: 3, text: "Dosledno odražavam organizacione vrednosti i misiju u svojim akcijama i odlukama, doprinoseći pozitivnoj kulturi. Samostalno usklađujem svoje akcije sa organizacionim vrednostima i promovišem ih unutar tima, osiguravajući da moj tim razume i poštuje ih." },
          { score: 5, text: "Zagovaram i inspirišem integraciju organizacionih vrednosti širom tima, vodeći inicijative za jačanje vrednosti kompanije u timskim praksama. Predviđam izazove i usklađujem timske akcije sa vrednostima, transformišući organizacionu kulturu promovišući donošenje odluka vođeno vrednostima i etičko ponašanje." }
        ]
      },
      {
        id: "M24",
        facet: "Liderstvo vođeno vrednostima",
        text: "Koliko često smatrate da vaše odluke i akcije vidljivo služe kao jasan primer navedenih vrednosti kompanije, što dovodi do jačanja etičke kulture unutar vašeg tima ili odeljenja?",
        options: [
          { score: 5, text: "Dosledno; moje odluke i akcije su široko prepoznate kao oličenje organizacionih vrednosti, inspirišući druge da ih podrže i vidljivo transformišu etičko ponašanje i pozitivnu kulturu tima." },
          { score: 1, text: "Retko; moje akcije se ponekad percipiraju kao nedosledne sa vrednostima, ili se moj tim bori da poveže svakodnevni rad sa etičkim smernicama." },
          { score: 3, text: "Povremeno; moje odluke se generalno usklađuju sa vrednostima, i moj tim razume vezu, demonstrirajući rastuću svest o njihovoj važnosti." }
        ]
      }
    ],
    SKILLS: [
    // STUB: LIČNA EFIKASNOST
    // Faseta 1: Upravljanje prioritetima i vremenom
    {
      id: "S1",
      facet: "Upravljanje prioritetima i vremenom",
      text: "Konstantno se suočavate sa višestrukim, konkurentnim zahtevima 'visokog prioriteta' od različitih zainteresovanih strana i sopstvenog tima, često se osećajući preopterećeno. Koju specifičnu metodu koristite za efikasno prioritizaciju i upravljanje sopstvenim i timskim vremenom?",
      options: [
        { score: 3, text: "Koristim priznatu matricu prioritizacije (npr. hitno/važno, vrednost/napor) ili strukturirani sistem upravljanja zadatima (npr. Trello, Asana) za upravljanje sopstvenim obimom posla i usmeravam prioritete tima, dosledno ispunjavajući operativne rokove." },
        { score: 1, text: "Sklon sam da žongliram zadacima, često radeći prekovremeno ili delegirajući najdostupnijem članu tima, prioritizujući na osnovu najglasnijeg glasa ili najneposrednijeg roka, što često rezultira propuštenim rokovima i osećajem preopterećenosti." },
        { score: 5, text: "Dizajnirao sam i implementirao prilagođeni okvir za optimizaciju vremena (npr. hijerarhijski sistem prioriteta integrisan sa automatizacijom radnog toka, zaštićen raspored 'dubokog rada') koji proaktivno minimizira ometanja i strateški usklađuje i moje lične i timske napore sa ključnim organizacionim ciljevima, inspirišući druge u efikasnosti." }
      ]
    },
    {
      id: "S2",
      facet: "Upravljanje prioritetima i vremenom",
      text: "Koliko dosledno vaš tim ispunjava svoje samonametnute rokove za nehitne, visokovredne strateške inicijative (npr. projekte poboljšanja procesa) kada se suoči sa konkurentnim operativnim pritiscima?",
      options: [
        { score: 1, text: "Retko; strateške inicijative se često odlažu ili napuštaju kada se pojave hitni operativni zahtevi, što ukazuje na borbu sa efikasnom prioritizacijom." },
        { score: 5, text: "Dosledno; aktivno štitim i alociram resurse za strateške inicijative, osiguravajući da napreduju čak i usred operativnih zahteva, što je obeležje izuzetnog upravljanja vremenom." },
        { score: 3, text: "Povremeno; obično ispunjavamo ove rokove, ali ponekad kompromitujemo obim ili kvalitet zbog operativnih pritisaka, što ukazuje na generalno efikasan, ali ne savršeno optimizovan pristup." }
      ]
    },

    // Faseta 2: Rešavanje ličnih problema
    {
      id: "S3",
      facet: "Rešavanje ličnih problema",
      text: "Nastaje kritičan tehnički problem koji zaustavlja operativni proces. Tim nudi različite neproverene hipoteze. Kako usmeravate tim da dijagnostikuje i reši ovaj složeni problem?",
      options: [
        { score: 5, text: "Gledajući izvan neposredne tehničke greške, dizajniram unakrsno funkcionalnu radnu grupu koja ne samo da rešava neposredni problem već i sistematski mapira zavisnosti i potencijalne tačke neuspeha kako bi se arhitektirao otporniji proces, pionirski uvodeći nove okvire." },
        { score: 3, text: "Pokrećem strukturiran proces dijagnostike (npr. koristeći stablo odluka ili sistematsku eliminaciju) da bih objektivno procenio svaku hipotezu i metodički identifikovao osnovni uzrok pre implementacije proverenog rešenja." },
        { score: 1, text: "Brzo identifikujem najverovatniju hipotezu i usmeravam tim da odmah testira to rešenje, oslanjajući se na brzinu da minimiziram zastoje, često se boreći da identifikujem pravi problem." }
      ]
    },
    {
      id: "S4",
      facet: "Rešavanje ličnih problema",
      text: "Kada se bavite složenim problemom, koliko često vaše odabrano rešenje efikasno sprečava istu vrstu problema da se ponovi na duži rok?",
      options: [
        { score: 1, text: "Retko; mnogi problemi koje sam rešavao teže da se ponovo jave kasnije, što ukazuje da se moja rešenja često fokusiraju na simptome." },
        { score: 3, text: "Povremeno; većina rešenja je efikasna, ali se neki problemi mogu ponovo javiti ako se osnovni uslovi promene." },
        { score: 5, text: "Dosledno; moja rešenja su robusna i često dovode do sistemskih promena koje sprečavaju ponavljanje, demonstrirajući majstorstvo." }
      ]
    },

    // Faseta 3: Prilagodljivost
    {
      id: "S5",
      facet: "Prilagodljivost",
      text: "Kompanija objavljuje veliku stratešku promenu koja zahteva od tima potpuni zaokret. Kako upravljate sobom i timom kroz nju?",
      options: [
        { score: 1, text: "Borim se da se prilagodim, često se opirući novim idejama i osećajući se preplavljeno. Moja frustracija može nenamerno povećati anksioznost tima." },
        { score: 3, text: "Prihvatam promenu kao neophodnu, jasno je komuniciram svom timu i marljivo prilagođavam procese i planove da bih se uskladio sa novim smerom." },
        { score: 5, text: "Proaktivno prihvatam promenu kao priliku. Vodim inicijative za poboljšanje prilagodljivosti tima, predviđajući izazove inovativnim rešenjima i podstičući kulturu fleksibilnosti." }
      ]
    },

    // Faseta 4: Taktike upravljanja promenama
    {
      id: "S6",
      facet: "Taktike upravljanja promenama",
      text: "Kompanija uvodi novi ERP sistem koji menja dnevne rutine tima. Kako vodite tim kroz ovu ekstenzivnu promenu?",
      options: [
        { score: 5, text: "Delujem kao 'arhitekta promena', dizajnirajući prilagođene komunikacione strategije, osnažujući agente promena i uspostavljajući povratne petlje za prilagođavanje procesa implementacije na osnovu potreba tima." },
        { score: 3, text: "Razvijam detaljan plan tranzicije koji uključuje faznu implementaciju, mentore i redovne sesije pitanja i odgovora za sistematsko upravljanje usvajanjem novog sistema." },
        { score: 1, text: "Usmravam tim da pohađa obaveznu obuku i pratim usklađenost sa novim sistemom, rešavajući individualna pitanja kako se pojave." }
      ]
    },

    // STUB: KOMUNIKACIJA
    // Faseta 5: Komunikacija zasnovana na vrednostima
    {
      id: "S7",
      facet: "Komunikacija zasnovana na vrednostima",
      text: "Predstavljate strateško ažuriranje zauzetim zainteresovanim stranama. Kako strukturirate komunikaciju?",
      options: [
        { score: 1, text: "Fokusiram se na tačno isporučivanje svih podataka i detalja, pretpostavljajući da će važnost ažuriranja govoriti sama za sebe, ali se često borim da privučem pažnju." },
        { score: 5, text: "Pedantno osmišljavam poruku da bih odmah privukao pažnju 'mamcem', artikulišem specifičnu korist za tu publiku i dizajniram komunikaciju tako da akcija bude put najmanjeg otpora." },
        { score: 3, text: "Strukturiram poruku da bih istakao ključne zaključke, artikulišem opštu vrednost ažuriranja i pružam jasan poziv na akciju." }
      ]
    },

    // Faseta 6: Strateško slušanje
    {
      id: "S8",
      facet: "Strateško slušanje",
      text: "Na sastanku ste sa stranom koja se opire predlogu, ali njeni razlozi nisu jasni. Kako slušate u ovoj situaciji?",
      options: [
        { score: 3, text: "Koristim tehnike aktivnog slušanja poput parafraziranja da bih potvrdio razumevanje i postavljam razjašnjavajuća pitanja o izraženim brigama." },
        { score: 5, text: "Aktivno slušam 'neizrečeno' – osnovne motivacije i strahove – i stvaram siguran prostor za njih da iznesu prave prepreke, omogućavajući nam da rešimo koren problema." },
        { score: 1, text: "Slušam njihove izražene primedbe kako bih formulisao logične kontra-argumente, često propuštajući emocionalni podtekst ili politička ograničenja." }
      ]
    },

    // Faseta 7: Uticaj koji podstiče akciju
    {
      id: "S9",
      facet: "Uticaj koji podstiče akciju",
      text: "Potrebno vam je da drugo odeljenje prioritizuje vaš zahtev, što je za njih dodatni posao. Kako utičete na njih?",
      options: [
        { score: 5, text: "Strateški uokvirujem zahtev u smislu obostrane koristi, proaktivno identifikujući i uklanjajući svako trenje ili prepreke za njihovo učešće." },
        { score: 1, text: "Oslanjam se na direktive, formalne procese ili generičke argumente o 'ciljevima kompanije', što često dovodi do puke usklađenosti bez stvarne akcije." },
        { score: 3, text: "Predstavljam logičan argument zašto je akcija potrebna i trudim se da zahtev bude što jasniji kako bi razumeli šta je potrebno." }
      ]
    },

    // Faseta 8: Navigacija među zainteresovanim stranama
    {
      id: "S10",
      facet: "Navigacija među zainteresovanim stranama",
      text: "Inicijativa zahteva podršku više konkurentnih strana. Kako navigirate ovim odnosima?",
      options: [
        { score: 1, text: "Komuniciram po potrebi, ali često nailazim na otpor zbog neusklađenih interesa, što zahteva česte intervencije za rešavanje sukoba." },
        { score: 3, text: "Proaktivno angažujem ključne strane, artikulišem obostrane koristi i pregovaram kako bih obezbedio resurse, gradeći snažne odnose." },
        { score: 5, text: "Negujem strateške odnose unapred, predviđajući potrebe i usklađujući interese za stvaranje koalicija koje pokreću uspešne ishode širom složenih pejzaža." }
      ]
    },

    // STUB: RAZVOJ TIMA I LJUDI
    // Faseta 9: Osnaživanje delegiranjem
    {
      id: "S11",
      facet: "Osnaživanje delegiranjem",
      text: "Dodeljujete složen projekat članu tima koji se razvija. Kako pristupate delegiranju?",
      options: [
        { score: 5, text: "Strateški biram zadatak zbog razvojnog uticaja, osnažujući člana tima autonomijom i ovlašćenjem za odluke, uz pružanje ciljanog savetovanja za navigaciju preprekama." },
        { score: 3, text: "Jasno definišem obim, ciljeve i metrike uspeha, pružam resurse i uspostavljam redovne provere kako bih pratio napredak i pružao vođenje." },
        { score: 1, text: "Dodeljujem zadatak sa minimalnim objašnjenjem ili zadržavam strogu kontrolu (mikroupravljanje), što često vodi do toga da se član tima oseća sputano." }
      ]
    },

    // Faseta 10: Upravljanje učinkom
    {
      id: "S12",
      facet: "Upravljanje učinkom",
      text: "Zaposleni ispunjava očekivanja, ali nema inicijativu za rast. Kako sprovodite procenu učinka?",
      options: [
        { score: 1, text: "Sumiram prošli učinak kao 'ispunjava očekivanja' i postavljam slične ciljeve za sledeću godinu, fokusirajući se na održavanje nivoa umesto na inspiraciju." },
        { score: 3, text: "Pregledam učinak, priznajem postignuća i kolaborativno postavljam izazovne ciljeve, ocrtavajući specifične oblasti razvoja." },
        { score: 5, text: "Olakšavam dubok razvojni razgovor istražujući aspiracije i skrivene snage, zajednički kreirajući personalizovani plan rasta koji uključuje projekte izvan trenutne uloge." }
      ]
    },

    // Faseta 11: Prepoznavanje i uvažavanje
    {
      id: "S13",
      facet: "Prepoznavanje i uvažavanje",
      text: "Tim postiže značajan uspeh nakon intenzivnog perioda. Kako prepoznajete ovaj uspeh?",
      options: [
        { score: 5, text: "Inoviram u praksama prepoznavanja, povezujući pobede sa strateškim vrednostima i dizajnirajući personalizovane, nezaboravne načine proslave koji značajno poboljšavaju motivaciju." },
        { score: 1, text: "Nudim generičku pohvalu ili kratko priznanje postignuća, često propuštajući prilike za personalizovano prepoznavanje." },
        { score: 3, text: "Pružam personalizovano prepoznavanje za ključne doprinose i slavim pobede tima, motivišući ih kroz dosledno podsticanje pozitivne kulture." }
      ]
    },

    // Faseta 12: Teški razgovori
    {
      id: "S14",
      facet: "Teški razgovori",
      text: "Morate se pozabaviti remetilačkim ponašanjem zaposlenog koje kvari moral. Kako vodite taj razgovor?",
      options: [
        { score: 3, text: "Pripremam specifične primere, objašnjavam uticaj i jasno izlažem očekivanja za promenu, nudeći podršku uz jasnu odgovornost." },
        { score: 1, text: "Direktno navodim problem i upozoravam na posledice ako se nastavi, fokusirajući se na puku usklađenost. Sklon sam da izbegavam teške teme." },
        { score: 5, text: "Pedantno planiram razgovor predviđajući reakcije. Uokvirujem ga oko zajedničkih vrednosti, usmeravajući zaposlenog da sam identifikuje uticaj i zajednički kreiramo rešenje." }
      ]
    }
  ],
  INFLUENCE: [
    // STUB: KAKO ČINIM DA SE MOJ TIM OSEĆA?
    // Faseta 1: Autentično prisustvo
    {
      id: "I1",
      facet: "Autentično prisustvo",
      text: "Prvi put se obraćate novom, eksternom strateškom partneru. Kako pristupate izgradnji kredibiliteta i istinske veze u takvoj situaciji?",
      options: [
        { score: 3, text: "Delim relevantno profesionalno iskustvo i izražavam iskreno interesovanje za rad partnera, tražeći zajednički profesionalni teren za izgradnju veze." },
        { score: 1, text: "U velikoj meri se oslanjam na unapred pripremljen scenario ili formalno predstavljanje, fokusirajući se na ključne poruke kompanije, što ponekad može delovati bezlično." },
        { score: 5, text: "Povezujem se deleći lične uvide ili ranjivosti gde je prikladno, demonstrirajući potpunu usklađenost reči i vrednosti, podstičući neposredno poverenje i zračeći autentičnošću." }
      ]
    },

    // Faseta 2: Emocionalna inteligencija
    {
      id: "I2",
      facet: "Emocionalna inteligencija",
      text: "Organizacioni događaj (npr. reorganizacija) stvara anksioznost u timu. Kako upravljate sopstvenim emocijama i klimom oko sebe?",
      options: [
        { score: 5, text: "Vešto navigiram složenim emocionalnim pejzažima, aktivno smanjujući tenziju i stvarajući okruženje psihološke sigurnosti koje omogućava drugima da konstruktivno obrade emocije." },
        { score: 1, text: "Moje sopstvene emocionalne reakcije (stres, frustracija) su ponekad vidljive i mogu nenamerno povećati anksioznost ili smanjiti moral kod ljudi oko mene." },
        { score: 3, text: "Održavam profesionalnu smirenost i komuniciram na racionalan način, pomažući da se stabilizuje klima i spreči širenje panike." }
      ]
    },

    // Faseta 3: Inkluzija i pripadnost
    {
      id: "I3",
      facet: "Inkluzija i pripadnost",
      text: "Vodite tim sa različitim pozadinama. Kako osiguravate da se svi glasovi čuju i vrednuju u kritičnim procesima donošenja odluka?",
      options: [
        { score: 1, text: "Olakšavam diskusije, ali smatram da se određene perspektive (tiši pojedinci ili noviji zaposleni) ponekad previđaju u konačnim odlukama." },
        { score: 3, text: "Aktivno tražim input od različitih članova tima i osiguravam okruženje poštovanja gde se različita gledišta cene." },
        { score: 5, text: "Implementiram strategije za aktivno pojačavanje različitih perspektiva, čak i suprotstavljenih, što rezultira robusnijim rešenjima i snažnim osećajem pripadnosti." }
      ]
    },

    // Faseta 4: Izgradnja poverenja
    {
      id: "I4",
      facet: "Izgradnja poverenja",
      text: "Donosite tešku odluku koja negativno utiče na pojedince, ali je neophodna. Kako održavate poverenje tokom ovog procesa?",
      options: [
        { score: 3, text: "Objašnjavam odluku transparentno, detaljno obrazlažući kompromise i nudim podršku onima na koje je negativno uticalo." },
        { score: 5, text: "Priznajem lični uticaj na pogođene unutar strateškog konteksta i proaktivno pratim kako bih ponovo izgradio i ojačao odnose na temeljima ranijeg poverenja." },
        { score: 1, text: "Direktno i čvrsto prenosim odluku, naglašavajući potrebe većine i izbegavam produženu diskusiju kako bih minimizirao negativne reakcije." }
      ]
    },

    // STUB: KAKO PODSTIČEM AKCIJU?
    // Faseta 5: Vizionarska inspiracija
    {
      id: "I5",
      facet: "Vizionarska inspiracija",
      text: "Tim je dobio gotovo nedostižan cilj i moral opada. Kako inspirišete tim da se sa entuzijazmom uhvati u koštac sa tim?",
      options: [
        { score: 1, text: "Ponavljam cilj i njegovu važnost, motivišući tim jasnim očekivanjima i naglašavanjem posledica ako se cilj ne ispuni." },
        { score: 5, text: "Slikam živopisnu sliku budućnosti u kojoj je cilj postignut, povezujući rad tima sa širom svrhom i podstičući osećaj zajedničke avanture." },
        { score: 3, text: "Razlažem cilj na manje prekretnice, slavim napredak i ističem kako će postizanje cilja doneti korist pojedinim članovima tima." }
      ]
    },

    // Faseta 6: Osnaživanje i odgovornost
    {
      id: "I6",
      facet: "Osnaživanje i odgovornost",
      text: "Složena inicijativa zahteva značajno individualno vlasništvo. Kako osnažujete tim dok osiguravate odgovornost?",
      options: [
        { score: 3, text: "Delegiram odgovornosti sa jasnim ciljevima, pružam resurse i uspostavljam redovne provere napretka i izazova." },
        { score: 5, text: "Definišem viziju, ali dajem timu punu ovlašćenje da dizajnira strategiju izvršenja, intervenišući samo kao savetnik, što rezultira izuzetnom odgovornošću." },
        { score: 1, text: "Dodeljujem projekat uz detaljan plan akcije i pažljivo pratim svaki korak, često intervenišući da odobrim kritične odluke." }
      ]
    },

    // Faseta 7: Liderstvo u promenama
    {
      id: "I7",
      facet: "Liderstvo u promenama",
      text: "Transformacija zahteva od vašeg tima da zagovara nove načine rada. Kako utičete na njih i druge grupe da prihvate promenu?",
      options: [
        { score: 5, text: "Inspirišem duboku posvećenost transformišući otpor u aktivno zagovaranje od strane mog tima, koji zatim utiče na druge da postanu deo pokreta za promenu." },
        { score: 1, text: "Osiguravam da se moj tim pridržava zahteva, ali je njihov entuzijazam ili uticaj na druge grupe ograničen." },
        { score: 3, text: "Objašnjavam strateško obrazloženje i vodim tim kroz tranziciju, koristeći logične argumente da utičem na druge timove." }
      ]
    },

    // Faseta 8: Strateški uticaj
    {
      id: "I8",
      facet: "Strateški uticaj",
      text: "Zagovarate inicijativu visokog rizika koja izaziva postojeće norme. Kako utičete na više rukovodstvo da podrži ovu ideju?",
      options: [
        { score: 1, text: "Predstavljam detaljnu poslovnu analizu (ROI i rizike), ali se često borim da dobijem punu podršku bez značajnih kompromisa u viziji." },
        { score: 3, text: "Gradim snažnu poslovnu analizu i sarađujem sa ključnim zainteresovanim stranama kako bih dobio podršku unutar postojećih struktura." },
        { score: 5, text: "Mapiram politički pejzaž, prilagođavam ubedljive argumente svakom donosiocu odluka i vešto ih kooptiram u šampione inicijative, menjajući organizacioni smer." }
      ]
    }
  ]
  }
};