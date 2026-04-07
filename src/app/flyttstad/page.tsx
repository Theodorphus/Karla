import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Flyttstäd Göteborg | Städgaranti & Mäklarsamfundets Riktlinjer',
  description:
    'Professionell flyttstäd i Göteborg. Vi följer Mäklarsamfundets officiella riktlinjer. Städgaranti & flexibel schemaläggning.',
  openGraph: {
    title: 'Flyttstäd Göteborg | Karla Cleaning Crew',
    description: 'Garanterad professionell flyttstäd. Mäklarsamfundets riktlinjer. Städgaranti.',
    url: 'https://karlacleaningcrew.se/flyttstad',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/flyttstad',
  },
}

export default function FlyttstadPage() {
  const service = getServiceBySlug('flyttstad')
  if (!service) return <div>Tjänsten hittades inte</div>
  return <ServicePageTemplate service={service} />
}
