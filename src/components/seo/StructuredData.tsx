export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Karla Cleaning Crew',
    image: 'https://karlacleaningcrew.se/images/og-image.jpg',
    description: 'Professionell städtjänst i Göteborg',
    url: 'https://karlacleaningcrew.se',
    telephone: '+46707402080',
    email: 'Info@karlacleaningcrew.se',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodjursstråket 1',
      addressLocality: 'Göteborg',
      postalCode: '417 51',
      addressCountry: 'SE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
