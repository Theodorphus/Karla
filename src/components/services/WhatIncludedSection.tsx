interface WhatIncludedSectionProps {
  items: string[]
}

const serviceIcons = [
  {
    name: 'Städning',
    icon: '🧹',
  },
  {
    name: 'Putsning',
    icon: '✨',
  },
  {
    name: 'Köksrengöring',
    icon: '🍳',
  },
  {
    name: 'Badrum',
    icon: '🚿',
  },
  {
    name: 'Sophantering',
    icon: '♻️',
  },
  {
    name: 'Förbrukningsvaror',
    icon: '📦',
  },
]

export function WhatIncludedSection({ items }: WhatIncludedSectionProps) {
  return (
    <section className="bg-white py-section-lg px-section-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vad ingår i vår tjänst?
          </h2>
          <p className="text-xl text-gray-600">
            Allt som behövs för ett rent, fräscht och välorganiserat arbetskontor
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-card border-2 border-transparent hover:border-brand-green hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="mb-6 inline-block p-3 bg-brand-green-lighter rounded-full group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <div className="text-3xl">
                  {serviceIcons[index % serviceIcons.length].icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                {item.split('\n')[0]}
              </h3>
              {item.includes('\n') && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.split('\n')[1]}
                </p>
              )}

              {/* Bottom accent line */}
              <div className="h-1 w-12 bg-brand-green mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
