import type { Project } from '@/lib/data'

/**
 * Yeni tasarımda kullanılan kapak kareleri.
 *
 * `lib/data.ts` içindeki `image` alanı proje sayfalarının uzun süredir
 * kullandığı varsayılan; burada yalnızca daha güçlü bir kare olan projeler
 * için üzerine yazılıyor. Veri katmanına dokunulmuyor.
 */
const KAPAKLAR: Record<string, string> = {
  'pazarcik-belediyesi': '/images/project-pazarcik-belediyesi-24.jpg',
  'afrika-fildisi-sahili-villa': '/images/project-fildisi-sahili-villa-6.jpg',
  'otel-projemiz': '/images/project-otel-11.jpg',
  'deprem-sonrasi-afet-hastane-teklifi': '/images/project-deprem-hastane-6.jpg',
  'avgasir-villa': '/images/project-avgasir-villa-11.jpg',
  'malatya-afet-konut-teklifi': '/images/project-malatya-afet-6.jpg',
  'sutcu-imam-universitesi-park-tasarimi': '/images/project-sutcu-imam-park-7.jpg',
  'turkoglu-tip-proje': '/images/project-turkoglu-tip-proje-4.jpg',
  'goksun-ges': '/images/project-goksun-ges-4.png',
}

export function kapak(project: Project) {
  return KAPAKLAR[project.id] ?? project.image
}

/** En güçlü işler önde: liste bir arşiv değil, bir seçki. */
export const SIRA = [
  'pazarcik-belediyesi',
  'afrika-fildisi-sahili-villa',
  'otel-projemiz',
  'deprem-sonrasi-afet-hastane-teklifi',
  'ali-hasan-bey-cift-villasi',
  'avgasir-villa',
  'malatya-afet-konut-teklifi',
  'sutcu-imam-universitesi-park-tasarimi',
  'pazarcik-tip-proje',
  'turkoglu-tip-proje',
  'shell-yani-kafe',
  'goksun-ges',
  'narli-ges',
]

export function sirala(projects: Project[]): Project[] {
  return [
    ...SIRA.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p)),
    ...projects.filter((p) => !SIRA.includes(p.id)),
  ]
}

/** GES paftaları render değil çizim; kırpılmadan gösterilmeleri gerekiyor. */
export function cizimMi(project: Project) {
  return project.category === 'enerji'
}
