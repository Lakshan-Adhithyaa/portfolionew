"use client"

import { useEffect, useRef, useState } from "react"

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
  as?: "div" | "article" | "section"
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

/** A small pill with an animated orbiting-electron ring, for quantum-flavored callouts. */
export function QuantumBadge({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`quantum-badge font-mono text-[11px] tracking-[0.04em] ${className}`}>
      <span className="quantum-ring" aria-hidden="true">
        <span className="quantum-orbiter">
          <span className="quantum-dot" />
          <span className="quantum-dot-alt" />
        </span>
      </span>
      {children}
    </span>
  )
}

/** A handful of softly floating particles, meant to sit inside a relatively positioned parent. */
export function QuantumParticleField({ count = 6 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, index) => index)
  return (
    <span className="quantum-particle-field" aria-hidden="true">
      {particles.map((index) => (
        <span
          key={index}
          className="quantum-particle"
          style={{
            top: `${(index * 37) % 100}%`,
            left: `${(index * 53 + 10) % 100}%`,
            animationDelay: `${index * 0.6}s`,
            animationDuration: `${3.6 + (index % 3) * 0.8}s`,
          }}
        />
      ))}
    </span>
  )
}
