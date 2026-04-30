export interface Skill {
  name: string
  icon: string
  category: string
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  count: number
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  challenges: string
  improvements: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  name: string
  href: string
}
