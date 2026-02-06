"use client";

import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/theme-store";
import { getThemeCSS } from "@/utils/theme-variants";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, variant, reducedMotion } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    const css = getThemeCSS(variant);
    Object.entries(css).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    if (reducedMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }
  }, [theme, variant, reducedMotion]);

  // Detect system preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      useThemeStore.getState().setReducedMotion(true);
    }
  }, []);

  return <>{children}</>;
}
