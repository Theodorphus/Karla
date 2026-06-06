import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description:
    'Så behandlar Karla Cleaning Crew dina personuppgifter enligt GDPR. Information om vilka uppgifter vi samlar in, varför, hur länge och dina rättigheter.',
  alternates: {
    canonical: 'https://karlacleaningcrew.se/integritetspolicy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function IntegritetspolicyPage() {
  const updated = '2026-06-06'

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Integritetspolicy' },
        ]}
      />

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Integritetspolicy
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Senast uppdaterad: {updated}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Karla Cleaning Crew värnar om din personliga integritet. Den här
              policyn beskriver hur vi samlar in och behandlar dina
              personuppgifter när du kontaktar oss eller använder våra tjänster,
              i enlighet med dataskyddsförordningen (GDPR).
            </p>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Personuppgiftsansvarig
              </h2>
              <p>
                Karla Cleaning Crew
                <br />
                Lodjursstråket 1, 417 51 Göteborg
                <br />
                E-post:{' '}
                <a
                  href="mailto:info@karlacleaningcrew.se"
                  className="text-brand-green font-medium hover:underline"
                >
                  info@karlacleaningcrew.se
                </a>
                <br />
                Telefon:{' '}
                <a
                  href="tel:+46707402080"
                  className="text-brand-green font-medium hover:underline"
                >
                  070 740 20 80
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Vilka uppgifter vi samlar in
              </h2>
              <p>
                När du fyller i ett offert- eller kontaktformulär samlar vi in
                de uppgifter du själv lämnar, till exempel namn, telefonnummer,
                e-postadress, postnummer/ort, vald tjänst och eventuellt
                meddelande. Vi samlar endast in uppgifter som är relevanta för
                att kunna ge dig en offert och utföra tjänsten.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Varför vi behandlar uppgifterna
              </h2>
              <p>
                Vi behandlar dina uppgifter för att kunna återkomma med en
                offert, kommunicera med dig om uppdraget och utföra den tjänst du
                efterfrågar. Den rättsliga grunden är att fullgöra ett avtal med
                dig eller att vidta åtgärder på din begäran innan ett avtal
                ingås, samt vårt berättigade intresse av att besvara din
                förfrågan.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Hur länge vi sparar uppgifterna
              </h2>
              <p>
                Vi sparar dina uppgifter så länge det behövs för att hantera din
                förfrågan eller ditt uppdrag, samt så länge vi är skyldiga enligt
                lag (till exempel bokföringslagen). Därefter raderas eller
                anonymiseras uppgifterna.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Vi delar inte dina uppgifter
              </h2>
              <p>
                Vi säljer aldrig dina personuppgifter. Uppgifterna kan hanteras
                av betrodda leverantörer som hjälper oss att driva verksamheten
                (till exempel e-post- och systemtjänster), men endast i den
                utsträckning som krävs och under sekretess.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Dina rättigheter
              </h2>
              <p>
                Du har rätt att begära information om vilka uppgifter vi har om
                dig, att få felaktiga uppgifter rättade, att få dina uppgifter
                raderade samt att invända mot eller begränsa behandlingen.
                Kontakta oss på{' '}
                <a
                  href="mailto:info@karlacleaningcrew.se"
                  className="text-brand-green font-medium hover:underline"
                >
                  info@karlacleaningcrew.se
                </a>{' '}
                så hjälper vi dig. Du har också rätt att lämna klagomål till
                Integritetsskyddsmyndigheten (IMY).
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Link href="/kontakt" className="text-brand-green font-semibold hover:underline">
                Har du frågor? Kontakta oss →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
