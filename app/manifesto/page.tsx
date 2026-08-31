import type { Metadata } from 'next'
import { ManifestoHero } from '@/components/manifesto/manifesto-hero'
import { ManifestoToc } from '@/components/manifesto/manifesto-toc'
import { ManifestoSectionBlock } from '@/components/manifesto/manifesto-section'
import { ManifestoColophon } from '@/components/manifesto/manifesto-colophon'
import { ConsultationBanner } from '@/components/home/consultation-banner'
import { manifestoSections, manifestoSubtitle } from '@/lib/manifesto-data'

export const metadata: Metadata = {
  title: 'Manifesto',
  description: `Mimarlık Manifestosu — ${manifestoSubtitle}. Form, biçim, estetik, ruh, mekân ve zaman üzerine on altı bölümlük mimari felsefe metni.`,
  alternates: { canonical: '/manifesto' },
}

export default function ManifestoPage() {
  return (
    <main>
      <ManifestoHero />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
          <ManifestoToc sections={manifestoSections} />

          <div>
            {manifestoSections.map((section, i) => (
              <ManifestoSectionBlock key={section.id} section={section} index={i} />
            ))}
            <ManifestoColophon />
          </div>
        </div>
      </div>

      <ConsultationBanner />
    </main>
  )
}
