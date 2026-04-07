import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SERVICES } from '@/lib/data/services'
import { serviceIcons } from '@/lib/data/serviceIcons'

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av professionella städtjänster för hem och företag
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group relative border-l-4 border-l-transparent hover:border-l-brand-green">
                {/* Icon */}
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <div className="w-7 h-7">
                    {serviceIcons[service.slug] || (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {service.description}
                </p>

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

                {/* Read More Link */}
                <div className="inline-flex items-center text-brand-green font-semibold group-hover:gap-2 transition-all">
                  Läs mer
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
      </div>
    </section>
  )
}
