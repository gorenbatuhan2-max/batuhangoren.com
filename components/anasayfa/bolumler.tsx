import Image from 'next/image'
import Link from 'next/link'
import { projects, services } from '@/lib/data'
import { rehberYazisiGetir } from '@/lib/rehber-data'
import { manifestoSections } from '@/lib/manifesto-data'
import { siteConfig } from '@/lib/site-config'
import { cizimMi, kapak, kapakAlt } from '@/lib/proje-kapaklari'
import s from './anasayfa.module.css'

/** Konumlanma — hero'nun sorusundan sonra ne iş yaptığımızı söyleyen bant. */
export function Konumlanma() {
  return (
    <section className={s.section} id="konum">
      <span className={`${s.mono} ${s.dim}`}>
        Onikişubat / Kahramanmaraş — Mimarlık stüdyosu
      </span>
      <h2 className={s.posH2}>
        Her proje <span>+0.00</span>&apos;da başlar.
      </h2>
      <p className={s.posP}>
        Kotu okumadan çizgi çekmiyoruz. Villa, çok katlı konut, kamu yapısı ve enerji sahalarında;
        zemin etüdünden ruhsat dosyasına kadar süreci tek elden yürütüyoruz.
      </p>
      <div className={s.acts}>
        <a href="#dizin">Yapıları gör</a>
        <a href="#teklif">Projeyi anlat</a>
        <Link href="/manifesto">Manifestoyu oku</Link>
      </div>
      <div className={`${s.facts} ${s.mono} ${s.dim}`}>
        <span>
          <b>50+</b> proje ve teklif
        </span>
        <span>
          <b>5</b> yapı kategorisi
        </span>
        <span>
          <b>2019</b>&apos;dan beri
        </span>
      </div>
      {/* Kot cetvelindeki +2.70 işareti: tavan kotu. Döşeme üstüne (+3.00)
          yalnızca 30 cm kaldığı için bu kot çok kısa bir aralıkta yanar. */}
      <span id="kot-270" className={s.kotIsaret} aria-hidden="true" />
    </section>
  )
}

/**
 * Dizinden sonra bir nefes: render değil, pafta.
 * Göksun GES'in iki vaziyet planını taşıyan birleşik çizim sayfası.
 */
export function GorselBandi() {
  return (
    <div className={`${s.widePlate} ${s.fotoUstu}`}>
      <Image
        src="/images/project-goksun-ges-5.png"
        alt="Göksun Güneş Enerji Santrali — iki vaziyet planını taşıyan birleşik proje paftası"
        fill
        sizes="100vw"
        loading="lazy"
      />
      <div className={`${s.plateCap} ${s.mono}`}>
        <span>Göksun Güneş Enerji Santrali — Vaziyet planı paftaları</span>
        <span>Göksun / Kahramanmaraş</span>
      </div>
    </div>
  )
}

const ADIMLAR = [
  {
    n: '01',
    baslik: 'Keşif & arsa analizi',
    metin:
      'İmar durumu, emsal, çekme mesafeleri ve zemin verisi. Arsanın gerçekte ne verdiğini çıkarıyoruz.',
    kisa: 'İmar, emsal ve zemin verisi.',
  },
  {
    n: '02',
    baslik: 'Konsept & 3D model',
    metin:
      'Kütle kararları ve cephe dili. Kâğıttaki fikrin inşa edilebilir bir forma indiği aşama.',
    kisa: 'Kütle ve cephe kararları.',
  },
  {
    n: '03',
    baslik: 'Uygulama & statik',
    metin:
      'Mimari uygulama projesi, statik koordinasyonu ve ruhsat dosyasının belediyeye teslimi.',
    kisa: 'Uygulama projesi ve ruhsat dosyası.',
  },
  {
    n: '04',
    baslik: 'Yapı danışmanlığı',
    metin: 'Şantiye sürecinde detay çözümü, malzeme seçimi ve iskâna kadar takip.',
    kisa: 'Şantiyeden iskâna takip.',
  },
]

