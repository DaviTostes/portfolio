"use client";

import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/theme-store";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { reducedMotion } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "dark");

    if (reducedMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  // Detect system preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      useThemeStore.getState().setReducedMotion(true);
    }
  }, []);

  return <>{children}</>;
}
