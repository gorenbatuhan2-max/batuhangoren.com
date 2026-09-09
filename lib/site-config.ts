/**
 * Merkezi site bilgileri.
 *
 * İletişim, harita ve arama motoru bilgileri bu dosyadan beslenir.
 */

export const siteConfig = {
  name: 'Batuhan Gören Mimarlık',
  shortName: 'Batuhan Gören',
  // Copyright / ownership notices use the registered legal entity name.
  legalName: 'Batuhan Gören Mimarlık Ltd. Şti.',
  founder: 'Batuhan Gören',
  description:
    'Kahramanmaraş merkezli mimarlık stüdyosu. Villa, çok katlı konut ve kamu yapılarında deprem güvenli, modern tasarım ve ruhsat danışmanlığı.',
  // Vercel'in www'siz alan adından yönlendirdiği birincil yayın adresi.
  url: 'https://www.batuhangoren.com',
  // İçerikte kayda değer bir güncelleme yapıldığında bu tarihi güncelleyin
  // (JSON-LD dateModified ve sitemap lastModified için kullanılıyor).
  lastUpdated: '2026-09-09',
  locale: 'tr_TR',
  email: 'info@batuhangoren.com',
  phone: {
    display: '0538 700 51 91',
    international: '+90 538 700 51 91',
    href: 'tel:+905387005191',
  },
  whatsapp: {
    number: '905387005191',
    href: 'https://wa.me/905387005191?text=Merhaba%2C%20projem%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
  },
  address: {
    streetAddress: 'Cumhuriyet Mahallesi, Gazi Osman Paşa Bulvarı, Nur Apartmanı No: 7/A',
    directions: 'Çevre, Şehircilik Müdürlüğü karşısı, yokuş devamı.',
    district: 'Onikişubat',
    city: 'Kahramanmaraş',
    region: 'Kahramanmaraş',
    country: 'TR',
    countryName: 'Türkiye',
  },
  social: {
    instagram: 'https://www.instagram.com/bthngoren/',
    linkedin: 'https://www.linkedin.com/in/batuhan-goren-2879b03a9/',
    linktree: 'https://link.batuhangoren.com/',
  },
  mapsUrl: 'https://maps.app.goo.gl/vRNBuEvcyzDSQGpp7',
  mapsEmbedUrl: 'https://www.google.com/maps?cid=9015557454168528375&output=embed',
  geo: {
    latitude: 37.5945891,
    longitude: 36.8603702,
  },
  ogImage: '/images/project-fildisi-sahili-villa-6.jpg',
  themeColor: '#0B132B',
} as const

export type SiteConfig = typeof siteConfig
