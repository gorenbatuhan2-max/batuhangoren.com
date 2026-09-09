import type { Metadata } from 'next'
import { Hakkinda, Kapanis, Menu, Surec } from '@/components/anasayfa/bolumler'
import { stats, values } from '@/lib/data'
import ana from '@/components/anasayfa/anasayfa.module.css'
import proje from '@/components/projeler/projeler.module.css'
import s from '@/components/sayfalar/sayfalar.module.css'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Batuhan Gören Mimarlık hakkında: mimari vizyon, çalışma sürecimiz ve Kahramanmaraş odaklı değerlerimiz.',
  alternates: { canonical: '/hakkimizda' },
}

/** Köylerde yerinde dönüşüm kapsamında alınan köy evi ruhsatları. */
const yerindeDonusum = stats.find((x) => x.label.includes('Yerinde Dönüşüm'))

export default function HakkimizdaSayfasi() {
  return (
    <div className={ana.root}>
      <Menu />
      <main>
        <section className={proje.hero}>
          <span className={`${proje.mono} ${proje.dim}`}>Stüdyo</span>
          <h1 className={proje.title}>Kahramanmaraş&apos;ta kurulmuş bir mimarlık pratiği.</h1>
          <p className={proje.intro}>
            Bölgenin arazi yapısını, malzeme kültürünü ve iklimini yakından tanıyan; 2023
            depremlerinden sonra yapı güvenliğini ilk sıraya koyan bir stüdyo.
          </p>
          <div className={`${proje.meta} ${proje.mono}`}>
            <span>9+ yıl deneyim</span>
            <span>50+ proje ve teklif</span>
            <span>Onikişubat merkezli</span>
          </div>
        </section>

        <Hakkinda />

        <section className={ana.section} id="degerler">
          <span className={`${s.mono} ${s.dim}`}>Değerler — Dört ilke</span>
          <div className={s.degerler}>
            {values.map((d, i) => (
              <article key={d.title}>
                <span className={`${s.mono} ${s.dim}`}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </article>
            ))}
          </div>

          {yerindeDonusum && (
            <div className={s.not}>
              <span className={s.notSayi}>
                {yerindeDonusum.value}
                {yerindeDonusum.suffix}
              </span>
              <p>
                Köylerde yerinde dönüşüm kapsamında alınan köy evi ruhsatı. Deprem sonrası kırsalda
                yeniden yapım, stüdyonun en az villa kadar ciddiye aldığı bir iş kalemi oldu.
              </p>
            </div>
          )}
        </section>

        <Surec />
      </main>
      <Kapanis />
    </div>
  )
}
