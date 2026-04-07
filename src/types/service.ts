export interface FAQ {
  question: string
  answer: string
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
  faq?: FAQ[]
}
