'use client'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categoryLabels, projects, type Project, type ProjectCategory } from '@/lib/data'
import { galeriAlt, kapak, kapakAlt, sirala } from '@/lib/proje-kapaklari'
import s from './anasayfa.module.css'

/**
 * Dizin — yapı listesi.
 *
 * Bir satırın üzerine gelince görseli sağdaki sabit çerçevede belirir. Satıra
 * tıklayınca aynı görsel panelde büyüyerek açılır; altında projenin diğer
 * görselleri ve bilgileri gelir. Panel listenin içinde durduğu için aşağı
 * kaydırmaya devam edildiğinde liste kaldığı yerden sürer. Soldaki dikey çentik
 * paneli kapatır, görsel küçülerek çekilir ve önizleme çerçevesine geri döner.
 */

/** Panelin kapanış geçişi süresi (ms) — CSS ile aynı kalmalı. */
const KAPANIS_SURESI = 660

const KISA_ETIKET: Record<ProjectCategory, string> = {
  villa: 'Villa',
  konut: 'Konut',
  kamu: 'Kamu',
  ticari: 'Ticari',
  enerji: 'Enerji',
}

const SIRALI: Project[] = sirala(projects)

type Filtre = 'all' | ProjectCategory
const KATEGORILER: Filtre[] = ['all', 'villa', 'konut', 'kamu', 'ticari', 'enerji']

