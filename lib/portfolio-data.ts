export type ProjectType = "web" | "ai"

export interface CaseStudy {
  context: string
  problem: string
  approach: string
  system: string
  interface: string
  contribution: string
  outcome: string
  reflection: string
}

export interface Project {
  title: string
  type: ProjectType
  category: string
  year: string
  description: string
  stack: string[]
  image: string
  href: string
  caseStudy?: CaseStudy
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
    image: "/images/projects/helm-events.png",
    href: "https://github.com/Lakshan-Adhithyaa/helm-events",
    caseStudy: {
      context:
        "Live events run on a script that never survives contact with reality — a vendor is late, a room floods, a speaker misses a flight. Organizers absorb these shocks manually, over group chats and phone calls, while the event itself keeps moving.",
      problem:
        "Disruptions are rarely isolated. A fifteen-minute delay in one session cascades into catering, staffing, and attendee communication, but no single person on an event team has visibility into every downstream effect at once.",
      approach:
        "We treated the event as a live dependency graph rather than a static schedule, and designed an agent that reasons over that graph — surfacing who and what a disruption touches before a human has to piece it together.",
      system:
        "Helm ingests the event's run-of-show, staffing map, and vendor contacts, then listens for reported incidents. An agent layer classifies each incident, traces its downstream impact across the dependency graph, and drafts a resolution plan with the people who need to act.",
      interface:
        "Organizers work from a single operational view: an incident feed, an impact map showing what's affected, and a recommended action queue they can approve or edit in one tap — built to be usable from a phone in a loud venue.",
      contribution:
        "I worked within the team on the incident-classification and impact-tracing logic, and built the operational UI that turns the agent's reasoning into an interface an organizer can act on under pressure.",
      outcome:
        "A working prototype that took an event team from manually re-deriving impact on every disruption to reviewing a system-generated plan and coordinating from a shared view of the incident.",
      reflection:
        "The hardest part wasn't the AI — it was resisting the urge to automate the decision itself. Organizers needed a system that reasoned quickly and then got out of the way, not one that tried to be the decision-maker.",
    },
  },
  {
    title: "MovieVerse",
    type: "web",
    category: "Responsive web application",
    year: "2025",
    description:
      "A BookMyShow-inspired experience for browsing movies and moving through ticket booking workflows.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/projects/movieverse.png",
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
    image: "/images/projects/postmortor.png",
    href: "https://github.com/Lakshan-Adhithyaa",
  },
  {
    title: "SolarShare",
    type: "web",
    category: "Virtual net metering platform",
    year: "2025",
    description:
      "A virtual net metering platform letting renters and apartment residents draw on shared community solar farms — no rooftop installation required. An allocation engine paired with a blockchain-based credit system transparently calculates and distributes each subscriber's share of generation.",
    stack: ["Blockchain", "Allocation engine", "Clean energy"],
    image: "/images/projects/solarshare.png",
    href: "https://github.com/Lakshan-Adhithyaa",
    caseStudy: {
      context:
        "Rooftop solar rewards homeowners who own a roof. Renters and apartment residents — a majority of energy users in dense cities — have no equivalent path onto clean generation, even when a community solar farm sits a few kilometers away.",
      problem:
        "Community solar exists, but allocating its output fairly among subscribers who never touch the physical asset is opaque by default: who generated what, on which day, and whose credit is it?",
      approach:
        "Rather than treat allocation as a billing afterthought, I designed it as the product's core system — an engine that meters generation, splits it by subscription share, and settles it through credits every subscriber can independently verify.",
      system:
        "An allocation engine ingests farm-level generation data and each subscriber's committed share, computing individual entitlements on a fixed interval. Those entitlements are written as credits to a blockchain-based ledger, so allocation history is transparent and cannot be quietly altered.",
      interface:
        "Subscribers see a simple dashboard: their live share of the farm's output, accumulating credits, and a running record of allocations — the blockchain settlement layer stays invisible unless someone wants to audit it.",
      contribution:
        "I designed the allocation logic end to end and the credit-settlement flow that ties computed shares to verifiable ledger entries, along with the subscriber-facing dashboard.",
      outcome:
        "A working model of virtual net metering that removes the rooftop requirement entirely — subscribing to a share of a community farm becomes as simple as subscribing to a utility plan.",
      reflection:
        "Transparency was the real design constraint, not the blockchain itself. The technology only mattered insofar as it let a subscriber trust a number they had no way to independently measure.",
    },
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
  honors: "Quantum Honors",
  institution: "R.M.D. Engineering College",
  location: "R.S.M Nagar, Kavaraipettai, Gummidipoondi",
  batch: "2024 – 2028",
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
