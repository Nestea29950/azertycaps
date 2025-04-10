import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'wgaonarch@gmail.com',
    subject: 'Nouveau message du formulaire de contact azertycaps',
    html: `
      <p><strong>Email :</strong> ${body.email}</p>
      <p><strong>Lien :</strong> ${body.lien}</p>
      <p><strong>Message :</strong><br>${body.message}</p>
    `
  })

  return { success: true }
})
