export function SiteFooter() {
  return (
    <footer className="border-t border-line text-[10px] text-muted">
      <div className="mx-auto flex min-h-[90px] w-[min(1240px,calc(100%-40px))] flex-wrap items-center justify-between gap-5 py-6 md:w-[min(1240px,calc(100%-64px))]">
        <a className="flex items-center gap-2.5 text-[15px] font-sans text-foreground" href="#top">
          <span className="grid h-[31px] w-[31px] place-items-center bg-foreground font-mono text-[11px] font-medium tracking-[-0.06em] text-background">
            LA
          </span>
          <span>lakshan.dev</span>
        </a>
        <span className="order-3 w-full text-center md:order-none md:w-auto">
          Designed &amp; built by Lakshan Adhithyaa
        </span>
        <a className="transition-colors hover:text-accent" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
