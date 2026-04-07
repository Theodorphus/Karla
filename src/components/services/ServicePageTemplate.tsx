'use client'

import { HeroSection } from './HeroSection'
import { WhatIncludedSection } from './WhatIncludedSection'
import { USPSection } from './USPSection'
import { CTASection } from './CTASection'
import { FAQSection } from './FAQSection'
import { RelatedServicesSection } from './RelatedServicesSection'
import { ServiceData } from '@/types/service'
import { SERVICES } from '@/lib/data/services'

interface ServicePageTemplateProps {
  service: ServiceData
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        tagline={service.heroTagline}
        imageSrc={service.imageSrc}
      />

      {/* What's Included */}
      <WhatIncludedSection items={service.included} />

      {/* Benefits/Features Section */}
      <section className="bg-gray-50 py-section-lg px-section-sm">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-card p-8 shadow-subtle">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fördelar med denna tjänst
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-4">
                {service.rutEligible && (
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-card border-l-4 border-blue-400">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        RUT-avdrag tillgänglig
                      </p>
                      <p className="text-sm text-gray-600">Spara pengar på städningen</p>
                    </div>
                  </div>
                )}

                {service.ecoFriendly && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-card border-l-4 border-brand-green">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Miljövänlig städning
                      </p>
                      <p className="text-sm text-gray-600">
                        Renare för miljön och hälsan
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <USPSection />

      {/* FAQ Section */}
      {service.faq && <FAQSection faqItems={service.faq} />}

      {/* CTA Section */}
      <CTASection />

      {/* Related Services */}
      <RelatedServicesSection
        relatedServices={SERVICES}
        currentServiceSlug={service.slug}
      />
    </>
  )
}
