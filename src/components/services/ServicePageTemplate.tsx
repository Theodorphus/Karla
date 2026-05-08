import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import { HeroSection } from './HeroSection'
import { WhatIncludedSection } from './WhatIncludedSection'
import { FAQSection } from './FAQSection'
import { RelatedServicesSection } from './RelatedServicesSection'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTABanner } from '@/components/home/CTABanner'
import { Button } from '@/components/ui/Button'
import { ServiceData } from '@/types/service'
import { SERVICES } from '@/lib/data/services'

interface ServicePageTemplateProps {
  service: ServiceData
}

/**
 * SERVICE PAGE TEMPLATE — Premium service page structure
 *
 * Layout:
 * 1. Hero Section (image + title + tagline)
 * 2. Key Points Row (3 benefits)
 * 3. What's Included (grid with checkmarks)
 * 4. FAQ Accordion
 * 5. Related Services (3 related tjänster)
 * 6. CTA Banner (call to action)
 *
 * This template is used for all 6 service pages
 */
export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Tjänster', href: '/tjanster' },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <HeroSection
        title={service.title}
        tagline={service.heroTagline}
        imageSrc={service.imageSrc}
      />

      {/* Key Points Row — 3 key benefits specific to this service */}
      {service.keyPoints && service.keyPoints.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.keyPoints.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle size={28} className="text-brand-green flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inline CTA strip */}
      <div className="bg-navy py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-base sm:text-lg text-center sm:text-left">
            Kostnadsfri offert – svar inom 24 timmar, ingen bindningstid.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/kontakt#offert">
              <Button size="lg" className="w-full sm:w-auto font-bold">
                Få offert
              </Button>
            </Link>
            <a
              href="tel:+46707402080"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors text-base"
            >
              <Phone size={16} />
              070 740 20 80
            </a>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <WhatIncludedSection items={service.included} />

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <FAQSection
          faqItems={service.faq}
          title={`Vanliga frågor om ${service.title.toLowerCase()}`}
          subtitle="Allt du behöver veta om vår tjänst"
        />
      )}

      {/* Related Services */}
      <RelatedServicesSection
        relatedServices={SERVICES}
        currentServiceSlug={service.slug}
      />

      {/* Final CTA Banner */}
      <CTABanner />
    </>
  )
}
