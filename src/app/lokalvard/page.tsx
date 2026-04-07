import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Lokalvård Göteborg | Skolor, Sjukhus, Kontor & Butiker',
  description:
    'Lokalvård för kontor, skolor, sjukhus och offentliga miljöer i Göteborg. Professionell, miljövänlig & skräddarsydd.',
  openGraph: {
    title: 'Lokalvård Göteborg | Karla Cleaning Crew',
    description: 'Lokalvård för stora lokaler. Skolor, sjukhus, kontor och butiker. Professionell service.',
    url: 'https://karlacleaningcrew.se/lokalvard',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/lokalvard',
  },
}

export default function LokalvardPage() {
  const service = getServiceBySlug('lokalvard')
  if (!service) return <div>Tjänsten hittades inte</div>
  return <ServicePageTemplate service={service} />
}
