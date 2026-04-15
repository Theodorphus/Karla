/**
 * SEO UTILITIES
 *
 * Helper functions for generating metadata across the site
 * Used in service pages and other dynamic routes
 */

import { Metadata } from 'next'

export interface ServiceMetadataParams {
  title: string
  description: string
  slug: string
  imageSrc: string
}

/**
 * Generate metadata for service pages
 *
 * Usage:
 * export const metadata = generateServiceMetadata({
 *   title: 'Hemstädning',
 *   description: '...',
 *   slug: 'hemstadning',
 *   imageSrc: '/images/services/hemstadning_hero.png'
 * })
 */
export function generateServiceMetadata({
  title,
  description,
  slug,
  imageSrc,
}: ServiceMetadataParams): Metadata {
  const baseUrl = 'https://karlacleaningcrew.se'
  const url = `${baseUrl}/${slug}`

  return {
    title: `${title} Göteborg | Karla Cleaning Crew`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} i Göteborg | Karla Cleaning Crew`,
      description,
      type: 'website',
      locale: 'sv_SE',
      url,
      siteName: 'Karla Cleaning Crew',
      images: [
        {
          url: imageSrc,
          width: 1200,
          height: 630,
          alt: `${title} i Göteborg | Karla Cleaning Crew`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Karla Cleaning Crew`,
      description,
      images: [imageSrc],
    },
  }
}


/**
 * Generate service schema for structured data
 */
export function generateServiceSchema(
  serviceName: string,
  slug: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Karla Cleaning Crew',
      url: 'https://karlacleaningcrew.se',
    },
    areaServed: {
      '@type': 'City',
      name: 'Göteborg',
    },
    url: `https://karlacleaningcrew.se/${slug}`,
  }
}

/**
 * Generate FAQ schema for structured data
 */
export function generateFAQSchema(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
