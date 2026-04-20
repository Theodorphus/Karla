'use client'

import { useState } from 'react'
import {
  useForm,
  type UseFormRegister,
  type UseFormWatch,
  type UseFormSetValue,
  type FieldErrors,
  type SubmitHandler,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  quoteSchema,
  type QuoteFormData,
  TJANSTER,
  FREKVENS_OPTIONS,
  TID_OPTIONS,
} from '@/lib/validations/quote'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="text-red-600 text-sm mt-1 flex items-center gap-1">
      <AlertCircle size={13} className="flex-shrink-0" />
      {message}
    </p>
  )
}

const inputCls =
  'w-full px-4 py-3 border border-[#D9D9D9] rounded-xl text-gray-900 placeholder-gray-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-petrol focus:border-petrol ' +
  'hover:border-gray-400 transition-colors disabled:bg-gray-50 bg-white'

// ─── Step indicator ───────────────────────────────────────────────────────────

const STEPS = ['Tjänst', 'Adress & tid', 'Dina uppgifter']

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8" aria-label="Formulärsteg">
      {STEPS.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                  done
                    ? 'bg-brand-green border-brand-green text-white'
                    : active
                      ? 'border-brand-green text-brand-green bg-white'
                      : 'border-gray-300 text-gray-400 bg-white'
                }`}
                aria-current={active ? 'step' : undefined}
              >
                {done ? <CheckCircle size={18} /> : i + 1}
              </div>
              <span
                className={`text-xs mt-1 font-medium hidden sm:block ${
                  active ? 'text-brand-green' : done ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-0.5 w-12 sm:w-20 mx-1 mb-5 transition-colors ${
                  done ? 'bg-brand-green' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Step 1 props ─────────────────────────────────────────────────────────────

interface Step1Props {
  register: UseFormRegister<QuoteFormData>
  watch: UseFormWatch<QuoteFormData>
  setValue: UseFormSetValue<QuoteFormData>
  errors: FieldErrors<QuoteFormData>
}

function Step1({ register, watch, setValue, errors }: Step1Props) {
  const tjanst = watch('tjanst')
  const isCommercial = tjanst === 'kontorsstadning' || tjanst === 'lokalvard'
  const needsKvm = tjanst && tjanst !== 'fonsterputs'
  const needsWindows = tjanst === 'fonsterputs'
  const needsFrekvens = tjanst === 'hemstadning'

  return (
    <div className="space-y-6">
      {/* Service cards */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Vilken tjänst behöver du? <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TJANSTER.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setValue('tjanst', t.value, { shouldValidate: true })}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer ${
                tjanst === t.value
                  ? 'border-navy bg-navy text-white shadow-md'
                  : 'border-[#E5E5E5] bg-[#F7F7F7] text-gray-700 hover:border-navy/30 hover:bg-white'
              }`}
              aria-pressed={tjanst === t.value}
            >
              <span className="text-2xl">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
        <FieldError message={errors.tjanst?.message} />
        <input type="hidden" {...register('tjanst')} />
      </div>

      {isCommercial && (
        <div>
          <label htmlFor="foretagsnamn" className="block text-sm font-semibold text-gray-700 mb-2">
            Företagsnamn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="foretagsnamn"
            {...register('foretagsnamn')}
            className={inputCls}
            placeholder="Ditt AB"
            autoComplete="organization"
          />
          <FieldError message={errors.foretagsnamn?.message} />
        </div>
      )}

      {needsKvm && (
        <div>
          <label htmlFor="kvm" className="block text-sm font-semibold text-gray-700 mb-2">
            Storlek (kvm) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="kvm"
            {...register('kvm')}
            className={inputCls}
            placeholder="t.ex. 75"
            min={10}
            max={10000}
          />
          <FieldError message={errors.kvm?.message} />
        </div>
      )}

      {needsWindows && (
        <div>
          <label htmlFor="antalFonster" className="block text-sm font-semibold text-gray-700 mb-2">
            Antal fönster <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="antalFonster"
            {...register('antalFonster')}
            className={inputCls}
            placeholder="t.ex. 8"
            min={1}
          />
          <FieldError message={errors.antalFonster?.message} />
        </div>
      )}

      {needsFrekvens && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Hur ofta? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {FREKVENS_OPTIONS.map((f) => (
              <label
                key={f.value}
                className="flex items-center gap-2 p-3 rounded-xl border-2 border-[#E5E5E5] bg-[#F7F7F7] cursor-pointer hover:border-navy/30 has-[:checked]:border-navy has-[:checked]:bg-navy/5 transition-colors"
              >
                <input
                  type="radio"
                  {...register('frekvens')}
                  value={f.value}
                  className="accent-brand-green"
                />
                <span className="text-sm font-medium text-gray-700">{f.label}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.frekvens?.message} />
        </div>
      )}
    </div>
  )
}

// ─── Step 2 props ─────────────────────────────────────────────────────────────

interface Step2Props {
  register: UseFormRegister<QuoteFormData>
  errors: FieldErrors<QuoteFormData>
}

function Step2({ register, errors }: Step2Props) {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="postnummer" className="block text-sm font-semibold text-gray-700 mb-2">
            Postnummer <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="postnummer"
            {...register('postnummer')}
            className={inputCls}
            placeholder="417 51"
            autoComplete="postal-code"
            maxLength={6}
          />
          <FieldError message={errors.postnummer?.message} />
        </div>
        <div>
          <label htmlFor="ort" className="block text-sm font-semibold text-gray-700 mb-2">
            Ort <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="ort"
            {...register('ort')}
            className={inputCls}
            placeholder="Göteborg"
            autoComplete="address-level2"
          />
          <FieldError message={errors.ort?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="datum" className="block text-sm font-semibold text-gray-700 mb-2">
          Önskat datum{' '}
          <span className="text-gray-400 font-normal">(valfritt)</span>
        </label>
        <input
          type="date"
          id="datum"
          {...register('datum')}
          className={inputCls}
          min={minDate}
        />
        <p className="text-xs text-gray-500 mt-1">Inget datum ännu? Vi diskuterar det i vår uppföljning.</p>
        <FieldError message={errors.datum?.message} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Önskad tid <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {TID_OPTIONS.map((t) => (
            <label
              key={t.value}
              className="flex flex-col items-center gap-1 p-3 rounded-xl border-2 border-[#E5E5E5] bg-[#F7F7F7] cursor-pointer hover:border-navy/30 has-[:checked]:border-navy has-[:checked]:bg-navy/5 transition-colors text-center"
            >
              <input type="radio" {...register('tid')} value={t.value} className="sr-only" />
              <span className="text-sm font-medium text-gray-700 leading-tight">{t.label}</span>
            </label>
          ))}
        </div>
        <FieldError message={errors.tid?.message} />
      </div>
    </div>
  )
}

// ─── Step 3 props ─────────────────────────────────────────────────────────────

interface Step3Props {
  register: UseFormRegister<QuoteFormData>
  errors: FieldErrors<QuoteFormData>
}

function Step3({ register, errors }: Step3Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fornamn" className="block text-sm font-semibold text-gray-700 mb-2">
            Förnamn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fornamn"
            {...register('fornamn')}
            className={inputCls}
            placeholder="Anna"
            autoComplete="given-name"
          />
          <FieldError message={errors.fornamn?.message} />
        </div>
        <div>
          <label htmlFor="efternamn" className="block text-sm font-semibold text-gray-700 mb-2">
            Efternamn{' '}
            <span className="text-gray-400 font-normal">(valfritt)</span>
          </label>
          <input
            type="text"
            id="efternamn"
            {...register('efternamn')}
            className={inputCls}
            placeholder="Svensson"
            autoComplete="family-name"
          />
          <FieldError message={errors.efternamn?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-2">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="telefon"
          {...register('telefon')}
          className={inputCls}
          placeholder="070 740 20 80"
          autoComplete="tel"
        />
        <FieldError message={errors.telefon?.message} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          E-post <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={inputCls}
          placeholder="anna@exempel.se"
          autoComplete="email"
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="meddelande" className="block text-sm font-semibold text-gray-700 mb-2">
          Övrig information{' '}
          <span className="text-gray-400 font-normal">(valfritt)</span>
        </label>
        <textarea
          id="meddelande"
          {...register('meddelande')}
          rows={3}
          className={`${inputCls} resize-none`}
          placeholder="T.ex. allergier, husdjur, nyckelbox, specifika önskemål..."
        />
        <FieldError message={errors.meddelande?.message} />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('gdpr')}
            className="mt-0.5 w-5 h-5 accent-brand-green flex-shrink-0"
            aria-describedby="gdpr-desc"
          />
          <span id="gdpr-desc" className="text-sm text-gray-600 leading-relaxed">
            Jag godkänner att mina uppgifter används för att besvara min förfrågan. Se vår{' '}
            <a
              href="/integritetspolicy"
              className="text-petrol underline hover:text-navy"
            >
              integritetspolicy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        <FieldError message={errors.gdpr?.message} />
      </div>

      <div className="flex flex-wrap gap-4 pt-1 text-xs text-gray-500">
        <span>✓ Svar inom 24 timmar</span>
        <span>✓ Ingen bindningstid</span>
        <span>✓ Kostnadsfri offert</span>
      </div>
    </div>
  )
}

// ─── Step field keys for per-step trigger ─────────────────────────────────────

const STEP_FIELDS: (keyof QuoteFormData)[][] = [
  ['tjanst', 'kvm', 'antalFonster', 'frekvens', 'foretagsnamn'],
  ['postnummer', 'ort', 'tid'],
  ['fornamn', 'telefon', 'email', 'gdpr'],
]

// ─── Main component ───────────────────────────────────────────────────────────

export function QuoteForm() {
  const [step, setStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // zodResolver type is incompatible between @hookform/resolvers v5 and zod v4 — safe cast
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
    reset,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) as any, mode: 'onTouched' })

  // Step 0 uses manual validation because superRefine doesn't fire
  // reliably during field-level trigger() with zodResolver v5 + Zod v4.
  const validateStep0 = (): boolean => {
    clearErrors(['tjanst', 'kvm', 'antalFonster', 'frekvens', 'foretagsnamn'])

    const tjanst = getValues('tjanst')
    let ok = true

    if (!tjanst) {
      setError('tjanst', { message: 'Välj en tjänst' })
      ok = false
    } else {
      const needsKvm = tjanst !== 'fonsterputs'
      const needsWindows = tjanst === 'fonsterputs'
      const needsFrekvens = tjanst === 'hemstadning'
      const isCommercial = tjanst === 'kontorsstadning' || tjanst === 'lokalvard'

      if (needsKvm) {
        const kvm = getValues('kvm')
        if (!kvm || kvm < 10) {
          setError('kvm', { message: kvm ? 'Minst 10 kvm' : 'Ange storlek i kvm' })
          ok = false
        }
      }
      if (needsWindows) {
        const antalFonster = getValues('antalFonster')
        if (!antalFonster || antalFonster < 1) {
          setError('antalFonster', { message: 'Ange antal fönster' })
          ok = false
        }
      }
      if (needsFrekvens) {
        const frekvens = getValues('frekvens')
        if (!frekvens) {
          setError('frekvens', { message: 'Välj hur ofta' })
          ok = false
        }
      }
      if (isCommercial) {
        const foretagsnamn = getValues('foretagsnamn')
        if (!foretagsnamn?.trim()) {
          setError('foretagsnamn', { message: 'Ange företagsnamn' })
          ok = false
        }
      }
    }

    return ok
  }

  const goNext = async () => {
    if (step === 0) {
      if (validateStep0()) setStep(1)
      return
    }
    const valid = await trigger(STEP_FIELDS[step])
    if (valid) setStep((s) => s + 1)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (data: QuoteFormData) => {
    setIsLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Servern svarade med ett fel.')
      setSuccess(true)
      reset()
      setStep(0)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Något gick fel. Försök igen.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-10 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={36} className="text-brand-green" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tack för din förfrågan!</h3>
        <p className="text-gray-600 mb-6">
          Vi granskar din offertförfrågan och återkommer inom{' '}
          <strong>24 timmar</strong> med ett personligt prisförslag.
        </p>
        <p className="text-sm text-gray-500">
          Har du bråttom? Ring oss direkt på{' '}
          <a href="tel:+46707402080" className="text-navy font-semibold underline">
            070 740 20 80
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepIndicator current={step} />

      <div className="min-h-[360px]">
        {step === 0 && (
          <Step1 register={register} watch={watch} setValue={setValue} errors={errors} />
        )}
        {step === 1 && <Step2 register={register} errors={errors} />}
        {step === 2 && <Step3 register={register} errors={errors} />}
      </div>

      {submitError && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" />
          {submitError}
        </div>
      )}

      <div className="flex gap-3 mt-8">
        {step > 0 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((s) => s - 1)}
            disabled={isLoading}
            className="flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            Tillbaka
          </Button>
        )}
        {step < 2 ? (
          <Button
            type="button"
            onClick={goNext}
            className="flex-1 flex items-center justify-center gap-1 font-bold"
          >
            Nästa steg
            <ChevronRight size={16} />
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="flex-1 font-bold text-base"
          >
            {isLoading ? 'Skickar...' : 'Begär kostnadsfri offert'}
          </Button>
        )}
      </div>
    </form>
  )
}
