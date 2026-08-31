'use client'

import { useEffect, useRef, useState } from 'react'
import { List, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ManifestoSection } from '@/lib/manifesto-data'

interface ManifestoTocProps {
  sections: Pick<ManifestoSection, 'id' | 'number' | 'title'>[]
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function ManifestoToc({ sections }: ManifestoTocProps) {
  const ids = sections.map((s) => s.id)
  const activeId = useActiveSection(ids)

  return (
    <>
      {/* Desktop: sticky sidebar index */}
      <nav
        aria-label="Manifesto içindekiler"
        className="hidden lg:sticky lg:top-28 lg:block lg:h-fit lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-4"
      >
        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          İçindekiler
        </span>
        <ul className="flex flex-col gap-0.5 border-l border-border/60">
          {sections.map((s) => {
            const active = s.id === activeId
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(s.id)}
                  className={cn(
                    'group -ml-px flex w-full items-baseline gap-2.5 border-l py-1.5 pl-4 text-left text-sm transition-colors',
                    active
                      ? 'border-primary text-foreground'
                      : 'border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  )}
                >
                  <span
                    className={cn(
                      'font-serif text-xs shrink-0 transition-colors',
                      active ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-primary/70'
                    )}
                  >
                    {s.number}
                  </span>
                  <span className="leading-snug text-pretty">{s.title}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile / tablet: floating trigger + drawer */}
      <MobileToc sections={sections} activeId={activeId} />
    </>
  )
}

function MobileToc({
  sections,
  activeId,
}: {
  sections: Pick<ManifestoSection, 'id' | 'number' | 'title'>[]
  activeId: string
}) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="İçindekileri aç"
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full border border-border/70 bg-card/95 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-md"
      >
        <List className="size-4 text-primary" />
        İçindekiler
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            className="relative z-10 max-h-[75vh] w-full overflow-y-auto rounded-t-lg border-t border-border bg-card px-5 pb-8 pt-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                İçindekiler
              </span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Kapat">
                <X className="size-5 text-muted-foreground" />
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      setTimeout(() => scrollToSection(s.id), 150)
                    }}
                    className={cn(
                      'flex w-full items-baseline gap-3 rounded-sm px-3 py-2.5 text-left text-sm transition-colors',
                      s.id === activeId
                        ? 'bg-primary/10 text-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    )}
                  >
                    <span className="font-serif text-xs text-primary/80">{s.number}</span>
                    <span className="text-pretty">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
