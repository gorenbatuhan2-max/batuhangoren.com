'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Home, Building, Sun, FileCheck2, Handshake, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/reveal'
import { services } from '@/lib/data'

const icons = [Building2, Home, Building, Sun, FileCheck2, Handshake]

export function ServicesPreviewSection() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Temel Yetkinlikler"
          title="Tasarımdan Uygulamaya Uçtan Uca Hizmet"
          description="Konsept aşamasından ruhsat sürecine kadar mimarlık ve yapı ihtiyaçlarınızın tamamını tek stüdyoda karşılıyoruz."
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <StaggerCard key={service.slug} icon={Icon} title={service.title} description={service.short} />
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}

function StaggerCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Building2
  title: string
  description: string
}) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href="/hizmetler"
        className="group relative flex h-full flex-col gap-4 rounded-md border border-border bg-background p-6 transition-colors hover:border-primary/50"
      >
        <span className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </span>
        <h3 className="font-display text-lg font-bold leading-snug text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Detaylı İncele
          <ArrowRight className="size-3.5" />
        </span>
      </Link>
    </motion.div>
  )
}
