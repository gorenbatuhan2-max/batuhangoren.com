'use client'

import { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categoryLabels, projects, type ProjectCategory } from '@/lib/data'
import { cizimMi, kapak, kapakAlt, sirala } from '@/lib/proje-kapaklari'
import ana from '@/components/anasayfa/anasayfa.module.css'
import s from './projeler.module.css'

/** Portföyün tamamı, kategoriye göre süzülebilir. */
const SIRALI = sirala(projects)

type Filtre = 'all' | ProjectCategory
const KATEGORILER: Filtre[] = ['all', 'villa', 'konut', 'kamu', 'ticari', 'endustriyel', 'enerji']

export function ProjeListesi() {
  const [filtre, setFiltre] = useState<Filtre>('all')

  const gorunen = useMemo(
    () => (filtre === 'all' ? SIRALI : SIRALI.filter((p) => p.category === filtre)),
    [filtre],
  )

  const sayi = useCallback(
    (c: Filtre) => (c === 'all' ? SIRALI.length : SIRALI.filter((p) => p.category === c).length),
    [],
  )

  return (
    <>
      <div className={s.filters} role="group" aria-label="Kategoriye göre süz">
        {KATEGORILER.map((c) => (
          <button
            key={c}
            type="button"
            className={s.chip}
            aria-pressed={filtre === c}
            onClick={() => setFiltre(c)}
          >
            {c === 'all' ? 'Tümü' : categoryLabels[c]} <i>{sayi(c)}</i>
          </button>
        ))}
      </div>

      {/*
        Her yapı bir satır: görsel 2 panel × 3 panel yüksekliği, metin yanında;
        satırlar sağlı sollu, her beşincisi tam genişlik. Görseller derze oturur.
      */}
      <div className={s.grid}>
        {gorunen.map((p, i) => {
          const genis = i % 5 === 0
          const sag = !genis && (i % 5) % 2 === 0
          return (
            <Link
              key={p.id}
              href={`/projeler/${p.id}`}
              className={`${s.card} ${genis ? s.cardGenis : ''} ${sag ? s.cardSag : ''} ${cizimMi(p) ? s.cizim : ''}`}
            >
              <div className={`${s.ph} ${i % 2 ? ana.harcB : ana.harc}`} data-derz>
                {cizimMi(p) && <span className={`${s.etiket} ${s.mono}`}>Çizim</span>}
                <Image
                  src={kapak(p)}
                  alt={kapakAlt(p)}
                  fill
                  sizes={genis ? '(min-width: 1100px) 1280px, 100vw' : '(min-width: 700px) 50vw, 100vw'}
                />
              </div>
              <div className={s.cardMetin}>
                <span className={`${s.mono} ${s.dim}`}>
                  {String(i + 1).padStart(2, '0')} // {p.location}
                </span>
                <h2>{p.title}</h2>
                <p className={s.ozet}>{p.summary}</p>
                <span className={ana.okLink}>Projeyi incele →</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
