/**
 * LOKALA STÄD-LANDNINGSSIDOR
 *
 * Varje stad får en egen, unik sida på /stad/[slug] som riktar in sig på
 * lokala sökningar (t.ex. "städföretag kungsbacka", "städfirma mölndal").
 *
 * VIKTIGT: Innehållet ska vara unikt per stad – Google straffar tunna
 * "doorway pages" med kopierad text. Skriv lokal, specifik copy.
 */

export interface CityData {
  /** URL-slug, t.ex. 'kungsbacka' → /stad/kungsbacka */
  slug: string
  /** Stadens namn i nominativ, t.ex. 'Kungsbacka' */
  name: string
  /** H1 på sidan – innehåller huvudsökordet */
  h1: string
  /** <title> – primärt sökord först */
  seoTitle: string
  /** Meta description, 150–160 tecken, säljande + sökord */
  seoDescription: string
  /** Kort intro-stycke under H1 (lokal vinkel) */
  intro: string
  /** 2–3 stycken brödtext som beskriver tjänsten i staden (unik per stad) */
  body: string[]
  /** Områden/stadsdelar vi nämner för lokal relevans */
  areas: string[]
  /** Lokala vanliga frågor (unika svar per stad) */
  faq: { question: string; answer: string }[]
  /** Restid/närhet-mening som bygger lokal trovärdighet */
  proximity: string
}

