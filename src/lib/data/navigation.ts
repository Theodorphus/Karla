export interface NavItem {
  label: string
  href: string
}

export interface NavDropdownItem extends NavItem {
  slug: string
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Hem', href: '/' },
  { label: 'Om Karla Cleaning Crew', href: '/om-karla-crew' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const SERVICES_NAV: NavDropdownItem[] = [
  { label: 'Hemstädning', href: '/hemstadning', slug: 'hemstadning' },
  { label: 'Flyttstäd', href: '/flyttstad', slug: 'flyttstad' },
  { label: 'Fönsterputs', href: '/fonsterputs', slug: 'fonsterputs' },
  { label: 'Byggstäd', href: '/byggstad', slug: 'byggstad' },
  { label: 'Kontorsstädning', href: '/kontorsstadning', slug: 'kontorsstadning' },
  { label: 'Lokalvård', href: '/lokalvard', slug: 'lokalvard' },
]

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Startsida', href: '/' },
  { label: 'Tjänster', href: '/tjanster' },
  { label: 'Om oss', href: '/om-karla-crew' },
  { label: 'Kontakt', href: '/kontakt' },
]
