import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { FeaturedProjectsSection } from '@/components/home/featured-projects-section'
import { ServicesPreviewSection } from '@/components/home/services-preview-section'
import { PhilosophySection } from '@/components/home/philosophy-section'
import { ManifestoTeaserSection } from '@/components/home/manifesto-teaser-section'
import { ConsultationBanner } from '@/components/home/consultation-banner'

export default function HomePage() {
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
