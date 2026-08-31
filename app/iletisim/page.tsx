import type { Metadata } from 'next'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Onikişubat / Kahramanmaraş\'ta projenizi başlatmak için bize ulaşın. Proje talep formu, telefon, WhatsApp ve stüdyo konumu.',
  alternates: { canonical: '/iletisim' },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-16">
        <BlueprintGrid className="text-navy-deep-foreground" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                İletişim
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl">
              Projenizi Başlatalım
            </h1>
            <p className="mt-6 text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg">
              Villa, konut ya da danışmanlık projeniz için detayları bizimle paylaşın; en kısa
              sürede sizinle iletişime geçelim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </>
  )
}
