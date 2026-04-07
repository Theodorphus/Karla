import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Hemstädning Göteborg | RUT-avdrag & Miljövänlig | Karla Cleaning Crew',
  description:
    'Professionell hemstädning i Göteborg med RUT-avdrag. Spara upp till 50% med ROT-avdrag. Miljövänliga produkter, flexibel schemaläggning.',
  openGraph: {
    title: 'Hemstädning Göteborg | Karla Cleaning Crew',
    description:
      'Hemstädning du kan lita på. RUT-avdrag, miljövänligt, professionellt.',
    url: 'https://karlacleaningcrew.se/hemstadning',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/hemstadning',
  },
}

export default function HemstadningPage() {
  const service = getServiceBySlug('hemstadning')

  if (!service) {
    return <div>Tjänsten hittades inte</div>
  }

  return <ServicePageTemplate service={service} />
}
