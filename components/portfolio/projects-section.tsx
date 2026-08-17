"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { projects, type Project, type ProjectType } from "@/lib/portfolio-data"
import { Arrow, ScrollReveal, SectionLabel } from "./shared"

const filters: { value: "all" | ProjectType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "ai", label: "AI / automation" },
]

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
}

const caseStudySteps: [keyof NonNullable<Project["caseStudy"]>, string][] = [
  ["context", "Context"],
  ["problem", "Problem"],
  ["approach", "Approach"],
  ["system", "System"],
  ["interface", "Interface"],
  ["contribution", "My contribution"],
  ["outcome", "Outcome"],
  ["reflection", "Reflection"],
]

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | ProjectType>("all")

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  )

  const caseStudyProjects = useMemo(() => projects.filter((project) => project.caseStudy), [])

  // Auto-expand and scroll to the matching <details> when a "Read case study"
  // link (an in-page hash link) is followed.
  useEffect(() => {
    const openTarget = () => {
      const id = window.location.hash.replace("#", "")
      if (!id) return
      const el = document.getElementById(id)
      if (el instanceof HTMLDetailsElement) {
        el.open = true
      }
    }
    openTarget()
    window.addEventListener("hashchange", openTarget)
    return () => window.removeEventListener("hashchange", openTarget)
  }, [])

  return (
    <section
      id="projects"
      className="mx-auto w-[min(1320px,calc(100%-40px))] py-24 md:w-[min(1320px,calc(100%-64px))] md:py-32"
    >
      <SectionLabel number="04">Selected work</SectionLabel>

      <ScrollReveal className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
        <h2 className="col-span-1 font-serif text-[clamp(2.2rem,4.4vw,3.4rem)] italic leading-[1.02] tracking-[-0.01em] lg:col-span-6">
          Proof of curiosity.
        </h2>
        <div className="col-span-1 lg:col-span-4 lg:col-start-9">
          <p className="max-w-md font-sans text-[15px] leading-[1.85] text-muted">
            Projects are where ideas become constraints, decisions, and
            working software.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5" role="group" aria-label="Filter projects">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`font-sans text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  filter === value
                    ? "text-foreground underline decoration-accent decoration-1 underline-offset-4"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="border-t border-line">
        {visibleProjects.map((project, index) => {
          const hasCaseStudy = Boolean(project.caseStudy)
          const href = hasCaseStudy ? `#case-study-${slugify(project.title)}` : project.href
          const aspect = index % 2 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"

          return (
            <ScrollReveal key={project.title} delay={index * 70}>
              <a
                href={href}
                target={hasCaseStudy ? undefined : "_blank"}
                rel={hasCaseStudy ? undefined : "noopener noreferrer"}
                className="group relative flex flex-col gap-4 border-b border-line py-7 md:flex-row md:items-center md:gap-8 md:py-8"
              >
                <span className="font-sans text-[11px] tracking-[0.1em] text-muted md:w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-serif text-2xl italic leading-[1.05] tracking-[-0.01em] text-foreground transition-colors group-hover:text-accent md:flex-1 md:text-[32px]">
                  {project.title}
                </h3>

                <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted md:w-56">
                  {project.category}
                </span>

                <span className="font-sans text-[11px] tracking-[0.1em] text-muted md:w-12">{project.year}</span>

                <span className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.1em] text-foreground underline decoration-line decoration-1 underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent md:w-40 md:justify-end">
                  {hasCaseStudy ? "Read case study" : "View repo"} <Arrow />
                </span>

                {/* Subtle hover-reveal thumbnail — desktop and keyboard-focus only */}
                <span
                  className={`pointer-events-none absolute right-0 top-1/2 hidden w-56 -translate-y-1/2 translate-x-4 overflow-hidden border border-line bg-surface opacity-0 shadow-none transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:block ${aspect}`}
                  aria-hidden="true"
                >
                  <Image src={project.image} alt="" fill sizes="224px" className="object-cover" />
                </span>
              </a>

              {/* Mobile/tablet: a small static crop, always visible, standing in for the hover reveal. */}
              <div className="relative -mt-1 mb-1 aspect-[5/2] w-full overflow-hidden border-b border-line lg:hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — concept illustration`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {caseStudyProjects.length > 0 && (
        <div className="mt-24">
          <SectionLabel number="04.1">Case studies</SectionLabel>
          <div className="flex flex-col gap-6">
            {caseStudyProjects.map((project) => {
              const study = project.caseStudy
              if (!study) return null
              const id = `case-study-${slugify(project.title)}`

              return (
                <details key={project.title} id={id} className="group border border-line bg-surface">
                  <summary className="flex cursor-pointer list-none flex-col gap-2 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-8">
                    <span className="flex items-baseline gap-4">
                      <span className="font-sans text-[11px] tracking-[0.1em] text-muted">{project.year}</span>
                      <span className="font-serif text-2xl italic tracking-[-0.01em] md:text-[30px]">
                        {project.title}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] text-muted transition-colors group-hover:text-foreground">
                      Full narrative
                      <span className="inline-block transition-transform group-open:rotate-180" aria-hidden="true">
                        ⌄
                      </span>
                    </span>
                  </summary>

                  <div className="border-t border-line px-6 py-8 md:px-10 md:py-10">
                    <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden border border-line">
                      <Image
                        src={project.image}
                        alt={`${project.title} — concept illustration`}
                        fill
                        sizes="(min-width: 1024px) 1100px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <dl className="flex flex-col">
                      {caseStudySteps.map(([key, label], stepIndex) => (
                        <div
                          key={key}
                          className="grid grid-cols-1 gap-3 border-t border-line py-6 first:border-t-0 md:grid-cols-12 md:gap-6"
                        >
                          <dt className="col-span-1 flex items-baseline gap-3 font-sans text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3">
                            <span className="text-line">{String(stepIndex + 1).padStart(2, "0")}</span>
                            {label}
                          </dt>
                          <dd className="col-span-1 max-w-2xl font-sans text-[15px] leading-[1.85] text-foreground md:col-span-9">
                            {study[key]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 flex justify-end">
                      <a
                        href={project.href}
                        className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        View repository <Arrow />
                      </a>
                    </div>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
