import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { quoteSchema } from '@/lib/validations/quote'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = quoteSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Ogiltiga fältdata', details: result.error.issues },
        { status: 400 }
      )
    }

    const data = result.data

    
    const namn = [data.fornamn, data.efternamn].filter(Boolean).join(' ')

    const lines = [
      `<h2>Ny offertförfrågan</h2>`,
      `<p><strong>Tjänst:</strong> ${data.tjanst}</p>`,
      data.foretagsnamn ? `<p><strong>Företag:</strong> ${data.foretagsnamn}</p>` : '',
      data.kvm ? `<p><strong>Storlek:</strong> ${data.kvm} kvm</p>` : '',
      data.antalFonster ? `<p><strong>Antal fönster:</strong> ${data.antalFonster}</p>` : '',
      data.boendetyp ? `<p><strong>Boendetyp:</strong> ${data.boendetyp}</p>` : '',
      data.frekvens ? `<p><strong>Frekvens:</strong> ${data.frekvens}</p>` : '',
      `<hr/>`,
      `<p><strong>Område:</strong> ${data.postnummer} ${data.ort}</p>`,
      data.datum ? `<p><strong>Datum:</strong> ${data.datum}</p>` : '',
      `<p><strong>Tid:</strong> ${data.tid}</p>`,
      `<hr/>`,
      `<p><strong>Namn:</strong> ${namn}</p>`,
      `<p><strong>Telefon:</strong> ${data.telefon}</p>`,
      `<p><strong>E-post:</strong> ${data.email}</p>`,
      data.meddelande ? `<p><strong>Meddelande:</strong> ${data.meddelande}</p>` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const recipient = process.env.RESEND_TO_OVERRIDE ?? 'info@karlacleaningcrew.se'

    const { data: sendData, error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: recipient,
      replyTo: data.email,
      subject: `Offertförfrågan – ${data.tjanst} – ${namn}`,
      html: lines,
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return NextResponse.json({ error: 'E-post kunde inte skickas.' }, { status: 500 })
    }

    console.log('Email sent:', sendData?.id)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Något gick fel. Försök igen.' }, { status: 500 })
  }
}
