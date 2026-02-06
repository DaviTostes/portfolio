"use client";

import { create } from "zustand";

interface NavigationState {
  activeSection: string;
  mobileMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useNavigationStore = create<NavigationState>()((set) => ({
  activeSection: "hero",
  mobileMenuOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
}));
