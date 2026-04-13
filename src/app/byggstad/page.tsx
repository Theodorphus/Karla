import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Byggstäd',
  description:
    'ID-06 certifierad byggstäd i Göteborg efter renovering och nybygge. Professionell hantering av byggsmutsa, miljöcertifierad, garanterad resultat.',
  slug: 'byggstad',
  imageSrc: '/images/services/byggstad_hero.png',
})

export default function BygstadPage() {
  const service = getServiceBySlug('byggstad')
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug="byggstad" />
      <ServicePageTemplate service={service} />
    </>
  )
}
