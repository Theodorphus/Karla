export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Karla Cleaning Crew',
    image: 'https://karlacleaningcrew.se/images/Og1.png',
    description: 'Professionell städtjänst i Göteborg',
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
