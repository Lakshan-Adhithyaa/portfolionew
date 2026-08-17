import { ScrollReveal } from "./shared"

export function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <ScrollReveal
        as="div"
        className="mx-auto w-[min(1320px,calc(100%-40px))] md:w-[min(1320px,calc(100%-64px))]"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">07 — Next chapter</span>

        <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2.8rem,9vw,6.5rem)] italic leading-[0.98] tracking-[-0.02em] text-foreground">
          Let&apos;s build
          <br />
          something meaningful.
        </h2>

        <div className="mt-14 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md font-sans text-[15px] leading-[1.85] text-muted">
            I&apos;m open to conversations about internships, entry-level
            opportunities, and thoughtful software.
          </p>

          <div className="flex flex-col gap-3 font-serif text-2xl italic md:items-end md:text-right">
            <a
              href="mailto:lakshanadhithyaa@gmail.com"
              className="text-foreground underline decoration-line decoration-1 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              lakshanadhithyaa@gmail.com
            </a>
            <div className="flex gap-6 font-sans text-[11px] not-italic uppercase tracking-[0.15em] text-muted md:justify-end">
              <a
                className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                href="https://github.com/Lakshan-Adhithyaa"
              >
                GitHub
              </a>
              <a
                className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                href="https://www.linkedin.com/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
