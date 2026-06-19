/**
 * GUIDER / BLOGG — SEO-artiklar
 *
 * Varje guide riktar in sig på en informationssökning (long-tail) som leder
 * till köp, t.ex. "vad kostar flyttstäd göteborg" eller "rut-avdrag städning".
 *
 * Innehållet är strukturerat i block så att det renderas konsekvent och kan
 * få Article- + FAQPage-schema. Skriv genuint hjälpsamt och unikt innehåll.
 */

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; text: string }

export interface GuideData {
  slug: string
  title: string
  /** <title> + H1 */
  seoTitle: string
  seoDescription: string
  /** Kort ingress under H1 */
  excerpt: string
  /** ISO-datum, t.ex. '2026-06-19' */
  published: string
  updated?: string
  /** Lästid i minuter (ungefärlig) */
  readingMinutes: number
  /** Kategori-etikett */
  category: string
  body: GuideBlock[]
  /** Vanliga frågor → FAQPage-schema + accordion */
  faq: { question: string; answer: string }[]
  /** Relaterade tjänste-slugs att länka till internt */
  relatedServices: string[]
}

export const GUIDES: GuideData[] = [
  {
    slug: 'vad-kostar-flyttstad-goteborg',
    title: 'Vad kostar flyttstäd i Göteborg? Komplett prisguide 2026',
    seoTitle: 'Vad kostar flyttstäd i Göteborg? Prisguide 2026',
    seoDescription:
      'Vad kostar flyttstäd i Göteborg? Vi går igenom priser per kvm, vad som påverkar kostnaden och hur RUT-avdrag fungerar. Få en kostnadsfri offert.',
    excerpt:
      'Funderar du på att anlita flyttstäd men vet inte vad det kostar? Här går vi igenom prisbilden i Göteborg, vad som påverkar kostnaden och hur du sparar pengar.',
    published: '2026-06-19',
    readingMinutes: 5,
    category: 'Flyttstäd',
    body: [
      {
        type: 'p',
        text: 'En av de vanligaste frågorna vi får är vad en flyttstäd egentligen kostar. Svaret beror på flera saker – framför allt bostadens storlek och skick – men i den här guiden ger vi dig en tydlig prisbild för Göteborg med omnejd.',
      },
      { type: 'h2', text: 'Prisbilden för flyttstäd i Göteborg' },
      {
        type: 'p',
        text: 'Flyttstäd prissätts oftast antingen per kvadratmeter eller som ett fast pris efter besiktning. Som riktmärke ligger flyttstäd i Göteborg vanligtvis i intervallet nedan. Observera att flyttstäd normalt inte är RUT-berättigat på samma sätt som hemstädning, eftersom det räknas som en engångstjänst kopplad till flytten.',
      },
      {
        type: 'ul',
        items: [
          'Lägenhet 1–2 rok: lägre prisintervall, ofta klart på en halvdag.',
          'Lägenhet 3–4 rok: medelintervall, beroende på badrum och kök.',
          'Villa/radhus: högre pris, då fler ytor, fönster och våningar ingår.',
          'Tillägg: extra smutsig ugn, persienner eller garage kan tillkomma.',
        ],
      },
      {
        type: 'p',
        text: 'Det bästa sättet att få ett exakt pris är att begära en kostnadsfri offert. Då tar vi hänsyn till just din bostad – storlek, skick och eventuella tillägg – och du vet exakt vad du betalar innan vi börjar.',
      },
      { type: 'h2', text: 'Vad påverkar priset?' },
      {
        type: 'ul',
        items: [
          'Bostadens storlek (kvm och antal rum).',
          'Skicket – en välstädad bostad går snabbare än en kraftigt nedsmutsad.',
          'Antal fönster, då fönsterputs in- och utsida ingår i en komplett flyttstäd.',
          'Tillval som ugnsrengöring, persienner, balkong eller förråd.',
        ],
      },
      { type: 'h2', text: 'Ingår städgaranti?' },
      {
        type: 'p',
        text: 'Hos oss ingår alltid städgaranti på flyttstäd. Det innebär att om hyresvärden, mäklaren eller köparen inte är nöjd vid besiktningen, kommer vi tillbaka och åtgärdar utan extra kostnad. Vi följer Mäklarsamfundets riktlinjer, vilket är den standard de flesta hyresvärdar och mäklare utgår från.',
      },
      {
        type: 'cta',
        text: 'Vill du veta exakt vad din flyttstäd kostar? Få en kostnadsfri offert inom 24 timmar.',
      },
    ],
    faq: [
      {
        question: 'Är flyttstäd RUT-berättigat?',
        answer:
          'Flyttstäd räknas oftast som en engångstjänst i samband med flytt och är normalt inte RUT-berättigat på samma sätt som löpande hemstädning. Hemstädning och fönsterputs ger däremot RUT-avdrag. Kontakta oss så förklarar vi vad som gäller i ditt fall.',
      },
      {
        question: 'Hur lång tid tar en flyttstäd?',
        answer:
          'En mindre lägenhet tar ofta en halvdag, medan en villa kan ta en hel dag. Tiden beror på storlek och skick.',
      },
      {
        question: 'Behöver jag vara hemma under flyttstäden?',
        answer:
          'Nej. Vi kan hämta nycklar i förväg och lämna tillbaka dem när städningen är klar. Många kunder är redan utflyttade när vi städar.',
      },
    ],
    relatedServices: ['flyttstad', 'fonsterputs', 'hemstadning'],
  },
  {
    slug: 'rut-avdrag-stadning-sa-fungerar-det',
    title: 'RUT-avdrag för städning – så fungerar det 2026',
    seoTitle: 'RUT-avdrag för städning – så fungerar det 2026',
    seoDescription:
      'Så fungerar RUT-avdraget för hemstädning och fönsterputs 2026. Vi förklarar gränsen, hur avdraget dras direkt på fakturan och hur mycket du sparar.',
    excerpt:
      'RUT-avdraget kan halvera din städkostnad – men hur fungerar det egentligen? Här reder vi ut reglerna och visar hur mycket du faktiskt sparar.',
    published: '2026-06-19',
    readingMinutes: 4,
    category: 'RUT-avdrag',
    body: [
      {
        type: 'p',
        text: 'RUT-avdraget är en av de bästa anledningarna att anlita professionell hemstädning – det gör tjänsten betydligt billigare än många tror. Här går vi igenom hur det fungerar i praktiken.',
      },
      { type: 'h2', text: 'Vad är RUT-avdrag?' },
      {
        type: 'p',
        text: 'RUT står för Rengöring, Underhåll och Tvätt. Det är en skattereduktion som låter dig dra av en del av arbetskostnaden för hushållsnära tjänster. För städtjänster innebär det att du som privatperson bara betalar halva arbetskostnaden – staten står för resten direkt via avdraget.',
      },
      { type: 'h2', text: 'Hur mycket sparar jag?' },
      {
        type: 'p',
        text: 'Du får dra av 50 % av arbetskostnaden, upp till en årlig gräns per person. Eftersom gränsen gäller per person kan ett hushåll med två vuxna ofta dubbla det totala avdragsutrymmet. Materialkostnad omfattas inte, men för städning är arbetet den helt dominerande delen av priset.',
      },
      { type: 'h2', text: 'Vilka städtjänster ger RUT-avdrag?' },
      {
        type: 'ul',
        items: [
          'Hemstädning (löpande och engångs) – ja.',
          'Fönsterputs i hemmet – ja.',
          'Flyttstäd – oftast nej, räknas som engångstjänst kopplad till flytt.',
          'Kontorsstädning och lokalvård för företag – nej, RUT gäller endast privatpersoner.',
        ],
      },
      { type: 'h2', text: 'Hur gör jag för att få avdraget?' },
      {
        type: 'p',
        text: 'Du behöver inte göra någonting själv. Vi drar av RUT direkt på fakturan, så du betalar bara den reducerade summan. Vi sköter sedan ansökan mot Skatteverket. Det enda du behöver är att ha tillräckligt med avdragsutrymme kvar för året – något vi gärna hjälper dig att hålla koll på.',
      },
      {
        type: 'cta',
        text: 'Vill du veta hur mycket du sparar med RUT? Få en kostnadsfri offert med RUT-avdraget inräknat.',
      },
    ],
    faq: [
      {
        question: 'Hur dras RUT-avdraget?',
        answer:
          'Vi drar av 50 % av arbetskostnaden direkt på fakturan. Du betalar bara den reducerade summan, och vi ansöker om resten hos Skatteverket.',
      },
      {
        question: 'Gäller RUT-avdrag för flyttstäd?',
        answer:
          'Oftast inte. Flyttstäd räknas som en engångstjänst kopplad till flytten. Hemstädning och fönsterputs ger däremot RUT-avdrag.',
      },
      {
        question: 'Vad händer om mitt RUT-utrymme tar slut?',
        answer:
          'Då betalar du full arbetskostnad för det som överstiger gränsen. Vi hjälper dig gärna att planera städningen så att du utnyttjar avdraget optimalt.',
      },
    ],
    relatedServices: ['hemstadning', 'fonsterputs'],
  },
  {
    slug: 'hur-ofta-bor-man-stada-hemma',
    title: 'Hur ofta bör man städa hemma? En praktisk guide',
    seoTitle: 'Hur ofta bör man städa hemma? Praktisk städguide',
    seoDescription:
      'Hur ofta ska man egentligen städa hemma? Vi går igenom rekommenderade intervall för olika ytor och hur ofta du bör boka professionell hemstädning.',
    excerpt:
      'Varje vecka, varannan eller en gång i månaden? Här får du konkreta rekommendationer för hur ofta olika delar av hemmet behöver städas.',
    published: '2026-06-19',
    readingMinutes: 4,
    category: 'Hemstädning',
    body: [
      {
        type: 'p',
        text: 'Hur ofta man bör städa hemma beror på livsstil, hushållets storlek och om man har barn eller husdjur. Men det finns tydliga riktlinjer som hjälper dig att hålla ett konsekvent rent hem utan att lägga mer tid än nödvändigt.',
      },
      { type: 'h2', text: 'Veckovis' },
      {
        type: 'ul',
        items: [
          'Dammsugning och våttorkning av golv i de mest använda rummen.',
          'Rengöring av badrum – toalett, handfat och spegel.',
          'Avtorkning av köksbänkar och spis.',
          'Byte av handdukar och sänglinne (varannan vecka för många).',
        ],
      },
      { type: 'h2', text: 'Varannan vecka' },
      {
        type: 'p',
        text: 'För många hushåll räcker det utmärkt att göra en grundligare städning varannan vecka. Det är också det vanligaste intervallet bland våra hemstädningskunder – tillräckligt ofta för att hålla hemmet fräscht, utan att det blir en stor uppgift varje gång.',
      },
      { type: 'h2', text: 'Månadsvis och säsong' },
      {
        type: 'ul',
        items: [
          'Fönsterputs: 2 gånger per år (vår och höst) räcker för de flesta.',
          'Djuprengöring av kök och vitvaror: varje till varannan månad.',
          'Garderober, lister och svåråtkomliga ytor: kvartalsvis.',
        ],
      },
      { type: 'h2', text: 'När lönar det sig att anlita hjälp?' },
      {
        type: 'p',
        text: 'Om städningen ständigt blir liggande, om du har en pressad vardag eller helt enkelt vill lägga tiden på annat – då är återkommande hemstädning ett enkelt och prisvärt val, särskilt med RUT-avdraget som halverar arbetskostnaden. Du kan välja samma städare varje gång för extra trygghet.',
      },
      {
        type: 'cta',
        text: 'Vill du ha ett alltid rent hem utan att lyfta ett finger? Få en kostnadsfri offert på hemstädning.',
      },
    ],
    faq: [
      {
        question: 'Hur ofta rekommenderar ni hemstädning?',
        answer:
          'För de flesta hushåll fungerar varannan vecka utmärkt. Har du barn, husdjur eller en pressad vardag kan veckovis städning passa bättre.',
      },
      {
        question: 'Kan jag få samma städare varje gång?',
        answer:
          'Ja, det erbjuder vi gärna. Många kunder uppskattar tryggheten i att känna igen sin städare.',
      },
      {
        question: 'Hur ofta bör man putsa fönster?',
        answer:
          'Två gånger per år räcker för de flesta – en gång på våren och en på hösten. Bor du nära en trafikerad väg kan tätare intervall behövas.',
      },
    ],
    relatedServices: ['hemstadning', 'fonsterputs'],
  },
]

export function getGuideBySlug(slug: string): GuideData | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug)
}
