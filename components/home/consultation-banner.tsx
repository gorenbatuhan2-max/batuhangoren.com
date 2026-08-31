import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { BlueprintGrid } from '@/components/blueprint-grid'

export function ConsultationBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-24">
      <BlueprintGrid className="text-navy-deep-foreground" />
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Ücretsiz Ön Görüşme
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-navy-deep-foreground sm:text-4xl">
              Projenizi Birlikte Şekillendirelim
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-deep-foreground/70">
              Arsanız hazır olsun ya da olmasın; ilk görüşmede ihtiyaçlarınızı dinliyor, size özel
              bir yol haritası çıkarıyoruz.
            </p>
          </div>
          <Button size="lg" className="shrink-0 group" nativeButton={false} render={<Link href="/iletisim" />}>
            Ücretsiz Görüşme Talep Et
            <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
