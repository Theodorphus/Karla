import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { SERVICES } from '@/lib/data/services'

export function ServicesGrid() {
  // Map service slugs to generated image names
  const serviceImageMap: Record<string, string> = {
    hemstadning: 'hemstadning_hero',
    flyttstad: 'flyttstad_hero',
    fonsterputs: 'fonsterputs_hero',
    byggstad: 'byggstad_hero',
    kontorsstadning: 'kontorsstadning_hero',
    lokalvard: 'lokalvard_hero',
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Våra tjänster
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av professionella städtjänster för hem och företag
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const imageName = serviceImageMap[service.slug]
            const imageUrl = imageName ? `/images/generated/${imageName}.png` : null

            return (
              <Link key={service.slug} href={`/${service.slug}`}>
                <div className="group overflow-hidden rounded-xl shadow-subtle hover:shadow-medium transition-all duration-300 cursor-pointer h-full flex flex-col bg-white border border-gray-100 hover:border-brand-green/20">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-4xl">🧹</span>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.rutEligible && (
                        <Badge variant="success" className="text-xs font-medium">
                          RUT-avdrag
                        </Badge>
                      )}
                      {service.ecoFriendly && (
                        <Badge variant="info" className="text-xs font-medium">
                          Miljövänlig
                        </Badge>
                      )}
                    </div>

                    {/* Read More Link */}
                    <div className="inline-flex items-center text-brand-green font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                      Läs mer
                      <svg
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
