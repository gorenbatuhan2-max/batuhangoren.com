import type { Metadata } from 'next'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { Reveal } from '@/components/reveal'
import { ServicesDetail } from '@/components/services/services-detail'
import { ServicesFaq } from '@/components/services/services-faq'
import { ConsultationBanner } from '@/components/home/consultation-banner'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Mimari tasarım, villa ve müstakil konut tasarımı, çok katlı yapılar ve ruhsat/uygulama süreçlerinde uçtan uca hizmetler.',
  alternates: { canonical: '/hizmetler' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-16">
        <BlueprintGrid className="text-navy-deep-foreground" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Hizmetler
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl">
              Tasarımdan Ruhsata Uçtan Uca Mimarlık Hizmetleri
            </h1>
            <p className="mt-6 text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg">
              Konsept tasarımdan uygulama denetimine kadar sürecin her adımında yanınızdayız.
            </p>
          </Reveal>
        </div>
      </section>

      <ServicesDetail />
      <ServicesFaq />
      <ConsultationBanner />
    </>
  )
}
