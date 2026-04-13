import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Lokalvård',
  description:
    'Lokalvård för stora lokaler i Göteborg - skolor, sjukhus, kontor, butiker. Högsta hygienstandard, miljövänlig, skräddarsydd service.',
  slug: 'lokalvard',
  imageSrc: '/images/services/lokalvard_hero.png',
})

export default function LokalvardPage() {
  const service = getServiceBySlug('lokalvard')
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug="lokalvard" />
      <ServicePageTemplate service={service} />
    </>
  )
}
