'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from '@/components/project-card'
import { projects, categoryLabels, type ProjectCategory } from '@/lib/data'
import { cn } from '@/lib/utils'

const tabs: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'Tümü' },
  { key: 'villa', label: categoryLabels.villa },
  { key: 'konut', label: categoryLabels.konut },
  { key: 'kamu', label: categoryLabels.kamu },
  { key: 'ticari', label: categoryLabels.ticari },
  { key: 'enerji', label: categoryLabels.enerji },
]

export function ProjectsFilterGrid() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all')

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300',
              active === tab.key
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground',
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
    </div>
  )
}
