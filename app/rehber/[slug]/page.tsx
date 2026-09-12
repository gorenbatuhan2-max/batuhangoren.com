import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { projects, services } from '@/lib/data'
import { kapak } from '@/lib/proje-kapaklari'
import { rehberYazilari, rehberYazisiGetir } from '@/lib/rehber-data'
import { siteConfig } from '@/lib/site-config'
import ana from '@/components/anasayfa/anasayfa.module.css'
import proje from '@/components/projeler/projeler.module.css'
import rb from '@/components/rehber/rehber.module.css'

export function generateStaticParams() {
  return rehberYazilari.map((y) => ({ slug: y.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const yazi = rehberYazisiGetir(slug)
  if (!yazi) return {}
  return {
    title: yazi.title,
    description: yazi.description,
    alternates: { canonical: `/rehber/${yazi.slug}` },
    openGraph: {
      type: 'article',
      title: yazi.title,
      description: yazi.description,
      publishedTime: yazi.publishedAt,
    },
  }
}

export default async function RehberYazisiSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const yazi = rehberYazisiGetir(slug)
  if (!yazi) notFound()

  const ilgiliHizmetler = services.filter((h) => yazi.ilgiliHizmetSlugs.includes(h.slug))
  const ilgiliProjeler = projects.filter((p) => yazi.ilgiliProjeIds.includes(p.id))
  const kapakGorseli = ilgiliProjeler[0] ? kapak(ilgiliProjeler[0]) : siteConfig.ogImage

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: yazi.title,
    description: yazi.description,
    image: [`${siteConfig.url}${kapakGorseli}`],
    datePublished: yazi.publishedAt,
    dateModified: yazi.updatedAt ?? yazi.publishedAt,
    url: `${siteConfig.url}/rehber/${yazi.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/rehber/${yazi.slug}` },
    inLanguage: 'tr-TR',
    author: { '@id': `${siteConfig.url}/#founder` },
    publisher: { '@id': `${siteConfig.url}/#business` },
    about: ilgiliHizmetler.map((h) => ({ '@type': 'Thing', name: h.title })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Rehber', item: `${siteConfig.url}/rehber` },
      { '@type': 'ListItem', position: 3, name: yazi.title, item: `${siteConfig.url}/rehber/${yazi.slug}` },
    ],
  }

  return (
    <div className={ana.root}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Menu />
      <main>
        <section className={proje.hero}>
          <Link className={`${proje.geri} ${proje.mono}`} href="/rehber">
            ← Tüm yazılar
          </Link>
          <span className={`${proje.mono} ${proje.dim}`}>Rehber</span>
          <h1 className={proje.title}>{yazi.title}</h1>
          <p className={proje.intro}>{yazi.description}</p>
          <div className={`${proje.meta} ${proje.mono}`}>
            <span>
              {new Date(yazi.publishedAt).toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>{siteConfig.founder}</span>
          </div>
        </section>

        <div className={rb.body}>
          {yazi.bolumler.map((b, i) => (
            <div key={b.baslik ?? i}>
              {b.baslik && <h2>{b.baslik}</h2>}
              {b.paragraflar.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {(ilgiliHizmetler.length > 0 || ilgiliProjeler.length > 0) && (
          <section className={proje.benzer}>
            <span className={`${proje.mono} ${proje.dim}`}>İlgili</span>
            <ul className={proje.benzerListe}>
              {ilgiliHizmetler.map((h) => (
                <li key={h.slug}>
                  <Link href={`/hizmetler#${h.slug}`}>
                    <span>{h.title}</span>
                    <span className={`${proje.mono} ${proje.dim}`}>Hizmet</span>
                  </Link>
                </li>
              ))}
              {ilgiliProjeler.map((p) => (
                <li key={p.id}>
                  <Link href={`/projeler/${p.id}`}>
                    <span>{p.title}</span>
                    <span className={`${proje.mono} ${proje.dim}`}>{p.location}</span>
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
