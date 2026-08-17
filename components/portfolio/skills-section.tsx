import { skills } from "@/lib/portfolio-data"
import { ScrollReveal, SectionLabel } from "./shared"

export function SkillsSection() {
  return (
    <section id="skills" className="bg-surface-2 py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] md:w-[min(1240px,calc(100%-64px))]">
        <SectionLabel number="03">Technical toolkit</SectionLabel>
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-24">
          <h2 className="text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
            Tools for the
            <br />
            <em className="not-italic text-muted">work at hand.</em>
          </h2>
          <p className="max-w-lg text-muted leading-[1.8] lg:justify-self-end lg:text-right">
            Technologies I&apos;ve used to learn, ship, and explore real-world
            software.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={index * 90} className="group">
              <div className="flex items-baseline gap-3 border-t border-foreground pt-3.5 transition-colors duration-300 group-hover:border-accent">
                <span className="font-mono text-[10px] text-muted">{skill.number}</span>
                <h3 className="text-[15px]">{skill.title}</h3>
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                {skill.list.map((item) => (
                  <span
                    key={item}
                    className="cursor-default border border-line px-3 py-2.5 font-mono text-[11px] text-muted transition-all duration-200 hover:-translate-x-1 hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
