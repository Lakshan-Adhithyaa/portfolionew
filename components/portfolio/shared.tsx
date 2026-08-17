export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span aria-hidden="true" className={down ? "inline-block rotate-90" : "inline-block"}>
      ↗
    </span>
  )
}

export function Sparkle({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
    </svg>
  )
}

export function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-16 flex gap-5 border-t border-line pt-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted md:mb-11">
      <span className="text-foreground">{number}</span>
      <span>{children}</span>
    </div>
  )
}
