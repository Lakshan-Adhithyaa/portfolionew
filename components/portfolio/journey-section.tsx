import { experience } from "@/lib/portfolio-data"
import { SectionLabel } from "./shared"

export function JourneySection() {
  return (
    <section
      id="journey"
      className="mx-auto w-[min(1240px,calc(100%-40px))] py-24 md:w-[min(1240px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="05">Experience</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <h2 className="text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Learning through
          <br />
          <em className="not-italic text-muted">shipping.</em>
        </h2>
        <p className="max-w-lg self-start text-muted leading-[1.8] lg:justify-self-end lg:text-right">
          Every experience has been a chance to build better habits, work with
          others, and get closer to the engineer I want to become.
        </p>
      </div>

      <div className="mt-16 border-t border-line">
        {experience.map((item) => (
          <article
            key={item.title}
            className="grid gap-3 border-b border-line py-9 md:grid-cols-[110px_24px_1fr] md:items-start md:gap-8"
          >
            <span className="font-mono text-[11px] text-muted">{item.date}</span>
            <span
              className="mt-1 h-2.5 w-2.5 rounded-full border border-accent"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-2xl tracking-[-0.04em] md:text-[28px]">{item.title}</h3>
              <p className="mt-2 font-mono text-[13px] text-accent">{item.company}</p>
              <p className="mt-3 text-sm text-muted">{item.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
