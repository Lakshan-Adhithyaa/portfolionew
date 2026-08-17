import { ScrollReveal, SectionLabel } from "./shared"

const facts: [string, string][] = [
  ["Status", "Pre-final year"],
  ["Focus", "Software engineering"],
  ["Stack", "Web · Python · AI"],
  ["Location", "Chennai, India"],
  ["CGPA", "8.19"],
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[min(1320px,calc(100%-40px))] py-24 md:w-[min(1320px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="02">About</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
        <ScrollReveal className="lg:col-span-7">
          <p className="font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] italic leading-[1.28] tracking-[-0.01em] text-foreground">
            Still learning, already building — I turn ideas into useful,
            well-structured experiences across the web, Python, and
            AI-driven workflow automation.
          </p>
          <p className="mt-8 max-w-lg font-sans text-[15px] leading-[1.85] text-muted">
            Currently pursuing a Bachelor of Technology in Artificial
            Intelligence and Machine Learning at R.M.D. Engineering College, I
            enjoy solving practical problems and learning the engineering
            practices that make software dependable.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-line font-sans text-[13px]">
            {facts.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                <dt className="uppercase tracking-[0.12em] text-muted">{label}</dt>
                <dd className="text-right text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  )
}
