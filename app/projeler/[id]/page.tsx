import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { categoryServiceSlug, projects, services } from '@/lib/data'
import { cizimMi, galeriAlt, kapak, kapakAlt } from '@/lib/proje-kapaklari'
import { rehberYazilari } from '@/lib/rehber-data'
import { siteConfig } from '@/lib/site-config'
import ana from '@/components/anasayfa/anasayfa.module.css'
import s from '@/components/projeler/projeler.module.css'

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

export default async function ProjeDetaySayfasi({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const benzer = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3)

  const galeri = (project.images ?? []).filter((src) => src !== kapak(project))
  const cizim = cizimMi(project)

  const ilgiliHizmet = services.find((h) => h.slug === categoryServiceSlug[project.category])
  const ilgiliRehber = rehberYazilari.filter((y) => y.ilgiliProjeIds.includes(project.id))

  const imageObjects = [kapak(project), ...galeri].map((src, i) => ({
    '@type': 'ImageObject',
    contentUrl: `${siteConfig.url}${src}`,
    name: i === 0 ? kapakAlt(project) : galeriAlt(project, i - 1),
  }))

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projeler/${project.id}`,
    image: imageObjects,
    locationCreated: { '@type': 'Place', name: project.location },
    creator: { '@id': `${siteConfig.url}/#founder` },
    about: { '@id': `${siteConfig.url}/#business` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Projeler', item: `${siteConfig.url}/projeler` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${siteConfig.url}/projeler/${project.id}` },
    ],
  }

  return (
    <div className={ana.root}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Menu />
      <main>
        <section className={s.hero}>
          <Link className={`${s.geri} ${s.mono}`} href="/projeler">
            ← Tüm projeler
          </Link>
          <span className={`${s.mono} ${s.dim}`}>{project.categoryLabel}</span>
          <h1 className={s.title}>{project.title}</h1>
          <p className={s.intro}>{project.summary}</p>
          <div className={`${s.meta} ${s.mono}`}>
            <span>{project.location}</span>
            {project.year ? <span>{project.year}</span> : null}
            {project.area ? <span>{project.area}</span> : null}
            {cizim ? <span>Vaziyet planı çizimi</span> : null}
          </div>
        </section>

        <div className={`${s.kapak} ${cizim ? s.kapakCizim : ''}`}>
          <Image
            src={kapak(project)}
            alt={kapakAlt(project)}
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className={s.govde}>
          <div>
            <p className={s.lead}>{project.summary}</p>
            <p>{project.description}</p>
          </div>
          <div>
            <span className={`${s.mono} ${s.dim} ${s.altBaslik}`}>Öne çıkanlar</span>
            <ul className={s.liste}>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <span className={`${s.mono} ${s.dim} ${s.altBaslik}`}>Kapsam</span>
            <ul className={s.liste}>
              {project.scope.map((sc) => (
                <li key={sc}>{sc}</li>
              ))}
            </ul>
          </div>
        </div>

        {galeri.length > 0 && (
          <div className={s.galeri}>
            {galeri.map((src, i) => (
              <div className={s.kare} key={src}>
                <Image
                  src={src}
                  alt={galeriAlt(project, i)}
                  fill
                  sizes="(min-width: 900px) 33vw, 100vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {benzer.length > 0 && (
          <section className={s.benzer}>
            <span className={`${s.mono} ${s.dim}`}>Aynı kategoriden</span>
            <ul className={s.benzerListe}>
              {benzer.map((p) => (
                <li key={p.id}>
                  <Link href={`/projeler/${p.id}`}>
                    <span>{p.title}</span>
                    <span className={`${s.mono} ${s.dim}`}>{p.location}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {(ilgiliHizmet || ilgiliRehber.length > 0) && (
          <section className={s.benzer}>
            <span className={`${s.mono} ${s.dim}`}>İlgili</span>
            <ul className={s.benzerListe}>
              {ilgiliHizmet && (
                <li>
                  <Link href={`/hizmetler#${ilgiliHizmet.slug}`}>
                    <span>{ilgiliHizmet.title}</span>
                    <span className={`${s.mono} ${s.dim}`}>Hizmet</span>
                  </Link>
                </li>
              )}
              {ilgiliRehber.map((y) => (
                <li key={y.slug}>
                  <Link href={`/rehber/${y.slug}`}>
                    <span>{y.title}</span>
                    <span className={`${s.mono} ${s.dim}`}>Rehber</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Kapanis />
    </div>
  )
}
