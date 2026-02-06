"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Briefcase, GraduationCap, Coffee } from "lucide-react";
import { SectionWrapper } from "@/components/animations/section-wrapper";
import { personalInfo } from "@/data/personal";
import { staggerContainer, staggerItem } from "@/utils/animation-variants";

const highlights = [
  { icon: Briefcase, label: "3+ Years", description: "Professional experience", color: "var(--color-accent)" },
  { icon: Code2, label: "4 Companies", description: "Worked with", color: "var(--color-yellow)" },
  { icon: GraduationCap, label: "8th Sem", description: "Information Systems", color: "var(--color-green)" },
  { icon: Coffee, label: "∞", description: "Cups of coffee", color: "var(--color-red)" },
];

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="// A developer who cares about the craft"
    >
      <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Left column: bio */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 lg:col-span-3"
        >
          {personalInfo.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={staggerItem}
              className="text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Philosophy block */}
          <motion.div
            variants={staggerItem}
            className="code-block p-4 mt-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                {"/**"}
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-[var(--color-text-muted)] pl-3 border-l-2 border-[var(--color-accent)]/30">
              <span className="text-[var(--color-green)]"> * </span>
              {personalInfo.philosophy}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                {" */"}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-4 lg:col-span-2"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center transition-colors hover:border-[var(--color-accent)]/30"
            >
              <item.icon
                className="mb-3 h-6 w-6 transition-transform group-hover:scale-110"
                style={{ color: item.color }}
              />
              <span className="font-mono text-xl font-bold text-[var(--color-text)]">
                {item.label}
              </span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)]">
                {item.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
