export type ProjectCategory = 'villa' | 'konut' | 'kamu' | 'ticari'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  location: string
  year: string
  area: string
  image: string
  images?: string[]
  summary: string
  description: string
  highlights: string[]
  scope: string[]
}

export const categoryLabels: Record<ProjectCategory, string> = {
  villa: 'Villa & Müstakil',
  konut: 'Toplu Konut & Tip Proje',
  kamu: 'Kamu & Kurumsal Yapılar',
  ticari: 'Ticari & Turizm Yapıları',
}

export const projects: Project[] = [
  {
    id: 'ali-hasan-bey-cift-villasi',
    title: 'Ali Hasan Bey Çift Villası',
    category: 'villa',
    categoryLabel: categoryLabels.villa,
    location: 'Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-ali-hasan-villa.jpg',
    images: [
      '/images/project-ali-hasan-villa.jpg',
      ...Array.from({ length: 14 }, (_, i) => `/images/project-ali-hasan-villa-${i + 2}.jpg`),
    ],
    summary: 'Aynı arsada yan yana konumlanan, havuzlu ve peyzajlı iki bağımsız aile villası.',
    description:
      'Ali Hasan Bey için tasarlanan bu proje, aynı bahçeyi paylaşan iki ayrı villayı bir araya getiriyor. Ortak havuz ve oturma alanı, pergola ile gölgelendirilmiş dış mekan ve özenli peyzaj düzenlemesiyle geniş aile yaşamına uygun bir bütün oluşturuyor.',
    highlights: ['İki bağımsız villa için ortak sosyal bahçe kurgusu', 'Havuz ve pergolalı oturma alanı', 'Taş duvar ve ahşap kaplama malzeme dili', 'Zemin etüdüne uygun betonarme taşıyıcı sistem'],
    scope: ['Konsept Tasarım', '3D Görselleştirme', 'Uygulama Projesi'],
  },
  {
    id: 'avgasir-villa',
    title: 'Avgasır Villa',
    category: 'villa',
    categoryLabel: categoryLabels.villa,
    location: 'Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-avgasir-villa.jpg',
    images: [
      '/images/project-avgasir-villa.jpg',
      ...Array.from({ length: 12 }, (_, i) => `/images/project-avgasir-villa-${i + 2}.jpg`),
    ],
    summary: 'Doğal taş cephesi ve çift kat yüksekliğindeki iç mekanıyla dikkat çeken müstakil villa.',
    description:
      'Avgasır bölgesinde yer alan bu villa, taş duvar dokusu ve şöminesiyle sıcak bir iç mekan yaratıyor. Çift kat yüksekliğindeki oturma alanı, geniş cam yüzeyler ve galeri boşluğundaki merdiven ile ferah ve aydınlık bir yaşam alanı sunuyor.',
    highlights: ['Çift kat yüksekliğinde galeri boşluklu salon', 'Doğal taş duvar ve şömine detayı', 'Geniş cam cephe ile iç-dış mekan bütünlüğü', 'Cam korkuluklu iç merdiven tasarımı'],
    scope: ['Konsept Tasarım', 'İç Mekan Tasarımı', '3D Görselleştirme'],
  },
  {
    id: 'pazarcik-tip-proje',
    title: 'Pazarcık Toplu Konut Teklif Projesi',
    category: 'konut',
    categoryLabel: categoryLabels.konut,
    location: 'Pazarcık / Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-pazarcik-tip-proje.jpg',
    images: [
      '/images/project-pazarcik-tip-proje.jpg',
      ...Array.from({ length: 6 }, (_, i) => `/images/project-pazarcik-tip-proje-${i + 2}.jpg`),
    ],
    summary: 'Tip proje esaslı, çok sayıda bağımsız villanın yer aldığı toplu konut yerleşim teklifi.',
    description:
      'Pazarcık için hazırlanan bu toplu konut teklifinde, tekrarlanabilir bir tip proje esas alınarak çok sayıda müstakil konut aynı yerleşim planında bir araya getiriliyor. Yeşil alanlar, iç yollar ve ortak kullanım alanlarıyla bütüncül bir yerleşim kurgusu hedefleniyor.',
    highlights: ['Tekrarlanabilir tip proje esaslı yerleşim planı', 'İç yol ve ortak yeşil alan kurgusu', 'Her birim için özel bahçe/havuz opsiyonu', 'Toplu teklif ve fizibilite çalışması'],
    scope: ['Vaziyet Planı', 'Tip Proje Tasarımı', '3D Görselleştirme', 'Fizibilite'],
  },
  {
    id: 'turkoglu-tip-proje',
    title: 'Türkoğlu Toplu Konut Teklif Projesi',
    category: 'konut',
    categoryLabel: categoryLabels.konut,
    location: 'Türkoğlu / Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-turkoglu-tip-proje.jpg',
    images: [
      '/images/project-turkoglu-tip-proje.jpg',
      ...Array.from({ length: 3 }, (_, i) => `/images/project-turkoglu-tip-proje-${i + 2}.jpg`),
    ],
    summary: 'Çatısı güneş paneliyle donatılmış tip konutların yer aldığı sürdürülebilir yerleşim teklifi.',
    description:
      'Türkoğlu için geliştirilen bu teklif projesinde, tip konut blokları çatı üstü güneş enerjisi panelleriyle desteklenerek enerji verimliliği ön planda tutuluyor. Sokak dokusu ve bahçe düzenlemesiyle mahalle ölçeğinde yaşanabilir bir çevre kurgulanıyor.',
    highlights: ['Çatı üstü güneş enerjisi paneli entegrasyonu', 'Tip konut bloklarıyla tekrarlanabilir yerleşim', 'Sokak ve bahçe düzenlemesiyle mahalle dokusu', 'Toplu teklif ve fizibilite çalışması'],
    scope: ['Vaziyet Planı', 'Tip Proje Tasarımı', '3D Görselleştirme'],
  },
  {
    id: 'pazarcik-belediyesi',
    title: 'Pazarcık Belediyesi Hizmet Binası',
    category: 'kamu',
    categoryLabel: categoryLabels.kamu,
    location: 'Pazarcık / Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-pazarcik-belediyesi.jpg',
    images: [
      '/images/project-pazarcik-belediyesi.jpg',
      ...Array.from({ length: 25 }, (_, i) => `/images/project-pazarcik-belediyesi-${i + 2}.jpg`),
    ],
    summary: 'T.C. Pazarcık Belediyesi için tasarlanan, cam cepheli ve erişilebilir giriş çözümlü hizmet binası.',
    description:
      'Pazarcık Belediyesi\'nin başkanlık ve hizmet birimlerini bir araya getiren bu yapı, taş kaplamalı kütle ile cam cepheli bölümlerin dengeli birlikteliğiyle kurumsal ve davetkâr bir giriş cephesi oluşturuyor. Rampalı erişim çözümüyle binanın her ziyaretçi için erişilebilir olması hedefleniyor.',
    highlights: ['Rampalı ve merdivenli erişilebilir ana giriş', 'Taş kaplama ve cam cephe malzeme dengesi', 'Başkanlık ve hizmet birimlerinin ayrı girişlerle çözümü', 'Belediye ruhsat sürecine uygun teknik proje'],
    scope: ['Mimari Proje', 'Cephe Tasarımı', 'Ruhsat Süreci', '3D Görselleştirme'],
  },
  {
    id: 'deprem-sonrasi-afet-hastane-teklifi',
    title: 'Deprem Sonrası Afet Hastanesi Teklif Projesi',
    category: 'kamu',
    categoryLabel: categoryLabels.kamu,
    location: 'Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-deprem-hastane.jpg',
    images: [
      '/images/project-deprem-hastane.jpg',
      ...Array.from({ length: 5 }, (_, i) => `/images/project-deprem-hastane-${i + 2}.jpg`),
    ],
    summary: 'Deprem sonrası hızlı devreye alınabilecek, iki katlı modüler bir sağlık tesisi teklif projesi.',
    description:
      'Kahramanmaraş depremlerinin ardından ortaya çıkan acil sağlık altyapısı ihtiyacına yönelik hazırlanan bu teklif, hızlı uygulanabilir ve fonksiyonel bir hastane binası öneriyor. Yalın cephe dili ve net kat organizasyonuyla acil devreye alma sürecine uygun bir tasarım hedefleniyor.',
    highlights: ['Hızlı uygulamaya uygun yalın yapı sistemi', 'Net ve verimli kat planı organizasyonu', 'Deprem bölgesi şartlarına uygun teknik çözümler', 'Teklif ve ön fizibilite aşaması'],
    scope: ['Ön Fizibilite', 'Mimari Teklif Projesi', '3D Görselleştirme'],
  },
  {
    id: 'malatya-afet-konut-teklifi',
    title: 'Malatya Afet Konutları Belediye Teklifi',
    category: 'kamu',
    categoryLabel: categoryLabels.kamu,
    location: 'Malatya',
    year: '',
    area: '',
    image: '/images/project-malatya-afet.jpg',
    images: [
      '/images/project-malatya-afet.jpg',
      ...Array.from({ length: 7 }, (_, i) => `/images/project-malatya-afet-${i + 2}.jpg`),
    ],
    summary: 'Deprem sonrası kalıcı konut ihtiyacına yönelik hazırlanan tek katlı tip afet konutu teklifi.',
    description:
      'Malatya Belediyesi\'ne sunulan bu teklifte, deprem bölgesinde hızlı ve ekonomik şekilde uygulanabilecek tek katlı tip konutlar bir araya getiriliyor. Tekrarlanabilir plan tipolojisi, geniş ölçekli afet konutu üretimine uygun bir çözüm sunuyor.',
    highlights: ['Tekrarlanabilir tek katlı tip konut tasarımı', 'Deprem bölgesine uygun hızlı uygulama kurgusu', 'Toplu yerleşim için vaziyet planı çalışması', 'Belediye teklif ve fizibilite dosyası'],
    scope: ['Vaziyet Planı', 'Tip Proje Tasarımı', '3D Görselleştirme', 'Fizibilite'],
  },
  {
    id: 'sutcu-imam-universitesi-park-tasarimi',
    title: 'Sütçü İmam Üniversitesi Hastane Arkası Park Tasarımı',
    category: 'kamu',
    categoryLabel: categoryLabels.kamu,
    location: 'Onikişubat / Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-sutcu-imam-park.jpg',
    images: [
      '/images/project-sutcu-imam-park.jpg',
      ...Array.from({ length: 15 }, (_, i) => `/images/project-sutcu-imam-park-${i + 2}.jpg`),
    ],
    summary: 'KSÜ hastane arkasında, pergolalı yürüyüş yolları ve dinlenme alanlarından oluşan peyzaj tasarımı.',
    description:
      'Kahramanmaraş Sütçü İmam Üniversitesi hastane arkasındaki boş alan için hazırlanan bu peyzaj projesi, ahşap pergolalı oturma noktaları ve yeşil dokuyla örülü yürüyüş yollarını bir araya getiriyor. Hastane personeli ve ziyaretçiler için sakin bir açık hava dinlenme alanı hedefleniyor.',
    highlights: ['Pergolalı oturma ve dinlenme noktaları', 'Yeşil doku ile bütünleşik yürüyüş yolları', 'Palmiye ve mevsimlik bitkilendirme çalışması', 'Kamu alanı peyzaj ve kentsel tasarım projesi'],
    scope: ['Peyzaj Tasarımı', 'Kentsel Tasarım', '3D Görselleştirme'],
  },
  {
    id: 'otel-projemiz',
    title: 'Kahramanmaraş Çevre Yolu Otel Projesi',
    category: 'ticari',
    categoryLabel: categoryLabels.ticari,
    location: 'Kahramanmaraş',
    year: '',
    area: '147 Oda',
    image: '/images/project-otel.jpg',
    images: [
      '/images/project-otel.jpg',
      '/images/project-otel-interior.jpg',
      '/images/project-otel-2.jpg',
      '/images/project-otel-3.jpg',
      '/images/project-otel-4.jpg',
      '/images/project-otel-5.jpg',
      '/images/project-otel-6.jpg',
      '/images/project-otel-7.jpg',
      ...Array.from({ length: 8 }, (_, i) => `/images/project-otel-${i + 8}.jpg`),
    ],
    summary: '147 odalı, havuz ve saunalı, çevre yolu üzerinde konumlanan büyük ölçekli otel teklif projesi.',
    description:
      'Kahramanmaraş çevre yolu üzerinde yer alan bu otel projesi; havuz, sauna, 250 kişilik toplantı salonu ve bodrum kattan erişilen yarı olimpik yüzme havuzunu bir araya getiriyor. Çatı katındaki kafeterya, meyhane ve bar birimleri ile diğer bloklardaki çatı teraslar, otele çok fonksiyonlu bir kimlik kazandırıyor.',
    highlights: ['147 oda kapasiteli büyük ölçekli otel kütlesi', 'Bodrumdan erişilen yarı olimpik yüzme havuzu', '250 kişilik çok amaçlı toplantı salonu', 'Çatı katında kafeterya, meyhane ve bar üniteleri'],
    scope: ['Konsept Tasarım', 'Mimari Proje', '3D Görselleştirme', 'Ön Fizibilite'],
  },
  {
    id: 'shell-yani-kafe',
    title: 'Shell Yanı Özel Kafe İşletmesi',
    category: 'ticari',
    categoryLabel: categoryLabels.ticari,
    location: 'Kahramanmaraş',
    year: '',
    area: '',
    image: '/images/project-shell-kafe.jpg',
    images: [
      '/images/project-shell-kafe.jpg',
      ...Array.from({ length: 2 }, (_, i) => `/images/project-shell-kafe-${i + 2}.jpg`),
    ],
    summary: 'Ahşap pergola ve açık oturma alanlarıyla tasarlanmış, akaryakıt istasyonu yanında konumlu kafe.',
    description:
      'Bir akaryakıt istasyonunun yanında yer alan bu özel kafe işletmesi, ahşap pergola sistemi ve geniş açık oturma alanlarıyla samimi bir atmosfer sunuyor. Gece aydınlatma kurgusu ve peyzaj detaylarıyla mekân, yol kenarında fark edilir bir durak noktasına dönüşüyor.',
    highlights: ['Ahşap pergola sistemli açık oturma alanı', 'Akaryakıt istasyonu yanında konumlanan ticari yapı', 'Gece aydınlatma ve atmosfer kurgusu', 'Peyzaj ve dış mekan detay tasarımı'],
    scope: ['Konsept Tasarım', 'Dış Mekan Tasarımı', '3D Görselleştirme'],
  },
  {
    id: 'afrika-fildisi-sahili-villa',
    title: 'Fildişi Sahili Villa Projesi',
    category: 'villa',
    categoryLabel: categoryLabels.villa,
    location: 'Abidjan / Fildişi Sahili',
    year: '',
    area: '',
    image: '/images/project-fildisi-sahili-villa.jpg',
    images: [
      '/images/project-fildisi-sahili-villa.jpg',
      '/images/project-fildisi-sahili-villa-2.jpg',
      '/images/project-fildisi-sahili-villa-3.jpg',
      '/images/project-fildisi-sahili-villa-4.jpg',
      '/images/project-fildisi-sahili-villa-5.jpg',
      ...Array.from({ length: 5 }, (_, i) => `/images/project-fildisi-sahili-villa-${i + 6}.jpg`),
    ],
    summary: 'Batı Afrika\'da, tuğla ve ahşap doku detaylarıyla tasarlanan iki katlı müstakil villa projesi.',
    description:
      'Fildişi Sahili\'nde hayata geçirilen bu proje, stüdyomuzun Kahramanmaraş dışına ve yurt dışına uzanan mimari projelendirme kapasitesini gösteriyor. Tuğla cephe dokusu, ahşap latis detayları ve geniş balkonlarıyla villa, sıcak iklime uygun gölgeli açık alanlar sunuyor.',
    highlights: ['İki katlı, balkonlu müstakil villa kütlesi', 'Tuğla ve ahşap latis cephe malzeme dili', 'Sıcak iklime uygun gölgelendirme çözümleri', 'Yurt dışı ölçekli mimari projelendirme referansı'],
    scope: ['Konsept Tasarım', 'Mimari Proje', '3D Görselleştirme'],
  },
]

