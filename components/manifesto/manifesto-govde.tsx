'use client'

import { Fragment, useEffect, useState } from 'react'
import type { ManifestoSection } from '@/lib/manifesto-data'
import s from './manifesto.module.css'

/** Metindeki `*vurgu*` işaretlerini <em> olarak çizer. */
function vurgulari(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((parca, i) =>
    parca.startsWith('*') && parca.endsWith('*') && parca.length > 2 ? (
      <em key={i}>{parca.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{parca}</Fragment>
    ),
  )
}

/** Okunan bölümü izler; içindekiler listesindeki karşılığı aydınlanır. */
function useOkunanBolum(ids: string[]) {
  const [aktif, setAktif] = useState(ids[0])

  useEffect(() => {
    const gozlemci = new IntersectionObserver(
      (girisler) => {
        const gorunen = girisler
          .filter((g) => g.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (gorunen[0]) setAktif(gorunen[0].target.id)
      },
      { rootMargin: '-12% 0px -72% 0px' },
    )
    ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
      .forEach((el) => gozlemci.observe(el))
    return () => gozlemci.disconnect()
  }, [ids])

  return aktif
}

export function ManifestoGovde({ sections }: { sections: ManifestoSection[] }) {
  const ids = sections.map((b) => b.id)
  const aktif = useOkunanBolum(ids)

  return (
    <div className={s.body}>
      <nav className={s.toc} aria-label="Manifesto içindekiler">
        <span className={`${s.tocHead} ${s.mono}`}>İçindekiler</span>
        <ul className={s.tocList}>
          {sections.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                className={`${s.tocLink} ${aktif === b.id ? s.tocActive : ''}`}
                aria-current={aktif === b.id ? 'true' : undefined}
                onClick={() =>
                  document.getElementById(b.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                <em>{b.number}</em>
                <span>{b.title.charAt(0) + b.title.slice(1).toLocaleLowerCase('tr-TR')}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {sections.map((b) => (
          <section key={b.id} id={b.id} className={s.section}>
            <div className={s.sectionHead}>
              <span className={s.roman}>{b.number}</span>
              <h2 className={s.sectionTitle}>
                {b.title.charAt(0) + b.title.slice(1).toLocaleLowerCase('tr-TR')}
              </h2>
            </div>
            <div className={s.prose}>
              {b.paragraphs.map((p, i) => (
                <p key={i}>{vurgulari(p)}</p>
              ))}
            </div>
          </section>
        ))}

        <div className={s.colophon}>
          <p>
            Bu metin bir mimarlık ofisinin tanıtım yazısı değil. Çizgiden önce gelen şeyi kayıt
            altına alma denemesi. On altı bölüm boyunca form, biçim, estetik, ruh, mekân, zaman ve
            sessizlik üzerine sorular soruluyor; çoğu yanıtsız kalıyor.
          </p>
          <div className={`${s.colophonMeta} ${s.mono}`}>
            <span>{sections.length} bölüm</span>
            <span>Yazan: Mimar Batuhan Gören</span>
            <span>Kahramanmaraş</span>
          </div>
        </div>
      </div>
    </div>
  )
}
