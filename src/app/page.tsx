import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { CTABanner } from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-green to-green-600 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium">✓ Göteborg | +10 år erfarenhet | 24h garanti</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professionell städning i <span className="text-green-300">Göteborg</span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Låt oss ta hand om städningen så du kan fokusera på det som är viktigt. Miljövänligt, pålitligt, och alltid på tid.
          </p>

          {/* Trust signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-green-100">Nöjda kunder</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-green-100">År erfarenhet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm text-green-100">Garantisvar</div>
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
            <a href="tel:+46707402080">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 active:bg-white/20"
              >
                Ring: 0707–40 20 80
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra tjänster</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder skräddarsydd städning för hemmet, företaget och byggprojekt i Göteborg.
          </p>
        </div>
        <ServicesGrid />
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Varför välja Karla Cleaning Crew?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi är mer än bara ett städföretag – vi är dina partners för ett renare, bättre liv.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium kvalité</h3>
              <p className="text-gray-600">
                Vi levererar städning av högsta klass med miljövänliga produkter och precis arbetsutförande.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trygghet & Garantier</h3>
              <p className="text-gray-600">
                Städgaranti på alla uppdrag. Vi är försäkrade och professionella. Du kan lita på oss.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Miljövänligt</h3>
              <p className="text-gray-600">
                Vi bryr oss om miljön. Miljövänliga produkter och hållbara metoder i all vår verksamhet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Erfaret team</h3>
              <p className="text-gray-600">
                Över tio år av erfarenhet. Vi vet vad vi gör och tar stolthet i varje uppdrag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Det säger våra kunder</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi är stolta över det förtroende våra kunder visar oss dag efter dag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Utmärkt service och mycket noga städ. Vi är mycket nöjda och kan varmt rekommendera!"
            </p>
            <p className="font-semibold text-gray-900">Privatkund, Göteborg</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Professionellt och pålitligt. De är alltid på tid och gör ett gott jobb. Rekommenderas!"
            </p>
            <p className="font-semibold text-gray-900">Företagskund, Göteborg</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Fantastisk kommunikation och mycket noggrann städning. Vi använder dem för alla våra uppdrag."
            </p>
            <p className="font-semibold text-gray-900">Fastighetskund, Göteborg</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
