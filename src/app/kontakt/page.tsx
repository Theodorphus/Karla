import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { QuoteForm } from '@/components/quote/QuoteForm'

export const metadata: Metadata = {
  title: 'Kontakt | Karla Cleaning Crew | Göteborg',
  description:
    'Kontakta Karla Cleaning Crew i Göteborg för en gratis offert. Vi svarar inom 24 timmar. Ring 0707–40 20 80.',
  openGraph: {
    title: 'Kontakt | Karla Cleaning Crew',
    description: 'Kontakta oss för en gratis offert på städning. Snabb respons garanterad.',
    url: 'https://karlacleaningcrew.se/kontakt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Karla Cleaning Crew',
    description: 'Kontakta oss för en gratis offert på städning. Snabb respons garanterad.',
    images: ['/images/Og1.png'],
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Kontakt' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-petrol text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Få din offert idag</h1>
          <p className="text-lg sm:text-xl text-white/75">
            Kostnadsfritt, utan bindningstid. Svar inom 24 timmar.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Kontaktinformation</h2>

            {/* Phone Card */}
            <div className="mb-8 p-6 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] hover:border-navy/20 hover:shadow-subtle transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <Phone size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-gray-900">Telefon</h3>
              </div>
              <a
                href="tel:+46707402080"
                className="text-navy hover:text-petrol text-lg font-semibold break-all ml-8"
              >
                +46 707 40 20 80
              </a>
            </div>

            {/* Email Card */}
            <div className="mb-8 p-6 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] hover:border-navy/20 hover:shadow-subtle transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <Mail size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-gray-900">E-post</h3>
              </div>
              <a
                href="mailto:Info@karlacleaningcrew.se"
                className="text-navy hover:text-petrol break-all ml-8"
              >
                Info@karlacleaningcrew.se
              </a>
            </div>

            {/* Address Card */}
            <div className="mb-8 p-6 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] hover:border-navy/20 hover:shadow-subtle transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-gray-900">Adress</h3>
              </div>
              <p className="text-gray-600 ml-8">
                Lodjursstråket 1
                <br />
                417 51 Göteborg
                <br />
                Sverige
              </p>
            </div>

            {/* Hours Card */}
            <div className="mb-8 p-6 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] hover:border-navy/20 hover:shadow-subtle transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <Clock size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <h3 className="font-semibold text-gray-900">Öppet</h3>
              </div>
              <div className="space-y-1 text-gray-600 ml-8">
                <p>Måndag–Fredag: 08:00–17:00</p>
                <p>Lördag–Söndag: Stängt</p>
              </div>
            </div>

            {/* Map */}
            <div className="mb-8 rounded-xl overflow-hidden border border-[#E5E5E5]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8525.580714981375!2d11.928778866283173!3d57.70974484486029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff350941a06ab%3A0xff5e3cee8fa278a!2sLodjursstr%C3%A5ket%201%2C%20417%2051%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1776348238234!5m2!1ssv!2sse"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karla Cleaning Crew karta"
                aria-label="Google Maps karta över Karla Cleaning Crews adress"
              />
            </div>

            {/* Social */}
            <div className="p-6 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5]">
              <h3 className="font-semibold text-gray-900 mb-4">Följ oss</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/profile.php?id=61555285093932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/karlacleaningcrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div id="offert" className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Begär kostnadsfri offert</h2>
              <p className="text-gray-500 text-sm">
                3 enkla steg — vi svarar med ett personligt pris inom 24 timmar.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Vanliga frågor
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5]">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hur snabbt kan ni möta mig?</h3>
              <p className="text-gray-600">
                Vi erbjuder flexibel schemaläggning och kan ofta komma ut inom en vecka.
                För brådskande uppdrag kan vi ofta fixa något ännu snabbare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5]">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Erbjuder ni RUT-avdrag?</h3>
              <p className="text-gray-600">
                Ja, vi erbjuder RUT-avdrag för hemstädning och fönsterputs.
                Detta kan reducera din kostnad med upp till 50%. Kontakta oss för mer information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5]">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Är ni försäkrade?</h3>
              <p className="text-gray-600">
                Ja, vi är fullt försäkrade för all vår verksamhet.
                Du kan känna dig säker och skyddad när du använder vår service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5]">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vilka produkter använder ni?</h3>
              <p className="text-gray-600">
                Vi använder huvudsakligen miljövänliga, ekologiska rengöringsprodukter.
                Om du har allergier eller speciella behov kan vi anpassa detta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
