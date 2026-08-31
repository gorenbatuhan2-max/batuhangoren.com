'use client'

import { motion } from 'framer-motion'
import { Compass, Landmark, ShieldCheck, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/reveal'
import { values } from '@/lib/data'

const icons = [Compass, Landmark, ShieldCheck, Eye]

export function ValuesGrid() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="absolute -left-24 bottom-0 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Değerlerimiz"
          title="Her Projeye Yön Veren Dört İlke"
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-md border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="pointer-events-none absolute -right-4 -top-6 font-display text-6xl font-bold text-foreground/[0.04]">
                  0{i + 1}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative font-display text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
                <span className="relative mt-auto h-0.5 w-8 rounded-full bg-primary/40 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
