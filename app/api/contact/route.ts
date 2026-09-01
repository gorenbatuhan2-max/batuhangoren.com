import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { landStatusOptions } from '@/lib/data'

const RECIPIENTS = ['info@batuhangoren.com', 'gorenbatuhan@gmail.com']
const FROM = 'Batuhan Gören Mimarlık <no-reply@batuhangoren.com>'
const MAX_ATTACHMENT_SIZE = 8 * 1024 * 1024
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY tanımlı değil.')
    return NextResponse.json({ error: 'Sunucu yapılandırma hatası.' }, { status: 500 })
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Geçersiz form verisi.' }, { status: 400 })
  }

  const name = formData.get('name')?.toString().trim() ?? ''
  const phone = formData.get('phone')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const projectType = formData.get('project-type')?.toString().trim() ?? ''
  const landStatusValue = formData.get('land-status')?.toString().trim() ?? ''
  const province = formData.get('province')?.toString().trim() ?? ''
  const district = formData.get('district')?.toString().trim() ?? ''
  const districtDetail = formData.get('district-detail')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''
  const file = formData.get('file-upload')

  if (!name || !phone || !email || !projectType || !landStatusValue) {
    return NextResponse.json({ error: 'Lütfen zorunlu alanları doldurun.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Geçerli bir e-posta adresi girin.' }, { status: 400 })
  }

  const landStatusLabel = landStatusOptions.find((o) => o.value === landStatusValue)?.label ?? landStatusValue
  const districtPart = district || districtDetail
  const location = [province, districtPart].filter(Boolean).join(' / ') || '-'

  const attachments: { filename: string; content: Buffer }[] = []
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_ATTACHMENT_SIZE) {
      return NextResponse.json({ error: "Dosya boyutu 8MB'ı aşamaz." }, { status: 400 })
    }
    attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()) })
  }

  const rows: [string, string][] = [
    ['Ad Soyad', name],
    ['Telefon', phone],
    ['E-posta', email],
    ['Proje Tipi', projectType],
    ['Arsa Durumu', landStatusLabel],
    ['Arsa Konumu', location],
    ['Proje Detayları', message || '-'],
  ]

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0B132B;">Yeni Proje Talebi</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; background: #f4f4f5; font-weight: bold; width: 160px; vertical-align: top; border: 1px solid #e4e4e7;">${escapeHtml(label)}</td>
            <td style="padding: 8px 12px; border: 1px solid #e4e4e7; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
      ${attachments.length ? '<p style="margin-top: 16px; color: #555;">Bu e-postaya ekli bir dosya bulunmaktadır.</p>' : ''}
    </div>
  `

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENTS,
      replyTo: email,
      subject: `Yeni Proje Talebi - ${name}`,
      html,
      attachments: attachments.length ? attachments : undefined,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Beklenmeyen bir hata oluştu.' }, { status: 500 })
  }
}
