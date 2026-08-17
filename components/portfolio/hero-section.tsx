import { Arrow, QuantumParticleField } from "./shared"

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-76px)] w-[min(1240px,calc(100%-40px))] items-center gap-12 pb-20 pt-16 md:w-[min(1240px,calc(100%-64px))] md:gap-24 lg:grid-cols-[1.05fr_0.75fr] lg:pb-24 lg:pt-20">
      <QuantumParticleField count={7} />
      <div className="reveal">
        <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(79,70,229,0.14)]" />
          Available for internships &amp; entry-level roles
        </div>
        <h1 className="my-6 max-w-3xl text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Building ideas
          <br />
          <em className="font-extrabold not-italic text-muted">into software.</em>
        </h1>
        <p className="max-w-xl text-base leading-[1.75] text-muted">
          I&apos;m Lakshan — a pre-final-year AI &amp; ML student who builds responsive
          interfaces, practical applications, and AI-driven workflows.
        </p>
        <div className="my-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 border border-foreground bg-foreground px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.05em] text-background transition-transform hover:-translate-y-0.5"
          >
            View projects <Arrow />
          </a>
          <a
            href="mailto:lakshanadhithyaa@gmail.com"
            className="inline-flex items-center gap-3 border border-line px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.05em] transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch <Arrow />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] text-muted">
          <a className="transition-colors hover:text-accent" href="https://github.com/Lakshan-Adhithyaa">
            GitHub
          </a>
          <a className="transition-colors hover:text-accent" href="https://www.linkedin.com/">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-accent" href="mailto:lakshanadhithyaa@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div
        className="reveal-delay border border-line bg-surface shadow-[20px_25px_60px_rgba(18,20,29,0.1)] lg:rotate-[1.5deg]"
        aria-label="Developer profile terminal"
      >
        <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3 font-mono text-[10px] text-muted">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2 w-2 rounded-full bg-[#d3d7e2]" />
            <i className="h-2 w-2 rounded-full bg-[#d3d7e2]" />
            <i className="h-2 w-2 rounded-full bg-[#d3d7e2]" />
          </span>
          <span>lakshan@portfolio:~</span>
          <span>⌘ 01</span>
        </div>
        <div className="space-y-4 px-4 py-6 font-mono text-[13px] leading-relaxed">
          <p>
            <b className="text-foreground">$ whoami</b>
            <br />
            <span className="text-muted">&gt; aspiring_software_engineer</span>
          </p>
          <p>
            <b className="text-foreground">$ currently</b>
            <br />
            <span className="text-muted">&gt; building + learning</span>
          </p>
          <p>
            <b className="text-foreground">$ focus</b>
            <br />
            <span className="text-muted">
              &gt; software engineering
              <br />
              &nbsp;&nbsp; problem solving
              <br />
              &nbsp;&nbsp; real-world projects
            </span>
          </p>
          <span className="cursor" aria-hidden="true" />
        </div>
        <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[10px] text-muted">
          <span>system online</span>
          <span>Chennai, IN</span>
        </div>
      </div>

      <a
        className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent lg:absolute lg:bottom-0 lg:left-0 lg:flex"
        href="#about"
      >
        <span>01</span>
        <i className="h-px w-8 bg-line" aria-hidden="true" /> scroll to explore <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
