import { SectionWrapper } from '@/components/ui/SectionWrapper'

const guarantees = [
  {
    title: 'Utmärkt personal',
    description:
      'Vårt erfarna team är tränat i de högsta städstandarder och är dedikerat till att ge dig bästa möjliga service.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Nöjdhetsgaranti',
    description:
      'Om du inte är helt nöjd är vi här för att göra det rätt. Din tillfredsställelse är vår högsta prioritet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: 'Professionell kundsupport',
    description:
      'Vi är lättillgängliga och svarar snabbt på dina frågor och behov. Din feedback är viktig för oss.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Flexibilitet',
    description:
      'Vi anpassar vår service efter dina behov. Oavsett om du behöver regelbundna eller engångstjänster.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
]

export function GuaranteesSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Varför välja Karla Cleaning Crew?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Vi står för kvalité, pålitlighet och kundnöjdhet i varje städprojekt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guarantees.map((guarantee, index) => (
          <div key={index} className="group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-brand-green transition-all duration-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <div className="w-6 h-6">
                    {guarantee.icon}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
