import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "football-ecommerce",
    title: "Aguiar Store",
    description:
      "E-commerce platform for football jerseys with a React/TypeScript/Tailwind frontend, Golang API backend, and Stripe payment integration.",
    longDescription:
      "A full-stack e-commerce solution featuring product browsing, cart management, and secure Stripe payments. Built with a modern React frontend and a performant Golang API backend.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Golang", "Stripe"],
    category: "Full Stack",
    liveUrl: "https://aguiarstore.com",
  },
  {
    id: "go-mapper",
    title: "Go Mapper",
    description:
      "Go package for mapping values between structs, inspired by AutoMapper from .NET. Uses reflection to minimize boilerplate code with an intuitive API for custom mappings.",
    longDescription:
      "A powerful struct-to-struct mapping library for Go that brings AutoMapper-like functionality. Supports custom field transformations, nested struct mapping, and list mapping with a simple declarative API.",
    techStack: ["Go", "Reflection"],
    category: "Tools",
    githubUrl: "https://github.com/DaviTostes/go-mapper",
  },
  {
    id: "lazyollama",
    title: "Lazy Ollama",
    description:
      "Terminal-based CLI for interacting with Ollama models. Features chat management, model switching, RAG support with embeddings, and special commands like LeetCode problem solving.",
    longDescription:
      "A lightweight CLI tool to manage and interact with local Ollama AI models directly from the terminal. Supports multiple chats, context embedding with RAG (Retrieval-Augmented Generation), and productivity commands for developers.",
    techStack: ["Go", "Ollama", "RAG", "Embeddings"],
    category: "Tools",
    githubUrl: "https://github.com/DaviTostes/lazyollama",
  },
  {
    id: "htmask",
    title: "htmask.js",
    description:
      "Lightweight, zero-dependency JavaScript library for creating input masks on HTML elements. Declarative API using mask attributes for phone numbers, dates, and custom patterns.",
    longDescription:
      "A minimal vanilla JavaScript library that formats user input on the fly. Supports digit and letter masks, handles pasting, and features auto-advancing cursor for a smooth user experience.",
    techStack: ["JavaScript", "Vanilla JS"],
    category: "Frontend",
    githubUrl: "https://github.com/DaviTostes/htmask",
  },
  {
    id: "toast-nvim",
    title: "Toast",
    description:
      "Neovim plugin for AI-powered in-buffer code transformations using OpenCode CLI. Transform code with natural language prompts directly in your editor.",
    longDescription:
      "A Neovim plugin that integrates with OpenCode to provide AI-powered code modifications. Features a modal UI with loading animations, works on entire buffers or visual selections, and supports all AI models available through OpenCode.",
    techStack: ["Lua", "Neovim", "OpenCode"],
    category: "Tools",
    githubUrl: "https://github.com/DaviTostes/toast",
  },
];
