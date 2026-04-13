/**
 * WHAT'S INCLUDED SECTION
 *
 * Displays all services included in a package
 * Shows with checkmark icon, title, and optional description
 *
 * Supports both simple strings and structured data:
 * - Simple: items={["Dammsugning", "Putsning"]}
 * - Complex: items={[{ title: "...", icon: "..." }]}
 */

import { CheckCircle } from 'lucide-react'

interface IncludedItem {
  title: string
  icon?: React.ReactNode
  description?: string
}

interface WhatIncludedSectionProps {
  items: (string | IncludedItem)[]
  title?: string
  subtitle?: string
}

export function WhatIncludedSection({
  items,
  title = 'Vad ingår i tjänsten?',
  subtitle,
}: WhatIncludedSectionProps) {
  // Normalize items to object format
  const normalizedItems = items.map((item) => {
    if (typeof item === 'string') {
      return { title: item, icon: <CheckCircle size={24} className="text-brand-green" strokeWidth={2.5} /> }
    }
    return { icon: <CheckCircle size={24} className="text-brand-green" strokeWidth={2.5} />, ...item }
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid: 2-column on mobile, 3-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalizedItems.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-brand-green/5 border border-transparent hover:border-brand-green/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
