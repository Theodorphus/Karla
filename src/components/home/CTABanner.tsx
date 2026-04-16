import Link from 'next/link'
import { Button } from '@/components/ui/Button'

/**
 * CTA BANNER — Light green call-to-action
 */
export function CTABanner() {
  return (
    <section className="bg-[#E8F5E9] border-t border-[#DDEEE0] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#2E7D32] font-semibold tracking-widest text-sm uppercase mb-4">
          Kostnadsfri offert
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-[#1A1A1A]">
          Klar för att städa bort stresset?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Första mötet är alltid gratis – inga dolda avgifter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt#offert">
            <Button size="lg" className="font-bold px-10">
              Få kostnadsfri offert
            </Button>
          </Link>
          <a
            href="tel:+46707402080"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap px-8 py-3 text-lg text-[#2E7D32] border-2 border-[#2E7D32] hover:bg-[#2E7D32] hover:text-white active:bg-[#1B5E20]"
          >
            Ring oss: 070-740 20 80
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-8 tracking-wide">
          Tillgänglig mån–fre, 08:00–17:00
        </p>
      </div>
    </section>
  )
}
