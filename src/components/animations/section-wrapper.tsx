"use client";

import { motion } from "framer-motion";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  const { ref, inView } = useSectionObserver(id);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-20 sm:py-28 lg:py-32", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                {">"} {id}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-border)] to-transparent" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 font-mono text-sm text-[var(--color-text-muted)] max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
