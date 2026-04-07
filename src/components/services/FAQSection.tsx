'use client'

import { useState } from 'react'
import { FAQ } from '@/types/service'

interface FAQSectionProps {
  faqItems?: FAQ[]
}

export function FAQSection({ faqItems = [] }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!faqItems || faqItems.length === 0) {
    return null
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-section-lg px-section-sm border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Vanliga frågor
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Här svarar vi på de frågor vi oftast får. Kontakta oss gärna om du har fler frågor.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-brand-green transition-colors duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                  {item.question}
                </h3>
                <div
                  className={`flex-shrink-0 text-brand-green transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-brand-green bg-opacity-10 rounded-lg border-l-4 border-brand-green text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Kan vi svara på fler frågor?
          </h3>
          <p className="text-gray-700 mb-6">
            Kontakta oss gärna för en personlig konsultation om dina städbehov.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Skicka en förfrågan →
          </a>
        </div>
      </div>
    </section>
  )
}