export function Dizin() {
  const [filtre, setFiltre] = useState<Filtre>('all')
  const [hover, setHover] = useState<string | null>(null)
  const [acik, setAcik] = useState<string | null>(null)
  /** Kapanış geçişi bitene kadar DOM'da kalması gereken proje. */
  const [cikan, setCikan] = useState<string | null>(null)
  const zamanlayici = useRef<ReturnType<typeof setTimeout> | null>(null)

  const gorunen = useMemo(
    () => (filtre === 'all' ? SIRALI : SIRALI.filter((p) => p.category === filtre)),
    [filtre],
  )

  const sayi = useCallback(
    (c: Filtre) => (c === 'all' ? SIRALI.length : SIRALI.filter((p) => p.category === c).length),
    [],
  )

  const kapat = useCallback(() => {
    setAcik((id) => {
      if (!id) return null
      setCikan(id)
      setHover(id) // görsel önizleme çerçevesine geri dönsün
      if (zamanlayici.current) clearTimeout(zamanlayici.current)
      zamanlayici.current = setTimeout(() => setCikan(null), KAPANIS_SURESI)
      return null
    })
  }, [])

  const ac = useCallback((id: string) => {
    if (zamanlayici.current) clearTimeout(zamanlayici.current)
    setCikan(null)
    setAcik(id)
    // Görsel büyürken ekranın ortasına yerleşsin.
    requestAnimationFrame(() => {
      window.setTimeout(() => {
        document
          .querySelector(`#panel-${id} [data-panel-hero]`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 220)
    })
  }, [])

  useEffect(() => () => { if (zamanlayici.current) clearTimeout(zamanlayici.current) }, [])

  // Süzgeç açık projeyi listeden çıkarırsa panel de kapanmalı.
  useEffect(() => {
    if (acik && !gorunen.some((p) => p.id === acik)) kapat()
  }, [acik, gorunen, kapat])

  useEffect(() => {
    if (!acik) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') kapat()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [acik, kapat])

  const onizleme = acik ? null : gorunen.find((p) => p.id === hover) ?? null

  return (
    <section className={s.section} id="dizin">
      <div className={s.dizinHead}>
        <h2 className={s.mono}>Dizin — Yapılar</h2>
        <span className={`${s.mono} ${s.dim}`}>
          {gorunen.length} yapı{filtre !== 'all' ? ' · süzülmüş' : ''}
        </span>
      </div>

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

      <div
        className={`${s.dizinGrid} ${acik ? s.dizinAcik : ''} ${hover && !acik ? s.dimmed : ''}`}
        onMouseLeave={() => setHover(null)}
      >
        <ul className={s.list}>
          {gorunen.map((p) => {
            const isOpen = acik === p.id
            const render = isOpen || cikan === p.id
            return (
              <li key={p.id}>
                <button
                  type="button"
                  className={`${s.row} ${isOpen ? s.rowOpen : ''}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.id}`}
                  onMouseEnter={() => setHover(p.id)}
                  onFocus={() => setHover(p.id)}
                  onClick={() => (isOpen ? kapat() : ac(p.id))}
                >
                  <span className={s.no} aria-hidden="true" />
                  <span className={s.rowTitle}>{p.title}</span>
                  <span className={`${s.mono} ${s.dim}`}>{KISA_ETIKET[p.category]}</span>
                </button>

                <Akordeon id={`panel-${p.id}`} open={isOpen}>
                  {render ? <Panel project={p} onClose={kapat} /> : null}
                </Akordeon>
              </li>
            )
          })}
        </ul>

        <div className={s.frame} aria-hidden="true">
          {onizleme && (
            <>
              <Image key={onizleme.id} src={kapak(onizleme)} alt="" fill sizes="30vw" />
              <span className={`${s.frameCap} ${s.mono}`}>
                {onizleme.title} — {onizleme.categoryLabel}
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * Yüksekliği ölçerek açılıp kapanan kap.
 *
 * `height: auto`ya CSS ile geçiş yapılamadığı için açılışta içerik ölçülüp
 * piksel değeri sürülüyor; geçiş bitince `auto`ya bırakılıyor, böylece geç
 * yüklenen görseller paneli kırpmıyor. Kapanışta önce ölçülü değere dönülüp
 * bir sonraki karede sıfıra iniliyor.
 */
function Akordeon({
  id,
  open,
  children,
}: {
  id: string
  open: boolean
  children: React.ReactNode
}) {
  const ic = useRef<HTMLDivElement>(null)
  const [yukseklik, setYukseklik] = useState<number | 'auto'>(0)
  const ilkRender = useRef(true)

  useLayoutEffect(() => {
    if (ilkRender.current) {
      ilkRender.current = false
      if (!open) return
    }
    const el = ic.current
    if (!el) {
      setYukseklik(0)
      return
    }

    if (open) {
      // Geçişin başlaması için sıfırın bir kare boyanmış olması gerekiyor.
      const hedef = el.offsetHeight
      setYukseklik(0)
      const kare = requestAnimationFrame(() => setYukseklik(hedef))
      const t = setTimeout(() => setYukseklik('auto'), KAPANIS_SURESI + 80)
      return () => {
        cancelAnimationFrame(kare)
        clearTimeout(t)
      }
    }

    setYukseklik(el.offsetHeight)
    const kare = requestAnimationFrame(() => requestAnimationFrame(() => setYukseklik(0)))
    return () => cancelAnimationFrame(kare)
  }, [open])

  return (
    <div
      id={id}
      className={`${s.panel} ${open ? s.panelOpen : ''}`}
      style={{ height: yukseklik === 'auto' ? 'auto' : `${yukseklik}px` }}
    >
      <div ref={ic}>{children}</div>
    </div>
  )
}

function Panel({ project, onClose }: { project: Project; onClose: () => void }) {
  const galeri = (project.images ?? []).filter((src) => src !== kapak(project)).slice(0, 8)

  return (
    <div className={s.panelInner}>
      <button type="button" className={s.notch} onClick={onClose} aria-label="Projeyi kapat">
        <span className={s.notchBar} />
        <span className={s.notchLabel}>Kapat</span>
      </button>

      <div>
        <div className={s.panelHero} data-panel-hero>
          <Image
            src={kapak(project)}
            alt={kapakAlt(project)}
            fill
            sizes="(min-width: 900px) 60vw, 100vw"
          />
        </div>

        <div className={`${s.panelMeta} ${s.mono}`}>
          <span>{project.categoryLabel}</span>
          <span>{project.location}</span>
          {project.year ? <span>{project.year}</span> : null}
          {project.area ? <span>{project.area}</span> : null}
        </div>

        <div className={s.panelBody}>
          <div>
            <p className={s.panelLead}>{project.summary}</p>
            <p>{project.description}</p>
          </div>
          <div>
            <span className={`${s.mono} ${s.dim}`}>Öne çıkanlar</span>
            <ul className={s.panelList}>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <span className={`${s.mono} ${s.dim}`} style={{ display: 'block', marginTop: '1.5rem' }}>
              Kapsam
            </span>
            <ul className={s.panelList}>
              {project.scope.map((sc) => (
                <li key={sc}>{sc}</li>
              ))}
            </ul>
          </div>
        </div>

        {galeri.length > 0 && (
          <div className={s.gallery}>
            {galeri.map((src, i) => (
              <div className={s.shot} key={src}>
                <Image
                  src={src}
                  alt={galeriAlt(project, i)}
                  fill
                  sizes="(min-width: 900px) 15vw, 45vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className={`${s.panelFoot} ${s.mono}`}>
          <Link href={`/projeler/${project.id}`}>Proje sayfasının tamamı →</Link>
          <button type="button" className={s.chip} onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  )
}
