'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Shared cinematic easing — a slow, deliberate settle rather than a quick fade.
export const EASE_SIGNATURE = [0.16, 1, 0.3, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export function Reveal({ children, delay = 0, className, y = 32 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay, ease: EASE_SIGNATURE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerGroup({ children, className, staggerDelay = 0.1 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_SIGNATURE } },
}

/**
 * Line-by-line "mask" reveal: each line sits inside an overflow-hidden band
 * and slides up from behind it, like a shutter lifting — the same device the
 * Arix-style reference site uses for its stacked headlines.
 */
interface MaskRevealProps {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
  once?: boolean
  inView?: boolean
}

export function MaskReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.12,
  once = true,
  inView = true,
}: MaskRevealProps) {
  return (
    <span className={cn('block', className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn('block', lineClassName)}
            initial={{ y: '110%', opacity: 0 }}
            {...(inView
              ? { whileInView: { y: '0%', opacity: 1 }, viewport: { once, margin: '-100px' } }
              : { animate: { y: '0%', opacity: 1 } })}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE_SIGNATURE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
