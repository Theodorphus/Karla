import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Flyttstäd',
  description:
    'Professionell flyttstäd i Göteborg enligt Mäklarsamfundets riktlinjer. Städgaranti, flexibel schemaläggning, kvalitetskontroll.',
  slug: 'flyttstad',
  imageSrc: '/images/services/flyttstad_hero.png',
})

export default function FlyttstadPage() {
  const service = getServiceBySlug('flyttstad')
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug="flyttstad" />
      <ServicePageTemplate service={service} />
    </>
  )
}
