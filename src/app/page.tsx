import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { CTABanner } from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* Benefits Section - Large images with alternating layout */}
      <BenefitsSection />

      {/* Why Choose Us Section - Premium 4-column layout */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Varför välja Karla Cleaning Crew?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Vi är mer än bara ett städföretag – vi är dina partners för ett renare, bättre liv.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 sm:p-9 rounded-xl shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                Premium kvalité
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Vi levererar städning av högsta klass med miljövänliga produkter och precis arbetsutförande.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-9 rounded-xl shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                Trygghet & Garantier
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Städgaranti på alla uppdrag. Vi är försäkrade och professionella. Du kan lita på oss.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-9 rounded-xl shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                Miljövänligt & Hållbart
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Vi bryr oss om miljön. Miljövänliga produkter och hållbara metoder i all vår verksamhet.
              </p>
            </div>

            <div className="group bg-white p-8 sm:p-9 rounded-xl shadow-subtle border border-gray-100 hover:border-brand-green/30 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">👥</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                Erfaret team
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Över tio år av erfarenhet. Vi vet vad vi gör och tar stolthet i varje uppdrag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Det säger våra kunder</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Vi är stolta över det förtroende våra kunder visar oss dag efter dag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-brand-green/30 hover:shadow-subtle transition-all">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                "Utmärkt service och mycket noga städ. Vi är mycket nöjda och kan varmt rekommendera!"
              </p>
              <p className="font-semibold text-gray-900 text-sm">Privatkund, Göteborg</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-brand-green/30 hover:shadow-subtle transition-all">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                "Professionellt och pålitligt. De är alltid på tid och gör ett gott jobb. Rekommenderas!"
              </p>
              <p className="font-semibold text-gray-900 text-sm">Företagskund, Göteborg</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-brand-green/30 hover:shadow-subtle transition-all">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                "Fantastisk kommunikation och mycket noggrann städning. Vi använder dem för alla våra uppdrag."
              </p>
              <p className="font-semibold text-gray-900 text-sm">Fastighetskund, Göteborg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
