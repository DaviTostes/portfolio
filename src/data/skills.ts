import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Backend
  { name: "C# / .NET Core", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },
  { name: "Golang (Gin, Gorm)", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Event Sourcing", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "Identity / JWT", category: "Backend" },
  { name: "AutoMapper / Mediator", category: "Backend" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Flutter", category: "Frontend" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Azure Container Apps", category: "DevOps" },
  { name: "Azure App Service", category: "DevOps" },
  { name: "Firebase", category: "DevOps" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "PostgreSQL", category: "Tools" },
  { name: "SQL Server", category: "Tools" },
  { name: "Bruno CLI", category: "Tools" },
  { name: "Neovim", category: "Tools" },

  // Languages
  { name: "C#", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Lua", category: "Languages" },
];
