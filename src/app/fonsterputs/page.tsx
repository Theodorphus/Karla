import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { ServiceStructuredData } from '@/components/seo/ServiceStructuredData'
import { getServiceBySlug } from '@/lib/data/services'
import { generateServiceMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = generateServiceMetadata({
  title: 'Fönsterputs',
  description:
    'Professionell fönsterputs för hem och kontor i Göteborg. In- och utsida, RUT-avdrag, miljövänliga produkter, kristallklara resultat.',
  slug: 'fonsterputs',
  imageSrc: '/images/services/fonsterputs_hero.png',
})

export default function FonsterputsPage() {
  const service = getServiceBySlug('fonsterputs')
  if (!service) return <div>Tjänsten hittades inte</div>
  return (
    <>
      <ServiceStructuredData service={service} slug="fonsterputs" />
      <ServicePageTemplate service={service} />
    </>
  )
}
