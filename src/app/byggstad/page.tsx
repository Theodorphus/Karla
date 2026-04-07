import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { getServiceBySlug } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Byggstäd Göteborg | ID-06 Certifierad | Efter Renovering & Nybygge',
  description:
    'Byggstäd efter renovering och nybygge i Göteborg. ID-06 certifierade städare för professionell hantering av byggsmutsa.',
  openGraph: {
    title: 'Byggstäd Göteborg | Karla Cleaning Crew',
    description: 'ID-06 certifierad byggstäd. Professionell hantering av byggsmutsa och målningsrester.',
    url: 'https://karlacleaningcrew.se/byggstad',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/byggstad',
  },
}

export default function BygstadPage() {
  const service = getServiceBySlug('byggstad')
  if (!service) return <div>Tjänsten hittades inte</div>
  return <ServicePageTemplate service={service} />
}
