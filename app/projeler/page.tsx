import type { Metadata } from 'next'
import { Kapanis, Menu } from '@/components/anasayfa/bolumler'
import { ProjeListesi } from '@/components/projeler/proje-listesi'
import { categoryLabels, projects } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import ana from '@/components/anasayfa/anasayfa.module.css'
import s from '@/components/projeler/projeler.module.css'

export const metadata: Metadata = {
  title: 'Projeler',
  description:
    'Kahramanmaraş merkezli stüdyomuzun Türkiye genelinde ve yurt dışında gerçekleştirdiği villa, toplu konut, kamu ve ticari yapı projeleri portföyü.',
  alternates: { canonical: '/projeler' },
}

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Batuhan Gören Mimarlık Proje Portföyü',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${siteConfig.url}/projeler/${project.id}`,
    name: project.title,
  })),
}

export default function ProjelerSayfasi() {
  return (
    <div className={ana.root}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Menu />
      <main>
        <section className={s.hero}>
          <span className={`${s.mono} ${s.dim}`}>Portföy</span>
          <h1 className={s.title}>Kahramanmaraş&apos;tan başlayıp yurt dışına uzanan yapılar.</h1>
          <p className={s.intro}>
            Villa, toplu konut, kamu yapısı, ticari yapı ve enerji sahaları. Her biri arsanın kendi
            gerçeğinden çıktı; hiçbiri bir tipin kopyası değil.
          </p>
          <div className={`${s.meta} ${s.mono}`}>
            <span>{projects.length} proje</span>
            <span>{Object.keys(categoryLabels).length} kategori</span>
            <span>2019 —</span>
          </div>
        </section>
        <ProjeListesi />
      </main>
      <Kapanis />
    </div>
  )
}
