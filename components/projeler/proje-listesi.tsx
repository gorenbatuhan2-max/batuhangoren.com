'use client'

import { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categoryLabels, projects, type ProjectCategory } from '@/lib/data'
import { cizimMi, kapak, kapakAlt, sirala } from '@/lib/proje-kapaklari'
import s from './projeler.module.css'

/** Portföyün tamamı, kategoriye göre süzülebilir. */
const SIRALI = sirala(projects)

type Filtre = 'all' | ProjectCategory
const KATEGORILER: Filtre[] = ['all', 'villa', 'konut', 'kamu', 'ticari', 'enerji']

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

      <div className={s.grid}>
        {gorunen.map((p) => (
          <Link
            key={p.id}
            href={`/projeler/${p.id}`}
            className={`${s.card} ${cizimMi(p) ? s.cizim : ''}`}
          >
            <div className={s.ph}>
              {cizimMi(p) && <span className={`${s.etiket} ${s.mono}`}>Çizim</span>}
              <Image
                src={kapak(p)}
                alt={kapakAlt(p)}
                fill
                sizes="(min-width: 820px) 50vw, 100vw"
              />
            </div>
            <div className={s.kunye}>
              <h2>{p.title}</h2>
              <span className={`${s.mono} ${s.dim}`}>{p.location}</span>
            </div>
            <p className={s.ozet}>{p.summary}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
