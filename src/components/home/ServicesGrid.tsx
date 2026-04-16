import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { SERVICES } from '@/lib/data/services'
import { serviceIcons } from '@/lib/data/serviceIcons'

export function ServicesGrid() {
  // Map service slugs to generated image names
  const serviceImageMap: Record<string, string> = {
    hemstadning: 'hemstadning_hero.png',
    flyttstad: 'flyttstad_hero.png',
    fonsterputs: 'fonsterputs_hero.png',
    byggstad: 'byggstad_hero.png',
    kontorsstadning: 'L1.Hero.png',
    lokalvard: 'lokalvard_hero.png',
  }

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Sex specialiserade tjänster
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Från hemmet till kontoret – vi städar allt. Professionell städning för Göteborg.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((service) => {
            const imageName = serviceImageMap[service.slug]
            const imageUrl = imageName ? `/images/services/${imageName}` : null

            return (
              <Link key={service.slug} href={`/${service.slug}`}>
                <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col bg-white border border-gray-200 hover:border-brand-green/40">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-green/10 to-brand-green/5">
                        <span className="text-6xl">🧹</span>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

                    {/* Service Icon - Upper Left */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 rounded-lg flex items-center justify-center shadow-md text-brand-green">
                      <div className="w-6 h-6">
                        {serviceIcons[service.slug] || <span className="text-2xl">🧹</span>}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5 sm:p-8">
                    <h3 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 mb-6 line-clamp-3 text-base leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.rutEligible && (
                        <Badge variant="success" className="text-xs font-semibold">
                          RUT-avdrag
                        </Badge>
                      )}
                      {service.ecoFriendly && (
                        <Badge variant="info" className="text-xs font-semibold">
                          Miljövänlig
                        </Badge>
                      )}
                    </div>

                    {/* Read More Link */}
                    <div className="inline-flex items-center text-brand-green font-bold text-base group-hover:gap-2 transition-all mt-auto">
                      Läs mer
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
