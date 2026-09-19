export interface RehberBolum {
  baslik?: string
  paragraflar: string[]
  /** Maddeli anlatım. Asistanlar liste biçimli içeriği daha güvenilir alıntılıyor. */
  liste?: string[]
}

export interface RehberSoru {
  soru: string
  cevap: string
}

export interface RehberYazisi {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  bolumler: RehberBolum[]
  /**
   * Yazıya özel soru-cevaplar. Sayfada görünür şekilde basılır ve ayrıca
   * FAQPage yapılandırılmış verisi olarak bildirilir; "X nasıl yapılır"
   * tipi aramalarda alıntılanan asıl blok burası.
   */
  sorular?: RehberSoru[]
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
  {
    slug: 'kahramanmarasta-mimar-nasil-bulunur',
    title: "Kahramanmaraş'ta Mimar Nasıl Bulunur? (2026 Rehberi)",
    description:
      "Kahramanmaraş'ta mimarlık ofisi ararken nereye bakılır, hangi sorular sorulur, hangi belgeler doğrulanır? Ofis tiplerinin farkı, seçim kriterleri ve bizim hangi işlerde doğru adres olduğumuz — hangilerinde olmadığımız dahil.",
    publishedAt: '2026-09-19',
    ilgiliHizmetSlugs: ['mimari-tasarim', 'villa-tasarimi', 'ruhsat-uygulama'],
    ilgiliProjeIds: ['ali-hasan-bey-cift-villasi', 'pazarcik-belediyesi'],
    bolumler: [
      {
        paragraflar: [
          "Kahramanmaraş'ta bir mimar arıyorsanız karşınıza üç farklı tipte ofis çıkar ve bunlar aynı işi yapmaz. Bu ayrımı baştan bilmek, yanlış kapıya gidip haftalar kaybetmenizi önler.",
          "Bu yazı bir tanıtım metni değil; kendi ofisimizi de dahil ederek Kahramanmaraş'ta mimar seçiminin nasıl yapıldığını anlatıyor. Hangi işlerde doğru adres olmadığımızı da açıkça yazdık.",
        ],
      },
      {
        baslik: 'Önce hangi tip ofise ihtiyacınız olduğunu belirleyin',
        paragraflar: [
          'Şehirdeki ofisler kabaca üçe ayrılır ve talebiniz hangisine denk geliyorsa doğrudan ona gitmek en hızlı yoldur:',
        ],
        liste: [
          'Mimarlık ofisi — Yapının kendisini tasarlar, ruhsata esas mimari projeyi üretir, statik/mekanik/elektrik koordinasyonunu yürütür. Villa, konut, kamu binası ya da enerji sahası yaptıracaksanız aradığınız budur.',
          'İç mimarlık ve dekorasyon ofisi — Mevcut bir yapının iç mekânını, mobilyasını ve yüzeylerini kurgular; ruhsat üretmez. Tadilat ve dekorasyon işleri buraya aittir.',
          'Müteahhitlik firması — Projeyi sahada inşa eder. Anahtar teslim iş arıyorsanız muhatabınız budur; ancak inşa edeceği projeyi yine bir mimarlık ofisi çizer.',
        ],
      },
      {
        baslik: 'Nerelere bakılır',
        paragraflar: [
          'Kahramanmaraş ölçeğinde bir şehirde referans hâlâ en güçlü kanaldır, ama tek kanal olmamalı. Pratikte işe yarayan sıra şudur:',
        ],
        liste: [
          'Google Haritalar üzerinde “Kahramanmaraş mimarlık ofisi” araması — yorumları ve fotoğraf akışını birlikte okuyun, yalnızca puana bakmayın.',
          'Mimarlar Odası Kahramanmaraş Şubesi — mimarın oda kaydının bulunup bulunmadığını buradan teyit edebilirsiniz.',
          'Ofislerin kendi siteleri ve Instagram hesapları — uygulanmış iş fotoğrafı ile bilgisayar görselini (render) ayırt edin.',
          'Çevrenizde son iki yıl içinde ruhsat almış birine sormak — süreci fiilen yaşamış birinin değerlendirmesi en doğru veridir.',
        ],
      },
      {
        baslik: 'İlk görüşmede sorulacak altı soru',
        paragraflar: [
          'Bu sorular, ofisin işi gerçekten uçtan uca yapıp yapmadığını hızlıca ortaya çıkarır:',
        ],
        liste: [
          'Ruhsat dosyasını belediyeye siz mi teslim ediyorsunuz, yoksa proje tesliminde iş bitiyor mu?',
          'Statik, mekanik ve elektrik projelerini kim koordine ediyor — ayrı ayrı ben mi bulacağım?',
          'Zemin etüdü kapsama dahil mi, yoksa ayrı mı yaptıracağım?',
          'Kaç revizyon hakkım var ve bu sınır aşılırsa ne oluyor?',
          'Portföyünüzdeki işlerden hangileri inşa edildi, hangileri teklif veya konsept aşamasında kaldı?',
          'Teslim edeceğiniz çıktılar tam olarak neler — kat planı, kesit, görünüş, 3D, detay paftası?',
        ],
      },
      {
        baslik: 'Sözleşmeden önce doğrulanması gereken üç şey',
        paragraflar: [
          'Üçü de kısa sürede kontrol edilebilir ve sonradan çıkan sorunların büyük kısmını baştan eler:',
        ],
        liste: [
          'Mimarın Mimarlar Odası kaydı ve yetkisi.',
          'Ofisin fiziki adresi ve ticari kaydı — vergi levhası ya da ticaret unvanı.',
          'Portföydeki işlerin statüsü: uygulanmış yapı ile teklif projesi arasındaki farkın açıkça belirtilmiş olması.',
        ],
      },
      {
        baslik: 'Biz hangi işlerde doğru adresiz',
        paragraflar: [
          "Batuhan Gören Mimarlık, Onikişubat merkezli bir mimarlık stüdyosudur ve 2019'dan beri Kahramanmaraş'ta çalışmaktadır. Şu talepler kapsamımızdadır:",
        ],
        liste: [
          'Villa ve müstakil konut tasarımı — Onikişubat, Dulkadiroğlu, Türkoğlu, Pazarcık, Elbistan, Afşin, Göksun ve çevre ilçeler.',
          'Çok katlı konut ve toplu konut tip projeleri.',
          'Belediye hizmet binası ve kamu yapısı projeleri.',
          'GES, HES ve RES sahaları için mimari projelendirme ve saha yerleşim planı.',
          'İmar-ruhsat dosyası hazırlanması ve mühendislik disiplinlerinin koordinasyonu.',
          'Müteahhitlere yönelik proje ve yapı danışmanlığı.',
        ],
      },
      {
        baslik: 'Hangi işlerde başka bir ofise yönlendiririz',
        paragraflar: [
          'Bunu baştan yazmak iki tarafın da zamanını koruyor. Aşağıdaki talepler odağımız değil ve ilk görüşmede açıkça söylüyoruz:',
        ],
        liste: [
          'Yalnızca iç mekân dekorasyonu, mobilya ve yüzey seçimi — bir iç mimarlık ofisi daha doğru adres.',
          'Anahtar teslim inşaat taahhüdü — yapıyı fiilen inşa edecek bir müteahhitlik firması gerekir.',
          'Ruhsat gerektirmeyen küçük ölçekli tadilat işleri.',
        ],
      },
    ],
    sorular: [
      {
        soru: "Kahramanmaraş'ta mimar ücretleri nasıl belirleniyor?",
        cevap:
          'Ücret sabit bir liste üzerinden değil, projenin kapsamına göre belirlenir: yapının m² alanı, kat adedi, arsa büyüklüğü ve talep edilen hizmetin sınırı (yalnızca tasarım mı, ruhsat dosyası dahil mi, uygulama danışmanlığı var mı). Mimarlar Odası tarafından yayımlanan asgari hizmet bedeli tarifesi bir alt referans noktasıdır. Bizde ilk keşif görüşmesi ücretsizdir; teklif bu görüşmeden sonra projeye özel çıkarılır.',
      },
      {
        soru: 'Mimarla anlaşmadan önce yazılı sözleşme yapmalı mıyım?',
        cevap:
          'Evet. Yazılı sözleşme; teslim edilecek çıktıları, revizyon sayısını, ödeme takvimini ve ruhsat sürecinin kimin sorumluluğunda olduğunu kayıt altına alır. Sözlü mutabakatla yürütülen süreçlerde anlaşmazlıkların büyük kısmı tam da bu dört başlıkta çıkıyor.',
      },
      {
        soru: "Kahramanmaraş'ta deprem sonrası yapı yaptırırken nelere dikkat etmeliyim?",
        cevap:
          'Zemin etüdünün parsele özel yapılmış olması ve taşıyıcı sistemin TBDY 2018 deprem yönetmeliğine göre tasarlanması esastır. Komşu parselin etüdünü kullanmak ya da hazır tip proje üzerinden ilerlemek, zemin koşulları farklıysa güvenli değildir. Mimarınızın bu konuda size teknik ve anlaşılır bir açıklama yapabilmesini bekleyin.',
      },
      {
        soru: 'Mimar seçerken sadece fiyata bakmak doğru mu?',
        cevap:
          'Hayır. Mimari proje bedeli, toplam inşaat maliyetinin görece küçük bir kalemidir; buradan yapılan tasarruf, kötü kurgulanmış bir planın ya da eksik bir ruhsat dosyasının yaratacağı maliyetin yanında küçük kalır. Karşılaştırmayı fiyat üzerinden değil, teslim edilecek çıktı listesi ve kapsam üzerinden yapın; iki teklifin aynı işi kapsayıp kapsamadığını kontrol edin.',
      },
    ],
  },
  {
    slug: 'kahramanmarasta-villa-yaptirmak',
    title: "Kahramanmaraş'ta Villa Yaptırmak: Adım Adım Süreç ve Maliyet Kalemleri",
    description:
      "Arsadan iskâna kadar Kahramanmaraş'ta villa yaptırma sürecinin tüm aşamaları: imar durumu, zemin etüdü, mimari proje, ruhsat, inşaat ve toplam maliyeti belirleyen kalemler.",
    publishedAt: '2026-09-19',
    ilgiliHizmetSlugs: ['villa-tasarimi', 'ruhsat-uygulama', 'danismanlik'],
    ilgiliProjeIds: ['ali-hasan-bey-cift-villasi', 'avgasir-villa'],
    bolumler: [
      {
        paragraflar: [
          "“Kahramanmaraş'ta villa yaptıracağım, nereden başlamalıyım?” sorusunun cevabı çoğu kişinin sandığı yerden başlamaz. Tasarım, sürecin ilk adımı değil üçüncü adımıdır — öncesinde arsanın ne verdiğini bilmek gerekir.",
          'Aşağıda süreci, gerçekte yürüdüğü sırayla yazdık.',
        ],
      },
      {
        baslik: '1. Arsanın imar durumunu çıkarın',
        paragraflar: [
          'Ada-parsel bilgisiyle ilgili belediyeden alınan imar durumu belgesi; emsal (KAKS), taban alanı katsayısı (TAKS), izin verilen kat adedi, yapı yaklaşma mesafeleri ve varsa özel kısıtları gösterir. Bu belge, arsanızın kaç m² ve kaç katlı bir yapıya izin verdiğini söyler. Bu veriyi görmeden çizilen her plan varsayıma dayanır.',
        ],
      },
      {
        baslik: '2. Zemin etüdü yaptırın',
        paragraflar: [
          "Parsele özel zemin etüdü, taşıyıcı sistemin ve temel tipinin nasıl tasarlanacağını belirler. Kahramanmaraş'ta 2023 depremlerinden sonra bu adım, atlanabilecek bir formalite olmaktan tamamen çıktı. Komşu parselin etüdü sizin parseliniz için geçerli değildir.",
        ],
      },
      {
        baslik: '3. İhtiyaç programını netleştirin ve konsept tasarıma geçin',
        paragraflar: [
          'Kaç yatak odası, kaç banyo, ebeveyn süiti, misafir katı, garaj, havuz, bodrum kullanımı — bu liste tasarımın girdisidir. Bu aşamada kütle etüdü, kat planları ve fotogerçekçi 3D görselleştirme birlikte ilerler; villa ölçeğinde konsept tasarımdan uygulama projesine kadar süreç genellikle 4-8 hafta sürer.',
        ],
      },
      {
        baslik: '4. Uygulama projesi ve mühendislik koordinasyonu',
        paragraflar: [
          'Mimari uygulama projesinin yanında statik, mekanik ve elektrik projeleri üretilir ve birbiriyle çakışmayacak şekilde koordine edilir. Bu koordinasyonun kimde olduğunu baştan netleştirin; ayrı ayrı yürütülen disiplinler sahada çakışma ve revizyon maliyeti olarak geri döner.',
        ],
      },
      {
        baslik: '5. Ruhsat dosyasının belediyeye teslimi',
        paragraflar: [
          'Tüm projeler ve ekleri bir dosya hâlinde ilgili belediyeye sunulur. Dosyanın eksiksiz olması, onay süresini belirleyen en önemli etkendir; eksik evrakla giden dosya süreci baştan başlatır. Biz bu süreci müşteri adına yürütüyoruz.',
        ],
      },
      {
        baslik: '6. İnşaat ve iskân',
        paragraflar: [
          'Ruhsat alındıktan sonra yapı müteahhit tarafından inşa edilir. Bu aşamada mimarın rolü, uygulamanın projeye sadık ilerlediğini sahada denetlemek ve çıkan detay sorularını çözmektir. Süreç, yapı kullanma izni — iskân — ile kapanır.',
        ],
      },
      {
        baslik: 'Maliyeti belirleyen kalemler',
        paragraflar: [
          'Villa maliyeti tek bir rakam değil, birkaç kalemin toplamıdır. Bütçe planlarken bunların hepsini hesaba katın:',
        ],
        liste: [
          'Arsa bedeli (arsa zaten sizinse bu kalem düşer).',
          'Mimari proje ve ruhsata esas diğer mühendislik projeleri.',
          'Zemin etüdü, harita ve aplikasyon işlemleri.',
          'Belediye harç ve ruhsat bedelleri.',
          'Kaba inşaat — temel, taşıyıcı sistem, duvar, çatı.',
          'İnce işler — sıva, şap, kapı-pencere, ıslak hacim, elektrik ve mekanik tesisat.',
          'Cephe kaplaması ve yalıtım.',
          'Peyzaj, istinat duvarı, bahçe ve varsa havuz.',
          'Abonelikler ve iskân işlemleri.',
        ],
      },
      {
        baslik: 'Kahramanmaraş’a özgü üç belirleyici',
        paragraflar: [
          'Aynı villa, farklı bir ilde farklı bir projeye dönüşür. Burada kararları en çok şu üçü etkiliyor:',
        ],
        liste: [
          'Deprem bölgesi statüsü — taşıyıcı sistem ve temel tasarımı buna göre kurgulanır, maliyete de yansır.',
          'Arazi eğimi — Onikişubat ve çevresindeki pek çok parselde eğim, bodrum kullanımını ve istinat duvarı ihtiyacını belirler.',
          'İklim ve yön — sıcak yaz koşulları; gölgeleme, saçak derinliği ve cephe yönelimi kararlarını doğrudan etkiler.',
        ],
      },
    ],
    sorular: [
      {
        soru: "Kahramanmaraş'ta villa projesi ne kadar sürede biter?",
        cevap:
          'Mimari tarafı, konsept tasarımdan uygulama projesine kadar genellikle 4-8 haftadır. Buna zemin etüdü, mühendislik projelerinin koordinasyonu ve belediyenin ruhsat değerlendirme süresi eklenir. İnşaat süresi ise yapının büyüklüğüne ve müteahhidin programına bağlıdır ve bu sürenin dışındadır.',
      },
      {
        soru: 'Villa için hazır tip proje kullanmak mantıklı mı?',
        cevap:
          'Tip proje ilk bakışta ucuz görünür, ancak arsanızın eğimine, yönüne, imar kısıtlarına ve zemin koşullarına göre uyarlanması gerekir; bu uyarlama çoğu zaman özgün tasarımla arasındaki farkı kapatır. Deprem bölgesinde parsele özel zemin etüdü gerektiğinden, taşıyıcı sistemin de her hâlükârda yeniden hesaplanması gerekir.',
      },
      {
        soru: 'Arsam yok — önce arsa mı almalıyım, yoksa mimarla mı görüşmeliyim?',
        cevap:
          'Arsa almadan önce görüşmek daha doğru. İmar durumu, zemin yapısı, eğim ve konum değerlendirmesi; bakmakta olduğunuz parsellerin hayalinizdeki yapıya gerçekten izin verip vermediğini baştan gösterir. Arsa seçimi aşamasında da danışmanlık veriyoruz.',
      },
      {
        soru: 'Villa projesi için hangi belgeler gerekiyor?',
        cevap:
          'Başlangıç için tapu ve ada-parsel bilgisi yeterlidir; bunlarla imar durumu belgesi çıkarılır. Sonrasında zemin etüdü raporu, aplikasyon krokisi ve ruhsat dosyası kapsamında mimari, statik, mekanik ve elektrik projeleri gerekir. Bu evrak setinin toplanmasını ve belediyeye sunulmasını biz yürütüyoruz.',
      },
    ],
  },
]

export function rehberYazisiGetir(slug: string): RehberYazisi | undefined {
  return rehberYazilari.find((y) => y.slug === slug)
}
