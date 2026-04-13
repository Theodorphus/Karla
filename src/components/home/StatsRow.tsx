/**
 * STATS ROW
 *
 * Minimal statistics display for key numbers
 * Replaces emoji-heavy benefit boxes
 *
 * Features:
 * - Clean number-focused layout
 * - Alternating text/visual sections
 * - Responsive grid
 */

export function StatsRow() {
  const stats = [
    {
      number: '100+',
      label: 'Nöjda kunder',
    },
    {
      number: '10+',
      label: 'År erfarenhet',
    },
    {
      number: '24h',
      label: 'Garantisvar',
    },
    {
      number: '6',
      label: 'Tjänster',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-green">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Karla i siffror
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Vi är ett erfaret städföretag som bryr oss om detaljer, miljön och dina behov.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md border border-brand-green/10 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Big Number */}
              <div className="text-4xl sm:text-5xl font-bold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
