import { Fragment } from 'react'
import type { ManifestoSection as ManifestoSectionType } from '@/lib/manifesto-data'
import { Reveal } from '@/components/reveal'
import { ManifestoSketch } from '@/components/manifesto/manifesto-sketches'
import { cn } from '@/lib/utils'

/** Splits `*emphasis*` markers out of manifesto prose and renders them as <em>. */
function renderEmphasis(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={i} className="font-serif italic text-primary/90">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

interface ManifestoSectionProps {
  section: ManifestoSectionType
  index: number
}

export function ManifestoSectionBlock({ section, index }: ManifestoSectionProps) {
  const isEven = index % 2 === 0

  return (
    <section
      id={section.id}
      className="relative scroll-mt-28 border-b border-border/60 py-16 sm:py-24"
    >
      <ManifestoSketch
        index={index}
        className={cn(
          'pointer-events-none absolute h-[420px] w-[420px] text-primary opacity-[0.05] sm:h-[520px] sm:w-[520px]',
          isEven ? '-right-24 top-0' : '-left-24 bottom-0 scale-x-[-1]'
        )}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 flex items-baseline gap-5 sm:mb-10">
          <span className="font-serif text-5xl font-medium leading-none text-primary/70 sm:text-6xl">
            {section.number}
          </span>
          <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-3xl">
            {section.title}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {section.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="font-serif text-[17px] leading-[1.85] text-pretty text-foreground/85 sm:text-lg"
            >
              {renderEmphasis(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
