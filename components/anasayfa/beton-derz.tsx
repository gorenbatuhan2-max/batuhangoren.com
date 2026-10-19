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
 * Hesap her seferinde öğenin kendi eklentisi çıkarılarak yapılır, yani aynı
 * düzende iki kez çalışması aynı sonucu verir; boyut gözlemcisi döngüye girmez.
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

      // Belge sırasıyla: her eklenti sonrakileri aşağı iter, o yüzden tek tek ölçülür.
      for (const el of kok.querySelectorAll<HTMLElement>('[data-derz]')) {
        if (el.dataset.derz === 'blok') el.style.minHeight = ''
        const ek = parseFloat(el.style.getPropertyValue('--derz-ek')) || 0
        const ust = el.getBoundingClientRect().top - kok.getBoundingClientRect().top - ek
        const yeni = Math.ceil((ust - 0.5) / panelH) * panelH - ust
        if (Math.abs(yeni - ek) > 0.5) el.style.setProperty('--derz-ek', `${yeni.toFixed(2)}px`)
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
