import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { FAQSection } from '@/components/services/FAQSection'
import { CTABanner } from '@/components/home/CTABanner'
import { SERVICES } from '@/lib/data/services'
import { GUIDES, getGuideBySlug, getAllGuideSlugs, type GuideBlock } from '@/lib/data/guides'

const BASE_URL = 'https://karlacleaningcrew.se'

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}

  const url = `${BASE_URL}/guider/${guide.slug}`
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      type: 'article',
      locale: 'sv_SE',
      url,
      siteName: 'Karla Cleaning Crew',
      publishedTime: guide.published,
      modifiedTime: guide.updated ?? guide.published,
      images: ['/images/Og1.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: ['/images/Og1.png'],
    },
  }
}

function renderBlock(block: GuideBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={i} className="font-bold text-xl text-gray-900 mt-6 mb-3">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={i} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={i} className="space-y-2 mb-6">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-700 text-base sm:text-lg">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'cta':
      return (
        <div
          key={i}
          className="my-8 rounded-2xl bg-brand-green/10 border border-brand-green/30 p-6 sm:p-8 text-center"
        >
          <p className="text-gray-800 font-medium text-lg mb-5">{block.text}</p>
          <Link href="/kontakt#offert">
            <Button size="lg" className="font-bold">
              Få kostnadsfri offert
            </Button>
          </Link>
        </div>
      )
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const url = `${BASE_URL}/guider/${guide.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.seoDescription,
    datePublished: guide.published,
    dateModified: guide.updated ?? guide.published,
    author: { '@type': 'Organization', name: 'Karla Cleaning Crew' },
    publisher: {
      '@type': 'Organization',
      name: 'Karla Cleaning Crew',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${BASE_URL}/images/Og1.png`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const related = SERVICES.filter((s) => guide.relatedServices.includes(s.slug))
  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Startsida', href: '/' },
          { label: 'Guider', href: '/guider' },
          { label: guide.category },
        ]}
      />

      <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green bg-brand-green/10 rounded-full px-3 py-1">
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={13} />
              {guide.readingMinutes} min läsning
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            {guide.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
            {guide.excerpt}
          </p>

          <div>{guide.body.map((block, i) => renderBlock(block, i))}</div>

          {/* Relaterade tjänster */}
          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Relaterade tjänster</h2>
              <div className="flex flex-wrap gap-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-brand-green/50 hover:text-brand-green transition-colors"
                  >
                    {s.title}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* FAQ */}
      <FAQSection
        faqItems={guide.faq}
        title="Vanliga frågor"
        subtitle="Snabba svar på det folk oftast undrar"
      />

      {/* Fler guider */}
      {otherGuides.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Fler guider
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guider/${g.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-brand-green/40 transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">
                    {g.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-green transition-colors mb-2">
                    {g.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
