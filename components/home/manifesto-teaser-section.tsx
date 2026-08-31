import Link from 'next/link'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { ManifestoSketch } from '@/components/manifesto/manifesto-sketches'
import { manifestoSections } from '@/lib/manifesto-data'

export function ManifestoTeaserSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <BlueprintGrid className="text-navy-deep-foreground" />
      <ManifestoSketch
        index={2}
        className="pointer-events-none absolute -left-28 top-1/2 h-[460px] w-[460px] -translate-y-1/2 text-primary/10"
      />
      <ManifestoSketch
        index={5}
        className="pointer-events-none absolute -right-24 -bottom-16 h-[380px] w-[380px] scale-x-[-1] text-primary/10"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <span className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Mimari Felsefe
            <span className="h-px w-8 bg-primary" />
          </span>

          <p className="font-serif text-2xl italic leading-snug text-balance text-navy-deep-foreground sm:text-3xl lg:text-4xl">
            &ldquo;Mimarlık, insana <span className="text-primary not-italic">evet</span> demek
            sanatıdır.&rdquo;
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-pretty text-navy-deep-foreground/60 sm:text-base">
            Mimarlık Manifestomuz; form, ruh ve sınırların diyalektiği üzerine on altı bölümlük
            bir sorgulama. Tasarım anlayışımızın arkasındaki düşünceyi okuyun.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
            {manifestoSections.map((section) => (
              <Link
                key={section.id}
                href={`/manifesto#${section.id}`}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-navy-deep-foreground/70 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-navy-deep-foreground"
              >
                <span className="font-serif text-primary/80">{section.number}</span>{' '}
                {section.title.charAt(0) + section.title.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>

          <Button size="lg" className="group mt-10" nativeButton={false} render={<Link href="/manifesto" />}>
            <BookOpen data-icon="inline-start" className="size-4" />
            Manifestoyu Oku
            <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
