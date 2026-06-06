import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { ParallaxFrame } from '@/components/premium/Effects'

export function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle scroll-parallax */}
      <ParallaxFrame speed={70} className="absolute inset-0">
        <Image
          src="/images/home/hero_home2.png"
          alt="Ljust, nystädat vardagsrum – professionell städning i Göteborg av Karla Cleaning Crew"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />
      </ParallaxFrame>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        {/* Trust badge */}
        <div
          className="hero-rise mb-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/30 shadow-lg shadow-black/10"
          style={{ ['--hero-delay' as string]: '60ms' }}
        >
          <Icon icon={CheckCircle} size={14} color="white" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">Göteborg · +10 år erfarenhet · 24h garanti</span>
        </div>

        <h1
          className="hero-rise font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg mb-4"
          style={{ ['--hero-delay' as string]: '120ms' }}
        >
          Professionell städning du kan lita på
        </h1>

        <p
          className="hero-rise text-base sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow mb-6"
          style={{ ['--hero-delay' as string]: '220ms' }}
        >
          Låt oss ta hand om städningen. Du får mer tid över – vi levererar alltid hög kvalitet och arbetar med miljövänliga produkter.
        </p>

        {/* Stats */}
        <div
          className="hero-rise grid grid-cols-3 gap-2 sm:gap-3 max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8"
          style={{ ['--hero-delay' as string]: '320ms' }}
        >
          {[
            { value: '100+', label: 'Nöjda kunder' },
            { value: '10+', label: 'År erfarenhet' },
            { value: '24h', label: 'Garantisvar' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/25 bg-white/10 p-2 sm:p-3 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40"
            >
              <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/80 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-rise flex flex-col sm:flex-row gap-3 justify-center"
          style={{ ['--hero-delay' as string]: '420ms' }}
        >
          <Link href="/kontakt#offert" className="w-full sm:w-auto">
            <Button size="lg" className="shadow-xl w-full sm:w-auto">
              Få kostnadsfri offert
            </Button>
          </Link>
          <Link href="/tjanster" className="w-full sm:w-auto">
            <Button variant="outline-white" size="lg" fullWidth className="sm:w-auto">
              Se alla tjänster
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
