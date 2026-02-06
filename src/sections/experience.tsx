"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

function TimelineNode({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15, duration: 0.4, type: "spring" }}
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
            expanded
              ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10"
              : "border-[var(--color-border)] bg-[var(--color-surface)]"
          )}
        >
          <Briefcase
            className="h-4 w-4"
            style={{
              color: expanded
                ? "var(--color-accent)"
                : "var(--color-text-muted)",
            }}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            className="w-px bg-gradient-to-b from-[var(--color-border)] to-transparent"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
        className="flex-1 pb-12"
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left group"
          aria-expanded={expanded}
        >
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:shadow-black/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {experience.role}
                </h3>
                <p className="mt-0.5 font-mono text-sm text-[var(--color-accent-secondary)]">
                  {experience.company}
                </p>
                <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
                  {experience.period}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-[var(--color-text-muted)]" />
              </motion.div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {experience.description}
            </p>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <h4 className="font-mono text-xs text-[var(--color-green)] mb-2">
                      // Key achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--color-accent)] shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {experience.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="// Where I've been building things"
    >
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineNode
            key={exp.id}
            experience={exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
