'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { MaskReveal } from '@/components/reveal'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep pt-16 sm:pt-20"
    >
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 -top-[10%] h-[120%]" style={{ y: imageY }}>
          <Image
            src="/images/project-fildisi-sahili-villa-6.jpg"
            alt="Batuhan Gören Mimarlık tarafından tasarlanan modern villa projesi"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/60 via-transparent to-navy-deep/60" />
      </div>

      <BlueprintGrid className="text-navy-deep-foreground" />

      {/* Philosophical signature — vertical, quiet, architect's mark */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-semibold uppercase tracking-[0.5em] text-navy-deep-foreground/40"
        >
          Form · Estetik · Ruh
        </motion.span>
      </div>

      {/* Animated line-art accents */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="absolute -right-20 top-1/4 h-[500px] w-[500px] text-primary/30 sm:right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.path
          d="M20 380 L20 120 L200 20 L380 120 L380 380"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        <motion.path
          d="M80 380 L80 200 L200 130 L320 200 L320 380"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Onikişubat / Kahramanmaraş
            </span>
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl lg:text-6xl">
            <MaskReveal
              delay={0.1}
              stagger={0.1}
              inView={false}
              lines={[
                <>Kahramanmaraş&apos;ın Dokusuna Sadık,</>,
                <>
                  <span className="text-primary">Modern ve Depreme Dayanıklı</span>
                </>,
                <>Yaşam Alanları Tasarlıyoruz</>,
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg"
          >
            Onikişubat merkezli stüdyomuzda mimari tasarım, planlama ve konut yapımını bir
            arada yürütüyor; her projeyi arazinin dokusuna ve deprem güvenliği standartlarına
            uygun şekilde hayata geçiriyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="group" nativeButton={false} render={<Link href="/projeler" />}>
              Projeleri İnceleyin
              <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-navy-deep-foreground backdrop-blur-sm hover:bg-white/10 hover:text-navy-deep-foreground"
              nativeButton={false}
              render={<Link href="/iletisim" />}
            >
              Projenizi Başlatalım
            </Button>
          </motion.div>
        </div>
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
