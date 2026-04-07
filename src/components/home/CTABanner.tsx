import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-green via-green-500 to-green-600 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Diagonal separator from top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
      }}></div>

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center pt-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Redo för en renare miljö?
        </h2>
        <p className="text-lg sm:text-xl mb-10 text-green-100 max-w-2xl mx-auto leading-relaxed">
          Kontakta oss idag för en kostnadsfri offert. Vi svarar inom 24 timmar, garanterat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-green hover:bg-green-50 active:bg-gray-100 shadow-xl font-semibold"
          >
            <Link href="/kontakt">Få offert inom 24h</Link>
          </Button>
          <a
            href="tel:+46707402080"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 active:bg-white/40 rounded-lg font-semibold transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Ringa +46 707 40 20 80
          </a>
        </div>
      </div>

      {/* Diagonal separator to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
      }}></div>
    </section>
  )
}
