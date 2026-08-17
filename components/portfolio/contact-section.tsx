import { Arrow, ScrollReveal, Sparkle } from "./shared"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <ScrollReveal
        as="div"
        className="mx-auto flex w-[min(1240px,calc(100%-40px))] flex-col items-center text-center md:w-[min(1240px,calc(100%-64px))]"
      >
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
          <Sparkle /> Next chapter
        </div>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.6rem,8vw,5.2rem)] font-extrabold leading-[0.97] tracking-[-0.06em]">
          Let&apos;s build something
          <br />
          <em className="not-italic text-muted">meaningful.</em>
        </h2>
        <p className="mt-7 max-w-lg text-muted leading-[1.8]">
          I&apos;m open to conversations about internships, entry-level
          opportunities, and thoughtful software.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:lakshanadhithyaa@gmail.com"
            className="shine-hover group inline-flex items-center gap-3 bg-foreground px-5 py-4 font-mono text-[11px] uppercase tracking-[0.05em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_8px_0_0_var(--color-line)]"
          >
            Get in touch{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
          </a>
          <a
            className="underline-grow group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.05em] text-muted transition-colors hover:text-accent"
            href="https://github.com/Lakshan-Adhithyaa"
          >
            GitHub{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
          </a>
          <a
            className="underline-grow group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.05em] text-muted transition-colors hover:text-accent"
            href="https://www.linkedin.com/"
          >
            LinkedIn{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
