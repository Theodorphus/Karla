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
      'Dammsugning och våttorkning av alla golv',
      'Avtorkning av möbler och hyllor',
      'Köksrengöring (bänkar, spis, mikrovågsugn, kylskåp utsida)',
      'Badrumsrengöring (toalett, tvättställ, kakel, spegel)',
      'Avtorkning av dörrklinkor och ljusbrytare',
      'Bäddning av sängar',
      'Tömning av soptunnor',
      'Miljövänliga produkter genomgående',
    ],
    rutEligible: true,
    ecoFriendly: true,
    imageSrc: '/images/services/hemstadning_hero.png',
    keyPoints: [
      {
        title: 'RUT-avdrag',
        description: 'Spara upp till 50% på städningen med RUT-avdraget.',
      },
      {
        title: 'Miljövänligt',
        description: 'Endast certifierade miljöprodukter – säkra för barn och djur.',
      },
      {
        title: 'Samma person',
        description: 'Vi erbjuder att samma städare kommer varje gång om du föredrar det.',
      },
    ],
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
      'Våttorkning av alla hårda golv',
      'Vita lister och dörrkarmar (damm och smuts)',
      'Avtorkning av element och värmeslingor',
      'Badrumsrengöring (kakel, toalett, badkar, tvättställ)',
      'Köksrengöring (spis, kylskåp, diskmaskin)',
      'Fönsterputs in- och utsida med karmar',
      'Garderobsrengöring (in- och utsida)',
      'Rengöring av lysrör och armaturer',
      'Kvalitetskontroll enligt Mäklarsamfundets standard',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/flyttstad_hero.png',
    keyPoints: [
      {
        title: 'Mäklarsamfundets standard',
        description: 'Vi följer officiella riktlinjer för godkänd flyttstäd.',
      },
      {
        title: 'Städgaranti',
        description: 'Om något inte är nöjaktigt, fixar vi det utan extra kostnad.',
      },
      {
        title: 'Snabb service',
        description: 'Vi kan ofta komma inom några dagar – brådskande? Vi löser det!',
      },
    ],
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
    imageSrc: '/images/services/fonsterputs_hero.png',
    keyPoints: [
      {
        title: 'In- och utsida',
        description: 'Vi putsar både insidan och utsidan för full glans.',
      },
      {
        title: 'RUT-avdrag',
        description: 'Fönsterputs kvalificerar ofta för RUT-avdrag – spara pengar!',
      },
      {
        title: 'Miljövänliga produkter',
        description: 'Kemikalifria, biologiskt nedbrytbara lösningar.',
      },
    ],
    faq: [
      {
        question: 'Hur ofta bör jag boka fönsterputs?',
        answer: 'Vi rekommenderar fönsterputs två gånger per år — en gång på våren och en gång på hösten. Fastigheter nära trafikerade vägar kan behöva tätare intervall.',
      },
      {
        question: 'Kan ni putsa högt belägna fönster?',
        answer: 'Ja, vi har utrustning för fönster på högre våningar och följer alla tillämpliga säkerhetsregler.',
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
    seoDescription: 'Byggstäd efter renovering och nybygge i Göteborg. ID-06-certifierat team för professionell hantering av byggdamm och smuts.',
    heroTagline: 'Professionell byggstäd efter nybygge och renovering',
    description:
      'Byggstäd du kan lita på. Vårt erfarna team hanterar alla typer av byggdamm, målningsrester och byggsmuts — och levererar ett redo-att-flytta-in-resultat.',
    included: [
      'Borttagning av damm och smuts från väggar och tak',
      'Rengöring och våttorkning av golv',
      'Borttagning av målarband och färgrester från fönster',
      'Rengöring av köksapparater och vitvaror',
      'Badrumsrengöring (fog, kakel, armaturer)',
      'Rengöring av lysrör och armaturer',
      'Fönsterputs in- och utsida',
      'Säkerhet och dokumentation enligt myndighetskrav',
    ],
    rutEligible: false,
    ecoFriendly: false,
    imageSrc: '/images/services/byggstad_hero.png',
    keyPoints: [
      {
        title: 'ID-06 certifierad',
        description: 'Officiell svensk certifiering för byggrengöring.',
      },
      {
        title: 'Specialutrustning',
        description: 'Vi använder professionell utrustning för effektiv byggstäd.',
      },
      {
        title: 'Garanterat resultat',
        description: 'Lokalen lämnas ren och redo för inflyttning.',
      },
    ],
    faq: [
      {
        question: 'Vad är ID-06-certifiering?',
        answer: 'ID-06 är ett identifierings- och behörighetssystem för byggbranschen. Det garanterar att vår personal är behörig och att vi arbetar enligt gällande miljö- och säkerhetsstandarder.',
      },
      {
        question: 'Kan ni hantera alla typer av byggdamm och smuts?',
        answer: 'Ja, vi hanterar allt från finmalat byggdamm och målningsrester till grövre konstruktionsavfall. Vi sorterar och återvinner material enligt gällande miljöregler.',
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
    seoDescription: 'Professionell kontorsstädning för företag i Göteborg. Fast kontaktperson, skräddarsydd städplan och flexibla tider.',
    heroTagline: 'Skapa en ren, trivsam och produktiv arbetsmiljö',
    description:
      'Pålitlig kontorsstädning anpassad efter er verksamhet. Vi erbjuder fast kontaktperson, tydliga priser och flexibla tider — alltid med hög kvalitet och ett öga för detaljer.',
    included: [
      'Daglig eller veckovis städning efter behov',
      'Tömning av papperskorgar och återvinning',
      'Avtorkning av skrivbord och gemensamma ytor',
      'Rengöring av kök och personalutrymmen',
      'Toalettstädning och påfyllning av förbrukningsmaterial',
      'Dammsugning och våttorkning av golv',
      'Maskinstädning av hårda golv vid behov',
      'Fönsterputs som tillval',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/kontor_hero.png',
    keyPoints: [
      {
        title: 'Fast kontaktperson',
        description: 'En ansvarig person som känner er verksamhet och era lokaler.',
      },
      {
        title: 'Tydliga priser',
        description: 'Fasta priser utan dolda avgifter — ni vet alltid vad ni betalar.',
      },
      {
        title: 'Flexibla tider',
        description: 'Vi städar dag, kväll eller helg — utifrån era arbetstider.',
      },
    ],
    faq: [
      {
        question: 'Kan ni städa utanför arbetstid?',
        answer: 'Ja, vi erbjuder städning på kvällar och helger om det passar er verksamhet bättre. Vi anpassar schemat efter era behov.',
      },
      {
        question: 'Behöver vi vara på plats under städningen?',
        answer: 'Nej, vi sköter städningen även när kontoret är tomt. Ni ger oss tillgång till lokalen, och vi arbetar enligt den avtalade planen.',
      },
      {
        question: 'Hur fungerar den skräddarsydda städplanen?',
        answer: 'Vi går igenom era lokaler och önskemål tillsammans, och skapar sedan en anpassad checklista. Våra städare följer den exakt vid varje tillfälle.',
      },
      {
        question: 'Vad innebär en fast kontaktperson?',
        answer: 'Er kontaktperson är alltid tillgänglig för frågor, ändringar eller feedback. Det ger er en trygg och enkel kommunikation utan att behöva förklara era behov om igen.',
      },
      {
        question: 'Hur ofta rekommenderar ni kontorsstädning?',
        answer: 'De flesta kontor passar bäst med daglig eller halvveckoviss städning. Vi hjälper er att hitta ett schema som passar er verksamhet och budget.',
      },
      {
        question: 'Kan ni städa specialmiljöer som kliniker eller labb?',
        answer: 'Ja, vi har erfarenhet av miljöer med höga hygienekrav. Kontakta oss för att diskutera era specifika behov.',
      },
    ],
  },
  {
    slug: 'lokalvard',
    title: 'Lokalvård',
    seoTitle: 'Lokalvård Göteborg | Karla Cleaning Crew | Företag, Skolor & Offentliga Miljöer',
    seoDescription: 'Professionell lokalvård för kontor, skolor, butiker och vårdmiljöer i Göteborg. Kvalitet, hygien och flexibla städscheman.',
    heroTagline: 'Lokalvård för företag, fastigheter och offentliga miljöer',
    description:
      'Vi erbjuder professionell lokalvård för kontor, skolor, butiker, vårdmiljöer och större fastigheter. Med fokus på kvalitet, hygien och effektivitet skapar vi rena och trygga miljöer för både personal och besökare.',
    included: [
      'Dagligt lokalunderhåll anpassat efter verksamhet',
      'Rengöring av entréer och gemensamma ytor',
      'Golvvård, polering och maskinstädning',
      'Hygienstädning för känsliga miljöer',
      'Påfyllning av hygienartiklar',
      'Fönsterputs och fasadrengöring som tillval',
      'Regelbunden djuprengöring (månads- eller kvartalsvis)',
      'Skräddarsydd schemaläggning',
    ],
    rutEligible: false,
    ecoFriendly: true,
    imageSrc: '/images/services/lokalvard_hero.png',
    keyPoints: [
      {
        title: 'Anpassade städscheman',
        description: 'Vi planerar städningen utifrån er verksamhet och era öppettider.',
      },
      {
        title: 'Hög hygienstandard',
        description: 'Utbildad personal med rätt metoder för känsliga miljöer.',
      },
      {
        title: 'Miljövänliga produkter',
        description: 'Effektiva rengöringsmedel som är skonsamma mot miljön.',
      },
    ],
    faq: [
      {
        question: 'Vad är skillnaden mellan kontorsstädning och lokalvård?',
        answer: 'Kontorsstädning riktar sig till mindre och medelstora kontor. Lokalvård omfattar större lokaler som skolor, butiker och vårdmiljöer — med mer avancerade metoder och utrustning.',
      },
      {
        question: 'Kan ni städa skolor och vårdmiljöer?',
        answer: 'Ja, vi har erfarenhet av miljöer med höga hygienkrav. Vi anpassar metoder och produkter efter vad verksamheten kräver.',
      },
      {
        question: 'Vilka typer av lokaler hanterar ni?',
        answer: 'Vi städar kontor, skolor, butiker, bibliotek, idrottshallar, trapphus och andra offentliga eller privata lokaler. Kontakta oss för att diskutera era behov.',
      },
      {
        question: 'Erbjuder ni daglig städning eller enbart veckovis?',
        answer: 'Vi erbjuder allt från daglig städning till schemalagd djuprengöring — anpassat efter er verksamhet och budget.',
      },
      {
        question: 'Hur beräknas priset för lokalvård?',
        answer: 'Priset beror på lokalens storlek, miljötyp och städfrekvens. Vi erbjuder kostnadsfritt besök och offert utan förpliktelser.',
      },
      {
        question: 'Kan ni sköta golvpolering och golvvård?',
        answer: 'Ja, vi erbjuder professionell golvvård inklusive polering, impregnering och maskinrengöring för olika golvtyper.',
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
