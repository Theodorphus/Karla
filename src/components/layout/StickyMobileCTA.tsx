'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'

const PHONE = '+46707402080'

/**
 * STICKY MOBILE CTA — fast fält längst ner på mobil med "Ring" + "Få offert".
 *
 * Mobil-besökare är majoriteten av trafiken och scrollar förbi formuläret.
 * Det här fältet håller alltid en väg till kontakt synlig.
 *
 * - Visas bara på mobil (md:hidden).
 * - Tonar in först efter att användaren scrollat förbi hero (~400px),
 *   så det inte konkurrerar med hero-CTA:n direkt.
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.2)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-navy text-navy font-bold py-3 text-sm active:bg-navy/5"
          >
            <Phone size={17} />
            Ring oss
          </a>
          <Link
            href="/kontakt#offert"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#359A3B] to-[#2E7D32] text-white font-bold py-3 text-sm shadow-[0_8px_22px_-8px_rgba(46,125,50,0.55)] active:to-[#1B5E20]"
          >
            <MessageSquare size={17} />
            Få offert
          </Link>
        </div>
      </div>
    </div>
  )
}
