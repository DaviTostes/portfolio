"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      reducedMotion: false,
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    {
      name: "portfolio-theme",
    },
  ),
);
