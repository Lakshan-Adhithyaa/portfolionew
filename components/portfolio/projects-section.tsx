"use client"

import { useMemo, useState } from "react"
import { projects, type ProjectType } from "@/lib/portfolio-data"
import { Arrow, SectionLabel } from "./shared"

const filters: { value: "all" | ProjectType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "ai", label: "AI / automation" },
]

const accentLinkClass: Record<string, string> = {
  mint: "",
  violet: "text-violet",
  amber: "text-amber",
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
      <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:gap-24">
        <h2 className="text-[clamp(2.6rem,5.1vw,4.4rem)] font-extrabold leading-[0.97] tracking-[-0.075em]">
          Things I&apos;ve
          <br />
          <em className="not-italic text-muted">made useful.</em>
        </h2>
        <div>
          <p className="max-w-lg text-muted leading-[1.8]">
            A selection of builds where curiosity met a real problem, and the
            details mattered.
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
      </div>

      <div className="border-t border-line">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className="grid grid-cols-[35px_1fr_38px] items-center gap-3 border-b border-line py-6 transition-[padding] hover:bg-white/[0.015] hover:px-2.5 md:grid-cols-[70px_1fr_50px] md:gap-4 md:py-7.5"
          >
            <div className="text-[10px] text-muted">0{index + 1}</div>
            <div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.1em] text-muted">
                <span>{project.type === "ai" ? "AI / AUTOMATION" : "WEB DEVELOPMENT"}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="my-3 text-2xl tracking-[-0.05em] md:text-[32px]">{project.title}</h3>
              <p className="max-w-2xl text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.stack.map((tag) => (
                  <span key={tag} className="border border-line px-2 py-1.5 font-mono text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.href}
              aria-label={`View ${project.title} on GitHub`}
              className={`grid h-9.5 w-9.5 place-items-center self-center border border-line transition-colors hover:border-accent hover:text-accent ${accentLinkClass[project.accent]}`}
            >
              <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
