import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const quickQuoteSchema = z.object({
  tjanst: z.enum(['hemstadning', 'flyttstad', 'fonsterputs', 'byggstad', 'kontorsstadning', 'lokalvard']),
  postnummer: z.string().regex(/^\d{3}\s?\d{2}$/),
  fornamn: z.string().min(2),
  telefon: z.string().min(7).regex(/^[\d\s+\-()]+$/),
  // Valfria fält
  email: z.string().email().optional().or(z.literal('')),
  beskrivning: z.string().max(1000).optional(),
})

/** Escapa användardata innan den interpoleras in i mail-HTML (skydd mot injektion). */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = quickQuoteSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Ogiltiga fältdata' }, { status: 400 })
    }

    const { tjanst, postnummer, fornamn, telefon, email, beskrivning } = result.data

    const html = [
      `<h2>Snabboffert från startsidan</h2>`,
      `<p><strong>Tjänst:</strong> ${escapeHtml(tjanst)}</p>`,
      `<p><strong>Postnummer:</strong> ${escapeHtml(postnummer)}</p>`,
      `<p><strong>Namn:</strong> ${escapeHtml(fornamn)}</p>`,
      `<p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>`,
      email ? `<p><strong>E-post:</strong> ${escapeHtml(email)}</p>` : '',
      beskrivning?.trim()
        ? `<p><strong>Beskrivning:</strong><br/>${escapeHtml(beskrivning).replace(/\n/g, '<br/>')}</p>`
        : '',
    ]
      .filter(Boolean)
      .join('\n')

    const recipient = process.env.RESEND_TO_OVERRIDE ?? 'info@karlacleaningcrew.se'

    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: recipient,
      // Svara direkt till kunden om de angett e-post.
      ...(email ? { replyTo: email } : {}),
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
