"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Search,
  X,
  Star,
  Package,
} from "lucide-react";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/utils/animation-variants";
import type { Project } from "@/types";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={staggerItem}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_-10px_var(--color-accent)]"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Package className="h-3.5 w-3.5 text-[var(--color-accent)]" />
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {project.category.toLowerCase()}
          </span>
        </div>
        {project.featured && (
          <div className="flex items-center gap-1 rounded-full bg-[var(--color-yellow)]/10 px-2 py-0.5">
            <Star className="h-3 w-3 text-[var(--color-yellow)]" />
            <span className="font-mono text-[10px] text-[var(--color-yellow)]">featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-mono text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)] transition-colors group-hover:border-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
            >
              <ExternalLink className="h-3 w-3" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
            >
              <Github className="h-3 w-3" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--color-accent) 4%, transparent), transparent 40%)",
        }}
      />
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="// Things I've built and shipped"
    >
      <div ref={ref}>
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-lg px-3 py-1.5 font-mono text-xs transition-all",
                  activeCategory === cat
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_0_15px_var(--color-accent)/20]"
                    : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-10 pr-8 font-mono text-xs text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)] focus:outline-none sm:w-64"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="font-mono text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-yellow)]">warn:</span> No
              projects match your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
