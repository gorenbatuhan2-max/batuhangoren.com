import Image from 'next/image'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { Reveal } from '@/components/reveal'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 sm:pb-24">
      <BlueprintGrid className="text-navy-deep-foreground" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Hakkımızda
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl">
            Batuhan Gören ile Kahramanmaraş&apos;a Özel Mimari Vizyon
          </h1>
          <p className="mt-6 text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg">
            Onikişubat&apos;ta doğup büyüyen bir mimar olarak, bölgenin dokusunu, iklimini ve
            insanlarını tanıyarak tasarım yapmanın önemine inanıyorum.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
