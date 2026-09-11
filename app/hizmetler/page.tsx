import type { Metadata } from 'next'
import { Hizmetler, Kapanis, Surec } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { faqs, services } from '@/lib/data'
import ana from '@/components/anasayfa/anasayfa.module.css'
import proje from '@/components/projeler/projeler.module.css'
import s from '@/components/sayfalar/sayfalar.module.css'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Mimari tasarım, villa ve müstakil konut tasarımı, çok katlı yapılar ve ruhsat/uygulama süreçlerinde uçtan uca hizmetler.',
  alternates: { canonical: '/hizmetler' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function HizmetlerSayfasi() {
  return (
    <div className={ana.root}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Menu />
      <main>
        <section className={proje.hero}>
          <span className={`${proje.mono} ${proje.dim}`}>Hizmetler</span>
          <h1 className={proje.title}>Tasarımdan ruhsata, uçtan uca.</h1>
          <p className={proje.intro}>
            Konsept tasarımdan uygulama denetimine kadar sürecin her adımındayız. Belediyeyle
            yazışmayı, statik koordinasyonu ve şantiye takibini de biz üstleniyoruz.
          </p>
          <div className={`${proje.meta} ${proje.mono}`}>
            <span>{services.length} çalışma alanı</span>
            <span>Keşiften iskâna</span>
            <span>Onikişubat / Kahramanmaraş</span>
          </div>
        </section>

        <Hizmetler />
        <Surec />

        <section className={ana.section} id="sss">
          <span className={`${s.mono} ${s.dim}`}>Sıkça sorulanlar</span>
          <h2 className={ana.h2}>Sürecin başında en çok bunlar soruluyor.</h2>
          <ul className={s.faq}>
            {faqs.map((f) => (
              <li key={f.question}>
                <details>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Kapanis />
    </div>
  )
}
