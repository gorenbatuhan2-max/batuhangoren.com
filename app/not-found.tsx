import type { Metadata } from 'next'
import Link from 'next/link'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import s from '@/components/anasayfa/anasayfa.module.css'

export const metadata: Metadata = {
  title: 'Sayfa bulunamadı',
  robots: { index: false, follow: false },
}

/** Var olmayan bir adrese gelindiğinde. Sitenin yeni dilinde. */
export default function BulunamadiSayfasi() {
  return (
    <div className={s.root}>
      <Menu />
      <main>
        <section className={s.hero}>
          <span className={`${s.mono} ${s.dim}`}>404 — Sayfa bulunamadı</span>
          <h1 className={s.ask}>Burada bir şey yok.</h1>
          <p className={s.lead} style={{ marginTop: '2rem', marginBottom: 0 }}>
            Aradığınız adres taşınmış ya da hiç var olmamış olabilir. Aşağıdan devam edebilirsiniz.
          </p>
          <div className={s.acts}>
            <Link href="/">Ana sayfa</Link>
            <Link href="/projeler">Yapılar</Link>
            <Link href="/manifesto">Manifesto</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </section>
      </main>
      <Kapanis />
    </div>
  )
}
