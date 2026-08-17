import { experience } from "@/lib/portfolio-data"
import { ScrollReveal, SectionLabel } from "./shared"

export function JourneySection() {
  return (
    <section
      id="journey"
      className="mx-auto w-[min(1320px,calc(100%-40px))] py-24 md:w-[min(1320px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="05">Experience</SectionLabel>
      <ScrollReveal className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
        <h2 className="col-span-1 font-serif text-[clamp(2.2rem,4.4vw,3.4rem)] italic leading-[1.02] tracking-[-0.01em] lg:col-span-6">
          Learning through shipping.
        </h2>
        <p className="col-span-1 max-w-md font-sans text-[15px] leading-[1.85] text-muted lg:col-span-4 lg:col-start-9">
          Every experience has been a chance to build better habits, work
          with others, and get closer to the engineer I want to become.
        </p>
      </ScrollReveal>

      <div className="border-t border-line">
        {experience.map((item, index) => (
          <ScrollReveal
            key={item.title}
            as="article"
            delay={index * 90}
            className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span className="font-sans text-[11px] tracking-[0.1em] text-muted md:col-span-2">{item.date}</span>
            <h3 className="font-serif text-2xl italic tracking-[-0.01em] md:col-span-4">{item.title}</h3>
            <p className="font-sans text-[13px] uppercase tracking-[0.1em] text-accent md:col-span-2">
              {item.company}
            </p>
            <p className="font-sans text-sm text-muted md:col-span-4">{item.stack}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
