import { ServiceData } from '@/types/service'

interface ServiceStructuredDataProps {
  service: ServiceData
  slug: string
}

export function ServiceStructuredData({ service, slug }: ServiceStructuredDataProps) {
  const baseUrl = 'https://karlacleaningcrew.se'
  const serviceUrl = `${baseUrl}/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
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
    areaServed: [
      { '@type': 'City', name: 'Göteborg' },
      { '@type': 'City', name: 'Mölndal' },
      { '@type': 'City', name: 'Kungsbacka' },
      { '@type': 'City', name: 'Partille' },
    ],
    url: serviceUrl,
    image: service.imageSrc ? `${baseUrl}${service.imageSrc}` : `${baseUrl}/images/Og1.png`,
  }

  const faqSchema = service.faq && service.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
