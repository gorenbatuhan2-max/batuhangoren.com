import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Ruler, Calendar, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'
import { ConsultationBanner } from '@/components/home/consultation-banner'
import { projects } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projeler/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 675, alt: project.title }],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projeler/${project.id}`,
    image: `${siteConfig.url}${project.image}`,
    locationCreated: { '@type': 'Place', name: project.location },
    creator: { '@id': `${siteConfig.url}/#founder` },
    about: { '@id': `${siteConfig.url}/#business` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Tüm Projeler
          </Link>
          <Reveal className="mt-6 max-w-3xl">
            <Badge className="bg-primary text-primary-foreground">{project.categoryLabel}</Badge>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance text-navy-deep-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-pretty text-navy-deep-foreground/70 sm:text-lg">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="relative aspect-[16/9] w-full sm:aspect-[16/7]">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Proje Kapsamı</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="font-display text-xl font-bold text-foreground">Yapısal Öne Çıkanlar</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-md border border-border bg-card p-4 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="sticky top-24 flex flex-col gap-6 rounded-md border border-border bg-card p-6">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  Konum
                </p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{project.location}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Ruler className="size-3.5 text-primary" />
                  Alan
                </p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{project.area}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Calendar className="size-3.5 text-primary" />
                  Yıl
                </p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{project.year}</p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Hizmet Kapsamı
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.scope.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                size="lg"
                className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
                nativeButton={false}
                render={<Link href="/iletisim" />}
              >
                Benzer Bir Proje Başlatın
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {project.images && project.images.length > 1 && (
        <section className="bg-background pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Proje Görselleri</h2>
            </Reveal>
          </div>
          <div className="mt-6 flex flex-col gap-1.5">
            {project.images.slice(1).map((src, i) => (
              <div key={src} className="relative h-[70vh] w-full sm:h-[85vh]">
                <Image
                  src={src}
                  alt={`${project.title} - görsel ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-sand-soft py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Benzer Projeler</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationBanner />
    </>
  )
}
