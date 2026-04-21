import { Metadata } from 'next'
import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { TEAM } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'Om oss – Städföretag Göteborg med 10+ års erfarenhet',
  description:
    'Karla Cleaning Crew är ett professionellt städföretag i Göteborg. Miljövänligt, försäkrat och med städgaranti. Läs om teamet och vår historia.',
  openGraph: {
    title: 'Om Karla Cleaning Crew – Städföretag Göteborg',
    description: 'Professionellt städföretag i Göteborg med 10+ års erfarenhet. Miljövänligt, försäkrat, städgaranti.',
    url: 'https://karlacleaningcrew.se/om-karla-crew',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om Karla Cleaning Crew – Städföretag Göteborg',
    description: 'Professionellt städföretag i Göteborg med 10+ års erfarenhet. Miljövänligt, försäkrat, städgaranti.',
    images: ['/images/Og1.png'],
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se/om-karla-crew',
  },
}

export default function OmKarlaCrew() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Om oss' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-petrol text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Om Karla Cleaning Crew</h1>
          <p className="text-xl text-white/80">
            Göteborg förtjänar professionell städning. Därför finns vi här.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vår berättelse</h2>
            <p className="text-lg text-gray-600 mb-4">
              Karla Cleaning Crew började med en enkel vision: att göra professionell städning tillgänglig för alla i Göteborg.
              Vi trodde att du inte skulle behöva välja mellan kvalité och pris, mellan miljövänlig och effektiv, mellan pålitlig och flexibel.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Idag är vi glada över att vi hjälper hemmen, företagen och byggprojekten i Göteborg och omgivning.
              Vi är inte bara ett städföretag – vi är partners som förstår att ett rent hem eller kontor gör livet bättre.
            </p>
            <p className="text-lg text-gray-600">
              Med miljövänliga produkter, erfarna städare och ett genuint intresse för dina behov,
              erbjuder vi städning som du kan lita på – alltid.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Våra värden</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-green font-bold text-xl">⭐</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Premiumkvalité</h4>
                  <p className="text-gray-600 text-sm">
                    Vi gör aldrig något halvarbetat. Varje uppdrag får vår fulla fokus och precision.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green font-bold text-xl">🌱</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Miljöansvar</h4>
                  <p className="text-gray-600 text-sm">
                    Miljövänliga produkter och hållbara metoder i allt vi gör.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green font-bold text-xl">🛡️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Pålitlighet</h4>
                  <p className="text-gray-600 text-sm">
                    Du kan lita på oss för konsekvent, utmärkt service – alltid på tid, alltid noggrann.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-green font-bold text-xl">❤️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Kundomsorg</h4>
                  <p className="text-gray-600 text-sm">
                    Din nöjdhet är vår framgång. Vi lyssnar och anpassar oss till dina behov.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Träffa vårt team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Vi är ett dedikerat team av professionella städare som brinner för att leverera utmärkt resultat.
            Alla våra städare är tränade, försäkrade och engagerade i ditt nöje.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand-green/50 hover:shadow-lg transition-all duration-300 w-full sm:w-72">
                {member.image ? (
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden shadow-md">
                    <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover w-full h-auto" />
                  </div>
                ) : (
                  <div className="bg-brand-green text-white w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-bold shadow-md">
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-green font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-green transition-colors font-medium text-base"
                  >
                    📞 {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Varför välja Karla Cleaning Crew?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">10+ år erfarenhet</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Vi vet vad vi gör. Över ett decennium av städning i Göteborg och omgivning
                har gjort oss till experter på allt från hemstädning till stora byggprojekt.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Skräddarsydd service</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Vi lyssnar på dina behov och anpassar städningen helt efter dina önskemål.
                En storlek passar inte alla – och det förstår vi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Miljövänligt alltid</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Vi använder endast miljövänliga produkter och hållbara metoder.
                Din hälsa och miljön är viktiga för oss.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Garanti & försäkring</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Städgaranti på alla uppdrag. Vi är fullt försäkrade.
                Du kan vila säker på att du får exakt det du betalar för.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
