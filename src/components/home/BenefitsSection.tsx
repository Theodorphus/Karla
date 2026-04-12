import Image from 'next/image'

export function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: 'Premium kvalité',
      description: 'Vi levererar städning av högsta klass med miljövänliga produkter och precis arbetsutförande.',
      image: '/images/generated/startsida_kvalitet.png',
      icon: '⭐',
    },
    {
      id: 2,
      title: 'Miljövänligt & Hållbart',
      description: 'Vi bryr oss om miljön. Miljövänliga produkter och hållbara metoder i all vår verksamhet.',
      image: '/images/generated/startsida_hemstadning.png',
      icon: '🌱',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Benefit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Image */}
          <div className="relative h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-medium">
            <Image
              src={benefits[0].image}
              alt={benefits[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="text-5xl mb-4">{benefits[0].icon}</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {benefits[0].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {benefits[0].description}
            </p>
            <div className="flex items-start gap-4 text-lg text-gray-700">
              <span className="text-brand-green text-2xl">✓</span>
              <span>Vi använder bara certifierade miljöprodukter som är säkra för barn och djur</span>
            </div>
          </div>
        </div>

        {/* Second Benefit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Reversed order on desktop */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="text-5xl mb-4">{benefits[1].icon}</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {benefits[1].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {benefits[1].description}
            </p>
            <div className="flex items-start gap-4 text-lg text-gray-700">
              <span className="text-brand-green text-2xl">✓</span>
              <span>Vi minskar vår miljöpåverkan genom återvinning och smart resurshantering</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-medium order-1 lg:order-2">
            <Image
              src={benefits[1].image}
              alt={benefits[1].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
