import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ectapay-gateway",
    title: "Payment Gateway Wrapper",
    description:
      "API wrapper for integrating with multiple payment gateways, featuring RBAC, E2E testing with Bruno CLI, and CI/CD deployment to Azure Container Apps.",
    longDescription:
      "Built a unified API layer that abstracts multiple payment gateway providers, allowing seamless integration and switching between payment processors. Includes role-based access control, comprehensive E2E testing, and automated deployment pipelines.",
    techStack: ["Golang", "Gin", "Gorm", "GitHub Actions", "Azure", "Bruno CLI"],
    category: "Backend",
    featured: true,
  },
  {
    id: "bizucash-api",
    title: "Bizu Cash Platform",
    description:
      "REST API built with Event Sourcing architecture in C#, featuring JWT auth, real-time SSE communication, and Azure deployment with PostgreSQL.",
    longDescription:
      "A comprehensive financial platform with an event-sourced backend ensuring full auditability. Includes real-time server-sent events for live updates, JWT-based authentication, and a robust Azure-hosted infrastructure.",
    techStack: ["C#", ".NET Core", "PostgreSQL", "Azure", "JWT", "SSE"],
    category: "Backend",
    featured: true,
  },
  {
    id: "receipt-printer",
    title: "Receipt Printer Service",
    description:
      "Cross-platform desktop application in Go for automatic fiscal receipt printing, running as a system service on Windows and Linux.",
    techStack: ["Golang", "Windows Service", "Linux Daemon"],
    category: "Backend",
    featured: true,
  },
  {
    id: "cacatoo-app",
    title: "Cacatoo Mobile App",
    description:
      "Full-stack mobile application built with Flutter for the frontend and a Golang REST API with Firebase for the backend.",
    techStack: ["Flutter", "Dart", "Golang", "Firebase"],
    category: "Full Stack",
  },
  {
    id: "dam-erp",
    title: "Supermarket ERP",
    description:
      "Enterprise resource planning system for supermarkets with modules for access control, inventory, product management, and point of sale.",
    techStack: ["Angular", "C#", ".NET", "SQL Server"],
    category: "Full Stack",
  },
  {
    id: "football-ecommerce",
    title: "Football Jersey E-commerce",
    description:
      "E-commerce platform for football jerseys with a React/TypeScript/Tailwind frontend, Golang API backend, and Stripe payment integration.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Golang", "Stripe"],
    category: "Full Stack",
    featured: true,
  },
];
