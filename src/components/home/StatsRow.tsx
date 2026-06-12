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

import { Reveal, Stagger } from '@/components/premium/Scroll'
import { CountUp, TiltCard } from '@/components/premium/Effects'

export function StatsRow() {
  const stats = [
    {
      value: 100,
      suffix: '+',
      label: 'Nöjda kunder',
    },
    {
      value: 10,
      suffix: '+',
      label: 'År erfarenhet',
    },
    {
      value: 24,
      suffix: 'h',
      label: 'Garantisvar',
    },
    {
      value: 6,
      suffix: '',
      label: 'Tjänster',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-green">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-20">
          <p className="text-brand-green font-semibold tracking-widest text-sm uppercase mb-3">
            Förtroende
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Karla i siffror
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Vi är ett erfaret städföretag som bryr oss om detaljer, miljön och dina behov.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <Stagger variant="scale" itemClassName="h-full" className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, i) => (
            <TiltCard key={i} max={10} className="h-full rounded-2xl">
              <div className="group flex h-full flex-col items-center justify-center text-center p-6 sm:p-8 bg-white rounded-2xl shadow-md border border-brand-green/10 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300">
                {/* Big Number */}
                <div className="text-4xl sm:text-5xl font-bold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
              </div>
            </TiltCard>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
