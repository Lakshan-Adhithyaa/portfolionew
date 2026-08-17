import { certifications, education } from "@/lib/portfolio-data"
import { QuantumBadge, ScrollReveal, SectionLabel } from "./shared"

export function EducationSection() {
  const half = Math.ceil(certifications.length / 2)
  const columnOne = certifications.slice(0, half)
  const columnTwo = certifications.slice(half)

  return (
    <section
      id="education"
      className="bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] md:w-[min(1240px,calc(100%-64px))]">
        <SectionLabel number="06">Education &amp; credentials</SectionLabel>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Degree card is intentionally static — no scroll/quantum animation on the degree itself. */}
          <article className="border border-line bg-surface p-7 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              01 / Education
            </span>
            <h3 className="mt-6 text-3xl">{education.degree}</h3>
            <p className="mt-3 font-mono text-sm text-violet">{education.field}</p>
            <div className="mt-4">
              <QuantumBadge>{education.honors}</QuantumBadge>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {education.institution}
              <br />
              {education.location}
            </p>
            <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-xs">
              <div>
                <span className="text-muted">Batch </span>
                <span className="font-semibold text-foreground">{education.batch}</span>
              </div>
              <div>
                <span className="text-muted">CGPA </span>
                <span className="font-semibold text-foreground">{education.cgpa}</span>
              </div>
            </div>
          </article>

          <ScrollReveal as="article" delay={100} className="border border-line bg-surface p-7 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              02 / Certifications
            </span>
            <h3 className="mt-6 text-3xl tracking-[-0.04em] md:text-4xl">
              Credentials collected
              <br />
              <em className="not-italic text-muted">along the way.</em>
            </h3>
            <div className="mt-8 grid gap-x-6 sm:grid-cols-2">
              {[columnOne, columnTwo].map((column, columnIndex) => (
                <ul key={columnIndex} className="m-0 list-none p-0">
                  {column.map((cert, index) => {
                    const number = columnIndex * half + index + 1
                    return (
                      <li
                        key={cert}
                        className="flex gap-3 border-b border-line py-4 text-sm leading-snug"
                      >
                        <span className="font-mono text-xs text-accent">
                          {String(number).padStart(2, "0")}
                        </span>
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
