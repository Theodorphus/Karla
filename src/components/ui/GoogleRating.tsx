import { Star } from 'lucide-react'

/**
 * GOOGLE-BETYG — återanvändbart trust-märke (5,0 ⭐ · 16 omdömen).
 *
 * Länkar till Google-profilen så besökare kan läsa omdömena.
 * Byt GOOGLE_REVIEWS_URL till er riktiga Google Business-länk.
 */
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/EvsvheTn6KSXxLQv8'

export const RATING_VALUE = '5,0'
export const REVIEW_COUNT = 16

interface GoogleRatingProps {
  /** 'light' för mörk bakgrund, 'dark' för ljus bakgrund */
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  /** Visa "X omdömen" eller bara stjärnor + betyg */
  showCount?: boolean
  className?: string
}

export function GoogleRating({
  tone = 'dark',
  size = 'md',
  showCount = true,
  className = '',
}: GoogleRatingProps) {
  const starSize = size === 'sm' ? 15 : 18
  const textCls =
    tone === 'light' ? 'text-white/90' : 'text-gray-700'
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      aria-label={`${RATING_VALUE} av 5 stjärnor baserat på ${REVIEW_COUNT} omdömen på Google`}
    >
      <span className="flex" aria-hidden>
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={starSize} className="fill-yellow-400 text-yellow-400" />
        ))}
      </span>
      <span className={`font-medium ${textCls} ${textSize}`}>
        <span className="font-bold">{RATING_VALUE}</span>
        {showCount && ` · ${REVIEW_COUNT} omdömen på Google`}
      </span>
    </a>
  )
}
