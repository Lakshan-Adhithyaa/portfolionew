import { ScrollReveal, SectionLabel } from "./shared"

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[min(1240px,calc(100%-40px))] py-24 md:w-[min(1240px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="02">About me</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal>
          <h2 className="mb-6 text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
            Still learning.
            <br />
            <em className="not-italic text-muted">Already building.</em>
          </h2>
          <p className="max-w-xl text-[21px] leading-[1.55] tracking-[-0.03em] text-foreground">
            I&apos;m a software developer focused on turning ideas into useful,
            well-structured experiences. My work spans responsive web
            development, Python, and AI-driven workflow automation.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120} className="border border-line bg-surface text-xs">
          <div className="flex justify-between border-b border-line px-4 py-3.5 text-muted">
            <span>developer_snapshot.json</span>
            <span className="text-accent">● live</span>
          </div>
          <dl className="m-0 px-5 py-4.5">
            {[
              ["status", "pre-final year"],
              ["focus", "software engineering"],
              ["stack", "web · Python · AI"],
              ["location", "Chennai, India"],
              ["cgpa", "8.19"],
            ].map(([dt, dd]) => (
              <div key={dt} className="flex justify-between border-b border-dashed border-line py-2">
                <dt className="text-muted">{dt}</dt>
                <dd className="text-right text-foreground">{dd}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
      <p className="mt-10 max-w-lg text-muted leading-[1.8] lg:mt-14 lg:ml-[50%]">
        Currently pursuing a Bachelor of Technology in Artificial Intelligence
        and Machine Learning at R.M.D. Engineering College, I enjoy solving
        practical problems and learning the engineering practices that make
        software dependable.
      </p>
    </section>
  )
}
