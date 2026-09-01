'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/lib/data'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projeler/${project.id}`}
        className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} - ${project.categoryLabel}`}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary text-primary-foreground">{project.categoryLabel}</Badge>
          </div>
          <span className="absolute right-4 top-4 font-display text-xs font-semibold tracking-widest text-white/50">
            N&deg;{(index + 1).toString().padStart(2, '0')}
          </span>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                <MapPin className="size-3.5" />
                {project.location}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">{project.title}</h3>
            </div>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:rotate-45">
              <ArrowUpRight className="size-4 text-white" />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <span className="text-sm text-muted-foreground">{project.area}</span>
          <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  )
}