export const CITIES: CityData[] = [
  {
    slug: 'kungsbacka',
    name: 'Kungsbacka',
    h1: 'Städföretag i Kungsbacka',
    seoTitle: 'Städföretag Kungsbacka | Hemstäd & Flyttstäd – Karla Cleaning Crew',
    seoDescription:
      'Letar du efter en pålitlig städfirma i Kungsbacka? Vi erbjuder hemstädning, flyttstäd & fönsterputs med RUT-avdrag. ⭐ 5,0 på Google. Offert inom 24h.',
    intro:
      'Karla Cleaning Crew är städföretaget som tar hand om hem och företag i hela Kungsbacka kommun – från centrala Kungsbacka till Onsala, Fjärås och Kullavik. Vi kombinerar lokal närvaro med tio års erfarenhet och miljövänliga produkter.',
    body: [
      'Som ett städföretag verksamt i Kungsbacka vet vi att kraven skiljer sig mellan en villa i Onsala, en lägenhet i centrum och ett kontor i Kungsbacka företagspark. Därför skräddarsyr vi alltid städningen efter ditt hem eller din verksamhet – ingen mall, utan en plan som passar just dig.',
      'Vi erbjuder återkommande hemstädning med RUT-avdrag (du betalar bara halva arbetskostnaden), flyttstäd enligt Mäklarsamfundets riktlinjer med städgaranti, samt fönsterputs, byggstäd och kontorsstädning. Alla våra städare är försäkrade, bakgrundskontrollerade och utbildade.',
      'Bor du i Kungsbacka och vill ha samma trygga städare varje gång? Det fixar vi. Hör av dig så får du en kostnadsfri offert inom 24 timmar – utan bindningstid och utan dolda avgifter.',
    ],
    areas: ['Kungsbacka centrum', 'Onsala', 'Fjärås', 'Kullavik', 'Anneberg', 'Vallda', 'Särö'],
    proximity:
      'Vi är baserade i södra Göteborg och har bara en kort bilresa till Kungsbacka – det gör oss både snabba och flexibla för dig som bor här.',
    faq: [
      {
        question: 'Har ni städare som arbetar i Kungsbacka?',
        answer:
          'Ja, vi städar regelbundet i hela Kungsbacka kommun – inklusive Onsala, Fjärås, Kullavik och Särö. Eftersom vi är baserade i södra Göteborg har vi nära till er.',
      },
      {
        question: 'Vad kostar hemstädning i Kungsbacka?',
        answer:
          'Priset beror på bostadens storlek och hur ofta du vill ha städat. Med RUT-avdrag betalar du bara halva arbetskostnaden. Kontakta oss så räknar vi fram ett exakt pris kostnadsfritt.',
      },
      {
        question: 'Kan ni göra flyttstäd i Kungsbacka med kort varsel?',
        answer:
          'Ofta ja. Vi kan i många fall komma inom några dagar i Kungsbacka-området. Har du bråttom inför nyckelöverlämning – ring oss så löser vi det.',
      },
      {
        question: 'Erbjuder ni RUT-avdrag för kunder i Kungsbacka?',
        answer:
          'Ja. RUT-avdraget gäller oavsett var i Sverige du bor, så länge tjänsten kvalificerar. För hemstädning och fönsterputs sköter vi avdraget direkt på fakturan.',
      },
    ],
  },
  {
    slug: 'molndal',
    name: 'Mölndal',
    h1: 'Städfirma i Mölndal',
    seoTitle: 'Städfirma Mölndal | Hemstädning, Flyttstäd & Kontor – Karla Cleaning Crew',
    seoDescription:
      'Professionell städfirma i Mölndal. Hemstädning med RUT-avdrag, flyttstäd med garanti, kontorsstädning & fönsterputs. ⭐ 5,0 på Google. Gratis offert.',
    intro:
      'Karla Cleaning Crew är städfirman som hjälper privatpersoner och företag i Mölndal med allt från återkommande hemstädning till flyttstäd och kontorsstädning. Lokal, pålitlig och med tio års erfarenhet.',
    body: [
      'Mölndal växer snabbt – nya bostäder i centrum, villaområden i Kållered och Lindome, och ett växande näringsliv. Vi har lång erfarenhet av att städa både i moderna lägenheter och äldre villor i området, och anpassar alltid arbetet efter just din bostad.',
      'För privatpersoner erbjuder vi hemstädning och fönsterputs med RUT-avdrag samt flyttstäd enligt Mäklarsamfundets riktlinjer. För företag i Mölndal sköter vi kontorsstädning och lokalvård med fast kontaktperson och flexibla tider – dag, kväll eller helg.',
      'Vill du ha en städfirma i Mölndal som faktiskt svarar när du hör av dig? Vi återkommer med en kostnadsfri offert inom 24 timmar. Inga dolda avgifter, ingen bindningstid.',
    ],
    areas: ['Mölndal centrum', 'Kållered', 'Lindome', 'Åby', 'Krokslätt', 'Toltorpsdalen'],
    proximity:
      'Mölndal ligger granne med vår bas i södra Göteborg – vi är på plats hos dig snabbt och utan långa restider.',
    faq: [
      {
        question: 'Städar ni i hela Mölndal?',
        answer:
          'Ja, vi täcker hela Mölndal inklusive Kållered, Lindome, Åby och Krokslätt. Vi ligger nära, så restiden är kort.',
      },
      {
        question: 'Kan ni sköta kontorsstädning för företag i Mölndal?',
        answer:
          'Absolut. Vi erbjuder kontorsstädning och lokalvård i Mölndal med fast kontaktperson, tydliga priser och städning på de tider som passar er verksamhet.',
      },
      {
        question: 'Får jag RUT-avdrag på hemstädning i Mölndal?',
        answer:
          'Ja. Vi drar av RUT direkt på fakturan för hemstädning och fönsterputs, så du betalar bara halva arbetskostnaden.',
      },
      {
        question: 'Hur snabbt kan ni starta?',
        answer:
          'Ofta inom en vecka för återkommande hemstädning. Flyttstäd kan vi i många fall lösa med kortare varsel. Hör av dig så hittar vi en tid.',
      },
    ],
  },
  {
    slug: 'partille',
    name: 'Partille',
    h1: 'Städning i Partille',
    seoTitle: 'Städning Partille | Hemstäd & Flyttstäd med RUT – Karla Cleaning Crew',
    seoDescription:
      'Söker du städning i Partille? Vi erbjuder hemstädning, flyttstäd & fönsterputs med RUT-avdrag och städgaranti. ⭐ 5,0 på Google. Kostnadsfri offert inom 24h.',
    intro:
      'Karla Cleaning Crew erbjuder professionell städning i Partille – för dig som vill ha mer fritid och ett alltid rent hem. Hemstädning, flyttstäd, fönsterputs och företagsstädning, alltid med miljövänliga produkter.',
    body: [
      'I Partille möter vi allt från radhus i Sävedalen till villor i Jonsered och lägenheter i centrum. Vi tar oss tid att förstå hur just du vill ha det, och samma städare kan komma varje gång om du föredrar det – tryggt och förutsägbart.',
      'Återkommande hemstädning och fönsterputs ger RUT-avdrag, vilket halverar arbetskostnaden. Ska du flytta hjälper vi dig med flyttstäd enligt Mäklarsamfundets riktlinjer och städgaranti – behöver du komma tillbaka, fixar vi det utan extra kostnad.',
      'Hör av dig så får du en kostnadsfri offert för städning i Partille inom 24 timmar. Du binder dig inte till något.',
    ],
    areas: ['Partille centrum', 'Sävedalen', 'Jonsered', 'Furulund', 'Öjersjö'],
    proximity:
      'Partille ligger strax öster om Göteborg och är lätt för oss att nå – du får snabb service utan att betala för långa restider.',
    faq: [
      {
        question: 'Erbjuder ni återkommande hemstädning i Partille?',
        answer:
          'Ja, vi städar i hela Partille – Sävedalen, Jonsered, Furulund och Öjersjö – varje vecka, varannan vecka eller enligt det schema som passar dig.',
      },
      {
        question: 'Ingår städgaranti vid flyttstäd i Partille?',
        answer:
          'Ja. Om något inte blivit nöjaktigt efter flyttstäden kommer vi tillbaka och åtgärdar det utan extra kostnad.',
      },
      {
        question: 'Kan jag få samma städare varje gång?',
        answer:
          'Ja, det erbjuder vi gärna. Många kunder i Partille uppskattar tryggheten i att känna igen sin städare.',
      },
      {
        question: 'Hur fungerar RUT-avdraget?',
        answer:
          'Vi drar av RUT direkt på fakturan för hemstädning och fönsterputs. Du betalar bara halva arbetskostnaden – upp till skatteverkets gräns.',
      },
    ],
  },
  {
    slug: 'hisingen',
    name: 'Hisingen',
    h1: 'Städning på Hisingen',
    seoTitle: 'Städning Hisingen | Hemstäd, Flyttstäd & Kontor – Karla Cleaning Crew',
    seoDescription:
      'Städfirma på Hisingen i Göteborg. Hemstädning med RUT, flyttstäd med garanti, fönsterputs & kontorsstädning. ⭐ 5,0 på Google. Gratis offert inom 24h.',
    intro:
      'Karla Cleaning Crew städar i hela Hisingen – från Lundby och Kyrkbyn till Torslanda och Backa. Privat hemstädning, flyttstäd och städning för företag, alltid med miljövänliga produkter och full försäkring.',
    body: [
      'Hisingen är stort och varierat – villaområden i Torslanda, lägenheter i Lundby och industri- och kontorsmiljöer i Backa och Hisings Backa. Vi har erfarenhet av alla typer och anpassar städningen efter både bostad och verksamhet.',
      'Privatpersoner får RUT-avdrag på hemstädning och fönsterputs, och vi gör flyttstäd enligt Mäklarsamfundets riktlinjer med städgaranti. Företag på Hisingen kan boka kontorsstädning och lokalvård med fast kontaktperson och flexibla tider.',
      'Vill du ha en pålitlig städfirma på Hisingen? Kontakta oss för en kostnadsfri offert inom 24 timmar – utan bindningstid.',
    ],
    areas: ['Lundby', 'Kyrkbyn', 'Torslanda', 'Backa', 'Hisings Backa', 'Biskopsgården', 'Brunnsbo'],
    proximity:
      'Vi tar oss enkelt till hela Hisingen och planerar rutterna effektivt – det håller dina restidskostnader nere.',
    faq: [
      {
        question: 'Vilka områden på Hisingen städar ni i?',
        answer:
          'Vi städar i hela Hisingen, bland annat Lundby, Kyrkbyn, Torslanda, Backa, Biskopsgården och Brunnsbo.',
      },
      {
        question: 'Kan ni städa både hem och kontor på Hisingen?',
        answer:
          'Ja. Vi erbjuder hemstädning och fönsterputs med RUT till privatpersoner, samt kontorsstädning och lokalvård till företag på Hisingen.',
      },
      {
        question: 'Gör ni flyttstäd i Torslanda och Lundby?',
        answer:
          'Ja, vi gör flyttstäd i hela Hisingen enligt Mäklarsamfundets riktlinjer, med städgaranti.',
      },
      {
        question: 'Hur snabbt kan jag få en offert?',
        answer:
          'Inom 24 timmar. Fyll i formuläret eller ring oss, så återkommer vi med ett personligt pris.',
      },
    ],
  },
  {
    slug: 'majorna',
    name: 'Majorna',
    h1: 'Städning i Majorna & Linné',
    seoTitle: 'Städning Majorna & Linné | Hemstäd & Flyttstäd – Karla Cleaning Crew',
    seoDescription:
      'Hemstädning och flyttstäd i Majorna, Linné och Centrala Göteborg. RUT-avdrag, miljövänligt & städgaranti. ⭐ 5,0 på Google. Kostnadsfri offert inom 24h.',
    intro:
      'Karla Cleaning Crew erbjuder hemstädning, flyttstäd och fönsterputs i Majorna, Linné och centrala Göteborg. Vana vid äldre landshövdingehus och sekelskifteslägenheter – med rätt metoder och miljövänliga produkter.',
    body: [
      'Majorna och Linné har en alldeles egen karaktär – charmiga landshövdingehus, sekelskiftesvåningar och vackra trägolv som kräver rätt hantering. Vi vet hur man städar dem skonsamt och noggrant, utan att riskera ytor och material.',
      'Du får RUT-avdrag på återkommande hemstädning och fönsterputs, och flyttstäd görs enligt Mäklarsamfundets riktlinjer med städgaranti. Bor du i en bostadsrätt och behöver flyttstäd inför försäljning? Det är en av våra vanligaste uppdrag i området.',
      'Hör av dig för en kostnadsfri offert på städning i Majorna eller Linné – svar inom 24 timmar, ingen bindningstid.',
    ],
    areas: ['Majorna', 'Linné', 'Slottsskogen', 'Stigberget', 'Kungsladugård', 'Masthugget'],
    proximity:
      'Majorna och Linné ligger centralt i Göteborg och nära vårt arbetsområde – snabb service utan onödiga restidskostnader.',
    faq: [
      {
        question: 'Är ni vana vid äldre lägenheter i Majorna och Linné?',
        answer:
          'Ja, mycket. Vi städar regelbundet landshövdingehus och sekelskiftesvåningar och vet hur man hanterar trägolv och äldre ytor skonsamt.',
      },
      {
        question: 'Gör ni flyttstäd inför bostadsrättsförsäljning?',
        answer:
          'Ja, det är ett av våra vanligaste uppdrag i området. Vi följer Mäklarsamfundets riktlinjer och lämnar städgaranti.',
      },
      {
        question: 'Får jag RUT-avdrag i centrala Göteborg?',
        answer:
          'Ja. RUT gäller överallt i Sverige för kvalificerade tjänster. Vi drar av det direkt på fakturan för hemstädning och fönsterputs.',
      },
      {
        question: 'Kan ni komma på fasta tider varje vecka?',
        answer:
          'Ja, vi erbjuder återkommande hemstädning på fasta tider, och gärna med samma städare varje gång.',
      },
    ],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((city) => city.slug)
}
