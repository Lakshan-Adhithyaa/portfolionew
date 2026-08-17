"use client"

import { useMemo, useState } from "react"
import { projects, type ProjectType } from "@/lib/portfolio-data"
import { Arrow, ScrollReveal, SectionLabel } from "./shared"

const filters: { value: "all" | ProjectType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "ai", label: "AI / automation" },
]

const cardBlockClass: Record<string, string> = {
  mint: "bg-card-mint",
  violet: "bg-card-mint",
  amber: "bg-card-amber",
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | ProjectType>("all")

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  )

  return (
    <section
      id="projects"
      className="mx-auto w-[min(1240px,calc(100%-40px))] py-24 md:w-[min(1240px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="04">Selected projects</SectionLabel>
      <ScrollReveal className="mb-14 grid gap-10 lg:grid-cols-2 lg:gap-24">
        <h2 className="text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Proof of
          <br />
          <em className="not-italic text-muted">curiosity.</em>
        </h2>
        <div>
          <p className="max-w-lg text-muted leading-[1.8]">
            Projects are where ideas become constraints, decisions, and
            working software.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3" role="group" aria-label="Filter projects">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`border px-2.5 py-2 text-[10px] transition-colors ${
                  filter === value
                    ? "border-accent text-accent"
                    : "border-line text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            as="article"
            delay={index * 90}
            className="grid grid-cols-[minmax(0,0.85fr)_1fr] border border-line"
          >
            <div className={`relative hidden min-h-[280px] p-5 sm:block ${cardBlockClass[project.accent]}`}>
              <span className="font-mono text-xs text-background/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <pre className="absolute bottom-5 left-5 right-5 whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-background/70">
                <span className="text-background/50">const</span> idea ={" "}
                <span className="text-background/90 font-semibold">build</span>();
                {"\n"}
                <span className="text-background/50">return</span> impact;
              </pre>
            </div>
            <div className="flex flex-col justify-between p-6 md:p-7">
              <div>
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.1em] text-muted">
                  <span>{project.category}</span>
                  <a
                    href={project.href}
                    className="flex shrink-0 items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                  >
                    Case study <Arrow />
                  </a>
                </div>
                <h3 className="my-4 text-2xl tracking-[-0.05em] md:text-[30px]">{project.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.stack.map((tag) => (
                  <span key={tag} className="border border-line px-2 py-1.5 font-mono text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
