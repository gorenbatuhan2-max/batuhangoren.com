'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, ArrowUpRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/iletisim', label: 'İletişim' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="size-9 object-contain sm:size-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-sans text-sm font-bold tracking-wide text-foreground sm:text-base">
              BATUHAN GÖREN
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Mimarlık
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-[2px] bg-primary" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" />
            {siteConfig.phone.display}
          </a>
          <Button size="sm" className="group" nativeButton={false} render={<Link href="/iletisim" />}>
            Projenizi Başlatalım
            <ArrowUpRight data-icon="inline-end" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menüyü aç" />}
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border bg-card">
            <SheetTitle className="sr-only">Site menüsü</SheetTitle>
            <div className="flex h-full flex-col px-6 py-8">
              <div className="mb-10 flex items-center gap-2.5">
                <Image
                  src="/images/logo-mark.png"
                  alt={siteConfig.name}
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
                <span className="font-sans text-sm font-bold tracking-wide">BATUHAN GÖREN</span>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          'rounded-sm px-3 py-3 text-lg font-display font-semibold transition-colors',
                          pathname === link.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-muted'
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone.display}
                </a>
                <SheetClose render={<Link href="/iletisim" />}>
                  <Button render={<span />} className="w-full">
                    Projenizi Başlatalım
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
