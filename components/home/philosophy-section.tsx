'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, MapPinned, Users } from 'lucide-react'
import { Reveal, EASE_SIGNATURE } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const points = [
  {
    icon: Users,
    title: 'Kullanıcı Odaklı Program',
    description: 'Her tasarım kararı, yaşayacak ailenin gerçek ihtiyaçları ve günlük rutinleri üzerine kurulur.',
  },
  {
    icon: MapPinned,
    title: 'Arazi ve Zemin Duyarlılığı',
    description: 'Kahramanmaraş\'ın topografyası ve zemin koşulları, temel tasarımdan cepheye kadar her kararı şekillendirir.',
  },
  {
    icon: ShieldCheck,
    title: 'Güçlü Yapı Standartları',
    description: 'Güncel deprem yönetmeliğine tam uyumlu, dayanıklı ve uzun ömürlü taşıyıcı sistemler tasarlanır.',
  },
]

export function PhilosophySection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-auto">
            <motion.div
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: EASE_SIGNATURE }}
              className="absolute inset-0"
            >
              <Image
                src="/images/site-analysis.png"
                alt="Kahramanmaraş'ta arazi ve zemin analizi çalışması"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div>
            <Reveal className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              <span>Form</span>
              <span className="text-primary">·</span>
              <span>Estetik</span>
              <span className="text-primary">·</span>
              <span>Ruh</span>
            </Reveal>
            <SectionHeading
              eyebrow="Mimari Felsefemiz"
              title="Arazinin Gerçeği ile Yaşayanların İhtiyacını Buluşturan Tasarım"
              description="Her proje, Kahramanmaraş'ın kendine has iklimi, topografyası ve dokusunu okuyarak başlar. Amacımız; estetik kaygıyı gerçek yaşam ihtiyaçları ve güçlü yapı standartlarıyla dengelemek."
            />

            <div className="mt-10 flex flex-col gap-6">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={0.1 + i * 0.1} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <point.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
