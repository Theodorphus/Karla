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
    <section className="relative bg-gradient-hero text-gray-900 py-section-lg px-section-sm overflow-hidden">
      {/* Accent shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green rounded-full opacity-20 -mr-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href="/tjanster"
          className="inline-flex items-center text-gray-600 hover:text-brand-dark transition-colors mb-8"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tagline}
            </p>

            {/* Quick points */}
            <ul className="space-y-3 mb-10">
              {[
                'Flexibla tider anpassade efter dina behov',
                'Miljövänliga rengöringsprodukter',
                'Nöjd-kund garanti',
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-green flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/kontakt">Beställ nu</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a href="tel:+46707402080">Ring oss</a>
              </Button>
            </div>
          </div>

          {/* Right visual */}
          {imageSrc && (
            <div className="relative h-96 hidden lg:block">
              {/* Accent circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-lighter to-brand-green-light rounded-full opacity-40 transform scale-125" />

              {/* Image */}
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover rounded-3xl relative z-10 shadow-strong"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
