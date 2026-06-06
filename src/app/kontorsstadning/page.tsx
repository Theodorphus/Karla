import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Kontorsstädning',
  description:
    'Professionell kontorsstädning för företag i Göteborg. Fast kontaktperson, skräddarsydd städplan, flexibel schemaläggning, miljövänlig service.',
  slug: 'kontorsstadning',
  imageSrc: '/images/services/kontorsstadning_hero.png',
})

export default function KontorsstadningPage() {
  const service = getServiceBySlug('kontorsstadning')
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug="kontorsstadning" />
      <ServicePageTemplate service={service} />
    </>
  )
}
