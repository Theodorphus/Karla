import type { Metadata } from 'next'
import { Star, Shield, Leaf, Users } from 'lucide-react'
import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsRow } from '@/components/home/StatsRow'
import { USPRow } from '@/components/sections/USPRow'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/home/CTABanner'
import { QuickQuoteForm } from '@/components/home/QuickQuoteForm'

export const metadata: Metadata = {
  title: 'Städning Göteborg | Hemstäd, Flyttstäd & Mer – Karla Cleaning Crew',
  description:
    'Professionell städning i Göteborg med RUT-avdrag. Hemstädning, flyttstäd, fönsterputs, byggstäd & kontorsstädning. Miljövänligt. Offert inom 24h.',
  alternates: {
    canonical: 'https://karlacleaningcrew.se',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Quick Quote Section */}
      <section className="relative overflow-hidden bg-[#E8F5E9] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Dekorativa ljuspunkter ger sektionen djup */}
        <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-green-light/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-gray-900">
            <p className="text-brand-green font-semibold tracking-widest text-sm uppercase mb-3">
              Kostnadsfri offert
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight text-gray-900">
              Få ett prisförslag på 24 timmar
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Fyll i några snabba fält – vi återkommer med ett personligt pris. Inga dolda avgifter, ingen bindningstid.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                <span className="text-gray-800 font-medium">RUT-avdrag upp till 50%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                <span className="text-gray-800 font-medium">Miljövänliga produkter</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                <span className="text-gray-800 font-medium">Fullt försäkrade städare</span>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl shadow-[0_28px_70px_-20px_rgba(27,94,32,0.3)] ring-1 ring-gray-100 p-6 sm:p-8">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* Stats Section - Clean numbers display */}
      <StatsRow />

      {/* Why Choose Us Section - Premium 4-column layout using USPRow component */}
      <USPRow
        items={[
          {
            icon: Star,
            title: 'Premium kvalité',
            description:
              'Vi levererar städning av högsta klass med miljövänliga produkter och precis arbetsutförande.',
          },
          {
            icon: Shield,
            title: 'Trygghet & Garantier',
            description: 'Städgaranti på alla uppdrag. Vi är försäkrade och professionella. Du kan lita på oss.',
          },
          {
            icon: Leaf,
            title: 'Miljövänligt & Hållbart',
            description:
              'Vi bryr oss om miljön. Miljövänliga produkter och hållbara metoder i all vår verksamhet.',
          },
          {
            icon: Users,
            title: 'Erfaret team',
            description: 'Över tio år av erfarenhet. Vi vet vad vi gör och tar stolthet i varje uppdrag.',
          },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
