import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Backend
  { name: "C# / .NET Core", level: 90, category: "Backend" },
  { name: "Entity Framework", level: 85, category: "Backend" },
  { name: "Golang (Gin, Gorm)", level: 85, category: "Backend" },
  { name: "REST APIs", level: 92, category: "Backend" },
  { name: "Event Sourcing", level: 80, category: "Backend" },
  { name: "Microservices", level: 78, category: "Backend" },
  { name: "Identity / JWT", level: 82, category: "Backend" },
  { name: "AutoMapper / Mediator", level: 80, category: "Backend" },

  // Frontend
  { name: "React", level: 82, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Angular", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Flutter", level: 65, category: "Frontend" },

  // DevOps
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "GitHub Actions", level: 82, category: "DevOps" },
  { name: "Azure Container Apps", level: 78, category: "DevOps" },
  { name: "Azure App Service", level: 75, category: "DevOps" },
  { name: "Firebase", level: 72, category: "DevOps" },

  // Tools
  { name: "Git", level: 90, category: "Tools" },
  { name: "PostgreSQL", level: 85, category: "Tools" },
  { name: "SQL Server", level: 80, category: "Tools" },
  { name: "Bruno CLI", level: 72, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },

  // Languages
  { name: "C#", level: 90, category: "Languages" },
  { name: "Go", level: 85, category: "Languages" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "SQL", level: 82, category: "Languages" },
  { name: "Dart", level: 60, category: "Languages" },
];
