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
  lastUpdated: '2026-09-19',
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
  // `streetAddress` Google İşletme Profili'ndeki adres satırıyla harfi harfine aynı
  // tutulmalı; harita ↔ site eşleşmesi bu metin üzerinden de kuruluyor. Apartman
  // adı GBP adresinde yok, bu yüzden yalnızca yol tarifinde geçiyor.
  address: {
    streetAddress: 'Cumhuriyet Mah. Gaziosmanpaşa Bulvarı No:7/A',
    directions: 'Nur Apartmanı — Çevre, Şehircilik Müdürlüğü karşısı, yokuş devamı.',
    postalCode: '46050',
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
  // Stüdyonun kayıtlı olduğu üçüncü taraf firma rehberleri. Schema.org `sameAs`
  // üzerinden bildirildiğinde arama motorları ve LLM'ler bu profillerle site
  // arasındaki kimlik bağını kurabiliyor (entity reconciliation).
  directories: [
    'https://www.aratsana.com/firma/batuhan-goren-mimarlik-2n7r',
    'https://iyifirma.com/batuhan-goren-mimarlik-insaat-taahhut-ticaret-ve-sanayi-limited-sirketi/',
  ],
  // Stüdyonun kuruluş yılı — LocalBusiness `foundingDate` ve "kaç yıldır"
  // sorularının cevabı buradan türetiliyor.
  foundingYear: 2019,
  // DOĞRULANMALI: Google İşletme Profili'ndeki saatlerle birebir aynı olmalı.
  // Şu an varsayılan ofis saatleri girili; farklıysa burayı düzeltmek yeterli
  // (LocalBusiness `openingHoursSpecification` buradan üretiliyor).
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '10:00', closes: '16:00' },
  ],
  // Stüdyonun fiilen proje yürüttüğü yerleşimler. Yerel arama ve "X ilçesinde
  // mimar" sorularında `areaServed` olarak bildiriliyor.
  serviceAreas: [
    'Onikişubat',
    'Dulkadiroğlu',
    'Türkoğlu',
    'Pazarcık',
    'Elbistan',
    'Afşin',
    'Göksun',
    'Ekinözü',
    'Andırın',
    'Çağlayancerit',
    'Nurhak',
  ],
  // Google İşletme Profili kimlikleri: `cid` harita kaydının kalıcı numarası,
  // `kgId` Google Bilgi Grafiği'ndeki varlık kimliği. JSON-LD bunlarla sitedeki
  // işletmeyi haritadaki kayıtla aynı varlık olarak bağlıyor.
  googleBusiness: {
    cid: '9015557454168528375',
    kgId: '/g/11pzx5vp8v',
  },
  // Kısa paylaşım linki (maps.app.goo.gl) yerine doğrudan CID adresi: yönlendirme
  // zinciri yok, tarayıcılar ve LLM'ler kaydı tek adımda çözebiliyor.
  mapsUrl: 'https://www.google.com/maps?cid=9015557454168528375',
  mapsEmbedUrl: 'https://www.google.com/maps?cid=9015557454168528375&output=embed',
  geo: {
    latitude: 37.5945891,
    longitude: 36.8603702,
  },
  ogImage: '/images/project-fildisi-sahili-villa-6.jpg',
  themeColor: '#0B132B',
} as const

export type SiteConfig = typeof siteConfig
