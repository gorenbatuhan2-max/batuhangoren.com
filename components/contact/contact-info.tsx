import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle, AtSign, Users, Link2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-md border border-border bg-navy-deep p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold text-navy-deep-foreground">
          İletişim Bilgileri
        </h3>
        <div className="mt-6 flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <MapPin className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">Stüdyo Adresi</p>
              <p className="mt-0.5 text-sm text-navy-deep-foreground/70">
                {siteConfig.address.district} / {siteConfig.address.city}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <Phone className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">Telefon / WhatsApp</p>
              <Link
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-0.5 block text-sm text-navy-deep-foreground/70 hover:text-primary"
              >
                {siteConfig.phone.international}
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <Mail className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">E-posta</p>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="mt-0.5 block text-sm text-navy-deep-foreground/70 hover:text-primary"
              >
                {siteConfig.email}
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <AtSign className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">Instagram</p>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-0.5 block text-sm text-navy-deep-foreground/70 hover:text-primary"
              >
                @bthngoren
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <Users className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">LinkedIn</p>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-0.5 block text-sm text-navy-deep-foreground/70 hover:text-primary"
              >
                Batuhan Gören
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
              <Link2 className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-navy-deep-foreground">Tüm Bağlantılar</p>
              <Link
                href={siteConfig.social.linktree}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-0.5 block text-sm text-navy-deep-foreground/70 hover:text-primary"
              >
                link.batuhangoren.com
              </Link>
            </div>
          </div>
        </div>

        <Link
          href={siteConfig.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <MessageCircle className="size-4" />
          WhatsApp&apos;tan Hızlı Ulaşın
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
          <iframe
            title={`${siteConfig.address.district}, ${siteConfig.address.city} harita konumu`}
            src={`https://www.google.com/maps?q=${siteConfig.address.district},${siteConfig.address.city}&output=embed`}
            className="size-full grayscale-[40%] contrast-125 invert-[8%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Link
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex w-full items-center justify-center gap-2 rounded-sm border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <MapPin className="size-4" />
          Haritada Aç
        </Link>
      </div>
    </div>
  )
}
