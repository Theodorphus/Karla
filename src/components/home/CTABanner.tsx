import Link from 'next/link'
import { Button, buttonClasses } from '@/components/ui/Button'
import { Reveal } from '@/components/premium/Scroll'

/**
 * CTA BANNER — Light green call-to-action
 */
export function CTABanner() {
  return (
    <section className="bg-[#E8F5E9] border-t border-[#DDEEE0] py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <Reveal className="max-w-4xl mx-auto text-center">
        <p className="text-[#2E7D32] font-semibold tracking-widest text-sm uppercase mb-4">
          Kostnadsfri offert
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-5 tracking-tight text-[#1A1A1A]">
          Klar för att städa bort stresset?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Första mötet är alltid gratis – inga dolda avgifter.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/kontakt#offert" className="w-full sm:w-auto">
            <Button size="lg" className="font-bold w-full sm:w-auto sm:px-10">
              Få kostnadsfri offert
            </Button>
          </Link>
          <a
            href="tel:+46707402080"
            className={buttonClasses({ variant: 'outline', size: 'lg' })}
          >
            Ring oss: 070-740 20 80
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-6 sm:mt-8 tracking-wide">
          Tillgänglig mån–fre, 08:00–17:00
        </p>
      </Reveal>
    </section>
  )
}
