'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import s from './anasayfa.module.css'

/**
 * Tek menü — her sayfada aynı. Hepsi gerçek, adı yazan, tıklanabilir bir rota;
 * sayfa içi çıpa yok ki ana sayfadaki bölümle ayrı sayfa ikilem yaratmasın.
 */
export const SITE_BAGLANTILARI = [
  { href: '/', etiket: 'Anasayfa' },
  { href: '/projeler', etiket: 'Projeler' },
  { href: '/hizmetler', etiket: 'Hizmetler' },
  { href: '/rehber', etiket: 'Rehber' },
  { href: '/manifesto', etiket: 'Manifesto' },
  { href: '/hakkimizda', etiket: 'Hakkımızda' },
  { href: '/iletisim', etiket: 'İletişim' },
]

/**
 * Üst menü.
 *
 * Geniş ekranda liste her zaman görünür. Dar VE dikey (telefon gibi) bir
 * ekranda liste gizlenir, yerine 3 çizgili bir düğme gelir; düğme tam ekran
 * bir panel açar. Yatay/kare oranlı dar ekranlarda (telefon yan çevrilmiş,
 * küçük tablet vb.) düğme de görünmez — o genişlikte liste zaten sığmıyor,
 * bu yüzden orada geniş ekran genişliğine ulaşana kadar menü erişilemez
 * kalır; istenen davranış buysa sorun değil, değilse düğmeyi orada da açık
 * tutmak tek satırlık bir medya sorgusu değişikliği.
 */
export function Menu({
  baglantilar = SITE_BAGLANTILARI,
}: {
  baglantilar?: typeof SITE_BAGLANTILARI
}) {
  const [acik, setAcik] = useState(false)

  useEffect(() => {
    if (!acik) return
    const kapat = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAcik(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', kapat)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', kapat)
    }
  }, [acik])

  return (
    <header className={`${s.nav} ${s.mono}`}>
      <Link className={s.brand} href="/" aria-label={`${siteConfig.name} — ana sayfa`}>
        <Image
          src="/images/logo-yatay-beyaz.png"
          alt={siteConfig.name}
          width={900}
          height={206}
          priority
        />
      </Link>

      <ul>
        {baglantilar.map((b) => (
          <li key={b.href}>
            <Link href={b.href}>{b.etiket}</Link>
          </li>
        ))}
      </ul>

      <span className={s.dim}>{siteConfig.address.city}</span>

      <button
        type="button"
        className={`${s.navToggle} ${acik ? s.navToggleAcik : ''}`}
        aria-label={acik ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={acik}
        onClick={() => setAcik((v) => !v)}
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
          <rect className={s.cizgiUst} x="0" y="0" width="22" height="1" fill="currentColor" />
          <rect className={s.cizgiOrta} x="0" y="6.5" width="22" height="1" fill="currentColor" />
          <rect className={s.cizgiAlt} x="0" y="13" width="22" height="1" fill="currentColor" />
        </svg>
      </button>

      <nav
        className={`${s.mobilPanel} ${acik ? s.mobilPanelAcik : ''} ${s.mono}`}
        aria-label="Mobil menü"
        inert={!acik}
      >
        <ul>
          {baglantilar.map((b) => (
            <li key={b.href}>
              <Link href={b.href} onClick={() => setAcik(false)}>
                {b.etiket}
              </Link>
            </li>
          ))}
        </ul>
        <span className={s.dim}>{siteConfig.address.city}</span>
      </nav>
    </header>
  )
}
