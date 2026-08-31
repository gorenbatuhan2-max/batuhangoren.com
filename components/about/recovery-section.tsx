'use client'

import { Home } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/reveal'
import { motion } from 'framer-motion'
import { recoverySettlements } from '@/lib/data'

export function RecoverySection() {
  const totalHouses = recoverySettlements.reduce((sum, s) => sum + s.count, 0)

  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Deprem Sonrası Yerinde Dönüşüm"
          title="Köylerde Yerinde Dönüşüm Kapsamında Alınan Köy Evi Ruhsatları"
          description={`2023 Kahramanmaraş depremlerinin ardından, yerinde dönüşüm kapsamında farklı yerleşimlerde toplam ${totalHouses}+ köy evi için ruhsat aldık.`}
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recoverySettlements.map((item) => (
            <motion.div
              key={item.location}
              variants={staggerItem}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-md border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Home className="size-6" />
              </span>
              <p className="font-display text-3xl font-bold text-primary">{item.count} Köy Evi</p>
              <h3 className="font-display text-base font-bold text-foreground">{item.location}</h3>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
