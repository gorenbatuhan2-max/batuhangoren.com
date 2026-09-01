import Image from 'next/image'
import { CheckCircle2, Building2, Home, Building, Sun, FileCheck2, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

const icons = [Building2, Home, Building, Sun, FileCheck2, Handshake]
const images = [
  '/images/services-hero.png',
  '/images/project-villa-2.png',
  '/images/project-residence-2.png',
  '/images/project-turkoglu-tip-proje.jpg',
  '/images/site-analysis.png',
]

export function ServicesDetail() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => {
          const Icon = icons[i]
          const reversed = i % 2 === 1
          return (
            <div
              key={service.slug}
              id={service.slug}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={cn('relative order-1', reversed && 'lg:order-2')}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
                  <Image
                    src={images[i] || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 hidden size-24 items-center justify-center rounded-md bg-primary text-primary-foreground sm:flex">
                  <Icon className="size-10" />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={cn('order-2', reversed && 'lg:order-1')}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Hizmet {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-balance text-foreground sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
