export type ProjectAccent = "mint" | "violet" | "amber"
export type ProjectType = "web" | "ai"

export interface Project {
  title: string
  type: ProjectType
  year: string
  description: string
  stack: string[]
  accent: ProjectAccent
  href: string
}

export const projects: Project[] = [
  {
    title: "MovieVerse",
    type: "web",
    year: "2025",
    description:
      "A responsive movie discovery experience with clean browsing flows, search-first navigation, and a cinematic interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "mint",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
  {
    title: "PostMortor",
    type: "ai",
    year: "2025",
    description:
      "An AI-assisted workflow for turning rough inputs into useful post-mortems, structured insights, and better team learning.",
    stack: ["Python", "AI workflow", "Automation"],
    accent: "violet",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
  {
    title: "Interface experiments",
    type: "web",
    year: "ongoing",
    description:
      "Small, intentional builds exploring responsive layout, component systems, and the details that make software feel considered.",
    stack: ["React", "CSS", "UX"],
    accent: "amber",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
]

export const skills: { number: string; title: string; list: string }[] = [
  { number: "01", title: "Web development", list: "HTML · CSS · JavaScript · Bootstrap · React" },
  { number: "02", title: "Programming", list: "Python · Java · C++" },
  { number: "03", title: "Data foundations", list: "MySQL · MongoDB · Data structures" },
  { number: "04", title: "AI & automation", list: "AI workflows · Workflow automation" },
]

export const navItems = ["about", "skills", "projects", "journey", "contact"] as const
