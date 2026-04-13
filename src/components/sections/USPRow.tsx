/**
 * USP ROW — "Varför välja Karla Cleaning Crew?"
 *
 * 4-column layout showcasing key benefits
 * Mobile: stacks to 1 column
 * Tablet: 2 columns
 * Desktop: 4 columns
 *
 * Used on:
 * - Home page (after services)
 * - Service pages (key points for that service)
 */

import { LucideIcon } from 'lucide-react'
import { Icon } from '@/components/ui/Icon'

interface USPItem {
  icon: LucideIcon
  title: string
  description: string
}

interface USPRowProps {
  title?: string
  subtitle?: string
  items: USPItem[]
}

export function USPRow({
  title = 'Varför välja Karla Cleaning Crew?',
  subtitle = 'Vi är mer än bara ett städföretag – vi är dina partners för ett renare, bättre liv.',
  items,
}: USPRowProps) {
  return (
    <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 sm:p-9 rounded-2xl shadow-md border border-gray-200 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                <Icon icon={item.icon} size={40} color="brand" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
