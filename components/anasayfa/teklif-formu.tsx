'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { districts, landStatusOptions, provinces } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import s from './anasayfa.module.css'

const VARSAYILAN_IL = 'Kahramanmaraş'
const DOSYA_METNI = 'Dosya seçmek için tıklayın — PDF, JPG, PNG, en fazla 4 MB'

/**
 * İletişim formu. Alan adları `app/api/contact/route.ts` ile birebir aynı;
 * yalnızca görünüm ana sayfanın diline uyarlandı.
 */
export function TeklifFormu() {
  const [durum, setDurum] = useState<'bos' | 'gonderiliyor' | 'gonderildi'>('bos')
  const [il, setIl] = useState(VARSAYILAN_IL)
  const [dosya, setDosya] = useState<string | null>(null)

  async function gonder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setDurum('gonderiliyor')

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
      const veri = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(veri.error || 'Talebiniz gönderilemedi. Lütfen tekrar deneyin.')
      setDurum('gonderildi')
    } catch (hata) {
      setDurum('bos')
      toast.error(hata instanceof Error ? hata.message : 'Talebiniz gönderilemedi.')
    }
  }

  return (
    <section className={s.section} id="teklif">
      <span className={`${s.mono} ${s.dim}`}>İletişim — Ücretsiz ön görüşme</span>
      <h2 className={s.h2}>Projeyi anlatın.</h2>

      <div className={s.formGrid}>
        {durum !== 'gonderildi' && (
          <div className={s.formAside}>
            <p>
              Arsanın konumunu ve elinizdeki belgeleri baştan paylaşırsanız ilk görüşmede çok daha
              net konuşuruz. Eskiz, tapu fotoğrafı, imar durumu — hangisi varsa.
            </p>
            <p>
              Henüz arsa bakıyorsanız da yazın. Satın almadan önce yapılabilirlik okumak, sonradan
              proje revize etmekten ucuza gelir.
            </p>
            <div className={`${s.formNote} ${s.mono}`}>
              <p>
                Form doldurmak istemezseniz doğrudan arayın:
                <br />
                <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
              </p>
            </div>
          </div>
        )}

        {durum === 'gonderildi' ? (
          <div className={s.sent}>
            <p>Talebiniz elimize ulaştı. Detayları inceleyip en kısa sürede size döneceğiz.</p>
            <button type="button" onClick={() => { setDurum('bos'); setDosya(null) }}>
              Yeni talep gönder
            </button>
          </div>
        ) : (
          <form onSubmit={gonder} noValidate>
            <div className={s.fields}>
              <label className={s.visuallyHidden} htmlFor="company">
                Şirket (bu alanı boş bırakın)
              </label>
              <input
                className={s.visuallyHidden}
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className={s.field}>
                <label htmlFor="name">Ad Soyad</label>
                <input id="name" name="name" type="text" placeholder="Adınız Soyadınız" autoComplete="name" required />
              </div>

              <div className={s.field}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" autoComplete="tel" required />
              </div>

              <div className={`${s.field} ${s.full}`}>
                <label htmlFor="email">E-posta</label>
                <input id="email" name="email" type="email" placeholder="ornek@eposta.com" autoComplete="email" required />
              </div>

              <div className={s.field}>
                <label htmlFor="project-type">Proje Tipi</label>
                <select id="project-type" name="project-type" defaultValue="" required>
                  <option value="" disabled>Seçiniz</option>
                  <option value="villa">Villa</option>
                  <option value="cok-katli-konut">Çok Katlı Konut</option>
                  <option value="proje-cizimi">Proje Çizimi</option>
                  <option value="danismanlik">Danışmanlık</option>
                </select>
              </div>

              <div className={s.field}>
                <label htmlFor="land-status">Arsa Durumu</label>
                <select id="land-status" name="land-status" defaultValue="" required>
                  <option value="" disabled>Seçiniz</option>
                  {landStatusOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className={s.field}>
                <label htmlFor="province">Arsa Konumu / İl</label>
                <select id="province" name="province" value={il} onChange={(e) => setIl(e.target.value)}>
                  {provinces.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className={s.field}>
                {il === VARSAYILAN_IL ? (
                  <>
                    <label htmlFor="district">Arsa Konumu / İlçe</label>
                    <select id="district" name="district" defaultValue="">
                      <option value="" disabled>İlçe Seçiniz</option>
                      {districts.map((d) => (
                        <option key={d} value={d.toLowerCase()}>{d}</option>
                      ))}
                    </select>
                  </>
                ) : (
                  <>
                    <label htmlFor="district-detail">Arsa Konumu / İlçe</label>
                    <input
                      id="district-detail"
                      name="district-detail"
                      type="text"
                      placeholder="Ada, parsel, ilçe, mahalle"
                    />
                  </>
                )}
              </div>

              <div className={`${s.field} ${s.full}`}>
                <label htmlFor="message">Proje Detayları</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="İhtiyacınızı, m² beklentinizi ve varsa özel notlarınızı paylaşın."
                />
              </div>

              <div className={`${s.field} ${s.full}`}>
                <label htmlFor="file-upload">Eskiz / Arsa Belgesi</label>
                <label className={s.drop} htmlFor="file-upload">
                  <span className={s.mono}>{dosya ?? DOSYA_METNI}</span>
                </label>
                <input
                  className={s.visuallyHidden}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setDosya(e.target.files?.[0]?.name ?? null)}
                />
              </div>

              <div className={s.send}>
                <button type="submit" disabled={durum === 'gonderiliyor'}>
                  {durum === 'gonderiliyor' ? 'Gönderiliyor…' : 'Talebi gönder'}
                </button>
                <small className={`${s.mono} ${s.dim}`}>
                  Bilgileriniz yalnızca bu proje için kullanılır.
                </small>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
