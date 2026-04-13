import Link from 'next/link'
import { ServiceData } from '@/types/service'
import { serviceIcons } from '@/lib/data/serviceIcons'

interface RelatedServicesSectionProps {
  relatedServices: ServiceData[]
  currentServiceSlug: string
}

/**
 * RELATED SERVICES SECTION
 *
 * Shows 3 related services at bottom of service page
 * Helps with internal linking and conversions
 *
 * Features:
 * - Image with hover scale + overlay
 * - Animated accent line
 * - Responsive 3-column grid
 */
export function RelatedServicesSection({
  relatedServices,
  currentServiceSlug,
}: RelatedServicesSectionProps) {
  // Filter out current service and take first 3
  const filtered = relatedServices
    .filter((s) => s.slug !== currentServiceSlug)
    .slice(0, 3)

  if (filtered.length === 0) return null

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Våra andra tjänster
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Utforska allt vi erbjuder för att hålla ditt hem eller kontor rent
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              <div className="group h-full overflow-hidden rounded-xl bg-white shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300 flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300" />

                  {/* Service Icon - Upper Left */}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/95 rounded-lg flex items-center justify-center shadow-md text-brand-green">
                    <div className="w-5 h-5">
                      {serviceIcons[service.slug] || <span className="text-xl">🧹</span>}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    {service.description.substring(0, 90)}...
                  </p>

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
          ))}
        </div>
      </div>
    </section>
  )
}
