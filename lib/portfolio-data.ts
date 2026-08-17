export type ProjectAccent = "mint" | "violet" | "amber"
export type ProjectType = "web" | "ai"

export interface Project {
  title: string
  type: ProjectType
  category: string
  year: string
  description: string
  stack: string[]
  accent: ProjectAccent
  href: string
}

export const projects: Project[] = [
  {
    title: "Helm Events",
    type: "ai",
    category: "AI event operations agent",
    year: "2025",
    description:
      "AI-powered event operations for when plans go off-script. Built collaboratively with my team, Helm is an AI Event Operations Agent that helps organizers handle real-time disruptions — identifying downstream impact, coordinating the right people, recommending actions, and tracking issues through to resolution, all in one operational system.",
    stack: ["AI Agent", "Event Ops", "Automation"],
    accent: "mint",
    href: "https://github.com/Lakshan-Adhithyaa/helm-events",
  },
  {
    title: "MovieVerse",
    type: "web",
    category: "Responsive web application",
    year: "2025",
    description:
      "A BookMyShow-inspired experience for browsing movies and moving through ticket booking workflows.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "mint",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
  {
    title: "PostMortor",
    type: "ai",
    category: "Generative AI hackathon project",
    year: "2025",
    description:
      "A Generative AI project that automates postmortem report generation and supports root-cause analysis workflows.",
    stack: ["Python", "Generative AI", "Automation"],
    accent: "amber",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
]

export const skills: { number: string; title: string; list: string[] }[] = [
  { number: "01", title: "Web development", list: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"] },
  { number: "02", title: "Programming languages", list: ["Python", "Java", "C++"] },
  { number: "03", title: "Data & foundations", list: ["MySQL", "MongoDB", "Data structures"] },
  { number: "04", title: "Tools", list: ["GitHub", "VS Code"] },
]

export interface ExperienceItem {
  date: string
  title: string
  company: string
  stack: string
}

export const experience: ExperienceItem[] = [
  {
    date: "02 / 2025",
    title: "Software Development Intern",
    company: "Unaitech",
    stack: "Java · Python · AI-powered development tools",
  },
  {
    date: "07 / 2025",
    title: "Web Developer",
    company: "CodSoft",
    stack: "Responsive interfaces · HTML · CSS · JavaScript",
  },
  {
    date: "06 / 2026",
    title: "Intern",
    company: "Edify Techno",
    stack: "Agentic AI · n8n · make.com · prompt engineering",
  },
]

export const education = {
  degree: "Bachelor of Technology",
  field: "Artificial Intelligence and Machine Learning",
  institution: "R.M.D. Engineering College",
  location: "R.S.M Nagar, Kavaraipettai, Gummidipoondi",
  graduation: "January 2028",
  cgpa: "8.19",
}

export const certifications: string[] = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
  "Oracle APEX Cloud Developer Certified Professional",
  "NPTEL — Database Management System",
  "Infosys Springboard — W3.CSS for Web Development",
  "HTML5 — The Language",
  "C++ Practical Organogram in C++",
  "Java Programming Fundamentals",
  "MongoDB CRUD Operations",
]

export const navItems = ["about", "skills", "projects", "journey", "education", "contact"] as const
