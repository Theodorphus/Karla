import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/generated/startsida_hero.png"
        alt="Karla Cleaning Crew professionell städning"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark Overlay - Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Trust badge */}
        <div className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-sm font-semibold">✓ Göteborg | +10 år erfarenhet | 24h garanti</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
          Professionell städning i <span className="text-green-300">Göteborg</span>
        </h1>

        <p className="text-lg sm:text-xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Låt oss ta hand om städningen så du kan fokusera på det som är viktigt. Miljövänligt, pålitligt, och alltid på tid.
        </p>

        {/* Trust signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/25 hover:bg-white/15 transition-colors">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-gray-200">Nöjda kunder</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/25 hover:bg-white/15 transition-colors">
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-sm text-gray-200">År erfarenhet</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/25 hover:bg-white/15 transition-colors">
            <div className="text-3xl font-bold text-white">24h</div>
            <div className="text-sm text-gray-200">Garantisvar</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-green hover:bg-gray-100 active:bg-gray-200 shadow-lg font-semibold"
          >
            <Link href="/kontakt">Få kostnadsfri offert</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/15 active:bg-white/25 font-semibold backdrop-blur-sm"
          >
            <Link href="/tjanster">Se alla tjänster</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
