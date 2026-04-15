import { z } from 'zod'

export const TJANSTER = [
  { value: 'hemstadning', label: 'Hemstädning', icon: '🏠' },
  { value: 'flyttstad', label: 'Flyttstäd', icon: '📦' },
  { value: 'fonsterputs', label: 'Fönsterputs', icon: '🪟' },
  { value: 'byggstad', label: 'Byggstäd', icon: '🏗️' },
  { value: 'kontorsstadning', label: 'Kontorsstädning', icon: '🏢' },
  { value: 'lokalvard', label: 'Lokalvård', icon: '🏬' },
] as const

export const FREKVENS_OPTIONS = [
  { value: 'engaang', label: 'Engångsstäd' },
  { value: 'varannan-vecka', label: 'Varannan vecka' },
  { value: 'vecka', label: 'Varje vecka' },
  { value: 'manad', label: 'En gång i månaden' },
] as const

export const TID_OPTIONS = [
  { value: 'formiddag', label: 'Förmiddag (08–12)' },
  { value: 'eftermiddag', label: 'Eftermiddag (12–17)' },
  { value: 'flexibel', label: 'Flexibel' },
] as const

// Zod v4: use `message` instead of `errorMap` / `invalid_type_error`
export const quoteSchema = z
  .object({
    // Step 1
    tjanst: z.enum(
      ['hemstadning', 'flyttstad', 'fonsterputs', 'byggstad', 'kontorsstadning', 'lokalvard'],
      { message: 'Välj en tjänst' }
    ),
    boendetyp: z.enum(['lagenhet', 'hus']).optional(),
    kvm: z.coerce
      .number({ message: 'Ange storlek i kvm' })
      .min(10, 'Minst 10 kvm')
      .max(10000, 'Max 10 000 kvm')
      .optional(),
    antalFonster: z.coerce
      .number({ message: 'Ange antal fönster' })
      .min(1, 'Minst 1 fönster')
      .optional(),
    frekvens: z.enum(['engaang', 'varannan-vecka', 'vecka', 'manad']).optional(),
    foretagsnamn: z.string().optional(),

    // Step 2
    gatuadress: z.string().min(3, 'Ange gatuadress'),
    postnummer: z
      .string()
      .regex(/^\d{3}\s?\d{2}$/, 'Ange giltigt postnummer (t.ex. 417 51)'),
    ort: z.string().min(2, 'Ange ort'),
    datum: z.string().min(1, 'Välj ett datum'),
    tid: z.enum(['formiddag', 'eftermiddag', 'flexibel'], { message: 'Välj önskad tid' }),

    // Step 3
    fornamn: z.string().min(2, 'Ange ditt förnamn'),
    efternamn: z.string().min(2, 'Ange ditt efternamn'),
    telefon: z
      .string()
      .min(7, 'Ange telefonnummer')
      .regex(/^[\d\s+\-()]+$/, 'Ogiltigt telefonnummer'),
    email: z.string().email('Ange en giltig e-postadress'),
    meddelande: z.string().max(1000).optional(),
    // Zod v4: z.literal(true) — use message string directly
    gdpr: z.literal(true, 'Du måste godkänna vår integritetspolicy'),
  })
  .superRefine((data, ctx) => {
    const t = data.tjanst

    if (['hemstadning', 'flyttstad', 'byggstad', 'kontorsstadning', 'lokalvard'].includes(t)) {
      if (!data.kvm) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Ange storlek i kvm', path: ['kvm'] })
      }
    }

    if (t === 'fonsterputs' && !data.antalFonster) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Ange antal fönster',
        path: ['antalFonster'],
      })
    }

    if (t === 'hemstadning' && !data.frekvens) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Välj hur ofta', path: ['frekvens'] })
    }

    if (['kontorsstadning', 'lokalvard'].includes(t) && !data.foretagsnamn?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Ange företagsnamn',
        path: ['foretagsnamn'],
      })
    }
  })

export type QuoteFormData = z.infer<typeof quoteSchema>
