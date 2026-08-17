import { Arrow } from "./shared"

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-80px)] w-[min(1320px,calc(100%-40px))] grid-cols-1 items-end gap-10 py-14 md:w-[min(1320px,calc(100%-64px))] lg:grid-cols-12 lg:gap-6 lg:py-20">
      <div className="reveal order-2 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-muted lg:order-1 lg:col-span-3 lg:flex-col lg:items-start lg:gap-8">
        <span>001 — Index</span>
        <i className="hidden h-16 w-px bg-line lg:block" aria-hidden="true" />
        <span className="hidden lg:block">
          Chennai, India
          <br />
          Available for internships
        </span>
      </div>

      <h1 className="reveal order-1 col-span-1 font-serif text-[clamp(3rem,9vw,7.5rem)] italic leading-[0.94] tracking-[-0.02em] text-foreground lg:order-2 lg:col-span-9">
        Building
        <br />
        <span className="not-italic">ideas into</span>
        <br />
        software.
      </h1>

      <div className="reveal-delay order-3 col-span-1 lg:col-span-3 lg:col-start-4">
        <p className="max-w-sm font-sans text-base leading-[1.75] text-muted">
          I&apos;m Lakshan — a pre-final-year AI &amp; ML student who builds
          responsive interfaces, practical applications, and AI-driven
          workflows.
        </p>
      </div>

      <div className="reveal-delay order-4 col-span-1 flex flex-col gap-6 border-t border-line pt-6 lg:col-span-5 lg:col-start-8 lg:items-end lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
        <dl className="grid w-full grid-cols-2 gap-x-6 gap-y-4 font-sans text-[11px] uppercase tracking-[0.1em] text-muted lg:text-right">
          <div>
            <dt className="text-line">Focus</dt>
            <dd className="mt-1 text-foreground">Software engineering</dd>
          </div>
          <div>
            <dt className="text-line">Currently</dt>
            <dd className="mt-1 text-foreground">Building &amp; learning</dd>
          </div>
        </dl>
        <div className="flex flex-wrap items-center gap-6 font-sans text-[11px] uppercase tracking-[0.15em] lg:justify-end">
          <a
            href="#projects"
            className="flex items-center gap-2 text-foreground underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            View projects <Arrow />
          </a>
          <a
            href="mailto:lakshanadhithyaa@gmail.com"
            className="flex items-center gap-2 text-muted underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Get in touch <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
