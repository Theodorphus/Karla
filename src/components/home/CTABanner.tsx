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
    <section className="bg-navy text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brand-green font-semibold tracking-widest text-sm uppercase mb-4">
          Kostnadsfri offert
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          Klar för att städa bort stresset?
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Första mötet är alltid gratis – inga dolda avgifter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt">
            <Button variant="secondary" size="lg" className="font-bold px-10">
              Få kostnadsfri offert
            </Button>
          </Link>
          <a
            href="tel:+46707402080"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap px-8 py-3 text-lg text-white border border-white/30 hover:bg-white/10 active:bg-white/15"
          >
            Ring oss: 070-740 20 80
          </a>
        </div>

        <p className="text-white/40 text-sm mt-8 tracking-wide">
          Tillgänglig mån–fre, 08:00–17:00
        </p>
      </div>
    </section>
  )
}
