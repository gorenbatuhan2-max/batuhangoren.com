import { siteConfig } from '@/lib/site-config'

/** Formal closing notice printed directly beneath the manifesto text. */
export function ManifestoColophon() {
  return (
    <div className="mx-auto max-w-3xl border-t border-border/60 px-4 py-12 text-center sm:px-6 lg:px-8">
      <p className="font-serif text-sm italic tracking-wide text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.legalName} Tüm hakları saklıdır.
      </p>
    </div>
  )
}
