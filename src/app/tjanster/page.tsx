import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SERVICES } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Våra tjänster',
  description:
    'Se vårt fullständiga utbud av städtjänster i Göteborg - hemstädning, flyttstäd, fönsterputs och mer.',
  openGraph: {
    title: 'Våra tjänster | Karla Cleaning Crew',
    description: 'Se vårt fullständiga utbud av städtjänster i Göteborg.',
    url: 'https://karlacleaningcrew.se/tjanster',
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/tjanster',
  },
}

export default function TjansterPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Tjänster' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-green to-green-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Våra tjänster</h1>
          <p className="text-xl text-green-50">
            Vi erbjuder ett brett utbud av professionella städtjänster för hem och företag
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              <Card className="h-full hover:shadow-2xl hover:border-brand-green/40 transition-all duration-300 cursor-pointer">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-5 line-clamp-3 text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Included items preview */}
                <div className="mb-4 space-y-1">
                  {service.included.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                  {service.included.length > 3 && (
                    <p className="text-sm text-gray-500 pt-2">
                      +{service.included.length - 3} fler saker ingår
                    </p>
                  )}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.rutEligible && (
                    <Badge variant="success" className="text-xs">
                      RUT-avdrag
                    </Badge>
                  )}
                  {service.ecoFriendly && (
                    <Badge variant="info" className="text-xs">
                      Miljövänlig
                    </Badge>
                  )}
                </div>

                {/* Read More */}
                <div className="inline-flex items-center text-brand-green font-semibold hover:gap-2 transition-all">
                  Läs mer
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
