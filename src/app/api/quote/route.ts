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
        { error: 'Ogiltiga fältdata', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    
    const lines = [
      `<h2>Ny offertförfrågan</h2>`,
      `<p><strong>Tjänst:</strong> ${data.tjanst}</p>`,
      data.foretagsnamn ? `<p><strong>Företag:</strong> ${data.foretagsnamn}</p>` : '',
      data.kvm ? `<p><strong>Storlek:</strong> ${data.kvm} kvm</p>` : '',
      data.antalFonster ? `<p><strong>Antal fönster:</strong> ${data.antalFonster}</p>` : '',
      data.boendetyp ? `<p><strong>Boendetyp:</strong> ${data.boendetyp}</p>` : '',
      data.frekvens ? `<p><strong>Frekvens:</strong> ${data.frekvens}</p>` : '',
      `<hr/>`,
      `<p><strong>Adress:</strong> ${data.gatuadress}, ${data.postnummer} ${data.ort}</p>`,
      `<p><strong>Datum:</strong> ${data.datum}</p>`,
      `<p><strong>Tid:</strong> ${data.tid}</p>`,
      `<hr/>`,
      `<p><strong>Namn:</strong> ${data.fornamn} ${data.efternamn}</p>`,
      `<p><strong>Telefon:</strong> ${data.telefon}</p>`,
      `<p><strong>E-post:</strong> ${data.email}</p>`,
      data.meddelande ? `<p><strong>Meddelande:</strong> ${data.meddelande}</p>` : '',
    ]
      .filter(Boolean)
      .join('\n')

    await resend.emails.send({
      from: 'no-reply@karlacleaningcrew.se',
      to: 'info@karlacleaningcrew.se',
      replyTo: data.email,
      subject: `Offertförfrågan – ${data.tjanst} – ${data.fornamn} ${data.efternamn}`,
      html: lines,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Något gick fel. Försök igen.' }, { status: 500 })
  }
}
