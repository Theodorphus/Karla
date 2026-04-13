import { ServiceData } from '@/types/service'

interface ServiceStructuredDataProps {
  service: ServiceData
  slug: string
}

export function ServiceStructuredData({ service, slug }: ServiceStructuredDataProps) {
  const baseUrl = 'https://karlacleaningcrew.se'
  const serviceUrl = `${baseUrl}/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Karla Cleaning Crew',
      url: baseUrl,
      telephone: '+46707402080',
      email: 'info@karlacleaningcrew.se',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lodjursstråket 1',
        addressLocality: 'Göteborg',
        postalCode: '417 51',
        addressCountry: 'SE',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Göteborg',
    },
    url: serviceUrl,
    image: `${baseUrl}/images/services/${slug}_hero.png`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
