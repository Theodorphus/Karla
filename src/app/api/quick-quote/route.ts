import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const quickQuoteSchema = z.object({
  tjanst: z.enum(['hemstadning', 'flyttstad', 'fonsterputs', 'byggstad', 'kontorsstadning', 'lokalvard']),
  postnummer: z.string().regex(/^\d{3}\s?\d{2}$/),
  fornamn: z.string().min(2),
  telefon: z.string().min(7).regex(/^[\d\s+\-()]+$/),
  beskrivning: z.string().max(1000).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = quickQuoteSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Ogiltiga fältdata' }, { status: 400 })
    }

    const { tjanst, postnummer, fornamn, telefon, beskrivning } = result.data

    const html = [
      `<h2>Snabboffert från startsidan</h2>`,
      `<p><strong>Tjänst:</strong> ${tjanst}</p>`,
      `<p><strong>Postnummer:</strong> ${postnummer}</p>`,
      `<p><strong>Namn:</strong> ${fornamn}</p>`,
      `<p><strong>Telefon:</strong> ${telefon}</p>`,
      beskrivning ? `<p><strong>Beskrivning:</strong> ${beskrivning}</p>` : '',
    ].filter(Boolean).join('\n')

    const recipient = process.env.RESEND_TO_OVERRIDE ?? 'info@karlacleaningcrew.se'

    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: recipient,
      subject: `Snabboffert – ${tjanst} – ${fornamn}`,
      html,
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return NextResponse.json({ error: 'E-post kunde inte skickas.' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Quick-quote API error:', error)
    return NextResponse.json({ error: 'Något gick fel.' }, { status: 500 })
  }
}
