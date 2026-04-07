import { ServiceData } from '@/types/service'

export const SERVICES: ServiceData[] = [
  {
    slug: 'hemstadning',
    title: 'Hemstädning',
    seoTitle: 'Hemstädning Göteborg | Karla Cleaning Crew',
    seoDescription: 'Professionell hemstädning i Göteborg med RUT-avdrag. Spara tid och pengar med vår miljövänliga städservice.',
    heroTagline: 'Professionell hemstädning som ger dig mer fritid',
    description:
      'Hemstädning du kan lita på. Vi erbjuder skräddarsydd hemstädning för Göteborg och omgivning med RUT-avdrag, miljövänliga produkter och flexibel schemaläggning.',
    included: [
      'Grundlig dammsugning och vagntvättning av alla golv',
      'Dammtorkning av möbler och hyllor',
      'Köksrengöring (bänkar, spis, mikrovågsugn, kylskåp utsida)',
      'Badrumsrengöring (toalett, tvättställ, kakel, spegel)',
      'Tvätt av dörrklinkor och ljusbrytare',
      'Bäddning av sängar med fritt överskud',
      'Skräphantering och bortforsling',
      'Miljövänliga produkter genomgående',
    ],
    rutEligible: true,
    ecoFriendly: true,
    imageSrc: '/images/services/hemstadning.jpg',
    faq: [
      {
        question: 'Hur ofta rekommenderar ni hemstädning?',
        answer: 'Vi rekommenderar hemstädning varannan vecka för de flesta hushåll. Många av våra kunder föredrar veckovis städning, medan vissa är nöjda med månatlig. Det beror helt på dina behov och budget.',
      },
      {
        question: 'Vilken skillnad gör RUT-avdraget?',
        answer: 'RUT-avdraget kan reducera din kostnad med upp till 50%, beroende på dina skattsedlar. Hemstädning uppfyller ofta kraven för RUT-avdrag. Vi hjälper gärna dig att räkna ut besparingen.',
      },
      {
        question: 'Är det säkert att låta främlingar in i hemmet?',
        answer: 'Ja, absolut. Alla våra städare är background-checkade, försäkrade och tränade. Vi kan också ordna att samma person städar ditt hem varje gång om du föredrar det.',
      },
      {
        question: 'Vad görs åt värdefulla saker under städningen?',
        answer: 'Vi är mycket försiktiga med dina ägodelar. Du kan säga till oss vad som är värdefullt eller känsligt, och vi hanterar det med extra vård. Allting är försäkrat.',
      },
      {
        question: 'Kan ni anpassa städningen efter mina behov?',
        answer: 'Ja, vi skapar en personlig städchecklista för ditt hem. Om du vill att vi fokuserar på vissa områden eller använder speciella produkter (allergivänliga, etc.), berätta bara.',
      },
    ],
  },
  {
    slug: 'flyttstad',
    title: 'Flyttstäd',
    seoTitle: 'Flyttstäd Göteborg | Karla Cleaning Crew | Mäklarsamfundets Riktlinjer',
    seoDescription: 'Professionell flyttstäd i Göteborg. Vi följer Mäklarsamfundets riktlinjer. Städgaranti & flexibel schemaläggning.',
    heroTagline: 'Garanterad professionell flyttstäd för din uthyrning',
    description:
      'Flyttstäd som uppfyller alla krav. Vi följer Mäklarsamfundets officiella riktlinjer för flyttstäd och erbjuder en städgaranti för din sinnesfrid.',
    included: [
      'Grundlig dammsugning av alla golv',
      'Vagntvättning av alla hårda golv',
      'Vita lister och dörrkarmar (damm och smuts)',
      'Radiatormatning och värmeslinga',
      'Badrumsrengöring (kakel, toalett, badkar, tvättställ)',
      'Köksrengöring (spis, kylskåp, diskmaskin)',
      'Fönsterputs in- och utsida med karmar',
      'Garderobsrengöring (in- och utsida)',
      'Lysrör och lampor rengöring',
      'Kvalitetskontroll enligt Mäklarsamfundets standard',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/flyttstad.jpg',
    faq: [
      {
        question: 'Följer ni Mäklarsamfundets officiella riktlinjer?',
        answer: 'Ja, vi följer Mäklarsamfundets officiella riktlinjer för flyttstäd. Det säkerställer att din tidigare bostad lämnas i exakt det tillstånd som hyresvärden eller köparen förväntar sig.',
      },
      {
        question: 'Hur snabbt kan ni komma och städa?',
        answer: 'Vi kan ofta komma ut inom några dagar. Om du behöver det brådskande innan du måste lämna nycklar, kontakta oss så hittar vi en lösning.',
      },
      {
        question: 'Vad ingår i flyttstäden?',
        answer: 'En komplett flyttstäd inkluderar allt från dammsugning till fönsterputs, badrumsrengöring, köksrengöring och radiatormatning. Se vår lista med vad som ingår för detaljer.',
      },
      {
        question: 'Gör ni städgaranti på flyttstäden?',
        answer: 'Ja, vi erbjuder en städgaranti. Om något inte är nöjaktigt efter städningen, kommer vi tillbaka och fixar det utan extra kostnad.',
      },
      {
        question: 'Behöver jag vara närvarande under städningen?',
        answer: 'Nej, du behöver inte vara närvarande. Vi hämtar nycklarna dagen innan eller samma dag, och lämnar dem tillbaka när städningen är klar.',
      },
      {
        question: 'Hur mycket kostar en flyttstäd?',
        answer: 'Priset beror på lägenhetens storlek och skick. Vi ger gärna en kostnadsfri offert när du kontaktar oss med information om din lägenhet.',
      },
    ],
  },
  {
    slug: 'fonsterputs',
    title: 'Fönsterputs',
    seoTitle: 'Fönsterputs Göteborg | Karla Cleaning Crew | Miljövänlig & Professionell',
    seoDescription: 'Professionell fönsterputs för hem och kontor i Göteborg. Kristallklara fönster med miljövänliga produkter.',
    heroTagline: 'Kristallklara fönster för bättre ljus och utsikt',
    description:
      'Fönsterputs som ger verklig skillnad. Vi rensar både in- och utsida, karmar, spröjs och sills med miljövänliga produkter för ett perfekt resultat.',
    included: [
      'Fönsterputs in- och utsida',
      'Fönsterkarmor och spröjsar rengöring',
      'Fönsterbänkar och sills',
      'Miljövänliga, kemikalifria produkter',
      'Torkade med mjuk trasa för fläckfritt resultat',
      'Flexibel schemaläggning året runt',
    ],
    rutEligible: true,
    ecoFriendly: true,
    imageSrc: '/images/services/fonsterputs.jpg',
    faq: [
      {
        question: 'Hur ofta bör jag få fönstren putsa?',
        answer: 'Vi rekommenderar fönsterputs två gånger per år – en gång på våren och en gång på hösten. Miljöer nära vägen eller i stormiga områden kan behöva oftare.',
      },
      {
        question: 'Kan ni putsa högt belägna fönster?',
        answer: 'Ja, vi har säker utrustning för att putsa fönster på högre våningar. Vi använder säker lift och följer all säkerhetsprotokoller.',
      },
      {
        question: 'Vilka miljövänliga produkter använder ni?',
        answer: 'Vi använder huvudsakligen vatten och en liten mängd ekologisk, ECOS-märkt rengöringsvätska. Alla produkter är biologiskt nedbrytbara och giftfria.',
      },
      {
        question: 'Hur lång tid tar en fönsterputs?',
        answer: 'Tiden beror på antalet fönster och deras storlek. För ett genomsnittligt enfamiljshus tar det vanligtvis 2–3 timmar.',
      },
      {
        question: 'Erbjuder ni RUT-avdrag för fönsterputs?',
        answer: 'Ja, vi erbjuder RUT-avdrag för hemstädning- och fönsterputs-tjänster. Du kan spara upp till 50% med RUT-avdraget.',
      },
    ],
  },
  {
    slug: 'byggstad',
    title: 'Byggstäd',
    seoTitle: 'Byggstäd Göteborg | Karla Cleaning Crew | ID-06 Certifierad',
    seoDescription: 'Byggstäd efter renovering och nybygge i Göteborg. ID-06 certifierad för professionell hantering av byggsmutsa.',
    heroTagline: 'ID-06 byggstäd efter nybygge och renovering',
    description:
      'Byggstäd från professionella. Vårt ID-06 certifierade team hanterar alla typer av byggsmutsa, målningsrester och konstruktionssmuts för ett perfekt färdigt resultat.',
    included: [
      'Damm- och smutsborttagning från väggar och tak',
      'Golfrengöring och golvvagntvättning',
      'Målarband- och färgborttagning från fönster',
      'Köksapparater och vitvaror rengöring',
      'Badrumsrengöring (fluggor och badrumsfukt)',
      'Lysrör och armaturrengöring',
      'Hela verktygsbeslaget rekommenderas',
      'ID-06 certifierad för miljö och kvalité',
      'Säkerhet och dokumentation enligt myndighetskrav',
    ],
    rutEligible: false,
    ecoFriendly: false,
    imageSrc: '/images/services/byggstad.jpg',
    faq: [
      {
        question: 'Vad är ID-06 certifiering?',
        answer: 'ID-06 är en officiell svensk certifiering för byggstädare. Den garanterar att vi följer strikt miljö- och säkerhetsstandarder vid hantering av byggsmutsa och farligt avfall.',
      },
      {
        question: 'Kan ni hantera alla typer av byggsmutsa?',
        answer: 'Ja, vi kan hantera allt från målningsrester och damm till större konstruktionsavfall. Vi sorterar och återvinner så mycket som möjligt enligt miljöregler.',
      },
      {
        question: 'När bör jag booka byggstäd?',
        answer: 'Du bör booka byggstäd när projektet är färdigt och innan du tar emot nycklarna eller flyttar in. Vi rekommenderar att boka 2–3 veckor innan du behöver lokalen.',
      },
      {
        question: 'Är byggstädning dyrare än vanlig städning?',
        answer: 'Ja, byggstädning är vanligtvis dyrare än vanlig städning eftersom det kräver specialutrustning, extra tid och miljöcertifiering. Men kvaliteten är väl värd det.',
      },
      {
        question: 'Kan ni garantera att allt är rent?',
        answer: 'Ja, vi garanterar att projektet är helt rent och klart för användning. Om vi missar något under inspektionen, kommer vi tillbaka och fixar det.',
      },
      {
        question: 'Hur beräknas priset för byggstäd?',
        answer: 'Priset baseras på projektets storlek, typ av renoveringsarbete och komplexitet. Vi ger gärna ett kostnadsfritt besök för att uppskatta kostnaden.',
      },
    ],
  },
  {
    slug: 'kontorsstadning',
    title: 'Kontorsstädning',
    seoTitle: 'Kontorsstädning Göteborg | Karla Cleaning Crew | Skräddarsydd & Professionell',
    seoDescription: 'Professionell kontorsstädning för företag i Göteborg. Fast kontaktperson, skräddarsydd checklista & flexibel schemaläggning.',
    heroTagline: 'Ett rent kontor ökar produktiviteten och välmåendet',
    description:
      'Kontorsstädning som fungerar för ditt företag. Vi erbjuder skräddarsydd schemaläggning, en fast kontaktperson och en anpassad städchecklista för dina specifika behov.',
    included: [
      'Daglig dammsugning av golv och mattor',
      'Vagntvättning av hårda golv',
      'Dammtorkning av arbetsytor och skrivbord',
      'Fönster- och spegelputs',
      'Köksrengöring (bänkar, spis, kylskåp, diskmaskin)',
      'Badrumsrengöring (toaletter, handfat, speglar)',
      'Skräphantering och återvinning',
      'Påfyllning av toalettpapper, handtvål och soppåsar',
      'Fast dedikerad kontaktperson',
      'Flexibel schemaläggning anpassad till er verksamhet',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/kontorsstadning.jpg',
    faq: [
      {
        question: 'Kan ni städa utanför arbetstimmar?',
        answer: 'Ja, vi kan städa på kvällar, nätter eller helger om det passar bättre för er verksamhet. Vi är flexibla med schemaläggningen.',
      },
      {
        question: 'Behöver vi vara närvarande under städningen?',
        answer: 'Nej, vi kan städa när kontoret är tomt. Du ger oss tillgång, och vi städar enligt den avtalade planen.',
      },
      {
        question: 'Vad är en skräddarsydd checklista?',
        answer: 'Vi skapar en personlig städchecklista baserad på ditt kontors behov och layout. Våra städare följer den exakt varje gång för konsistens.',
      },
      {
        question: 'Vad gör en fast kontaktperson?',
        answer: 'Din dedikerade kontaktperson är ansvarig för att allt går enligt plan. Du kan alltid kontakta dem med frågor eller önskemål om ändringar.',
      },
      {
        question: 'Hur ofta rekommenderar ni kontorsstädning?',
        answer: 'Vi rekommenderar daglig eller två gånger per vecka för de flesta kontor. Vissa företag föredrar två gånger per vecka eller veckovis. Vi kan skapa ett schema som passar.',
      },
      {
        question: 'Kan ni hantera speciella yrkesmiljöer?',
        answer: 'Ja, vi har erfarenhet av att städa medicinska kliniker, laboratorier och andra specialiserade miljöer med höga hygienistandarder.',
      },
    ],
  },
  {
    slug: 'lokalvard',
    title: 'Lokalvård',
    seoTitle: 'Lokalvård Göteborg | Karla Cleaning Crew | Skolor, Sjukhus & Kontor',
    seoDescription: 'Lokalvård för kontor, skolor, sjukhus och offentliga miljöer i Göteborg. Professionell och miljövänlig.',
    heroTagline: 'Professionell lokalvård för samhällesviktiga miljöer',
    description:
      'Lokalvård för alla miljöer. Vi är specialiserade på renföring av större lokaler som kontor, skolor, sjukhus och butiker med flexibel schemaläggning och miljövänliga metoder.',
    included: [
      'Daglig lokalunderhåll anpassat efter miljö',
      'Golvvård och vagntvättning',
      'Fönster- och glasruteputs',
      'Påfyllning av förbrukningsvaror (tvål, handduk, toalettpapper)',
      'Skräphantering och återvinning',
      'Regelbunden djuprengöring (månads- eller kvartalsvis)',
      'Golvpolering och vård för ljus- och öppna ytor',
      'Möbel- och möbelytor dammtorkning',
      'Helt skräddarsydd schemaläggning',
      'Miljövänliga produkter och metoder',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/lokalvard.jpg',
    faq: [
      {
        question: 'Vad är skillnaden mellan kontorsstädning och lokalvård?',
        answer: 'Kontorsstädning fokuserar på små till medelstora kontor. Lokalvård är för större miljöer som skolor, sjukhus och butiker, och kräver ofta mer avancerad utrustning och specialiserad kunskap.',
      },
      {
        question: 'Kan ni städa skolor och sjukhus?',
        answer: 'Ja, vi har erfarenhet av att städa både skolor och sjukhus. Vi förstår de höga hygienistandarderna och kan anpassa oss till deras specifika behov.',
      },
      {
        question: 'Vilka miljöer kan ni hantera?',
        answer: 'Vi kan hantera kontor, skolor, sjukhus, butiker, bibliotek, idrottshallar och andra större offentliga eller privata lokaler. Kontakta oss för att diskutera dina specifika behov.',
      },
      {
        question: 'Erbjuder ni daglig städning eller bara veckovisa?',
        answer: 'Vi erbjuder både daglig och veckovisa städning, beroende på din miljös behov. Vi kan också göra specialiserad djuprengöring på schemalagda dagar.',
      },
      {
        question: 'Hur beräknas priset för lokalvård?',
        answer: 'Priset baseras på lokalens storlek, typ av miljö och hur ofta städningen behövs. Vi ger gärna ett kostnadsfritt besök och offert.',
      },
      {
        question: 'Kan ni hantera golvpolering och behandling?',
        answer: 'Ja, vi erbjuder professionell golvvård inklusive polering, behandling och skyddande förseglings för olika golvtyper.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug)
}
