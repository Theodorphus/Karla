import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, Phone, MapPin, Star } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button, buttonClasses } from '@/components/ui/Button'
import { FAQSection } from '@/components/services/FAQSection'
import { QuickQuoteForm } from '@/components/home/QuickQuoteForm'
import { CTABanner } from '@/components/home/CTABanner'
import { Reveal, Stagger } from '@/components/premium/Scroll'
import { SERVICES } from '@/lib/data/services'
import { CITIES, getCityBySlug, getAllCitySlugs } from '@/lib/data/cities'

const BASE_URL = 'https://karlacleaningcrew.se'
const PHONE = '+46707402080'
const PHONE_DISPLAY = '070 740 20 80'

export function generateStaticParams() {
  return getAllCitySlugs().map((stad) => ({ stad }))
}

// Endast de städer vi definierat ska finnas – övriga ger 404.
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>
}): Promise<Metadata> {
  const { stad } = await params
  const city = getCityBySlug(stad)
  if (!city) return {}

  const url = `${BASE_URL}/stad/${city.slug}`
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      type: 'website',
      locale: 'sv_SE',
      url,
      siteName: 'Karla Cleaning Crew',
      images: [
        {
          url: '/images/Og1.png',
          width: 1200,
          height: 630,
          alt: `${city.h1} – Karla Cleaning Crew`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: city.seoTitle,
      description: city.seoDescription,
      images: ['/images/Og1.png'],
    },
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ stad: string }>
}) {
  const { stad } = await params
  const city = getCityBySlug(stad)
  if (!city) notFound()

  const url = `${BASE_URL}/stad/${city.slug}`

  // LocalBusiness-schema med staden som areaServed + FAQ-schema.
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CleaningService'],
    name: `Karla Cleaning Crew – Städning ${city.name}`,
    image: `${BASE_URL}/images/Og1.png`,
    description: city.seoDescription,
    url,
    telephone: PHONE,
    email: 'info@karlacleaningcrew.se',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: city.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '16',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Områden', href: '/tjanster' },
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-petrol text-white py-20 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 mb-5">
            <MapPin size={15} />
            <span className="text-sm font-semibold tracking-wide">{city.name} · +10 år erfarenhet</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            {city.h1}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-6">
            {city.intro}
          </p>
          {/* Google-betyg */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-white/90 font-medium">5,0 · 16 omdömen på Google</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#offert">
              <Button size="lg" className="w-full sm:w-auto font-bold shadow-xl">
                Få kostnadsfri offert
              </Button>
            </Link>
            <a
              href={`tel:${PHONE}`}
              className={buttonClasses({ variant: 'outline-white', size: 'lg', className: 'gap-2 w-full sm:w-auto' })}
            >
              <Phone size={18} />
              Ring {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Brödtext + tjänster */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="prose-styled space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
              {city.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Tjänster i staden */}
          <div className="mt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Våra städtjänster i {city.name}
            </h2>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green-lighter/40 transition-all group"
                >
                  <CheckCircle size={20} className="text-brand-green flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold text-gray-900 group-hover:text-brand-green transition-colors">
                    {service.title} i {city.name}
                  </span>
                </Link>
              ))}
            </Stagger>
          </div>

          {/* Områden vi täcker */}
          <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-100 p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Vi städar i hela {city.name}
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{city.proximity}</p>
            <div className="flex flex-wrap gap-2">
              {city.areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700"
                >
                  <MapPin size={13} className="text-brand-green" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offert-formulär */}
      <section
        id="offert"
        className="relative overflow-hidden bg-[#E8F5E9] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-900">
            <p className="text-brand-green font-semibold tracking-widest text-sm uppercase mb-3">
              Kostnadsfri offert i {city.name}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Få ett prisförslag på 24 timmar
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Fyll i några snabba fält – vi återkommer med ett personligt pris för städning i {city.name}. Inga dolda avgifter, ingen bindningstid.
            </p>
            <ul className="space-y-3 text-sm">
              {['RUT-avdrag upp till 50%', 'Försäkrade & bakgrundskontrollerade städare', 'Städgaranti på alla uppdrag'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl shadow-[0_28px_70px_-20px_rgba(27,94,32,0.3)] ring-1 ring-gray-100 p-6 sm:p-8">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* Lokal FAQ */}
      <FAQSection
        faqItems={city.faq}
        title={`Vanliga frågor om städning i ${city.name}`}
        subtitle="Allt du behöver veta innan du bokar"
      />

      <CTABanner />
    </>
  )
}
