import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { projects } from '@/lib/data'
import { rehberYazilari } from '@/lib/rehber-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/hakkimizda', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/hizmetler', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/manifesto', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/projeler', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/rehber', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/iletisim', priority: 0.7, changeFrequency: 'yearly' },
  ]

  const lastModified = siteConfig.lastUpdated

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projeler/${project.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const rehberEntries: MetadataRoute.Sitemap = rehberYazilari.map((yazi) => ({
    url: `${siteConfig.url}/rehber/${yazi.slug}`,
    lastModified: yazi.updatedAt ?? yazi.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...projectEntries, ...rehberEntries]
}
