export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Tools"
  | "Languages";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
