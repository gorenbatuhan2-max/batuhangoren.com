'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { siteConfig } from '@/lib/site-config'

/**
 * Appends a copyright notice to any text copied out of the wrapped content,
 * so pasted excerpts always carry attribution back to the source.
 */
export function CopyGuard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString()
      if (!selection?.trim()) return

      const year = new Date().getFullYear()
      const notice = `\n\n— ${siteConfig.legalName} © ${year}. Tüm hakları saklıdır.\n${siteConfig.url}`

      e.clipboardData?.setData('text/plain', selection + notice)
      e.preventDefault()
    }

    el.addEventListener('copy', handleCopy)
    return () => el.removeEventListener('copy', handleCopy)
  }, [])

  return <div ref={ref}>{children}</div>
}
