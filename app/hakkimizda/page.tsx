import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { BioSection } from '@/components/about/bio-section'
import { RecoverySection } from '@/components/about/recovery-section'
import { ProcessTimeline } from '@/components/about/process-timeline'
import { ValuesGrid } from '@/components/about/values-grid'
import { ConsultationBanner } from '@/components/home/consultation-banner'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Batuhan Gören Mimarlık hakkında: mimari vizyon, çalışma sürecimiz ve Kahramanmaraş odaklı değerlerimiz.',
  alternates: { canonical: '/hakkimizda' },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BioSection />
      <RecoverySection />
      <ProcessTimeline />
      <ValuesGrid />
      <ConsultationBanner />
    </>
  )
}