export const stats = [
  { value: 2022, suffix: '', label: "Kahramanmaraş'ta Kuruluş Yılı" },
  { value: 45, suffix: '+', label: 'Gerçekleştirilen & Teklif Projesi' },
  { value: 100, suffix: '%', label: 'Deprem ve Yapı Güvenliği Standardına Uyum' },
  { value: 1, suffix: '', label: 'Kahramanmaraş Mimarlar Odası 2023-2025 Dönemi Yönetim Kurulu Üyesi', isText: true },
]

export const services = [
  {
    slug: 'mimari-tasarim',
    title: 'Mimari Tasarım & Proje Çizimi',
    short: 'Konsept tasarım, 2D/3D görselleştirme, kat planları.',
    description:
      'Arsa analizinden başlayarak ihtiyaç programınıza özel konsept tasarım geliştiriyor, süreci 2D kat planları ve fotogerçekçi 3D görselleştirmelerle şeffaf şekilde ilerletiyoruz.',
    items: ['Konsept tasarım ve kütle etüdü', '2D kat planı & kesit / görünüş çizimleri', 'Fotogerçekçi 3D dış-iç mekan görselleştirme', 'Malzeme ve cephe detay tasarımı'],
  },
  {
    slug: 'villa-tasarimi',
    title: 'Villa & Müstakil Konut Tasarımı',
    short: 'Kişiye özel yaşam alanları, peyzaj entegrasyonu, modern lüks detaylar.',
    description:
      'Her aile için farklılaşan yaşam alışkanlıklarını dinleyerek, arazinin topografyasına ve manzarasına duyarlı, kişiye özel villa tasarımları üretiyoruz.',
    items: ['Kişiye özel mekan programı geliştirme', 'Arazi topografyasına duyarlı yerleşim', 'Peyzaj ve dış mekan entegrasyonu', 'Lüks malzeme ve detay küratörlüğü'],
  },
  {
    slug: 'cok-katli-konut',
    title: 'Çok Katlı Konut & Toplu Yapılar',
    short: 'İkamet amaçlı binaların planlama ve ruhsat projeleri.',
    description:
      'Yatırımcı ve müteahhitler için verimli daire tipolojisi, ortak alan planlaması ve ruhsat sürecini bir arada yöneten çok katlı konut projeleri geliştiriyoruz.',
    items: ['Daire tipolojisi optimizasyonu', 'Ortak alan ve otopark planlaması', 'Cephe sistemleri ve enerji verimliliği', 'Ruhsat ve imar süreci yönetimi'],
  },
  {
    slug: 'gunes-enerjisi-projeleri',
    title: 'Güneş Enerji Panelleri (GES, HES, RES) Mimari Projelendirme',
    short: 'GES, HES ve RES tesisleri için saha yerleşimi ve mimari projelendirme.',
    description:
      'Güneş enerji santralleri (GES), hidroelektrik santraller (HES) ve rüzgar enerji santralleri (RES) için saha yerleşim planlaması, mimari projelendirme ve ilgili izin/ruhsat süreçlerinde uçtan uca teknik hizmet sunuyoruz.',
    items: ['GES/HES/RES saha yerleşim ve mimari proje çizimi', 'Çatı ve arazi tipi güneş paneli sistemleri için statik-mimari koordinasyon', 'Enerji tesisleri için izin ve ruhsat süreç yönetimi', 'Sürdürülebilir, enerji verimli bina tasarımı entegrasyonu'],
  },
  {
    slug: 'ruhsat-uygulama',
    title: 'İmar, Ruhsat ve Uygulama Süreçleri',
    short: 'Yerel mevzuata ve güncel yapı standartlarına tam uyumlu teknik çizimler.',
    description:
      'Belediye yönetmeliklerine, imar durumuna ve deprem sonrası güncellenen yapı standartlarına tam uyumlu teknik çizim ve danışmanlık hizmeti sunuyoruz.',
    items: ['İmar durumu analizi ve arsa uygunluk raporu', 'Ruhsat dosyası hazırlığı ve takibi', 'Statik / mekanik / elektrik proje koordinasyonu', 'Şantiye sahasında uygulama denetimi'],
  },
  {
    slug: 'danismanlik',
    title: 'Mimari & Yapı Danışmanlığı',
    short: 'Arsa seçimi, imar durumu ve yatırım kararlarında uzman danışmanlık.',
    description:
      'Proje başlamadan önce doğru kararları alabilmeniz için arsa seçimi, imar durumu analizi ve yatırım fizibilitesi konularında kapsamlı danışmanlık hizmeti sunuyoruz.',
    items: ['Arsa seçimi ve imar durumu değerlendirmesi', 'Yatırım ve fizibilite danışmanlığı', 'Proje öncesi teknik ön inceleme', 'Belediye ve resmi süreçlerde yönlendirme'],
  },
]

