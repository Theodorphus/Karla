import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://karlacleaningcrew.se'),
  title: {
    default: 'Karla Cleaning Crew | Städtjänst i Göteborg',
    template: '%s | Karla Cleaning Crew',
  },
  description:
    'Professionell städtjänst i Göteborg. Vi erbjuder hemstädning, flyttstäd, fönsterputs, byggstäd, kontorsstädning och lokalvård.',
  keywords: [
    'städning göteborg',
    'hemstädning',
    'flyttstäd',
    'fönsterputs',
    'rut avdrag',
    'professionell städning',
  ],
  authors: [{ name: 'Karla Cleaning Crew' }],
  creator: 'Karla Cleaning Crew',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://karlacleaningcrew.se',
    siteName: 'Karla Cleaning Crew',
    title: 'Karla Cleaning Crew | Städtjänst i Göteborg',
    description:
      'Professionell städtjänst i Göteborg. Vi erbjuder hemstädning, flyttstäd, fönsterputs, byggstäd, kontorsstädning och lokalvård.',
    images: [
      {
        url: 'https://karlacleaningcrew.se/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karla Cleaning Crew',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://karlacleaningcrew.se',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
