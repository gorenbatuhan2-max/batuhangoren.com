import { Hero } from '@/components/anasayfa/hero'
import { KotCetveli } from '@/components/anasayfa/kot-cetveli'
import { Dizin } from '@/components/anasayfa/dizin'
import { TeklifFormu } from '@/components/anasayfa/teklif-formu'
import {
  GorselBandi,
  Hakkinda,
  Hizmetler,
  Kapanis,
  Konumlanma,
  ManifestoIcindekiler,
  Menu,
  Surec,
} from '@/components/anasayfa/bolumler'
import s from '@/components/anasayfa/anasayfa.module.css'

export default function AnaSayfa() {
  return (
    <div className={s.root}>
      <KotCetveli />
      <Menu />
      <main>
        <Hero />
        <Konumlanma />
        <Dizin />
        <GorselBandi />
        <Surec />
        <ManifestoIcindekiler />
        <Hizmetler />
        <Hakkinda />
        <TeklifFormu />
        <Kapanis />
      </main>
    </div>
  )
}
