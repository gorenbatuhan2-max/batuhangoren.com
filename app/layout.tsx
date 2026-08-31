import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Syne, Fraunces } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { CopyGuard } from '@/components/copy-guard'
import { IntroLoader } from '@/components/intro-loader'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Kahramanmaraş Mimarlık Ofisi`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Batuhan Gören',
    'Batuhan Gören Mimarlık',
    'mimarlık Kahramanmaraş',
    'Maraş mimar',
    'villa tasarımı Kahramanmaraş',
    'müstakil ev mimarisi',
    'bungalov tasarımı',
    'ahşap yapılar',
    'Onikişubat mimar',
    'çok katlı konut projesi',
    'belediye binaları projesi',
    'kamu binaları projeleri',
    'GES mimari projelendirme',
    'güneş enerji santralleri',
    'HES mimari projelendirme',
    'RES mimari projelendirme',
    'ruhsat projesi Kahramanmaraş',
    'uygulama projesi',
    'müteahhitlik danışmanlığı',
    'deprem güvenli yapı tasarımı',
  ],
  authors: [{ name: siteConfig.founder, url: siteConfig.url }],
  creator: siteConfig.founder,
  publisher: siteConfig.name,
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Kahramanmaraş Mimarlık Ofisi`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Kahramanmaraş Mimarlık Ofisi`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: siteConfig.themeColor,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`dark bg-background ${plusJakarta.variable} ${syne.variable} ${fraunces.variable}`}>
      <body className="antialiased font-sans">
        <JsonLd />
        <IntroLoader />
        <SiteHeader />
        <CopyGuard>{children}</CopyGuard>
        <SiteFooter />
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-Z2GKSWB02W"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z2GKSWB02W');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
