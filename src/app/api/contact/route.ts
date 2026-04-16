import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Ogiltiga fältdata', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { namn, telefon, email, kommentar } = result.data

    await resend.emails.send({
      from: 'no-reply@karlacleaningcrew.se',
      to: 'info@karlacleaningcrew.se',
      replyTo: email,
      subject: `Nytt meddelande från ${namn}`,
      html: [
        `<h2>Nytt kontaktmeddelande</h2>`,
        `<p><strong>Namn:</strong> ${namn}</p>`,
        `<p><strong>Telefon:</strong> ${telefon}</p>`,
        `<p><strong>E-post:</strong> ${email}</p>`,
        kommentar ? `<p><strong>Meddelande:</strong> ${kommentar}</p>` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return NextResponse.json({ success: true, message: 'Din förfrågan har mottagits' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Ett fel uppstod. Försök igen senare.' }, { status: 500 })
  }
}
