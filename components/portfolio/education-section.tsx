import { certifications, education } from "@/lib/portfolio-data"
import { QuantumMark, ScrollReveal, SectionLabel } from "./shared"

export function EducationSection() {
  const half = Math.ceil(certifications.length / 2)
  const columnOne = certifications.slice(0, half)
  const columnTwo = certifications.slice(half)

  return (
    <section id="education" className="bg-surface py-24 md:py-32">
      <div className="mx-auto w-[min(1320px,calc(100%-40px))] md:w-[min(1320px,calc(100%-64px))]">
        <SectionLabel number="06">Education &amp; credentials</SectionLabel>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Degree is intentionally static — no reveal or motif animation on the degree itself. */}
          <article className="border-t border-line pt-8 lg:col-span-5">
            <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted">01 / Education</span>
            <h3 className="mt-6 font-serif text-3xl italic tracking-[-0.01em]">{education.degree}</h3>
            <p className="mt-3 font-sans text-sm text-muted">{education.field}</p>

            <div className="mt-5 flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[0.1em] text-accent">
              <QuantumMark />
              {education.honors}
            </div>

            <p className="mt-8 font-sans text-sm leading-relaxed text-muted">
              {education.institution}
              <br />
              {education.location}
            </p>

            <dl className="mt-10 flex items-baseline justify-between border-t border-line pt-5 font-sans text-[11px] uppercase tracking-[0.1em]">
              <div>
                <dt className="text-muted">Batch</dt>
                <dd className="mt-1 font-serif text-lg italic text-foreground">{education.batch}</dd>
              </div>
              <div className="text-right">
                <dt className="text-muted">CGPA</dt>
                <dd className="mt-1 font-serif text-lg italic text-foreground">{education.cgpa}</dd>
              </div>
            </dl>
          </article>

          <ScrollReveal as="article" delay={100} className="border-t border-line pt-8 lg:col-span-6 lg:col-start-7">
            <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted">02 / Certifications</span>
            <h3 className="mt-6 font-serif text-3xl italic tracking-[-0.01em]">Credentials collected along the way.</h3>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {[columnOne, columnTwo].map((column, columnIndex) => (
                <ul key={columnIndex} className="m-0 list-none p-0">
                  {column.map((cert, index) => {
                    const number = columnIndex * half + index + 1
                    return (
                      <li key={cert} className="flex gap-3 border-b border-line py-4 text-sm leading-snug">
                        <span className="font-sans text-xs text-muted">{String(number).padStart(2, "0")}</span>
                        <span className="text-foreground/90">{cert}</span>
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
