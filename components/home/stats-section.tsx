'use client'

import { AnimatedCounter } from '@/components/animated-counter'
import { StaggerGroup, staggerItem } from '@/components/reveal'
import { stats } from '@/lib/data'
import { motion } from 'framer-motion'

export function StatsSection() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-start gap-1 px-4 py-8 sm:px-6 sm:py-10"
            >
              <span className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
