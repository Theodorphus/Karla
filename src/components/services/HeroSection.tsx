import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  title: string
  tagline: string
  imageSrc?: string
}

export function HeroSection({
  title,
  tagline,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden h-[600px] flex items-center justify-center">
      {/* Background Image */}
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay - Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </>
      )}

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Back link */}
        <Link
          href="/tjanster"
          className="inline-flex items-center text-gray-100 hover:text-white transition-colors mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Tillbaka till tjänster</span>
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          {tagline}
        </p>

        {/* Quick points - in white badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {[
            'Flexibla tider anpassade efter dina behov',
            'Miljövänliga rengöringsprodukter',
            'Nöjd-kund garanti',
          ].map((point, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-md rounded-lg p-4 border border-white/25 hover:bg-white/20 transition-colors"
            >
              <p className="text-sm text-white font-medium">{point}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-xl"
            >
              Beställ nu
            </Button>
          </Link>
          <a
            href="tel:+46707402080"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 text-white border-2 border-white hover:bg-white hover:text-[#2E7D32] active:bg-white/90 px-8 py-3 text-lg shadow-md"
          >
            Ring oss
          </a>
        </div>
      </div>
    </section>
  )
}
