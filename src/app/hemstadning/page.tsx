import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Hemstädning',
  description:
    'Professionell hemstädning i Göteborg med RUT-avdrag. Spara upp till 50%. Miljövänliga produkter, flexibel schemaläggning, samma städare varje gång.',
  slug: 'hemstadning',
  imageSrc: '/images/services/hemstadning_hero.png',
})

export default function HemstadningPage() {
  const service = getServiceBySlug('hemstadning')

  if (!service) {
    return <div>Tjänsten hittades inte</div>
  }

  return (
    <>
      <ServiceStructuredData service={service} slug="hemstadning" />
      <ServicePageTemplate service={service} />
    </>
  )
}
