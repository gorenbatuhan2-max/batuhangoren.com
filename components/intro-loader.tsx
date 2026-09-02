'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

type Phase = 'hidden' | 'reveal' | 'opening'

const SESSION_KEY = 'bg-intro-played'

/**
 * First-load intro: a single mark holds center stage, then the studio's
 * motto surfaces beneath it, and the screen parts like a pair of doors to
 * expose the site underneath. Plays once per browser session and is skipped
 * entirely for prefers-reduced-motion.
 */
export function IntroLoader() {
  const [phase, setPhase] = useState<Phase>('hidden')
  // Decided once, on mount — reading is side-effect-free, so it stays correct
  // even under Strict Mode's double effect invocation in development.
  const [shouldPlay] = useState(() => {
    if (typeof window === 'undefined') return false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !reduced && !sessionStorage.getItem(SESSION_KEY)
  })

  useEffect(() => {
    if (!shouldPlay) return

    sessionStorage.setItem(SESSION_KEY, '1')
    document.documentElement.style.overflow = 'hidden'
    setPhase('reveal')

    const openTimer = window.setTimeout(() => setPhase('opening'), 1750)
    const doneTimer = window.setTimeout(() => {
      setPhase('hidden')
      document.documentElement.style.overflow = ''
    }, 2750)

    return () => {
      window.clearTimeout(openTimer)
      window.clearTimeout(doneTimer)
      document.documentElement.style.overflow = ''
    }
  }, [shouldPlay])

  if (phase === 'hidden') return null

  const opening = phase === 'opening'

  return (
    <div className="fixed inset-0 z-[200]" aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-navy-deep"
        initial={false}
        animate={{ x: opening ? '-100%' : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-navy-deep"
        initial={false}
        animate={{ x: opening ? '100%' : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 0.92 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/logo-mark.png"
            alt={siteConfig.name}
            width={64}
            height={64}
            className="size-14 object-contain sm:size-16"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[10px] font-semibold uppercase tracking-[0.5em] text-navy-deep-foreground/70 sm:text-xs"
        >
          Form · Aesthetic · Soul
        </motion.p>
      </motion.div>
    </div>
  )
}
