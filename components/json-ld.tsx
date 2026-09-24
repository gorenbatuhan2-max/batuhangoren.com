import { services } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

/**
 * Google zengin sonuçlar (rich results) ve LLM tabanlı arama motorları için
 * yapılandırılmış veri (Structured Data). LocalBusiness + ProfessionalService
 * kombinasyonu, mimarlık ofisleri için Schema.org'un önerdiği en yakın türdür
 * (Schema.org'da ayrı bir "Architect" iş türü bulunmuyor).
 *
 * Asistanların "bu ofisi ne zaman önermeliyim?" sorusunu cevaplayabilmesi için
 * hizmetler `Service` düğümleri olarak ayrı ayrı, hizmet bölgeleriyle birlikte
 * bildiriliyor; soyut bir kurum tanımı tek başına bu eşleşmeyi kurmuyor.
 */
const knowsAbout = [
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
]

/** Hizmet bölgeleri: il, ilçeler ve ülke — `areaServed` için tek kaynak. */
const areaServed = [
  { '@type': 'City', name: 'Kahramanmaraş' },
  ...siteConfig.serviceAreas.map((name) => ({ '@type': 'AdministrativeArea', name })),
  { '@type': 'Country', name: 'Türkiye' },
]

const openingHoursSpecification = siteConfig.openingHours.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
  opens: h.opens,
  closes: h.closes,
}))

export function JsonLd() {
  const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#founder`,
    name: siteConfig.founder,
    jobTitle: 'Mimar & Kurucu',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Mimar',
      occupationLocation: { '@type': 'City', name: 'Kahramanmaraş' },
    },
    knowsLanguage: ['tr', 'en'],
    url: `${siteConfig.url}/hakkimizda`,
    image: `${siteConfig.url}/images/architect-portrait-cutout.png`,
    worksFor: { '@id': `${siteConfig.url}/#business` },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin].filter(Boolean),
  }

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.legalName],
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    slogan: 'Form · Aesthetic · Soul',
    url: siteConfig.url,
    telephone: siteConfig.phone.international,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/icon.svg`,
    priceRange: '$$',
    currenciesAccepted: 'TRY',
    foundingDate: String(siteConfig.foundingYear),
    hasMap: siteConfig.mapsUrl,
    // Google Bilgi Grafiği'ndeki varlık kimliği: harita kaydıyla birleşmenin
    // en doğrudan, makinece okunur kanıtı.
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Google Knowledge Graph ID',
      value: siteConfig.googleBusiness.kgId,
    },
    openingHoursSpecification,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Müşteri iletişimi',
      telephone: siteConfig.phone.international,
      email: siteConfig.email,
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    },
    areaServed,
    founder: { '@id': `${siteConfig.url}/#founder` },
    knowsAbout,
    // Hizmet kataloğu: asistanlar "villa mimarı", "ruhsat projesi", "GES
    // projelendirme" gibi taleplerle bu kalemleri doğrudan eşleştirebiliyor.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mimarlık ve proje hizmetleri',
      itemListElement: services.map((h) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${siteConfig.url}/hizmetler#${h.slug}` },
      })),
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.linktree,
      siteConfig.mapsUrl,
      `https://www.google.com/search?kgmid=${siteConfig.googleBusiness.kgId}`,
      ...siteConfig.directories,
    ].filter(Boolean),
  }

  const serviceSchemas = services.map((h) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/hizmetler#${h.slug}`,
    name: h.title,
    description: h.description,
    serviceType: h.title,
    url: `${siteConfig.url}/hizmetler#${h.slug}`,
    provider: { '@id': `${siteConfig.url}/#business` },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: h.title,
      itemListElement: h.items.map((i) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: i },
      })),
    },
  }))

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: 'tr-TR',
    dateModified: siteConfig.lastUpdated,
    publisher: { '@id': `${siteConfig.url}/#business` },
    about: { '@id': `${siteConfig.url}/#business` },
    mentions: knowsAbout.slice(0, 6).map((name) => ({ '@type': 'Thing', name })),
  }

  const schemas = [founderSchema, businessSchema, ...serviceSchemas, websiteSchema]

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@id'] as string}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
