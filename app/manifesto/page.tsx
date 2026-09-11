import type { Metadata } from 'next'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { ManifestoGovde } from '@/components/manifesto/manifesto-govde'
import { manifestoSections, manifestoSubtitle, manifestoTitle } from '@/lib/manifesto-data'
import ana from '@/components/anasayfa/anasayfa.module.css'
import s from '@/components/manifesto/manifesto.module.css'

export const metadata: Metadata = {
  title: 'Manifesto',
  description: `Mimarlık Manifestosu — ${manifestoSubtitle}. Form, biçim, estetik, ruh, mekân ve zaman üzerine on altı bölümlük mimari felsefe metni.`,
  alternates: { canonical: '/manifesto' },
}

export default function ManifestoPage() {
  const baslik = manifestoTitle.charAt(0) + manifestoTitle.slice(1).toLocaleLowerCase('tr-TR')

  return (
    <div className={ana.root}>
      <Menu />
      <main>
        <section className={s.hero}>
          <span className={`${s.mono} ${s.eyebrow}`}>Mimari felsefe</span>
          <h1 className={s.title}>{baslik}</h1>
          <p className={s.subtitle}>{manifestoSubtitle}</p>
          <p className={s.intro}>
            On altı bölüm, on altı sorgulama. Formdan ruha, mekândan zamana — mimarlığın neden
            yalnızca bir meslek değil, bir varoluş biçimi olduğu üzerine.
          </p>
          <div className={`${s.heroFoot} ${s.mono}`}>
            <span>{manifestoSections.length} bölüm</span>
            <span>Yazan: Mimar Batuhan Gören</span>
            <span>Onikişubat / Kahramanmaraş</span>
          </div>
        </section>

        <ManifestoGovde sections={manifestoSections} />
      </main>
      <Kapanis />
    </div>
  )
}
