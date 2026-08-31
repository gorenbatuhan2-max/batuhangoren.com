'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { ManifestoSketch } from '@/components/manifesto/manifesto-sketches'
import { manifestoTitle, manifestoSubtitle } from '@/lib/manifesto-data'

export function ManifestoHero() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-navy-deep pt-16 sm:pt-20">
      <BlueprintGrid className="text-navy-deep-foreground" />

      <ManifestoSketch
        index={4}
        className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 text-primary/20 sm:right-0"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Mimari Felsefe
          </span>
          <span className="h-px w-8 bg-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-balance text-navy-deep-foreground sm:text-6xl lg:text-7xl"
        >
          {manifestoTitle.charAt(0) + manifestoTitle.slice(1).toLowerCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-pretty text-navy-deep-foreground/60 sm:text-xl"
        >
          {manifestoSubtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-pretty text-navy-deep-foreground/50 sm:text-base"
        >
          On altı bölüm, on altı sorgulama. Formdan ruha, mekândan zamana — mimarlığın
          neden yalnızca bir meslek değil, bir varoluş biçimi olduğu üzerine.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <ArrowDown className="size-5 text-navy-deep-foreground/50" />
      </motion.div>
    </section>
  )
}
