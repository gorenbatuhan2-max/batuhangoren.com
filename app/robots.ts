import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Arama indekslemesi ve AI yanıtlarında (RAG/özetleme) kullanım serbest,
        // model eğitiminde (fine-tuning/training) kullanım kapalı.
        // https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/
        other: {
          'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
        },
      },
      {
        // Yapay zeka arama/asistan botları: ChatGPT, Claude, Gemini (Google-Extended),
        // Perplexity ve Apple Intelligence sitenin tamamını tarayıp özetleyebilsin.
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'PerplexityBot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
