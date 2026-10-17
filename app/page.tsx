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
        <Dizin />
        <GorselBandi />
        <Surec ozet />
        <ManifestoIcindekiler />
        <Hizmetler ozet />
        <Hakkinda ozet />
        <TeklifFormu />
        <Kapanis />
      </main>
    </div>
  )
}
