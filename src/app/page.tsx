import { Star, Shield, Leaf, Users } from 'lucide-react'
import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsRow } from '@/components/home/StatsRow'
import { USPRow } from '@/components/sections/USPRow'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/home/CTABanner'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* Stats Section - Clean numbers display */}
      <StatsRow />

      {/* Why Choose Us Section - Premium 4-column layout using USPRow component */}
      <USPRow
        items={[
          {
            icon: Star,
            title: 'Premium kvalité',
            description:
              'Vi levererar städning av högsta klass med miljövänliga produkter och precis arbetsutförande.',
          },
          {
            icon: Shield,
            title: 'Trygghet & Garantier',
            description: 'Städgaranti på alla uppdrag. Vi är försäkrade och professionella. Du kan lita på oss.',
          },
          {
            icon: Leaf,
            title: 'Miljövänligt & Hållbart',
            description:
              'Vi bryr oss om miljön. Miljövänliga produkter och hållbara metoder i all vår verksamhet.',
          },
          {
            icon: Users,
            title: 'Erfaret team',
            description: 'Över tio år av erfarenhet. Vi vet vad vi gör och tar stolthet i varje uppdrag.',
          },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
