'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TJANSTER } from '@/lib/validations/quote'

const inputCls =
  'w-full px-4 py-3 border border-[#D9D9D9] rounded-xl text-gray-900 placeholder-gray-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green ' +
  'hover:border-gray-400 transition-colors bg-white text-sm'

interface QuickFormState {
  tjanst: string
  postnummer: string
  fornamn: string
  telefon: string
  email: string
  beskrivning: string
}

const empty: QuickFormState = {
  tjanst: '',
  postnummer: '',
  fornamn: '',
  telefon: '',
  email: '',
  beskrivning: '',
}

export function QuickQuoteForm() {
  const [form, setForm] = useState<QuickFormState>(empty)
  const [errors, setErrors] = useState<Partial<QuickFormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = (): boolean => {
    const e: Partial<QuickFormState> = {}
    if (!form.tjanst) e.tjanst = 'Välj en tjänst'
    if (!form.postnummer.match(/^\d{3}\s?\d{2}$/)) e.postnummer = 'Ogiltigt postnummer'
    if (form.fornamn.trim().length < 2) e.fornamn = 'Ange ditt namn'
    if (!form.telefon.match(/^[\d\s+\-()]{7,}$/)) e.telefon = 'Ange telefonnummer'
    // E-post är valfri – validera bara om något fyllts i.
    if (form.email.trim() && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      e.email = 'Ange en giltig e-postadress'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/quick-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setForm(empty)
    } catch {
      setServerError('Något gick fel. Försök igen eller ring oss.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={30} className="text-brand-green" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Tack! Vi hör av oss inom 24h.</h3>
        <p className="text-gray-500 text-sm">
          Bråttom?{' '}
          <a href="tel:+46707402080" className="text-navy font-semibold underline">
            070 740 20 80
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Tjänst */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Tjänst <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-3 gap-2">
          {TJANSTER.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => {
                setForm((f) => ({ ...f, tjanst: t.value }))
                setErrors((e) => ({ ...e, tjanst: undefined }))
              }}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border-2 text-xs font-semibold transition-all cursor-pointer ${
                form.tjanst === t.value
                  ? 'border-navy bg-navy text-white shadow-sm'
                  : 'border-[#E5E5E5] bg-[#F7F7F7] text-gray-700 hover:border-navy/30 hover:bg-white'
              }`}
            >
              <span className="text-lg">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
        {errors.tjanst && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.tjanst}
          </p>
        )}
      </div>

      {/* Postnummer + Namn */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="qq-postnummer" className="block text-sm font-semibold text-gray-700 mb-1">
            Postnummer <span className="text-red-500">*</span>
          </label>
          <input
            id="qq-postnummer"
            type="text"
            value={form.postnummer}
            onChange={(e) => {
              setForm((f) => ({ ...f, postnummer: e.target.value }))
              setErrors((er) => ({ ...er, postnummer: undefined }))
            }}
            className={inputCls}
            placeholder="417 51"
            maxLength={6}
            autoComplete="postal-code"
          />
          {errors.postnummer && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.postnummer}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="qq-fornamn" className="block text-sm font-semibold text-gray-700 mb-1">
            Förnamn <span className="text-red-500">*</span>
          </label>
          <input
            id="qq-fornamn"
            type="text"
            value={form.fornamn}
            onChange={(e) => {
              setForm((f) => ({ ...f, fornamn: e.target.value }))
              setErrors((er) => ({ ...er, fornamn: undefined }))
            }}
            className={inputCls}
            placeholder="Anna"
            autoComplete="given-name"
          />
          {errors.fornamn && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.fornamn}
            </p>
          )}
        </div>
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="qq-telefon" className="block text-sm font-semibold text-gray-700 mb-1">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          id="qq-telefon"
          type="tel"
          value={form.telefon}
          onChange={(e) => {
            setForm((f) => ({ ...f, telefon: e.target.value }))
            setErrors((er) => ({ ...er, telefon: undefined }))
          }}
          className={inputCls}
          placeholder="070 740 20 80"
          autoComplete="tel"
        />
        {errors.telefon && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.telefon}
          </p>
        )}
      </div>

      {/* E-post (valfri) */}
      <div>
        <label htmlFor="qq-email" className="block text-sm font-semibold text-gray-700 mb-1">
          E-post <span className="text-gray-400 font-normal">(valfritt)</span>
        </label>
        <input
          id="qq-email"
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm((f) => ({ ...f, email: e.target.value }))
            setErrors((er) => ({ ...er, email: undefined }))
          }}
          className={inputCls}
          placeholder="anna@exempel.se"
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Beskrivning (valfritt) */}
      <div>
        <label htmlFor="qq-beskrivning" className="block text-sm font-semibold text-gray-700 mb-1">
          Beskrivning <span className="text-gray-400 font-normal">(valfritt)</span>
        </label>
        <textarea
          id="qq-beskrivning"
          value={form.beskrivning}
          onChange={(e) => setForm((f) => ({ ...f, beskrivning: e.target.value }))}
          className={`${inputCls} min-h-[80px] resize-y`}
          placeholder="Berätta gärna mer om dina önskemål …"
          rows={3}
          maxLength={1000}
        />
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
          <AlertCircle size={15} className="flex-shrink-0" />
          {serverError}
        </div>
      )}

      <Button type="submit" size="lg" disabled={loading} className="w-full font-bold">
        {loading ? 'Skickar...' : 'Få kostnadsfri offert'}
      </Button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        Genom att skicka godkänner du att vi behandlar dina uppgifter enligt vår{' '}
        <a href="/integritetspolicy" className="underline hover:text-brand-green">
          integritetspolicy
        </a>
        .
      </p>

      <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
        <Phone size={14} />
        <span>
          Föredrar du att ringa?{' '}
          <a href="tel:+46707402080" className="font-semibold text-navy underline">
            070 740 20 80
          </a>
        </span>
      </div>

      <p className="text-center text-xs text-gray-400">
        ✓ Kostnadsfritt &nbsp;·&nbsp; ✓ Svar inom 24h &nbsp;·&nbsp; ✓ Ingen bindningstid
      </p>
    </form>
  )
}
