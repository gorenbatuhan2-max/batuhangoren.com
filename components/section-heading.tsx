import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className={cn('mb-4 flex items-center gap-3', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-primary" />
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.25em]',
              light ? 'text-primary' : 'text-primary'
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl',
          light ? 'text-navy-deep-foreground' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            light ? 'text-navy-deep-foreground/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
