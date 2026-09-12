import type { Metadata } from 'next'
import Link from 'next/link'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { rehberYazilari } from '@/lib/rehber-data'
import ana from '@/components/anasayfa/anasayfa.module.css'
import proje from '@/components/projeler/projeler.module.css'
import rb from '@/components/rehber/rehber.module.css'

export const metadata: Metadata = {
  title: 'Rehber',
  description:
    'Villa mimarı seçimi, deprem sonrası ruhsat süreci ve GES projelerinde mimari projelendirme üzerine, stüdyomuzun kendi pratiğine dayanan yazılar.',
  alternates: { canonical: '/rehber' },
}

export default function RehberSayfasi() {
  return (
    <div className={ana.root}>
      <Menu />
      <main>
        <section className={proje.hero}>
          <span className={`${proje.mono} ${proje.dim}`}>Rehber</span>
          <h1 className={proje.title}>Sahadan öğrendiklerimiz.</h1>
          <p className={proje.intro}>
            Villa mimarı seçiminden ruhsat sürecine, GES projelendirmesine kadar — kendi
            projelerimizden çıkan, doğrudan cevaplar.
          </p>
          <div className={`${proje.meta} ${proje.mono}`}>
            <span>{rehberYazilari.length} yazı</span>
          </div>
        </section>

        <section className={proje.benzer}>
          <ul className={proje.benzerListe}>
            {rehberYazilari.map((y) => (
              <li key={y.slug}>
                <Link href={`/rehber/${y.slug}`}>
                  <span>
                    {y.title}
                    <span className={rb.ozet}>{y.description}</span>
                  </span>
                  <span className={`${proje.mono} ${proje.dim}`}>
                    {new Date(y.publishedAt).toLocaleDateString('tr-TR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Kapanis />
    </div>
  )
}
