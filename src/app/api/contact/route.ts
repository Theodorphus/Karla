import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'

// NOTE: In production, replace this with actual Resend integration
// For now, we'll return a success response so the form works

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate with Zod
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Ogiltiga fältdata',
          details: result.error.flatten(),
        },
        { status: 400 }
      )
    }

    const { namn, telefon, email, kommentar } = result.data

    // TODO: Integrate with Resend when API key is available
    // For now, just log the data
    console.log('Contact form submission:', {
      namn,
      telefon,
      email,
      kommentar,
      timestamp: new Date().toISOString(),
    })

    // In production, send email here:
    // const response = await resend.emails.send({
    //   from: 'no-reply@karlacleaningcrew.se',
    //   to: 'Info@karlacleaningcrew.se',
    //   subject: `Ny offertförfrågan från ${namn}`,
    //   html: `
    //     <p><strong>Namn:</strong> ${namn}</p>
    //     <p><strong>Telefon:</strong> ${telefon}</p>
    //     <p><strong>E-post:</strong> ${email}</p>
    //     <p><strong>Kommentar:</strong> ${kommentar ?? '—'}</p>
    //   `,
    //   replyTo: email,
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Din förfrågan har mottagits',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Ett fel uppstod. Försök igen senare.' },
      { status: 500 }
    )
  }
}
