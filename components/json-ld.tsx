import { siteConfig } from '@/lib/site-config'

/**
 * Google zengin sonuçlar (rich results) ve LLM tabanlı arama motorları için
 * yapılandırılmış veri (Structured Data). LocalBusiness + ProfessionalService
 * kombinasyonu, mimarlık ofisleri için Schema.org'un önerdiği en yakın türdür
 * (Schema.org'da ayrı bir "Architect" iş türü bulunmuyor).
 */
export function JsonLd() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.international,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/icon.svg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      { '@type': 'City', name: 'Kahramanmaraş' },
      { '@type': 'AdministrativeArea', name: 'Onikişubat' },
      { '@type': 'AdministrativeArea', name: 'Dulkadiroğlu' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
    },
    knowsAbout: [
      'Villa mimarisi',
      'Müstakil ev tasarımı',
      'Bungalov tasarımı',
      'Ahşap yapılar',
      'Belediye binaları',
      'Kamu binaları projeleri',
      'GES mimari projelendirme',
      'Güneş enerji santralleri',
      'HES mimari projelendirme',
      'RES mimari projelendirme',
      'İmar ve ruhsat projeleri',
      'Uygulama projesi',
      'Müteahhitlik danışmanlığı',
      'Deprem güvenli yapı tasarımı',
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.behance,
      siteConfig.social.linktree,
    ].filter(Boolean),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${siteConfig.url}/#business` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
