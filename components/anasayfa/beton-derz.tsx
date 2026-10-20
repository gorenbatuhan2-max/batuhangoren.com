'use client'

import { useEffect } from 'react'
import s from './anasayfa.module.css'

/** Sütun kırılımı: CSS'teki `--sutun` media sorgusuyla aynı kalmalı. */
const GENIS = '(min-width: 700px)'

/**
 * Beton derz hizası.
 *
 * Zemindeki beton kalıp panellerinin ölçüsünü içerik kutusundan hesaplar
 * (masaüstü ve tablette 4, telefonda 2 panel; panel yüksekliği eninin yarısı)
 * ve `.root` üzerine yazar. Ardından `data-derz` taşıyan her öğenin üst kenarını
 * bir sonraki yatay derze oturtur; `data-derz="blok"` olanların yüksekliğini de
 * panel katına yuvarlar. Öğelerin eni ve boyu zaten CSS'te panel katı olduğu
 * için dört köşe de derz çizgisine denk gelir.
 *
 * Her çalışmada eklentiler sıfırlanıp aynı karede yeniden yazılır, yani aynı
 * düzende iki kez çalışması aynı sonucu verir; kök boyutu değişmediği için
 * boyut gözlemcisi döngüye girmez.
 */
export function BetonDerz() {
  useEffect(() => {
    const kok = document.querySelector<HTMLElement>(`.${s.root}`)
    const cetvel = document.querySelector<HTMLElement>('[data-derz-cetvel]')
    if (!kok || !cetvel) return

    const genis = window.matchMedia(GENIS)
    let kare = 0

    const hizala = () => {
      kare = 0
      const icerik = cetvel.getBoundingClientRect()
      if (icerik.width <= 0) return
      const panelW = icerik.width / (genis.matches ? 4 : 2)
      const panelH = panelW / 2
      kok.style.setProperty('--panel-w', `${panelW}px`)
      kok.style.setProperty('--panel-h', `${panelH}px`)
      kok.style.setProperty('--derz-x', `${icerik.left}px`)

      const ustu = (el: HTMLElement) => el.getBoundingClientRect().top - kok.getBoundingClientRect().top

      // Belge sırasıyla: her eklenti sonrakileri aşağı iter, o yüzden tek tek ölçülür.
      for (const el of kok.querySelectorAll<HTMLElement>('[data-derz]')) {
        if (el.dataset.derz === 'blok') el.style.minHeight = ''
        el.style.setProperty('--derz-ek', '0px')
        const t0 = ustu(el)
        const fark = Math.ceil((t0 - 0.5) / panelH) * panelH - t0
        if (fark > 0.5) {
          el.style.setProperty('--derz-ek', `${fark.toFixed(2)}px`)
          // Önceki kardeşin alt boşluğuyla çöktüyse kaydırma etkisiz kalır:
          // çöken boşluğu da ekleyerek gerçekten `fark` kadar it.
          if (ustu(el) - t0 < fark - 0.5) {
            const onceki = el.previousElementSibling
            const alt = onceki ? parseFloat(getComputedStyle(onceki).marginBottom) || 0 : 0
            el.style.setProperty('--derz-ek', `${(fark + alt).toFixed(2)}px`)
          }
        }
        if (el.dataset.derz === 'blok') {
          const boy = el.getBoundingClientRect().height
          el.style.minHeight = `${Math.ceil(boy / panelH - 0.01) * panelH}px`
        }
      }
    }

    const iste = () => {
      if (!kare) kare = requestAnimationFrame(hizala)
    }

    hizala()
    const gozlemci = new ResizeObserver(iste)
    gozlemci.observe(kok)
    genis.addEventListener('change', iste)
    document.fonts?.ready.then(iste)

    return () => {
      gozlemci.disconnect()
      genis.removeEventListener('change', iste)
      if (kare) cancelAnimationFrame(kare)
    }
  }, [])

  return <span data-derz-cetvel className={s.derzCetvel} aria-hidden="true" />
}
