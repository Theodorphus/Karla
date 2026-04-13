'use client'

import { CheckCircle } from 'lucide-react'
import { HeroSection } from './HeroSection'
import { WhatIncludedSection } from './WhatIncludedSection'
import { FAQSection } from './FAQSection'
import { RelatedServicesSection } from './RelatedServicesSection'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { CTABanner } from '@/components/home/CTABanner'
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
