import type { Metadata } from 'next'
import { BlueprintGrid } from '@/components/blueprint-grid'
import { Reveal } from '@/components/reveal'
import { ProjectsFilterGrid } from '@/components/projects/projects-filter-grid'
import { ConsultationBanner } from '@/components/home/consultation-banner'
import { projects } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Projeler',
  description:
    'Kahramanmaraş merkezli stüdyomuzun Türkiye genelinde ve yurt dışında gerçekleştirdiği villa, toplu konut, kamu ve ticari yapı projeleri portföyü.',
  alternates: { canonical: '/projeler' },
}

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Batuhan Gören Mimarlık Proje Portföyü',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${siteConfig.url}/projeler/${project.id}`,
    name: project.title,
  })),
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-16">
        <BlueprintGrid className="text-navy-deep-foreground" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Portföy
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl">
              Kahramanmaraş&apos;tan Türkiye Geneline ve Yurt Dışına Uzanan Projeler
            </h1>
            <p className="mt-6 text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg">
              Villa, toplu konut, kamu ve ticari yapı projelerimizin tamamını inceleyin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsFilterGrid />
        </div>
      </section>

      <ConsultationBanner />
    </>
  )
}
