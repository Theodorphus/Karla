import Link from 'next/link'
import { Phone, Mail, BadgeCheck } from 'lucide-react'
import { FOOTER_LINKS, SERVICES_NAV } from '@/lib/data/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-[#1A1A1A] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Company Info & Contact */}
          <div>
            <h3 className="text-[#2E7D32] font-bold text-lg mb-5">Karla Cleaning Crew</h3>
            <p className="text-sm mb-6 text-gray-600 leading-relaxed">
              Professionell städtjänst i Göteborg med fokus på kvalité och kundnöjdhet.
            </p>

            {/* Contact Items */}
            <div className="space-y-3">
              <a href="tel:+46707402080" className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#2E7D32] transition-colors">
                <Phone size={16} className="text-[#2E7D32] flex-shrink-0" />
                <span>+46 707 40 20 80</span>
              </a>
              <a
                href="mailto:Info@karlacleaningcrew.se"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#2E7D32] transition-colors"
              >
                <Mail size={16} className="text-[#2E7D32] flex-shrink-0" />
                <span>Info@karlacleaningcrew.se</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-7 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BadgeCheck size={15} className="text-[#2E7D32] flex-shrink-0" />
                <span>RUT-godkänd</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BadgeCheck size={15} className="text-[#2E7D32] flex-shrink-0" />
                <span>Fullt försäkrad</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BadgeCheck size={15} className="text-[#2E7D32] flex-shrink-0" />
                <span>10+ år erfarenhet</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h4 className="text-[#2E7D32] font-semibold mb-5">Navigering</h4>
            <ul className="space-y-2 mb-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[#2E7D32] font-semibold mb-5">Tjänster</h4>
            <ul className="space-y-2">
              {SERVICES_NAV.slice(0, 3).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-gray-600 hover:text-[#2E7D32] transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tjanster" className="text-sm text-[#2E7D32] font-semibold hover:text-[#1B5E20] transition-colors">
                  Se alla tjänster →
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="text-[#2E7D32] font-semibold mb-5">Information</h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1.5">Adress</p>
                <p className="text-sm text-gray-700">
                  Lodjursstråket 1
                  <br />
                  417 51 Göteborg
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1.5">Öppet</p>
                <p className="text-sm text-gray-700">
                  Mån–Fre: 08:00–17:00
                  <br />
                  Lör–Sön: Stängt
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2.5">Följ oss</p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/profile.php?id=61555285093932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2E7D32] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/karlacleaningcrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2E7D32] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Copyright */}
        <div className="pt-6 mt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Karla Cleaning Crew. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
