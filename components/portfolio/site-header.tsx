"use client"

import { useState } from "react"
import { navItems } from "@/lib/portfolio-data"
import { Arrow } from "./shared"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-10 flex h-[76px] items-center justify-between gap-7 border-b border-line bg-background/90 px-5 backdrop-blur-md md:px-8">
      <a
        className="flex items-center gap-2.5 whitespace-nowrap text-[17px] font-extrabold tracking-[-0.03em]"
        href="#top"
        onClick={closeMenu}
      >
        <span className="grid h-[31px] w-[31px] place-items-center bg-foreground font-mono text-[11px] font-medium tracking-[-0.06em] text-background">
          LA
        </span>
        <span>lakshan.dev</span>
      </a>

      <button
        type="button"
        className="ml-auto block border border-line px-2.5 py-1.5 font-mono text-[11px] uppercase md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 right-0 top-[76px] flex-col gap-5 border-b border-line bg-background p-5 md:static md:ml-auto md:flex md:flex-row md:gap-7.5 md:border-none md:bg-transparent md:p-0`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={closeMenu}
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
          >
            {item}
          </a>
        ))}
      </nav>

      <a
        className="hidden shrink-0 border border-line px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.05em] text-foreground transition-colors hover:text-accent md:flex md:items-center md:gap-3"
        href="#contact"
      >
        Let&apos;s talk <Arrow />
      </a>
    </header>
  )
}
