import { skills } from "@/lib/portfolio-data"
import { ScrollReveal, SectionLabel } from "./shared"

export function SkillsSection() {
  return (
    <section id="skills" className="bg-surface py-24 md:py-32">
      <div className="mx-auto w-[min(1320px,calc(100%-40px))] md:w-[min(1320px,calc(100%-64px))]">
        <SectionLabel number="03">Toolkit</SectionLabel>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <h2 className="col-span-1 font-serif text-[clamp(2rem,4vw,3rem)] italic leading-[1.05] tracking-[-0.01em] lg:col-span-5">
            Tools for the work at hand.
          </h2>
          <p className="col-span-1 max-w-md font-sans text-[15px] leading-[1.85] text-muted lg:col-span-4 lg:col-start-9">
            Technologies I&apos;ve used to learn, ship, and explore
            real-world software.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={index * 90}>
              <div className="flex items-baseline gap-3 border-t border-foreground pt-3.5">
                <span className="font-sans text-[10px] tracking-[0.1em] text-muted">{skill.number}</span>
                <h3 className="font-serif text-lg italic">{skill.title}</h3>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5 font-sans text-[13px] text-muted">
                {skill.list.map((item) => (
                  <li key={item} className="border-b border-line py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
