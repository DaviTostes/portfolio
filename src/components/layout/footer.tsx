"use client";

import { Github, Linkedin, Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="text-[var(--color-green)]">$</span>
            <span>
              Built with <Heart className="inline h-3 w-3 text-[var(--color-red)]" /> by{" "}
              <span className="text-[var(--color-accent)]">{personalInfo.name}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              // connect
            </span>
            {personalInfo.socialLinks.map((link) => {
              const Icon =
                link.icon === "github"
                  ? Github
                  : Linkedin;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_10px_var(--color-accent)/20]"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="font-mono text-xs text-[var(--color-text-muted)]">
            <span className="text-[var(--color-yellow)]">v1.0.0</span>{" "}
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
