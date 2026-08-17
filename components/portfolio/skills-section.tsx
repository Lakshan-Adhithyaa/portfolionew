import { skills } from "@/lib/portfolio-data"
import { SectionLabel } from "./shared"

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
          <p className="max-w-lg text-muted leading-[1.8]">
            Technologies I&apos;ve used to learn, ship, and explore real-world
            software.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-9 gap-x-5 md:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.title} className="border-t-2 border-foreground pt-3.5">
              <span className="text-[10px] text-muted">{skill.number}</span>
              <h3 className="my-3 text-[15px]">{skill.title}</h3>
              <p className="font-mono text-[11px] leading-[1.8] text-muted">{skill.list}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
