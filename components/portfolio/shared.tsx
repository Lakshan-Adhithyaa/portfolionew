export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span aria-hidden="true" className={down ? "inline-block rotate-90" : "inline-block"}>
      ↗
    </span>
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
