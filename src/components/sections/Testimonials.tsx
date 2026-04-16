/**
 * TESTIMONIALS SECTION
 *
 * Premium customer reviews with 5-star ratings
 * Used on home page to build trust & social proof
 */

import { StarRating } from '@/components/ui/StarRating'

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    quote:
      'Utmärkt service och mycket noga städ. Hemmet ser ut som nytt varje gång! Vi är mycket nöjda och kan varmt rekommendera.',
    author: 'Anna L.',
    role: 'Privatkund, Göteborg',
  },
  {
    id: 2,
    rating: 5,
    quote:
      'Professionellt, pålitligt och de är alltid på tid. De gör ett gott jobb och vi använder dem för alla våra städuppgifter.',
    author: 'Erik M.',
    role: 'Företagskund, Göteborg',
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Fantastisk kommunikation och mycket noggrann städning. De behandlar hemmet som sitt eget. Rekommenderar varmt!',
    author: 'Sofia K.',
    role: 'Fastighetskund, Göteborg',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
            Det säger våra kunder
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Vi är stolta över det förtroende våra kunder visar oss dag efter dag.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-800 italic leading-relaxed flex-grow mb-5">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1A1A1A] text-sm">{testimonial.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-base">
            <span className="font-bold text-[#2E7D32] text-lg">50+</span> nöjda kunder i Göteborg
          </p>
        </div>
      </div>
    </section>
  )
}
