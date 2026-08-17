"use client"

import { useState } from "react"
import { navItems } from "@/lib/portfolio-data"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between gap-6 px-5 md:px-8">
        <a
          className="whitespace-nowrap font-serif text-lg italic tracking-[-0.01em] text-foreground"
          href="#top"
          onClick={closeMenu}
        >
          Lakshan Adhithyaa
        </a>

        <button
          type="button"
          className="ml-auto font-sans text-[11px] uppercase tracking-[0.15em] text-muted md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Index"}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-20 flex-col gap-6 border-b border-line bg-background px-5 py-8 md:static md:ml-auto md:flex md:flex-row md:gap-9 md:border-none md:bg-transparent md:p-0`}
          aria-label="Primary navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
              className="flex items-baseline gap-2 font-sans text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              <span className="text-[9px] text-line">{String(index + 1).padStart(2, "0")}</span>
              {item}
            </a>
          ))}
        </nav>

        <span className="hidden shrink-0 font-serif text-sm italic text-muted md:block">Portfolio</span>
      </div>
    </header>
  )
}
