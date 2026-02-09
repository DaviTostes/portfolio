"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";
import { staggerContainer, staggerItem } from "@/utils/animation-variants";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "Tools",
  "Languages",
];

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "var(--color-cyan)",
  Backend: "var(--color-green)",
  DevOps: "var(--color-purple)",
  Tools: "var(--color-yellow)",
  Languages: "var(--color-accent-secondary)",
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="// Technologies I work with daily"
    >
      <div ref={ref} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Category Selector */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="code-block p-4 sticky top-24"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-red)]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-yellow)]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-green)]" />
              </div>
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                skills.ts
              </span>
            </div>

            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 font-mono text-sm transition-all text-left",
                    activeCategory === cat
                      ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]",
                  )}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        activeCategory === cat
                          ? categoryColors[cat]
                          : "var(--color-border)",
                    }}
                  />
                  {cat}
                  <span className="ml-auto font-mono text-[10px] text-[var(--color-text-muted)]">
                    {skills.filter((s) => s.category === cat).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Decorative code */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
              <pre className="font-mono text-[10px] leading-relaxed text-[var(--color-text-muted)]/50">
                {`const ${activeCategory.toLowerCase()} = [
  ${filteredSkills
    .slice(0, 3)
    .map((s) => `"${s.name}"`)
    .join(",\n  ")}${filteredSkills.length > 3 ? ",\n  ..." : ""}
];`}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Skills List */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-3"
            >
              {filteredSkills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="group cursor-default rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 font-mono text-sm text-[var(--color-text)] transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5"
                  style={{
                    ["--skill-color" as string]: categoryColors[activeCategory],
                  }}
                >
                  <span
                    className="mr-2 inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: categoryColors[activeCategory] }}
                  />
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
