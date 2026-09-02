/**
 * Merkezi site bilgileri.
 *
 * Telefon, WhatsApp ve sosyal medya alanlarındaki değerler şu an PLACEHOLDER'dır.
 * Gerçek bilgilerinizi girmek için sadece bu dosyayı güncellemeniz yeterli —
 * header, footer, iletişim sayfası ve WhatsApp butonu buradan besleniyor.
 */

export const siteConfig = {
  name: 'Batuhan Gören Mimarlık',
  shortName: 'Batuhan Gören',
  // Copyright / ownership notices use the registered legal entity name.
  legalName: 'Batuhan Gören Mimarlık Ltd. Şti.',
  founder: 'Batuhan Gören',
  description:
    'Kahramanmaraş merkezli mimarlık stüdyosu. Villa, çok katlı konut ve kamu yapılarında deprem güvenli, modern tasarım ve ruhsat danışmanlığı.',
  // TODO: Domain'iniz farklıysa güncelleyin.
  url: 'https://batuhangoren.com',
  // İçerikte kayda değer bir güncelleme yapıldığında bu tarihi güncelleyin
  // (JSON-LD dateModified ve GEO "freshness" sinyali için kullanılıyor).
  lastUpdated: '2026-08-31',
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
    district: 'Onikişubat',
    city: 'Kahramanmaraş',
    region: 'Kahramanmaraş',
    country: 'TR',
    countryName: 'Türkiye',
  },
  social: {
    // TODO: Gerçek profil linklerinizle değiştirin. Hesabınız yoksa alanı boş bırakabilirsiniz.
    instagram: 'https://www.instagram.com/bthngoren/',
    linkedin: 'https://www.linkedin.com/in/batuhan-goren-2879b03a9/',
    behance: 'https://behance.net',
    linktree: 'https://link.batuhangoren.com/',
  },
  mapsUrl: 'https://maps.app.goo.gl/mpprwAc9u2KPPWHX9',
  ogImage: '/images/project-fildisi-sahili-villa-6.jpg',
  themeColor: '#0B132B',
} as const

export type SiteConfig = typeof siteConfig
