'use client'

import { Fragment, useEffect, useState } from 'react'
import s from './anasayfa.module.css'

/**
 * Kot cetveli — sol kenarda sabit duran datum çizgisi.
 *
 * Gerçek bir kesit gibi okunur: yukarı çıktıkça kot artar, sayfa aşağı
 * kaydıkça merdivende yukarı tırmanılır. Aralıklar gerçek kot farkıyla
 * orantılı; +2.70 (asma kat tavanı) ile +3.00 (döşeme üstü) arasındaki 30 cm
 * cetvelde de 30 cm gibi görünür.
 *
 * Aktif kot, ekranın orta çizgisini en son geçen işaretle belirlenir; her an
 * yalnızca bir kot yanar. (IntersectionObserver kullanılmıyordu: hızlı
 * kaydırmada geri çağrılar atlanınca iki kot birden yanılı kalıyordu.)
 *
 * En alttaki -3.00 bodrum kotu: cetvelde vardır ama hiçbir zaman aydınlanmaz.
 */
const KOTLAR = [
  // Zemin: hero ve konumlanma bandı boyunca sürer.
  { id: 'hero', deger: 0.0 },
  // Tavan kotu: konumlanma bandının sonundaki işaret. 30 cm'lik asma kat farkı
  // gibi, yalnızca çok kısa bir kaydırma aralığında yanar.
  { id: 'kot-270', deger: 2.7 },
  // Döşeme üstü: dizin bölümünü taşır.
  { id: 'dizin', deger: 3.0 },
  { id: 'surec', deger: 5.9 },
  { id: 'manifesto', deger: 8.8 },
  { id: 'hizmetler', deger: 11.7 },
  { id: 'hakkinda', deger: 14.6 },
  { id: 'teklif', deger: 17.5 },
]

const BODRUM = -3.0

/** Yukarıdan aşağıya: en yüksek kot üstte, bodrum en altta. */
const CETVEL = [...KOTLAR].reverse()

function yaz(deger: number) {
  return `${deger < 0 ? '-' : '+'}${Math.abs(deger).toFixed(2)}`
}

export function KotCetveli() {
  const [aktif, setAktif] = useState<string>('hero')
  const aktifKot = KOTLAR.find((k) => k.id === aktif) ?? KOTLAR[0]

  useEffect(() => {
    let bekliyor = false

    const hesapla = () => {
      const orta = window.scrollY + window.innerHeight / 2
      let bulunan = KOTLAR[0].id
      for (const { id } of KOTLAR) {
        const el = document.getElementById(id)
        if (!el) continue
        // Sayfanın tepesine göre mutlak konum
        const tepe = el.getBoundingClientRect().top + window.scrollY
        if (tepe <= orta) bulunan = id
        else break
      }
      setAktif(bulunan)
      bekliyor = false
    }

    const kaydirinca = () => {
      if (bekliyor) return
      bekliyor = true
      requestAnimationFrame(hesapla)
    }

    hesapla()
    window.addEventListener('scroll', kaydirinca, { passive: true })
    window.addEventListener('resize', kaydirinca)
    return () => {
      window.removeEventListener('scroll', kaydirinca)
      window.removeEventListener('resize', kaydirinca)
    }
  }, [])

  return (
    <>
      {/* Geniş ekran: tam merdiven. */}
      <aside className={s.rail} aria-hidden="true">
        <div className={s.ladder}>
          {CETVEL.map(({ id, deger }, i) => {
            const altindaki = CETVEL[i + 1]?.deger ?? BODRUM
            return (
              <Fragment key={id}>
                <span className={`${s.tick} ${aktif === id ? s.tickOn : ''}`}>{yaz(deger)}</span>
                {/* Boşluk, iki kot arasındaki gerçek yükseklik farkıyla orantılı. */}
                <span className={s.aralik} style={{ flexGrow: deger - altindaki }} />
              </Fragment>
            )
          })}
          <span className={`${s.tick} ${s.tickBodrum}`}>{yaz(BODRUM)}</span>
        </div>
        <span className={s.datum}>Kot / Datum</span>
      </aside>

      {/* Dar ekran: tam merdiven yer kaplar; yalnızca aktif kot küçük bir rozet olarak kalır. */}
      <div className={s.railMobil} aria-hidden="true">
        <span className={s.railMobilDeger}>{yaz(aktifKot.deger)}</span>
        <span className={s.railMobilEtiket}>Kot</span>
      </div>
    </>
  )
}
