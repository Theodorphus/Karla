import Link from 'next/link'
import { buttonClasses } from '@/components/ui/Button'
import { Reveal } from '@/components/premium/Scroll'

/**
 * CTA BANNER — Mörk, djupgrön premium-sektion som avslutar sidan
 * med kontrast mot de ljusa sektionerna ovanför.
 */
export function CTABanner() {
  return (
    <section className="bg-noise relative overflow-hidden bg-gradient-to-br from-[#143D17] via-[#1B5E20] to-[#0F2E11] py-16 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Mjukt ljus uppifrån + dekorativa glober */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(165,214,167,0.16), transparent 60%)' }}
      />
      <div aria-hidden className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl pointer-events-none" />

      <Reveal className="relative max-w-4xl mx-auto text-center">
        <p className="text-brand-green-light font-semibold tracking-widest text-sm uppercase mb-4">
          Kostnadsfri offert
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-5 tracking-tight text-white">
          Klar för att städa bort stresset?
        </h2>
        <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Första mötet är alltid gratis – inga dolda avgifter.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/kontakt#offert"
            className={buttonClasses({
              variant: 'secondary',
              size: 'lg',
              className: 'font-bold w-full sm:w-auto sm:px-10 text-brand-green-dark',
            })}
          >
            Få kostnadsfri offert
          </Link>
          <a
            href="tel:+46707402080"
            className={buttonClasses({ variant: 'outline-white', size: 'lg' })}
          >
            Ring oss: 070-740 20 80
          </a>
        </div>

        <p className="text-white/50 text-sm mt-6 sm:mt-8 tracking-wide">
          Tillgänglig mån–fre, 08:00–17:00
        </p>
      </Reveal>
    </section>
  )
}
