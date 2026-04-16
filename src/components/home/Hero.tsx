import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden">
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        {/* Trust badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          <Icon icon={CheckCircle} size={16} color="white" />
          <span className="text-sm font-semibold tracking-wide">Göteborg | +10 år erfarenhet | 24h garanti</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg mb-4">
          Professionell städning <br />du kan lita på
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow mb-8">
          Låt oss ta hand om städningen. Du får mer tid över – vi levererar alltid hög kvalitet och arbetar med miljövänliga produkter.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/25">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-xs text-white/80 mt-0.5">Nöjda kunder</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/25">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-xs text-white/80 mt-0.5">År erfarenhet</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/25">
            <div className="text-2xl font-bold">24h</div>
            <div className="text-xs text-white/80 mt-0.5">Garantisvar</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt">
            <Button size="lg" className="shadow-xl">
              Få kostnadsfri offert
            </Button>
          </Link>
          <Link href="/tjanster">
            <button className="px-8 py-3 rounded-lg text-lg font-semibold border-2 border-white text-white hover:bg-white/15 transition-colors">
              Se alla tjänster
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
