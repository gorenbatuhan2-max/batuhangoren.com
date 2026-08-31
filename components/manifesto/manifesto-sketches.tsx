/**
 * Decorative, hand-drawn-feel architectural line sketches used behind
 * manifesto sections. Pure line art (no fill), meant to sit at very low
 * opacity so body text stays fully readable on top of it.
 */

type SketchProps = {
  className?: string
}

function ArchSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 360 L60 200 Q60 90 200 90 Q340 90 340 200 L340 360"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M100 360 L100 210 Q100 130 200 130 Q300 130 300 210 L300 360"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="60" y1="360" x2="340" y2="360" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="90" x2="200" y2="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
      <circle cx="200" cy="90" r="2" fill="currentColor" />
    </svg>
  )
}

function ColumnSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <path d="M150 40 H250 V60 H150 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M162 60 Q150 210 165 340" stroke="currentColor" strokeWidth="1" />
      <path d="M238 60 Q250 210 235 340" stroke="currentColor" strokeWidth="1" />
      <path d="M140 340 H260 V362 H140 Z" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={i}
          x1={168 + i * 9}
          y1="70"
          x2={168 + i * 9}
          y2="332"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.6"
        />
      ))}
    </svg>
  )
}

function PlanGridSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="150" x2="350" y2="150" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="150" x2="200" y2="350" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="260" x2="200" y2="260" stroke="currentColor" strokeWidth="1" />
      <path d="M120 150 A 30 30 0 0 1 150 180" stroke="currentColor" strokeWidth="1" />
      <path d="M240 260 A 26 26 0 0 1 240 286" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="50" x2="30" y2="350" stroke="currentColor" strokeWidth="0.5" />
      <line x1="26" y1="50" x2="34" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="26" y1="350" x2="34" y2="350" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

function StaircaseSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 70 + i * 28
        const y = 330 - i * 28
        return (
          <path
            key={i}
            d={`M${x} ${y} h28 v28`}
            stroke="currentColor"
            strokeWidth="1"
          />
        )
      })}
      <line x1="70" y1="330" x2="70" y2="358" stroke="currentColor" strokeWidth="1" />
      <line x1="322" y1="358" x2="70" y2="358" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function DomeSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <path
        d="M80 260 Q80 100 200 70 Q320 100 320 260"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M110 260 Q110 140 200 110 Q290 140 290 260" stroke="currentColor" strokeWidth="0.5" />
      <line x1="200" y1="260" x2="200" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
      <line x1="60" y1="260" x2="340" y2="260" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="260" x2="60" y2="340" stroke="currentColor" strokeWidth="1" />
      <line x1="340" y1="260" x2="340" y2="340" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="40" x2="200" y2="70" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="70" r="3" fill="currentColor" />
    </svg>
  )
}

function FacadeSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <rect x="60" y="60" width="280" height="280" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={90 + col * 62}
            y={90 + row * 80}
            width="34"
            height="46"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        ))
      )}
      <line x1="60" y1="340" x2="60" y2="368" stroke="currentColor" strokeWidth="0.5" />
      <line x1="340" y1="340" x2="340" y2="368" stroke="currentColor" strokeWidth="0.5" />
      <line x1="60" y1="368" x2="340" y2="368" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

const SKETCHES = [ArchSketch, ColumnSketch, PlanGridSketch, StaircaseSketch, DomeSketch, FacadeSketch]

export function ManifestoSketch({
  index,
  className = '',
}: {
  index: number
  className?: string
}) {
  const Sketch = SKETCHES[index % SKETCHES.length]
  return <Sketch className={className} />
}
