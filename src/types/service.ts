export interface FAQ {
  question: string
  answer: string
}

export interface KeyPoint {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  heroTagline: string
  description: string
  included: string[]
  rutEligible: boolean
  ecoFriendly: boolean
  imageSrc: string
  /** object-position för hero-bilden, t.ex. 'center 35%'. Default 'center'. */
  imageObjectPosition?: string
  keyPoints?: KeyPoint[]
  faq?: FAQ[]
}