export const faqs = [
  {
    question: 'Proje ücretlendirmesi nasıl belirleniyor?',
    answer:
      'Ücretlendirme; arsa büyüklüğü, yapının m² alanı, kat sayısı ve talep edilen hizmet kapsamına (tasarım, ruhsat, uygulama danışmanlığı) göre belirlenir. İlk keşif görüşmesi sonrası size özel detaylı bir teklif sunulur.',
  },
  {
    question: 'Tasarım süreci ortalama ne kadar sürer?',
    answer:
      'Villa ölçeğinde bir proje için konsept tasarımdan uygulama projesine kadar süreç genellikle 4-8 hafta arasında tamamlanır. Çok katlı konut projelerinde ruhsat süreci de dahil olmak üzere bu süre uzayabilir.',
  },
  {
    question: 'Belediye ruhsat süreçlerini siz mi takip ediyorsunuz?',
    answer:
      'Evet. İmar durumu analizinden ruhsat dosyasının onayına kadar tüm belediye süreçlerini sizin adınıza takip ediyor, gerekli mühendislik koordinasyonunu (statik, mekanik, elektrik) sağlıyoruz.',
  },
  {
    question: 'Arsam henüz yok, yine de görüşme yapabilir miyiz?',
    answer:
      'Kesinlikle. Arsa seçim sürecinde de danışmanlık sağlıyoruz; imar durumu, zemin yapısı ve konum değerlendirmesi yaparak doğru arsa kararını vermenize yardımcı oluyoruz.',
  },
  {
    question: 'Deprem güvenliği standartlarına uyum nasıl sağlanıyor?',
    answer:
      'Kahramanmaraş bölgesindeki güncel jeolojik veriler ve TBDY 2018 deprem yönetmeliği doğrultusunda, her proje için özel zemin etüdü ve statik analiz yapılır. Tüm taşıyıcı sistem tasarımları bu standartlara %100 uyumlu şekilde hazırlanır.',
  },
]

