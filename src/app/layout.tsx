import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800'],
})

/**
 * ROOT LAYOUT METADATA
 *
 * Global SEO configuration for Karla Cleaning Crew
 * - Fallback title & description
 * - Template for all subpages
 * - Open Graph for social sharing
 * - Schema.org structured data
 * - Robots & indexing rules
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || 'https://karlacleaningcrew.se'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Title & Description
  title: {
    default: 'Karla Cleaning Crew | Professionell städning Göteborg',
    template: '%s | Karla Cleaning Crew',
  },
  description:
    'Professionell städtjänst i Göteborg. Hemstädning, flyttstäd, fönsterputs, byggstäd, kontorsstädning och lokalvård. RUT-avdrag, miljövänligt, garanterad kvalité.',

  // Keywords for SEO
  keywords: [
    'städning göteborg',
    'hemstädning göteborg',
    'flyttstäd göteborg',
    'fönsterputs göteborg',
    'byggstäd göteborg',
    'kontorsstädning göteborg',
    'lokalvård göteborg',
    'RUT-avdrag',
    'professionell städning',
    'miljövänlig städning',
    'städservice',
    'städföretag göteborg',
  ],

  // Author
  authors: [{ name: 'Karla Cleaning Crew' }],
  creator: 'Karla Cleaning Crew',

  // Open Graph for social sharing
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: siteUrl,
    siteName: 'Karla Cleaning Crew',
    title: 'Karla Cleaning Crew | Professionell städning Göteborg',
    description:
      'Vi erbjuder professionell städning i Göteborg. Hemstädning, flyttstäd, fönsterputs och mycket mer. RUT-avdrag tillgänglig.',
    images: [
      {
        url: '/images/Og1.png',
        width: 1200,
        height: 630,
        alt: 'Karla Cleaning Crew - Professionell städning i Göteborg',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Karla Cleaning Crew | Städning Göteborg',
    description: 'Professionell städning som du kan lita på. Hemstädning, flyttstäd, fönsterputs och mer.',
    images: ['/images/Og1.png'],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
