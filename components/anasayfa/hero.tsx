import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'
import s from './anasayfa.module.css'

const KAPAK_PROJESI = projects.find((p) => p.id === 'afrika-fildisi-sahili-villa')

/**
 * Hero — soru ve mekân.
 *
 * Üstte manifestonun açılış sorusu ve giriş cümlesi iki sütunda; altında
 * Fildişi Sahili villasının perspektifi geniş bir pafta gibi, künyesiyle
 * birlikte duruyor.
 */
export function Hero() {
  return (
    <section className={s.hero} id="hero">
      <div className={`${s.heroUst} ${s.mono} ${s.dim}`}>
        <span>Mimarlık Manifestosu — I. Önsöz</span>
        <span>Onikişubat / Kahramanmaraş</span>
      </div>

      <div className={s.heroBaslik}>
        {/* Sayfanın tek h1'i. Sorunun kendisi görsel olarak ayakta kalırken,
            üstündeki künye satırı başlığın kim/nerede bilgisini de taşıyor:
            "Sen kimsin?" tek başına ne arama motoruna ne de bir asistana bu
            sayfanın bir Kahramanmaraş mimarlık ofisine ait olduğunu söylüyordu. */}
        <h1 className={s.h1}>
          <span className={`${s.h1Kimlik} ${s.mono} ${s.dim}`}>
            Batuhan Gören Mimarlık — Onikişubat / Kahramanmaraş mimarlık ofisi
          </span>
          <span className={s.ask}>
            <span className={s.reveal}>Sen</span>{' '}
            <span className={s.reveal}>
              <em>kimsin</em>?
            </span>
          </span>
        </h1>

        <div className={s.heroYan}>
          <p className={s.lead}>
            Bir an vardır ki insan kendini bir mekânın içinde bulur. Mekânı sorgularken, mekân ona
            sorar.
          </p>
          <span className={`${s.byline} ${s.mono} ${s.dim}`}>Yazan: Mimar Batuhan Gören</span>
          <a className={s.okLink} href="#dizin">
            Yapıları gör <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <figure className={`${s.heroFoto} ${s.harc}`} data-derz>
        <Image
          src="/images/project-fildisi-sahili-villa-6.jpg"
          alt={
            KAPAK_PROJESI
              ? `${KAPAK_PROJESI.title} — ${KAPAK_PROJESI.categoryLabel}, ${KAPAK_PROJESI.location}`
              : ''
          }
          fill
          priority
          sizes="(min-width: 1100px) calc(100vw - 15rem), 100vw"
        />
        {KAPAK_PROJESI && (
          <figcaption className={`${s.heroKunye} ${s.fotoUstu}`}>
            <span className={`${s.mono} ${s.dim}`}>Öne çıkan // {KAPAK_PROJESI.categoryLabel}</span>
            <Link href={`/projeler/${KAPAK_PROJESI.id}`} className={s.heroKunyeBaslik}>
              {KAPAK_PROJESI.title}
            </Link>
            <span className={s.etiketler}>
              <span className={s.etiket}>{KAPAK_PROJESI.location}</span>
              {KAPAK_PROJESI.scope.slice(0, 2).map((k) => (
                <span className={s.etiket} key={k}>
                  {k}
                </span>
              ))}
            </span>
          </figcaption>
        )}
      </figure>
    </section>
  )
}
