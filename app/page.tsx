import { Hero } from '@/components/anasayfa/hero'
import { KotCetveli } from '@/components/anasayfa/kot-cetveli'
import { TeklifFormu } from '@/components/anasayfa/teklif-formu'
import {
  GorselBandi,
  Hakkinda,
  Hizmetler,
  Kapanis,
  Konumlanma,
  ManifestoIcindekiler,
  OneCikanlar,
  Surec,
} from '@/components/anasayfa/bolumler'
import { Menu } from '@/components/anasayfa/menu'
import s from '@/components/anasayfa/anasayfa.module.css'

export default function AnaSayfa() {
  return (
    <div className={s.root}>
      <KotCetveli />
      <Menu />
      <main>
        <Hero />
        <Konumlanma />
        <OneCikanlar />
        <GorselBandi />
        <Surec ozet />
        <ManifestoIcindekiler />
        <Hizmetler ozet />
        <Hakkinda ozet />
        <TeklifFormu ozet />
        <Kapanis />
      </main>
    </div>
  )
}