/**
 * Süreç — sırası gerçekten bilgi taşıdığı için numaralı.
 * `ozet`: ana sayfada her adım tek satır; açıklamanın tamamı alt sayfalarda.
 */
export function Surec({ ozet = false }: { ozet?: boolean }) {
  return (
    <section className={s.section} id="surec">
      <span className={`${s.mono} ${s.dim}`}>Süreç — Keşiften iskâna</span>
      <div className={`${s.steps} ${ozet ? s.stepsKisa : ''}`}>
        {ADIMLAR.map((a) => (
          <div className={s.step} key={a.n}>
            <span className={`${s.mono} ${s.dim}`}>{a.n}</span>
            <h3>{a.baslik}</h3>
            <p>{ozet ? a.kisa : a.metin}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * Manifesto — tek bir cümle ve metnin kendisine giden kapı.
 * On altı bölümün listesi ana sayfayı boğuyordu; tamamı /manifesto'da duruyor.
 */
export function ManifestoIcindekiler() {
  return (
    <section className={`${s.section} ${s.koyu}`} id="manifesto">
      <span className={`${s.mono} ${s.dim}`}>Mimarlık Manifestosu</span>
      <h2 className={s.h2}>Mimarlık, taşınan bir meslek değil. Algı mekanizmasının kendisi.</h2>
      <div className={`${s.acts} ${s.ruled}`}>
        <Link href="/manifesto">
          {manifestoSections.length} bölümün tamamını oku →
        </Link>
      </div>
    </section>
  )
}

/**
 * Örnek projesi olmayan hizmetlerin ana sayfa kartı için görsel kaynağı.
 * Veri katmanındaki `ornekProjeId`'ye dokunmuyor; /hizmetler'deki "Örnek:"
 * bağlantısı bundan etkilenmez.
 */
const KART_GORSELI_YEDEK: Record<string, string> = {
  danismanlik: 'avgasir-villa',
}

/**
 * Hizmetler — lib/data.ts içindeki altı çalışma alanının tamamı.
 * `ozet`: ana sayfada her alan bir görsel kart (örnek projesinin kapağı, başlık,
 * tek cümle) ve /hizmetler'deki ayrıntısına bağlanır. /hizmetler tam hâli kullanır;
 * JSON-LD'nin işaret ettiği `#slug` çıpaları orada.
 */
export function Hizmetler({ ozet = false }: { ozet?: boolean }) {
  if (ozet) {
    return (
      <section className={s.section} id="hizmetler">
        <span className={`${s.mono} ${s.dim}`}>Hizmetler — Altı çalışma alanı</span>
        <ul className={s.srvKartlar}>
          {services.map((h) => {
            const ornekProje = projects.find(
              (p) => p.id === (h.ornekProjeId ?? KART_GORSELI_YEDEK[h.slug]),
            )
            const cizim = ornekProje ? cizimMi(ornekProje) : false
            return (
              <li key={h.slug}>
                <Link className={s.srvKart} href={`/hizmetler#${h.slug}`}>
                  <span className={`${s.kartGorsel} ${s.srvGorsel} ${cizim ? s.kartCizim : ''}`}>
                    {ornekProje && (
                      <Image
                        src={kapak(ornekProje)}
                        alt={kapakAlt(ornekProje)}
                        fill
                        sizes="(min-width: 1100px) 28vw, (min-width: 620px) 45vw, 100vw"
                        loading="lazy"
                      />
                    )}
                  </span>
                  <h3>{h.title}</h3>
                  <p>{h.short}</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={s.acts}>
          <Link href="/hizmetler">Altı alanın ayrıntısı →</Link>
        </div>
      </section>
    )
  }

  return (
    <section className={s.section} id="hizmetler">
      <span className={`${s.mono} ${s.dim}`}>Hizmetler — Altı çalışma alanı</span>
      <div className={s.srv}>
        {services.map((h) => {
          const ornekProje = projects.find((p) => p.id === h.ornekProjeId)
          const rehberYazisi = h.rehberSlug ? rehberYazisiGetir(h.rehberSlug) : undefined
          return (
            <article key={h.slug} id={h.slug}>
              <h3>{h.title}</h3>
              <p>{h.description}</p>
              <ul>
                {h.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {(ornekProje || rehberYazisi) && (
                <div className={s.srvLinks}>
                  {ornekProje && <Link href={`/projeler/${ornekProje.id}`}>Örnek: {ornekProje.title}</Link>}
                  {rehberYazisi && <Link href={`/rehber/${rehberYazisi.slug}`}>Rehber: {rehberYazisi.title}</Link>}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

/**
 * Hakkında — stüdyo.
 * `ozet`: ana sayfada tek paragraf ve /hakkimizda'ya bağlantı; üç paragrafın
 * tamamı orada.
 */
export function Hakkinda({ ozet = false }: { ozet?: boolean }) {
  return (
    <section className={s.section} id="hakkinda">
      <span className={`${s.mono} ${s.dim}`}>Hakkında — Stüdyo</span>
      <h2 className={s.h2}>Yerel karaktere sadık, modern standartlara bağlı.</h2>
      <div className={s.aboutGrid}>
        <div>
          {ozet ? (
            <>
              <p className={s.aboutTek}>
                {siteConfig.name}, Onikişubat merkezli bir mimarlık stüdyosudur. Bölgenin
                arazisini, yerel malzemesini ve iklimini tanıyarak çalışır; 2023 depremlerinden bu
                yana tasarladığı her yapıyı güncel deprem yönetmeliğine tam uyumlu bir statik
                süreçten geçirir.
              </p>
              <div className={s.acts}>
                <Link href="/hakkimizda">Stüdyoyu tanıyın →</Link>
              </div>
            </>
          ) : (
            <div className={s.cols}>
              <p>
                {siteConfig.name}, Onikişubat merkezli bir mimarlık stüdyosudur. Pratiğini
                Kahramanmaraş&apos;ta kurmuş; bölgenin arazi yapısını, yerel malzeme kültürünü ve
                iklim koşullarını yakından tanıyarak çalışmaktadır. Bu birikim, her projede modern
                tasarım dilinin yerel gerçeklerle dengelenmesini sağlar.
              </p>
              <p>
                2023 depremlerinin ardından yapı güvenliği stüdyonun ilk çalışma önceliği hâline
                gelmiştir. Tasarlanan her yapı, güncel deprem yönetmeliğine harfiyen uyumlu ve titiz
                bir statik süreçten geçirilerek uygulamaya hazırlanır.
              </p>
              <p>
                Stüdyonun hedefi, Onikişubat ve çevresindeki ailelere yalnızca estetik değil; güvenli,
                işleyen ve uzun ömürlü yaşam alanları sunmaktır. Mimarlık Manifestosu, bu yaklaşımın
                arkasındaki düşünceyi kayıt altına alır.
              </p>
            </div>
          )}
          <div className={`${s.facts} ${s.mono} ${s.dim}`}>
            <span>
              <b>9+</b> yıl deneyim
            </span>
            <span>
              <b>50+</b> proje ve teklif
            </span>
            <span>
              <b>Onikişubat</b> merkezli
            </span>
          </div>
        </div>
        <figure className={s.portrait}>
          <Image
            src="/images/architect-portrait-cutout.png"
            alt={`Mimar ${siteConfig.founder}`}
            width={669}
            height={1322}
            sizes="20rem"
            loading="lazy"
          />
          <figcaption className={s.mono}>{siteConfig.founder} — Mimar, kurucu</figcaption>
        </figure>
      </div>
    </section>
  )
}

/** Kapanış — doğrudan hatlar. */
export function Kapanis() {
  return (
    <section className={`${s.son} ${s.koyu}`} id="iletisim">
      <h2 className={s.sonH2}>Konuşalım.</h2>
      <div className={s.lines}>
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
          {siteConfig.address.streetAddress}, {siteConfig.address.district}
        </a>
      </div>
      <div className={`${s.siteFoot} ${s.mono}`}>
        <span>{siteConfig.legalName}</span>
        <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
