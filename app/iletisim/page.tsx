import type { Metadata } from 'next'
import { Kapanis } from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import { TeklifFormu } from '@/components/anasayfa/teklif-formu'
import { siteConfig } from '@/lib/site-config'
import ana from '@/components/anasayfa/anasayfa.module.css'
import proje from '@/components/projeler/projeler.module.css'
import s from '@/components/sayfalar/sayfalar.module.css'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    "Onikişubat / Kahramanmaraş'ta projenizi başlatmak için bize ulaşın. Proje talep formu, telefon, WhatsApp ve stüdyo konumu.",
  alternates: { canonical: '/iletisim' },
}

export default function IletisimSayfasi() {
  const { address } = siteConfig

  return (
    <div className={ana.root}>
      <Menu />
      <main>
        <section className={proje.hero}>
          <span className={`${proje.mono} ${proje.dim}`}>İletişim</span>
          <h1 className={proje.title}>Önce arsayı konuşalım.</h1>
          <p className={proje.intro}>
            Villa, konut, kamu yapısı ya da danışmanlık — ne olursa olsun ilk adım aynı: arsanın ne
            verdiğini okumak. Detayları paylaşın, dönelim.
          </p>

          <div className={s.bilgiler}>
            <article>
              <span className={`${s.mono} ${s.dim}`}>Telefon / WhatsApp</span>
              <p>
                <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
              </p>
              <small>
                <a href={siteConfig.whatsapp.href} target="_blank" rel="noreferrer">
                  WhatsApp&apos;tan yazın →
                </a>
              </small>
            </article>
            <article>
              <span className={`${s.mono} ${s.dim}`}>E-posta</span>
              <p>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <small>Proje dosyalarını da bu adrese gönderebilirsiniz.</small>
            </article>
            <article>
              <span className={`${s.mono} ${s.dim}`}>Stüdyo</span>
              <p>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                  {address.district} / {address.city}
                </a>
              </p>
              <small>
                {address.streetAddress}
                <br />
                {address.directions}
              </small>
            </article>
          </div>
        </section>

        <TeklifFormu />

        <section className={ana.section} id="konum-harita">
          <span className={`${s.mono} ${s.dim}`}>Stüdyonun konumu</span>
          <div className={s.harita}>
            <iframe
              src={siteConfig.mapsEmbedUrl}
              title={`${siteConfig.name} — stüdyo konumu`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>
      <Kapanis />
    </div>
  )
}
