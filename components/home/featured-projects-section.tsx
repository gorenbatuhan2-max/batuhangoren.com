'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { categoryLabels, projects, type ProjectCategory } from '@/lib/data'
import { cn } from '@/lib/utils'

const tabs: { key: ProjectCategory | 'tumu'; label: string }[] = [
  { key: 'tumu', label: 'Tümü' },
  { key: 'villa', label: categoryLabels.villa },
  { key: 'konut', label: categoryLabels.konut },
  { key: 'kamu', label: categoryLabels.kamu },
  { key: 'ticari', label: categoryLabels.ticari },
]

export function FeaturedProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | 'tumu'>('tumu')

  const filtered =
    active === 'tumu' ? projects.slice(0, 6) : projects.filter((p) => p.category === active).slice(0, 6)

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Öne Çıkan Projeler"
            title="Kahramanmaraş'tan Türkiye Geneline Hayata Geçen Tasarımlarımız"
            description="Villa, toplu konut, kamu ve ticari yapı projelerimizden bir seçki."
          />
          <Button
            variant="ghost"
            className="hidden shrink-0 sm:flex"
            nativeButton={false}
            render={<Link href="/projeler" />}
          >
            Tüm Projeler
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                'relative rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === tab.key
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button variant="outline" nativeButton={false} render={<Link href="/projeler" />}>
            Tüm Projeler
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
