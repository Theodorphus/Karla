import Link from 'next/link'
import { Button } from '@/components/ui/Button'

/**
 * CTA BANNER — Premium green call-to-action
 *
 * Demonstrates:
 * - Primary button (white bg on green)
 * - Ghost button variant (transparent white link)
 */
export function CTABanner() {
  return (
    <section className="bg-brand-green text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Klar för att städa bort stresset?
        </h2>
        <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Första mötet är alltid gratis – inga dolda avgifter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* PRIMARY variant: White button on green background */}
          <Link href="/kontakt">
            <Button
              variant="secondary"
              size="lg"
              className="font-bold"
            >
              Få kostnadsfri offert
            </Button>
          </Link>

          {/* PHONE variant: White border button (tel: link) */}
          <a
            href="tel:+46707402080"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-8 py-3 text-lg text-gray-900 border-2 border-gray-900 bg-black/10 hover:bg-black/20 active:bg-black/25 focus-visible:ring-gray-900"
          >
            Ring oss: 070-740 20 80
          </a>
        </div>

        <p className="text-white/80 text-sm mt-8">
          Tillgänglig mån–fre, 08:00–18:00
        </p>
      </div>
    </section>
  )
}
