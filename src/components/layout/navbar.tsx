"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Menu,
  X,
  Sun,
  Moon,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigationStore } from "@/store/navigation-store";
import { useThemeStore } from "@/store/theme-store";
import type { ThemeVariant } from "@/types";

const navItems = [
  { id: "hero", label: "~/home" },
  { id: "about", label: "~/about" },
  { id: "projects", label: "~/projects" },
  { id: "skills", label: "~/skills" },
  { id: "experience", label: "~/experience" },
  { id: "contact", label: "~/contact" },
];

const themeOptions: { id: ThemeVariant; label: string }[] = [
  { id: "default", label: "Default" },
  { id: "dracula", label: "Dracula" },
  { id: "nord", label: "Nord" },
  { id: "gruvbox", label: "Gruvbox" },
  { id: "monokai", label: "Monokai" },
];

export function Navbar() {
  const { activeSection, mobileMenuOpen, setMobileMenuOpen } =
    useNavigationStore();
  const { theme, toggleTheme, variant, setVariant } = useThemeStore();
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors group-hover:border-[var(--color-accent)]">
              <Terminal className="h-4 w-4 text-[var(--color-accent)]" />
            </div>
            <span className="font-mono text-sm font-semibold text-[var(--color-text)] hidden sm:block">
              davi<span className="text-[var(--color-accent)]">.</span>tostes
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-3 py-1.5 font-mono text-xs transition-colors rounded-md",
                  activeSection === item.id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Variant Selector */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]"
                aria-label="Change theme variant"
              >
                <Palette className="h-4 w-4 text-[var(--color-text-muted)]" />
              </button>

              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-10 glass rounded-lg p-1 min-w-[140px] z-50"
                  >
                    {themeOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setVariant(opt.id);
                          setShowThemeMenu(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md px-3 py-1.5 font-mono text-xs transition-colors",
                          variant === opt.id
                            ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                            : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                        )}
                      >
                        {variant === opt.id && (
                          <span className="text-[var(--color-green)]">{">"}</span>
                        )}
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-[var(--color-yellow)]" />
              ) : (
                <Moon className="h-4 w-4 text-[var(--color-purple)]" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4 text-[var(--color-text)]" />
              ) : (
                <Menu className="h-4 w-4 text-[var(--color-text)]" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-sm md:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-64 border-l border-[var(--color-border)] bg-[var(--color-surface)] p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 font-mono text-sm transition-colors text-left",
                      activeSection === item.id
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                    )}
                  >
                    <span className="text-[var(--color-accent)]">$</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
