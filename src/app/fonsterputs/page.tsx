import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Fönsterputs Göteborg | RUT-avdrag | Kristallklara Fönster',
  description:
    'Professionell fönsterputs för hem och kontor i Göteborg. RUT-avdrag tillgängligt. Miljövänliga produkter, garanterade kristallklara fönster.',
  openGraph: {
    title: 'Fönsterputs Göteborg | Karla Cleaning Crew',
    description: 'Kristallklara fönster med miljövänliga produkter. RUT-avdrag.',
    url: 'https://karlacleaningcrew.se/fonsterputs',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/fonsterputs',
  },
}

export default function FonsterputsPage() {
  const service = getServiceBySlug('fonsterputs')
  if (!service) return <div>Tjänsten hittades inte</div>
  return <ServicePageTemplate service={service} />
}
