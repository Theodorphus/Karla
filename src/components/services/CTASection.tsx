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
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-navy rounded-2xl p-10 md:p-14 text-white shadow-strong">
          {/* Content */}
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold tracking-widest text-sm uppercase mb-4">
              Gratis offert
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-white/70 leading-relaxed">{subtitle}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/kontakt">
              <Button variant="secondary" size="lg" className="min-w-48 font-bold">
                Beställ nu
              </Button>
            </Link>
            <a
              href="tel:+46707402080"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap px-8 py-3 text-lg text-white border-2 border-white hover:bg-white hover:text-[#2E7D32] active:bg-white/90 min-w-48 shadow-md"
            >
              Ring oss direkt
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* Phone info */}
          <div className="text-center">
            <p className="text-white/50 mb-2 text-sm tracking-wide">Öppen mån–fre 08:00–17:00</p>
            <p className="text-2xl font-bold text-white tracking-tight">
              070 740 20 80
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
