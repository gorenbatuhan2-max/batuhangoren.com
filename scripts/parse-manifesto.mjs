import fs from 'node:fs'
import path from 'node:path'

const SRC = path.join(process.cwd(), 'MIMARLIK_MANİFESTOSU.txt')
const OUT = path.join(process.cwd(), 'lib', 'manifesto-data.ts')

const raw = fs.readFileSync(SRC, 'utf-8')
const lines = raw.split(/\r?\n/)

function slugify(input) {
  const map = {
    İ: 'i', I: 'i', ı: 'i', Ş: 's', ş: 's', Ğ: 'g', ğ: 'g',
    Ü: 'u', ü: 'u', Ö: 'o', ö: 'o', Ç: 'c', ç: 'c', Â: 'a', â: 'a',
  }
  return input
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const headingRe = /^([IVXLC]+)\.\s+(.+)$/

let mainTitle = ''
let mainSubtitle = ''
// title block is within first ~5 lines between ═ separators
for (const l of lines.slice(0, 6)) {
  const t = l.trim()
  if (!t || /^═+$/.test(t)) continue
  if (!mainTitle) mainTitle = t
  else if (!mainSubtitle) mainSubtitle = t
}

const sections = []
let current = null
let paraBuf = []

function flushPara() {
  const text = paraBuf.join(' ').trim()
  paraBuf = []
  if (text) current.paragraphs.push(text)
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const trimmed = line.trim()

  const headingMatch = trimmed.match(headingRe)
  if (headingMatch) {
    if (current) {
      flushPara()
      sections.push(current)
    }
    const [, number, title] = headingMatch
    current = {
      id: slugify(`${number}-${title}`),
      number,
      title,
      paragraphs: [],
    }
    continue
  }

  if (!current) continue // skip preamble before first heading

  if (/^═+$/.test(trimmed) || /^─+$/.test(trimmed)) continue // separators
  if (/^MANİFESTONUN SONU$/.test(trimmed)) continue

  if (trimmed === '') {
    flushPara()
    continue
  }

  paraBuf.push(trimmed)
}
if (current) {
  flushPara()
  sections.push(current)
}

const tsContent = `// AUTO-GENERATED from MIMARLIK_MANİFESTOSU.txt — do not hand-edit.
// Regenerate with: node scripts/parse-manifesto.mjs

export interface ManifestoSection {
  id: string
  number: string
  title: string
  paragraphs: string[]
}

export const manifestoTitle = ${JSON.stringify(mainTitle)}
export const manifestoSubtitle = ${JSON.stringify(mainSubtitle)}

export const manifestoSections: ManifestoSection[] = ${JSON.stringify(sections, null, 2)}
`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, tsContent, 'utf-8')

console.log(`Parsed ${sections.length} sections.`)
for (const s of sections) {
  console.log(`  ${s.number}. ${s.title} -> #${s.id} (${s.paragraphs.length} paragraphs)`)
}
console.log(`Title: ${mainTitle}`)
console.log(`Subtitle: ${mainSubtitle}`)
