"use client"

import { useEffect, useRef, useState } from "react"

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span aria-hidden="true" className={down ? "inline-block rotate-90" : "inline-block"}>
      ↗
    </span>
  )
}

/**
 * Numbered catalogue label used to open each section — mirrors the small
 * plate you'd find beside a piece in a gallery or an entry in a monograph.
 */
export function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-16 flex items-baseline gap-4 font-sans text-[11px] uppercase tracking-[0.18em] text-muted md:mb-24">
      <span className="text-foreground">{number}</span>
      <i className="h-px w-10 bg-line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

/**
 * Fades and slides children into view the first time they cross into the
 * viewport. Falls back to always-visible when IntersectionObserver isn't
 * available or the user prefers reduced motion.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "article" | "section" | "li"
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal-on-scroll ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** A hairline rule that grows in from the left the first time it's scrolled into view. */
export function RuleGrow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`rule-grow h-px bg-line ${visible ? "is-visible" : ""} ${className}`}
      aria-hidden="true"
    />
  )
}

/** A quiet dashed marker with a single slow-rotating arc — for the quantum-honors credential. */
export function QuantumMark() {
  return <span className="quantum-mark" aria-hidden="true" />
}
