"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeVariant } from "@/types";

interface ThemeState {
  theme: "dark" | "light";
  variant: ThemeVariant;
  reducedMotion: boolean;
  setTheme: (theme: "dark" | "light") => void;
  toggleTheme: () => void;
  setVariant: (variant: ThemeVariant) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      variant: "dracula",
      reducedMotion: false,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
      setVariant: (variant) => set({ variant }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    {
      name: "portfolio-theme",
    }
  )
);
