import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BlueprintCorner, BlueprintGrid } from '@/components/blueprint-grid'

export function BioSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="lg:order-1">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Mimar &amp; Kurucu
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl">
                Yerel Karaktere Sadık, Modern Standartlara Bağlı
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <Reveal delay={0.1}>
                <p>
                  Mimarlık pratiğime Kahramanmaraş&apos;ta başladım ve bölgenin arazi yapısını,
                  yerel malzeme kültürünü ve iklim koşullarını yakından tanıma fırsatı buldum. Bu
                  deneyim, her projede modern tasarım dilini yerel gerçeklerle dengelememi
                  sağlıyor.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  2023 depremleri sonrası bölgede yapı güvenliğinin ne denli hayati olduğunu
                  bizzat gördüm. Bu nedenle stüdyomda tasarladığım her yapı, güncel deprem
                  yönetmeliğine harfiyen uyumlu, titiz bir statik süreçten geçirilir.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Vizyonum; Onikişubat ve çevresinde yaşayan ailelere sadece estetik değil, aynı
                  zamanda güvenli, fonksiyonel ve uzun ömürlü yaşam alanları sunmak.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.4} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'Yıl Deneyim', value: '9+' },
                { label: 'Tamamlanan Proje', value: '36+' },
                { label: 'Bölgesel Odak', value: 'Onikişubat' },
              ].map((item) => (
                <div key={item.label} className="rounded-md border border-border bg-card p-4">
                  <p className="font-display text-xl font-bold text-primary">{item.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="relative lg:order-2" delay={0.15}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
              <div className="absolute -right-10 -top-10 size-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute inset-4 overflow-hidden rounded-md border border-border bg-card">
                <BlueprintGrid className="text-foreground" />
              </div>
              <Image
                src="/images/architect-portrait-cutout.png"
                alt="Mimar Batuhan Gören"
                fill
                className="relative object-contain object-bottom drop-shadow-2xl"
                sizes="(min-width: 1024px) 384px, 320px"
                priority
              />
              <BlueprintCorner className="absolute -left-3 -top-3 size-24 text-primary" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
