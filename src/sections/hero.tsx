"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { personalInfo } from "@/data/personal";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animation-variants";

const floatingSnippets = [
  { text: "const passion = 'infinite';", x: "10%", y: "20%", delay: 0.5 },
  { text: "while(alive) { code(); }", x: "75%", y: "15%", delay: 1.2 },
  { text: "// TODO: change the world", x: "80%", y: "65%", delay: 0.8 },
  { text: "git commit -m 'ship it'", x: "5%", y: "70%", delay: 1.5 },
  { text: "npm run build:future", x: "65%", y: "85%", delay: 2.0 },
];

export function HeroSection() {
  const { ref } = useSectionObserver("hero", 0.2);
  const { displayText } = useTypingEffect({
    texts: [
      "Back-end Developer",
      "Full Stack Developer",
      "C# / .NET Core Specialist",
      "Golang Enthusiast",
    ],
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseTime: 2500,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const consoleLines = useMemo(
    () => [
      { prefix: "~", text: "whoami", color: "var(--color-green)" },
      { prefix: "=>", text: personalInfo.name, color: "var(--color-accent)" },
      { prefix: "~", text: "cat role.txt", color: "var(--color-green)" },
      { prefix: "=>", text: personalInfo.title, color: "var(--color-yellow)" },
      { prefix: "~", text: "echo $STATUS", color: "var(--color-green)" },
      { prefix: "=>", text: "Open to opportunities", color: "var(--color-cyan)" },
    ],
    []
  );

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      {/* Floating code snippets */}
      {mounted &&
        floatingSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute hidden font-mono text-[10px] text-[var(--color-text-muted)]/30 select-none lg:block"
            style={{ left: snippet.x, top: snippet.y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.4, 0],
              y: [0, -10, -10, 0],
            }}
            transition={{
              duration: 8,
              delay: snippet.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {snippet.text}
          </motion.div>
        ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-green)]" />
              </span>
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-[var(--color-text)]">Hi, I&apos;m </span>
              <span className="text-[var(--color-accent)] glow-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-2 font-mono text-lg sm:text-xl"
            >
              <span className="text-[var(--color-accent-secondary)]">{">"}</span>
              <span className="text-[var(--color-text)]">{displayText}</span>
              <span className="terminal-cursor inline-block h-5 w-[2px] bg-[var(--color-accent)]" />
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {personalInfo.tagline}. From event-sourced APIs to payment
              gateway integrations, I build systems that scale.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-bg)] transition-all hover:shadow-[0_0_20px_var(--color-accent)/30] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
                <span className="text-[var(--color-bg)]/60 transition-transform group-hover:translate-x-0.5">
                  {"->"}
                </span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 font-mono text-sm text-[var(--color-text)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Terminal card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="code-block overflow-hidden shadow-2xl shadow-black/20">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-red)]" />
                  <div className="h-3 w-3 rounded-full bg-[var(--color-yellow)]" />
                  <div className="h-3 w-3 rounded-full bg-[var(--color-green)]" />
                </div>
                <span className="ml-2 font-mono text-xs text-[var(--color-text-muted)]">
                  ~/portfolio &mdash; zsh
                </span>
              </div>
              {/* Lines */}
              <div className="p-4 space-y-1.5">
                {consoleLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                    className="flex items-center gap-2 font-mono text-sm"
                  >
                    <span className="text-[var(--color-text-muted)]">
                      {line.prefix}
                    </span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex items-center gap-2 font-mono text-sm pt-1"
                >
                  <span className="text-[var(--color-text-muted)]">~</span>
                  <span className="terminal-cursor inline-block h-4 w-[7px] bg-[var(--color-text-muted)]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Scroll down"
          >
            <span className="font-mono text-[10px]">scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
