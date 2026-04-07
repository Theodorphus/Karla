'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Något gick fel. Försök igen senare.')
      }

      setSuccess(true)
      reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-semibold">
            Tack! Vi har mottagit din förfrågan. Vi svarar inom 24 timmar.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Namn */}
      <div>
        <label htmlFor="namn" className="block text-sm font-medium text-gray-700 mb-2">
          Namn *
        </label>
        <input
          type="text"
          id="namn"
          {...register('namn')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="Ditt namn"
        />
        {errors.namn && (
          <p className="text-red-600 text-sm mt-1">{errors.namn.message}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="telefon"
          {...register('telefon')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="+46 XXX XX XX XX"
        />
        {errors.telefon && (
          <p className="text-red-600 text-sm mt-1">{errors.telefon.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="din@email.se"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Kommentar */}
      <div>
        <label htmlFor="kommentar" className="block text-sm font-medium text-gray-700 mb-2">
          Kommentar
        </label>
        <textarea
          id="kommentar"
          {...register('kommentar')}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none"
          placeholder="Beskriv dina städbehov..."
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" disabled={isLoading} className="w-full">
        {isLoading ? 'Skickar...' : 'Skicka förfrågan'}
      </Button>
    </form>
  )
}
