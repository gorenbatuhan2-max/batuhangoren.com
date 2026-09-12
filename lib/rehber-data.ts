export interface RehberBolum {
  baslik?: string
  paragraflar: string[]
}

export interface RehberYazisi {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  bolumler: RehberBolum[]
  ilgiliHizmetSlugs: string[]
  ilgiliProjeIds: string[]
}

/**
 * Uzun kuyruk aramalar ve AI asistanlarının alıntılayabileceği, sitedeki
 * gerçek proje/hizmet verisine dayanan rehber içerikleri. Genel geçer
 * mevzuat detayı iddia edilmez; süreç bilgisi stüdyonun kendi pratiğinden
 * (bkz. lib/data.ts — faqs, process, recoverySettlements) türetilir.
 */
export const rehberYazilari: RehberYazisi[] = [
  {
    slug: 'villa-mimari-nasil-secilir',
    title: "Kahramanmaraş'ta Villa Mimarı Nasıl Seçilir?",
    description:
      'Villa projenize başlamadan önce bir mimarlık ofisinde arayacağınız beş kriter: bölge deneyimi, ruhsat sürecine hakimiyet, deprem güvenliği önceliği, portföy ve şeffaf süreç yönetimi.',
    publishedAt: '2026-09-12',
    ilgiliHizmetSlugs: ['villa-tasarimi', 'ruhsat-uygulama'],
    ilgiliProjeIds: ['ali-hasan-bey-cift-villasi', 'avgasir-villa'],
    bolumler: [
      {
        paragraflar: [
          'Bir villa projesi, aile için onlarca yıl kullanılacak bir yaşam alanı kurmaktır — mimar seçimi de buna göre yapılmalı. Kahramanmaraş\'ta bir villa mimarı ararken bakılacak kriterler, İstanbul veya sahil bölgesindekinden farklıdır: burada arazi eğimi, deprem bölgesi statüsü ve yerel malzeme kültürü kararları doğrudan etkiler.',
        ],
      },
      {
        baslik: 'Bölgeyi tanıyan bir ofis seçin',
        paragraflar: [
          "Onikişubat, Dulkadiroğlu, Türkoğlu ya da Pazarcık'ta bir arsanın verdiği imkanlar birbirinden farklıdır: eğim, zemin yapısı, hakim rüzgar ve manzara yönü her ilçede değişir. Bölgeyi sahada tanıyan bir ofis, konsept aşamasında zaman kaybettirecek revizyonların çoğunu baştan eler.",
        ],
      },
      {
        baslik: 'Ruhsat sürecini kim takip ediyor?',
        paragraflar: [
          'Villa tasarımı tek başına yeterli değil; imar durumu analizinden ruhsat dosyasının belediyeye teslimine kadar süren bir süreç var. Bu süreci mimarın mı yoksa sizin mi takip edeceğinizi netleştirin — statik, mekanik ve elektrik proje koordinasyonunu da kapsayan uçtan uca bir hizmet, sonradan çıkacak sürprizleri azaltır.',
        ],
      },
      {
        baslik: 'Deprem güvenliği bir opsiyon değil',
        paragraflar: [
          '2023 depremlerinden sonra Kahramanmaraş\'ta bu madde artık pazarlık konusu olmamalı. Taşıyıcı sistem tasarımının güncel zemin etüdüne ve TBDY 2018 deprem yönetmeliğine tam uyumlu olduğundan emin olun; mimar bu konuda size net ve teknik bir açıklama yapabilmeli.',
        ],
      },
      {
        baslik: 'Portföyü inceleyin — sadece render değil',
        paragraflar: [
          'Fotogerçekçi 3D görselleştirme her ofiste var artık. Sorulması gereken soru şu: bu tasarımlardan kaçı gerçekten inşa edildi? Uygulanmış projelerin fotoğraflarını, malzeme detaylarını ve varsa müşteri geri bildirimini isteyin.',
        ],
      },
      {
        baslik: 'Süreç ne kadar sürer?',
        paragraflar: [
          'Villa ölçeğinde bir projede konsept tasarımdan uygulama projesine kadar süreç genellikle 4-8 hafta arasında tamamlanır. Bu süreyi baştan netleştiren bir ofis, planlamanızı da kolaylaştırır.',
        ],
      },
    ],
  },
  {
    slug: 'deprem-sonrasi-ruhsat-sureci',
    title: 'Deprem Sonrası Ruhsat ve Yerinde Dönüşüm Süreci Nasıl İşler?',
    description:
      "Kahramanmaraş kırsalında deprem sonrası yerinde dönüşüm ve ruhsat sürecinin aşamaları: imar durumu, zemin etüdü, statik koordinasyon ve belediye onayı.",
    publishedAt: '2026-09-12',
    ilgiliHizmetSlugs: ['ruhsat-uygulama', 'danismanlik'],
    ilgiliProjeIds: ['pazarcik-belediyesi', 'malatya-afet-konut-teklifi'],
    bolumler: [
      {
        paragraflar: [
          '2023 depremlerinin ardından Kahramanmaraş kırsalında çok sayıda köy evi için "yerinde dönüşüm" kapsamında yeniden ruhsat alınması gerekti. Bu, kentteki bir konut ruhsatından farklı işleyen, kırsal yerleşim ve afet sonrası mevzuatına özgü bir süreç. Stüdyomuz bugüne kadar Bertiz Boyalı, Ekinözü/Lişar, Dulkadiroğlu merkez ve Karaziyaret\'te 25\'in üzerinde bu tür ruhsatı tamamladı.',
        ],
      },
      {
        baslik: 'Süreç nereden başlar: imar durumu ve zemin etüdü',
        paragraflar: [
          'İlk adım her zaman aynı: arsanın güncel imar durumunun çıkarılması ve zemin etüdünün yaptırılması. Kırsal alanda bu belgeler genelde eskidir ya da hiç yoktur; süreç genelde buradan, sıfırdan başlar.',
        ],
      },
      {
        baslik: 'Statik ve mimari koordinasyon',
        paragraflar: [
          'Zemin verisi elde edildikten sonra mimari proje ile statik hesaplar birlikte ilerler. Güncel deprem yönetmeliğine (TBDY 2018) uyumlu taşıyıcı sistem, bu aşamada netleşir — kırsalda yeniden yapılan bir köy evi de, bir villa kadar titiz bir statik süreçten geçer.',
        ],
      },
      {
        baslik: 'Belediyeyle yürütülen ruhsat dosyası',
        paragraflar: [
          'Mimari ve statik projeler tamamlandıktan sonra dosya, ilgili belediyeye (kırsalda genelde ilçe belediyesi) teslim edilir. Bu aşamada mekanik/elektrik proje koordinasyonu ve belediyenin talep ettiği ek belgeler de tamamlanmalı; sürecin sahibin adına takip edilmesi, iş sahibinin belediye ile tek tek uğraşmasını önler.',
        ],
      },
      {
        baslik: "Neden bunu bir villa kadar ciddiye alıyoruz",
        paragraflar: [
          'Yerinde dönüşüm ruhsatları büyük, gösterişli projeler değil — ama her biri bir ailenin evine dönüş sürecinin parçası. Bu yüzden stüdyomuzda bu iş kalemi, ölçeği ne olursa olsun aynı teknik titizlikle yürütülüyor.',
        ],
      },
    ],
  },
  {
    slug: 'ges-projelerinde-mimari-projelendirme',
    title: 'GES Projelerinde Mimari Projelendirme Neden Gerekli?',
    description:
      'Güneş enerji santrali (GES) yatırımlarında saha yerleşim planı ve mimari projelendirmenin ruhsat sürecindeki rolü — Göksun ve Narlı GES projelerinden örneklerle.',
    publishedAt: '2026-09-12',
    ilgiliHizmetSlugs: ['gunes-enerjisi-projeleri'],
    ilgiliProjeIds: ['goksun-ges', 'narli-ges'],
    bolumler: [
      {
        paragraflar: [
          'Bir güneş enerji santrali (GES) yatırımı, çoğu yatırımcı için önce bir mühendislik ve finansman meselesi gibi görünür. Ama devreye alınmadan önce her GES sahası, aynı zamanda bir arazi projesi ve bir ruhsat dosyasıdır — burada mimari projelendirme devreye girer.',
        ],
      },
      {
        baslik: 'Saha yerleşim planı ne işe yarar',
        paragraflar: [
          'Panellerin arazi üzerine nasıl diziliceği; erişim yollarının, trafo binasının ve idari yapının nereye konumlanacağı, topografyaya duyarlı bir saha yerleşim planıyla belirlenir. Göksun ve Narlı\'da yürüttüğümüz projelerde bu plan, arazinin eğimine göre panel veriminin optimize edilmesini de kapsadı.',
        ],
      },
      {
        baslik: 'Ruhsat ve izin süreçlerinde mimari projenin rolü',
        paragraflar: [
          'GES sahasındaki trafo binası, idari bina ve benzer yapılar için de mimari proje ve ruhsat gerekir; bu belgeler olmadan yatırımın izin süreci ilerlemez. Mimari projelendirme burada, mühendislik ekibiyle koordineli çalışan ayrı bir teknik hizmet olarak devreye giriyor.',
        ],
      },
      {
        baslik: "Göksun ve Narlı'da uyguladığımız yaklaşım",
        paragraflar: [
          'Her iki projede de saha yerleşim planı, mimari proje çizimi ve ilgili izin/ruhsat süreç desteğini bir arada yürüttük. Büyük ölçekli enerji yatırımlarında bu üç iş kaleminin tek elden koordine edilmesi, ayrı ayrı yürütülen süreçlere göre hem zaman hem koordinasyon açısından fark yaratıyor.',
        ],
      },
    ],
  },
]

export function rehberYazisiGetir(slug: string): RehberYazisi | undefined {
  return rehberYazilari.find((y) => y.slug === slug)
}
