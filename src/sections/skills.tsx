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

function SkillBar({
  name,
  level,
  color,
  inView,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  inView: boolean;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {name}
        </span>
        <motion.span
          className="font-mono text-xs"
          style={{ color }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--color-border)]/50">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Frontend");
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
                skills.json
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
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
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
{`{
  "category": "${activeCategory}",
  "skills": ${filteredSkills.length},
  "avg_level": ${Math.round(
    filteredSkills.reduce((a, b) => a + b.level, 0) /
      filteredSkills.length
  )}
}`}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Skill bars */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              {filteredSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={categoryColors[activeCategory]}
                  inView={inView}
                  delay={i * 0.08}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
