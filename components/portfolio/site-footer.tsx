export function SiteFooter() {
  return (
    <footer className="border-t border-line font-sans text-[11px] uppercase tracking-[0.1em] text-muted">
      <div className="mx-auto flex min-h-[76px] w-[min(1320px,calc(100%-40px))] flex-wrap items-center justify-between gap-4 py-6 md:w-[min(1320px,calc(100%-64px))]">
        <span>© 2026 Lakshan Adhithyaa</span>
        <span className="order-3 w-full text-center md:order-none md:w-auto">Built with intention</span>
        <a
          className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          href="#top"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
