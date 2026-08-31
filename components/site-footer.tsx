import Link from 'next/link'
import Image from 'next/image'
import { AtSign, Users, Palette, MapPin, Phone, Mail } from 'lucide-react'
import { services } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-deep text-navy-deep-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/images/logo-mark.png"
                alt={siteConfig.name}
                width={36}
                height={36}
                className="size-9 object-contain"
              />
              <span className="font-sans text-sm font-bold tracking-wide">BATUHAN GÖREN</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Onikişubat / Kahramanmaraş merkezli mimarlık ve yapı stüdyosu. Modern, fonksiyonel
              ve deprem güvenli yaşam alanları tasarlıyoruz.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <AtSign className="size-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Users className="size-4" />
              </a>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Behance"
                className="flex size-9 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Palette className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Hızlı Bağlantılar
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/hakkimizda" className="transition-colors hover:text-primary">Hakkımızda</Link></li>
              <li><Link href="/projeler" className="transition-colors hover:text-primary">Projeler</Link></li>
              <li><Link href="/hizmetler" className="transition-colors hover:text-primary">Hizmetler</Link></li>
              <li><Link href="/manifesto" className="transition-colors hover:text-primary">Manifesto</Link></li>
              <li><Link href="/iletisim" className="transition-colors hover:text-primary">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Hizmetler
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href="/hizmetler" className="transition-colors hover:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              İletişim
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.address.district}, {siteConfig.address.city}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName} Tüm hakları saklıdır.</p>
          <p>{siteConfig.address.district} / {siteConfig.address.city}</p>
        </div>
      </div>
    </footer>
  )
}
