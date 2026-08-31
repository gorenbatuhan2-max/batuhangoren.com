'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Ruler, HardHat } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'
import { process } from '@/lib/data'

const icons = [Search, PenTool, Ruler, HardHat]

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-28">
      <div className="absolute -right-32 top-1/3 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Çalışma Sürecimiz"
          title="Keşiften Uygulamaya, Şeffaf Dört Adım"
          description="Her proje aynı titiz metodolojiden geçer; böylece süreç boyunca ne aşamada olduğunuzu her zaman bilirsiniz."
        />

        <div className="relative mt-14">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border lg:left-1/2" />
          <div className="flex flex-col gap-10">
            {process.map((item, i) => {
              const isEven = i % 2 === 0
              const Icon = icons[i]
              return (
                <div key={item.step} className="relative lg:flex lg:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'relative pl-16 lg:w-1/2 lg:pl-0',
                      isEven ? 'lg:order-1 lg:pr-12 lg:text-right' : 'lg:order-3 lg:ml-auto lg:pl-12'
                    )}
                  >
                    <div className="group rounded-md border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                      <div
                        className={cn(
                          'flex items-center gap-3',
                          isEven ? 'lg:flex-row-reverse' : 'flex-row'
                        )}
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-5" />
                        </span>
                        <span className="font-display text-sm font-bold tracking-wide text-primary">
                          ADIM {item.step}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                  <span className="absolute left-6 top-6 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-card text-xs font-bold text-primary lg:left-1/2 lg:order-2 lg:top-1/2 lg:-translate-y-1/2">
                    {i + 1}
                  </span>
                  <div className="hidden lg:order-2 lg:block lg:w-0" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
