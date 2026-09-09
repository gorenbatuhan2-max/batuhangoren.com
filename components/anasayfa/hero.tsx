'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import s from './anasayfa.module.css'

/**
 * Hero — boşluk.
 *
 * Manifestonun açılış sorusu neredeyse boş bir ekranda duruyor. Fildişi Sahili
 * villasının perspektifi arkada yalnızca sezilir; sayfa aşağı kaydıkça
 * `--emerge` değeriyle karanlıktan çıkar.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el) return

    let ticking = false
    const apply = () => {
      const oran = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight))
      el.style.setProperty('--emerge', oran.toFixed(3))
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  return (
    <section className={s.hero} id="hero" ref={ref}>
      <div className={s.heroGhost} aria-hidden="true">
        <Image
          src="/images/project-fildisi-sahili-villa-6.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <p className={s.lead}>
        Bir an vardır ki insan kendini bir mekânın içinde bulur. Mekânı sorgularken, mekân ona
        sorar:
      </p>

      <h1 className={s.ask}>
        <span className={s.reveal}>Sen</span>{' '}
        <span className={s.reveal}>
          <em>kimsin</em>?
        </span>
      </h1>

      <div className={`${s.heroFoot} ${s.mono} ${s.dim}`}>
        <span>
          Mimarlık Manifestosu — I. Önsöz
          <br />
          <span className={s.byline}>Yazan: Mimar Batuhan Gören</span>
        </span>
        <span>Onikişubat / Kahramanmaraş</span>
        <span>2019 —</span>
      </div>
    </section>
  )
}
