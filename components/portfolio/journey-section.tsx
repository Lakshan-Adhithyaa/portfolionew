import { SectionLabel } from "./shared"

const timeline = [
  {
    period: "2023 — present",
    title: "B.Tech — Artificial Intelligence & Machine Learning",
    place: "R.M.D. Engineering College · Chennai",
    note: "Building a foundation across software engineering, data, and intelligent systems.",
  },
  {
    period: "2024 — present",
    title: "Independent builder",
    place: "Personal projects · Open source learning",
    note: "Exploring responsive interfaces, practical applications, and automation workflows.",
  },
]

export function JourneySection() {
  return (
    <section
      id="journey"
      className="mx-auto w-[min(1240px,calc(100%-40px))] py-24 md:w-[min(1240px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="05">The journey so far</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <h2 className="text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Learning by
          <br />
          <em className="not-italic text-muted">doing the work.</em>
        </h2>
        <div className="border-t border-line">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-[140px_1fr] md:gap-6"
            >
              <span className="font-mono text-[10px] text-accent">{item.period}</span>
              <div>
                <h3 className="mb-1 text-[17px]">{item.title}</h3>
                <p className="text-xs text-muted">{item.place}</p>
                <small className="mt-4 block text-xs leading-[1.7] text-muted">{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-2.5 border-y border-line py-5 font-mono text-[11px] md:flex-row md:items-center md:gap-20">
        <span className="text-accent">Certifications &amp; learning</span>
        <p className="m-0 text-muted">Continuous learner · Python · Web development · AI workflows</p>
      </div>
    </section>
  )
}
