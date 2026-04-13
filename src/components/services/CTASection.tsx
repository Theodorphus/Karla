import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = 'Redo för ett renare kontor?',
  subtitle = 'Kontakta oss idag för en helt kostnadsfri offert',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-cta py-section-lg px-section-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-brand-green rounded-full opacity-5 -ml-48 -mt-48" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-green rounded-full opacity-5 -mr-48 -mb-48" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Rounded container */}
        <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-brand-green shadow-green-glow hover:shadow-strong transition-shadow duration-300">
          {/* Accent line top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-green rounded-full" />

          {/* Content */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/kontakt">
              <Button size="lg" className="rounded-full min-w-52 text-base">
                Beställ nu
              </Button>
            </Link>
            <a href="tel:+46707402080" className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-brand-green text-brand-green hover:bg-brand-green/5 active:bg-brand-green/10 focus-visible:ring-brand-green px-8 py-3 text-lg rounded-full min-w-52">
              Ring oss direkt
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />

          {/* Phone info */}
          <div className="text-center">
            <p className="text-gray-600 mb-3 font-medium">Öppen mån–fre 08:00–17:00</p>
            <p className="text-3xl font-bold text-brand-green tracking-tight">
              +46 707 40 20 80
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
