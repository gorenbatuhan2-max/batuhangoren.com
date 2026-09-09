import type { Metadata } from 'next'
import { HeroSection } from '@/components/home-eski/hero-section'
import { StatsSection } from '@/components/home-eski/stats-section'
import { FeaturedProjectsSection } from '@/components/home-eski/featured-projects-section'
import { ServicesPreviewSection } from '@/components/home-eski/services-preview-section'
import { PhilosophySection } from '@/components/home-eski/philosophy-section'
import { ManifestoTeaserSection } from '@/components/home-eski/manifesto-teaser-section'
import { ConsultationBanner } from '@/components/home-eski/consultation-banner'

/**
 * Eski ana sayfanın yedeği.
 *
 * Yeni ana sayfa ile karşılaştırmak için duruyor. Arama motorlarına kapalı ve
 * sitemap'te yer almıyor; `app/sitemap.ts` sabit bir rota listesinden üretiliyor.
 */
export const metadata: Metadata = {
  title: 'Eski ana sayfa (yedek)',
  robots: { index: false, follow: false },
}

export default function EskiAnasayfa() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <ServicesPreviewSection />
      <PhilosophySection />
      <ManifestoTeaserSection />
      <ConsultationBanner />
    </main>
  )
}
