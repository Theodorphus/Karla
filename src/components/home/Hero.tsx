import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-green to-green-600 text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Trust badge */}
        <div className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium">✓ Certifierad & Pålitlig</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Städ med <span className="text-green-300">kvalité</span>
        </h1>

        <p className="text-lg sm:text-xl mb-10 text-green-100 max-w-2xl mx-auto leading-relaxed">
          Vi ger dig mer fritid med professionell städning som du kan lita på.
          Miljövänligt, pålitligt, och med garanterad kundnöjdhet.
        </p>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm text-green-100">Nöjda kunder</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm text-green-100">År erfaren</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold">24h</div>
            <div className="text-sm text-green-100">Svar garanti</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-green hover:bg-green-50 active:bg-gray-200 shadow-lg"
          >
            <Link href="/kontakt">Få kostnadsfri offert</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 active:bg-white/20"
          >
            <Link href="/tjanster">Se alla tjänster</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
