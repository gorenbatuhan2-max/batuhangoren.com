import { siteConfig } from '@/lib/site-config'
import { services, faqs, projects, process, values, stats } from '@/lib/data'

/**
 * text/markdown içerik pazarlığı (content negotiation) için sayfa
 * bazlı markdown temsilleri. Middleware, `Accept: text/markdown` isteyen
 * ajanlara buradaki metni döner. İçerik, ilgili sayfalardaki gerçek
 * metinlerden türetilir; ayrı bir "ajan kopyası" uydurulmaz.
 * https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */

function frontMatter(title: string, description: string, path: string): string {
  return `# ${title}\n\n> ${description}\n\nKaynak: ${siteConfig.url}${path}\n`
}

function homeMarkdown(): string {
  const statLines = stats.map((s) => `- ${s.value}${s.suffix}: ${s.label}`).join('\n')
  const serviceLines = services.map((s) => `- **${s.title}** — ${s.short}`).join('\n')

  return (
    frontMatter(`${siteConfig.name} | Kahramanmaraş Mimarlık Ofisi`, siteConfig.description, '/') +
    `\n## Kahramanmaraş'ın Dokusuna Sadık, Modern ve Depreme Dayanıklı Yaşam Alanları Tasarlıyoruz\n\n` +
    `Onikişubat merkezli stüdyomuzda mimari tasarım, planlama ve konut yapımını bir arada yürütüyor; ` +
    `her projeyi arazinin dokusuna ve deprem güvenliği standartlarına uygun şekilde hayata geçiriyoruz.\n\n` +
    `## Öne Çıkan Rakamlar\n\n${statLines}\n\n` +
    `## Hizmetler\n\n${serviceLines}\n\n` +
    `## Sayfalar\n\n- [Hizmetler](${siteConfig.url}/hizmetler)\n- [Projeler](${siteConfig.url}/projeler)\n` +
    `- [Hakkımızda](${siteConfig.url}/hakkimizda)\n- [İletişim](${siteConfig.url}/iletisim)\n` +
    `- [Manifesto](${siteConfig.url}/manifesto)\n`
  )
}

function servicesMarkdown(): string {
  const serviceBlocks = services
    .map((s) => `### ${s.title}\n\n${s.description}\n\n${s.items.map((i) => `- ${i}`).join('\n')}`)
    .join('\n\n')
  const faqBlocks = faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join('\n\n')

  return (
    frontMatter(
      'Hizmetler | Batuhan Gören Mimarlık',
      'Mimari tasarım, villa ve müstakil konut tasarımı, çok katlı yapılar ve ruhsat/uygulama süreçlerinde uçtan uca hizmetler.',
      '/hizmetler',
    ) +
    `\n## Hizmet Detayları\n\n${serviceBlocks}\n\n` +
    `## Sıkça Sorulan Sorular\n\n${faqBlocks}\n`
  )
}

function projectsMarkdown(): string {
  const projectLines = projects
    .map((p) => `- [${p.title}](${siteConfig.url}/projeler/${p.id}) — ${p.categoryLabel}, ${p.location}. ${p.summary}`)
    .join('\n')

  return (
    frontMatter(
      'Projeler | Batuhan Gören Mimarlık',
      'Kahramanmaraş merkezli stüdyomuzun Türkiye genelinde ve yurt dışında gerçekleştirdiği villa, toplu konut, kamu ve ticari yapı projeleri portföyü.',
      '/projeler',
    ) +
    `\n## Proje Listesi\n\n${projectLines}\n`
  )
}

function projectDetailMarkdown(id: string): string | undefined {
  const project = projects.find((p) => p.id === id)
  if (!project) return undefined

  return (
    frontMatter(project.title, project.summary, `/projeler/${project.id}`) +
    `\n**Kategori:** ${project.categoryLabel}\n**Konum:** ${project.location}\n\n` +
    `## Proje Kapsamı\n\n${project.description}\n\n` +
    `## Yapısal Öne Çıkanlar\n\n${project.highlights.map((h) => `- ${h}`).join('\n')}\n\n` +
    `## Hizmet Kapsamı\n\n${project.scope.map((s) => `- ${s}`).join('\n')}\n`
  )
}

function aboutMarkdown(): string {
  const processLines = process.map((p) => `${p.step}. **${p.title}** — ${p.description}`).join('\n')
  const valueLines = values.map((v) => `- **${v.title}** — ${v.description}`).join('\n')

  return (
    frontMatter(
      'Hakkımızda | Batuhan Gören Mimarlık',
      'Batuhan Gören Mimarlık hakkında: mimari vizyon, çalışma sürecimiz ve Kahramanmaraş odaklı değerlerimiz.',
      '/hakkimizda',
    ) +
    `\n## Mimar & Kurucu: ${siteConfig.founder}\n\n` +
    `Mimarlık pratiğine Kahramanmaraş'ta başlayan ve bölgenin arazi yapısını, yerel malzeme kültürünü ve ` +
    `iklim koşullarını yakından tanıyan bir stüdyo. 2023 depremleri sonrası bölgede yapı güvenliğinin ` +
    `önemi doğrultusunda, tasarlanan her yapı güncel deprem yönetmeliğine uyumlu, titiz bir statik ` +
    `süreçten geçirilir.\n\n` +
    `## Süreç\n\n${processLines}\n\n` +
    `## Değerler\n\n${valueLines}\n`
  )
}

function contactMarkdown(): string {
  return (
    frontMatter(
      'İletişim | Batuhan Gören Mimarlık',
      "Onikişubat / Kahramanmaraş'ta projenizi başlatmak için bize ulaşın. Proje talep formu, telefon, WhatsApp ve stüdyo konumu.",
      '/iletisim',
    ) +
    `\n## İletişim Bilgileri\n\n` +
    `- Telefon: ${siteConfig.phone.display}\n` +
    `- WhatsApp: https://wa.me/${siteConfig.whatsapp.number}\n` +
    `- E-posta: ${siteConfig.email}\n` +
    `- Adres: ${siteConfig.address.district} / ${siteConfig.address.city}, ${siteConfig.address.countryName}\n` +
    `- Harita: ${siteConfig.mapsUrl}\n`
  )
}

export function getMarkdownForPath(pathname: string): string | undefined {
  if (pathname === '/') return homeMarkdown()
  if (pathname === '/hizmetler') return servicesMarkdown()
  if (pathname === '/projeler') return projectsMarkdown()
  if (pathname === '/hakkimizda') return aboutMarkdown()
  if (pathname === '/iletisim') return contactMarkdown()

  const projectMatch = pathname.match(/^\/projeler\/([^/]+)$/)
  if (projectMatch) return projectDetailMarkdown(projectMatch[1])

  return undefined
}
