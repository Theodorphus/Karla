import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/home/hero_home2.png"
        alt="Karla Cleaning Crew professionell städning"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        unoptimized
      />

      {/* Dark Overlay - Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Trust badge */}
        <div className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-3 rounded-full border border-white/30">
            <Icon icon={CheckCircle} size={18} color="white" />
            <span className="text-sm font-semibold text-white">Göteborg | +10 år erfarenhet | 24h garanti</span>
          </div>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
          Professionell städning <br />du kan lita på
        </h1>

        <p className="text-lg sm:text-xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Låt oss ta hand om städningen. Du får mer tid över – vi levererar alltid hög kvalitet och arbetar med miljövänliga produkter.
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
          {/* PRIMARY: White button with shadow */}
          <Link href="/kontakt">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-xl"
            >
              Få kostnadsfri offert
            </Button>
          </Link>

          {/* SECONDARY: Services link */}
          <Link href="/tjanster">
            <Button
              size="lg"
              variant="primary"
              className="border-2 border-brand-green"
            >
              Se alla tjänster
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
