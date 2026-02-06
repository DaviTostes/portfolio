import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ectapay",
    company: "EctaPay",
    role: "Back-end Developer",
    period: "Oct 2025 - Present",
    description:
      "Building an API wrapper for integration with multiple payment gateways, implementing access control and end-to-end testing, with CI/CD deployment to Azure Container Apps.",
    achievements: [
      "Developed API wrapper for integrating multiple payment gateways in Golang (Gin, Gorm)",
      "Implemented RBAC (Role-Based Access Control) for secure API access",
      "Created end-to-end tests using Bruno CLI",
      "Set up CI/CD pipelines with GitHub Actions deploying to Azure Container Apps",
    ],
    techStack: ["Golang", "Gin", "Gorm", "GitHub Actions", "Azure Container Apps", "Bruno CLI"],
  },
  {
    id: "bizucash",
    company: "Bizu Cash",
    role: "Back-end Developer",
    period: "Sep 2023 - Present",
    description:
      "Core back-end developer building a REST API with Event Sourcing architecture in C#, a desktop receipt printing service in Go, and managing Azure infrastructure with PostgreSQL.",
    achievements: [
      "Built REST API in C# with Event Sourcing architecture",
      "Developed desktop application in Go for automatic receipt printing (Windows/Linux service)",
      "Managed deployment and infrastructure on Azure with PostgreSQL database",
      "Implemented JWT authentication and real-time communication with SSE (Server-Sent Events)",
    ],
    techStack: ["C#", ".NET Core", "Golang", "PostgreSQL", "Azure", "JWT", "SSE"],
  },
  {
    id: "cacatoo",
    company: "Cacatoo",
    role: "Full Stack Developer",
    period: "Feb 2024 - May 2024",
    description:
      "Developed a mobile application with Flutter and a REST API in Golang with Firebase for the back-end.",
    achievements: [
      "Built mobile application using Flutter",
      "Developed REST API in Golang integrated with Firebase",
      "Delivered full-stack mobile solution from concept to deployment",
    ],
    techStack: ["Flutter", "Golang", "Firebase", "REST API"],
  },
  {
    id: "dam-sistemas",
    company: "DAM Sistemas",
    role: "Intern",
    period: "May 2023 - Sep 2023",
    description:
      "Worked on an ERP system for supermarkets, building the front-end in Angular and a REST API in C# with features for access control, inventory, products, and POS.",
    achievements: [
      "Built front-end interfaces for supermarket ERP using Angular",
      "Developed REST API endpoints in C# for core business features",
      "Implemented modules for access control, inventory management, products, and POS (Point of Sale)",
    ],
    techStack: ["Angular", "C#", ".NET", "SQL Server", "REST API"],
  },
];
