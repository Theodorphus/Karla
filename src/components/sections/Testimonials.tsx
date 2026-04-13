/**
 * TESTIMONIALS SECTION
 *
 * Premium customer reviews with 5-star ratings
 * Used on home page to build trust & social proof
 *
 * Features:
 * - StarRating component
 * - Hover effects
 * - Responsive 3-column grid
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-slate">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Det säger våra kunder
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Vi är stolta över det förtroende våra kunder visar oss dag efter dag.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Opening quote mark */}
              <div className="text-5xl text-brand-green mb-3">"</div>

              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray-800 mb-6 text-base leading-relaxed flex-grow font-medium">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-5">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-brand-green text-xl">50+</span> nöjda kunder i Göteborg
          </p>
        </div>
      </div>
    </section>
  )
}
