import { Sparkle } from "./shared"

export function SiteFooter() {
  return (
    <footer className="border-t border-line font-mono text-[11px] text-muted">
      <div className="mx-auto flex min-h-[80px] w-[min(1240px,calc(100%-40px))] flex-wrap items-center justify-between gap-4 py-6 md:w-[min(1240px,calc(100%-64px))]">
        <span>© 2026 Lakshan Adhithyaa</span>
        <span className="order-3 flex w-full items-center justify-center gap-1.5 md:order-none md:w-auto">
          Built with intention <Sparkle className="h-3 w-3 text-accent" />
        </span>
        <a className="transition-colors hover:text-accent" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
