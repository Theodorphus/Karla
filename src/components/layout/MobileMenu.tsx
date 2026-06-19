'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GoogleRating } from '@/components/ui/GoogleRating'
import { MAIN_NAV, SERVICES_NAV } from '@/lib/data/navigation'
import { useState } from 'react'

const PHONE = '+46707402080'
const PHONE_DISPLAY = '070 740 20 80'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-4 py-4 space-y-2">
        {MAIN_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-gray-700 hover:text-brand-green hover:bg-green-50 rounded-lg transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        {/* Services Dropdown Mobile */}
        <div>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="w-full text-left px-3 py-2 text-gray-700 hover:text-brand-green hover:bg-green-50 rounded-lg transition-colors flex items-center justify-between"
          >
            Tjänster
            <svg
              className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isServicesOpen && (
            <div className="pl-4 py-2 space-y-1">
              {SERVICES_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-brand-green hover:bg-green-50 rounded-lg transition-colors text-sm"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 space-y-3">
          <Link href="/kontakt#offert" className="w-full" onClick={onClose}>
            <Button className="w-full">
              Få offert här
            </Button>
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-navy text-navy font-semibold py-2.5"
            onClick={onClose}
          >
            <Phone size={17} />
            {PHONE_DISPLAY}
          </a>
          <div className="flex justify-center pt-1">
            <GoogleRating tone="dark" size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
