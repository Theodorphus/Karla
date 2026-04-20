export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CleaningService'],
    name: 'Karla Cleaning Crew',
    image: 'https://karlacleaningcrew.se/images/Og1.png',
    description: 'Professionell städtjänst i Göteborg. Hemstädning, flyttstäd, fönsterputs, byggstäd, kontorsstädning och lokalvård.',
    url: 'https://karlacleaningcrew.se',
    telephone: '+46707402080',
    email: 'info@karlacleaningcrew.se',
    priceRange: 'SEK',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodjursstråket 1',
      addressLocality: 'Göteborg',
      postalCode: '417 51',
      addressCountry: 'SE',
    },
    areaServed: [
      { '@type': 'City', name: 'Göteborg' },
      { '@type': 'City', name: 'Mölndal' },
      { '@type': 'City', name: 'Kungsbacka' },
      { '@type': 'City', name: 'Partille' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Anna Augustsson' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Första gången jag anlitar städhjälp, men absolut inte sista! Två superduktiga och lyhörda kvinnor som fick otroligt mycket gjort under de tre timmar de var hos mig. Så otroligt nöjd och rekommenderar varmt!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Alexander Bäck' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Världsklass! Fantastisk personal, upplevde till alla våra förväntningar! Kan starkt rekommendera både till hemstäd, flyttstäd, kontor eller byggstäd! Verkligen supernöjd!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Johanna Kviberg' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Effektiv, noggrann och professionell städning. Ni överträffade våra förväntningar. Tusen tack!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Samuel Alberto Beas Mora' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Fantastic service, the cleaning personal were very professional and friendly. Balance cost-quality is one of the best you will get on the market. Really good attention since the quotation until the last minute of the service.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Evelina Carlén' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Vi är nöjda med hemstäd, personalen är alltid trevlig och tillmötesgående. Gör det lilla extra och är flexibla.',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61555285093932',
      'https://www.instagram.com/karlacleaningcrew',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
