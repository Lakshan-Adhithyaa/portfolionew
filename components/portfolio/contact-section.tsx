"use client"

import { useState } from "react"
import { Arrow, SectionLabel } from "./shared"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText("lakshanadhithyaa@gmail.com")
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard access unavailable; user can still use the mailto link.
    }
  }

  return (
    <section id="contact" className="bg-surface-2 py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] md:w-[min(1240px,calc(100%-64px))]">
        <SectionLabel number="06">Get in touch</SectionLabel>
        <h2 className="max-w-3xl text-[clamp(2.8rem,8vw,6.6rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Have an idea?
          <br />
          <em className="not-italic text-muted">Let&apos;s make it real.</em>
        </h2>
        <p className="my-7 max-w-md text-muted">
          Whether you&apos;re building something ambitious or want to talk
          about software, I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:lakshanadhithyaa@gmail.com"
            className="inline-flex items-center gap-3 border border-foreground bg-foreground px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.05em] text-background transition-transform hover:-translate-y-0.5"
          >
            Send an email <Arrow />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-3 border border-line px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.05em] transition-colors hover:border-accent hover:text-accent"
          >
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>
      </div>
    </section>
  )
}
