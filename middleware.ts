import { NextRequest, NextResponse } from 'next/server'
import { getMarkdownForPath } from '@/lib/markdown'

/**
 * Ajanlar (LLM tabanlı arama/asistan botları) `Accept: text/markdown` ile
 * istek yaptığında, sayfanın HTML'i yerine markdown temsilini döner.
 * Normal tarayıcılar Accept başlığında her zaman text/html taşıdığından
 * bu sayfalar etkilenmez.
 * https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */
export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || ''
  const wantsMarkdownOnly = accept.includes('text/markdown') && !accept.includes('text/html')

  if (!wantsMarkdownOnly) return NextResponse.next()

  const markdown = getMarkdownForPath(request.nextUrl.pathname)
  if (!markdown) return NextResponse.next()

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
    },
  })
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
