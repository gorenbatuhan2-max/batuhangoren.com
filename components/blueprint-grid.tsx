export function BlueprintGrid({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.07] ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  )
}

export function BlueprintCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={className}
      fill="none"
    >
      <path d="M0 0 L120 0 L120 120" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M0 24 L96 24 L96 120" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <circle cx="120" cy="0" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
