import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Stagger } from '@/components/premium/Scroll'
import { GUIDES } from '@/lib/data/guides'

const BASE_URL = 'https://karlacleaningcrew.se'

export const metadata: Metadata = {
  title: 'Guider & Tips om Städning',
  description:
    'Praktiska guider om städning, RUT-avdrag och vad olika städtjänster kostar i Göteborg. Tips från Karla Cleaning Crew.',
  alternates: { canonical: `${BASE_URL}/guider` },
  openGraph: {
    title: 'Guider & Tips om Städning | Karla Cleaning Crew',
    description:
      'Praktiska guider om städning, RUT-avdrag och priser i Göteborg.',
    url: `${BASE_URL}/guider`,
  },
}

export default function GuiderPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Guider' },
        ]}
      />

      <section className="bg-gradient-to-br from-navy to-petrol text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Guider & tips</h1>
          <p className="text-xl text-white/80">
            Allt du behöver veta om städning, RUT-avdrag och priser – från oss som gör det varje dag.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guider/${guide.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 hover:shadow-2xl hover:border-brand-green/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-green bg-brand-green/10 rounded-full px-3 py-1">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={13} />
                    {guide.readingMinutes} min
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-green transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                  {guide.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                  Läs guiden
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
