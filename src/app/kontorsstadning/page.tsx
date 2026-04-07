import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Kontorsstädning Göteborg | Fast Kontaktperson | Skräddarsydd Checklista',
  description:
    'Professionell kontorsstädning för företag i Göteborg. Fast kontaktperson, skräddarsydd checklista & flexibel schemaläggning.',
  openGraph: {
    title: 'Kontorsstädning Göteborg | Karla Cleaning Crew',
    description: 'Kontorsstädning som fungerar för ditt företag. Fast kontaktperson, skräddarsydd service.',
    url: 'https://karlacleaningcrew.se/kontorsstadning',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/kontorsstadning',
  },
}

export default function KontorsstadningPage() {
  const service = getServiceBySlug('kontorsstadning')
  if (!service) return <div>Tjänsten hittades inte</div>
  return <ServicePageTemplate service={service} />
}
