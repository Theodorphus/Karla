import Link from 'next/link'
import { ServiceData } from '@/types/service'

interface RelatedServicesSectionProps {
  relatedServices: ServiceData[]
  currentServiceSlug: string
}

export function RelatedServicesSection({
  relatedServices,
  currentServiceSlug,
}: RelatedServicesSectionProps) {
  // Filter out current service
  const filtered = relatedServices.filter(
    (s) => s.slug !== currentServiceSlug
  )

  return (
    <section className="bg-white py-section-lg px-section-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Våra andra städtjänster
          </h2>
          <p className="text-lg text-gray-600">
            Vi erbjuder ett komplett utbud av professionella rengöringslösningar
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group h-full"
            >
              {/* Card container */}
              <div className="h-full rounded-card overflow-hidden bg-white shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                {/* Image container */}
                <div className="relative overflow-hidden h-56 bg-gray-100">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description.substring(0, 70)}...
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-brand-green font-semibold text-sm group-hover:gap-2 gap-0 transition-all">
                    <span>Läs mer</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 w-0 bg-brand-green rounded-full mt-4 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