export const recoverySettlements = [
  { location: 'Bertiz Boyalı', count: 11 },
  { location: 'Ekinözü / Lişar Köyü', count: 12 },
  { location: 'Dulkadiroğlu Merkez İlçe', count: 5 },
  { location: 'Karaziyaret Mahallesi', count: 10 },
]

export const process = [
  {
    step: '01',
    title: 'Keşif & Arsa Analizi',
    description: 'İhtiyaçlarınızın belirlenmesi, arsanın zemin ve konum analizinin yapılması.',
  },
  {
    step: '02',
    title: 'Konsept Tasarım & 3D Modelleme',
    description: 'Görselleştirme ve estetik planlama ile mekan fikrinin somutlaştırılması.',
  },
  {
    step: '03',
    title: 'Uygulama & Statik Çizim Süreci',
    description: 'Ruhsat, mekanik ve mühendislik disiplinleriyle tam uyumlu teknik çizimlerin hazırlanması.',
  },
  {
    step: '04',
    title: 'Yapı & Uygulama Danışmanlığı',
    description: 'Sahada titiz uygulama kontrolü ile projenin doğru şekilde hayata geçirilmesi.',
  },
]

export const values = [
  { title: 'Fonksiyonellik', description: 'Her mekan, gerçek yaşam ihtiyaçlarına göre kurgulanır; estetik hiçbir zaman kullanışlılığın önüne geçmez.' },
  { title: 'Yerel Dokuya Saygı', description: 'Kahramanmaraş\'ın topografyası, iklimi ve mimari karakteri her tasarım kararında referans noktasıdır.' },
  { title: 'Deprem & Yapı Standartları', description: 'Güncel yönetmeliklere %100 uyumlu, zemin etüdüne dayalı güvenli taşıyıcı sistem tasarımı önceliğimizdir.' },
  { title: 'Şeffaf Proje Yönetimi', description: 'Her aşamada net bütçe, takvim ve teknik bilgilendirme ile güven odaklı bir süreç yürütülür.' },
]

export const districts = ['Onikişubat', 'Dulkadiroğlu', 'Türkoğlu', 'Pazarcık', 'Diğer']

export const landStatusOptions = [
  { value: 'valilik-sinirlari-icerisinde-imarli-arsa', label: 'Valilik Sınırları İçerisinde İmarlı Arsa' },
  { value: 'kirsal-alan-imarli-arsa', label: 'Kırsal Alan İmarlı Arsa' },
  { value: 'imarsiz-arsa', label: 'İmarsız Arsa (Çiftlik Evi / Bağ - Zeytinlik Evi)' },
  { value: 'bakanliklardan-kiralik-arazi', label: 'Bakanlıklardan Kiralık Arazi' },
]

export const provinces = [
  'Kahramanmaraş',
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
  'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
  'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum',
  'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin',
  'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli',
  'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir',
  'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
  'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt',
  'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük',
  'Kilis', 'Osmaniye', 'Düzce',
].filter((p, i, arr) => arr.indexOf(p) === i)
