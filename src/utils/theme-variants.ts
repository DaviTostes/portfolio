import type { ThemeVariant } from "@/types";

interface ThemeColors {
  bg: string;
  bgSecondary: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSecondary: string;
  border: string;
  surface: string;
  green: string;
  yellow: string;
  red: string;
  blue: string;
  purple: string;
  cyan: string;
}

export const themeVariants: Record<ThemeVariant, ThemeColors> = {
  default: {
    bg: "#0a0a0f",
    bgSecondary: "#12121a",
    text: "#e4e4e7",
    textMuted: "#71717a",
    accent: "#22d3ee",
    accentSecondary: "#a78bfa",
    border: "#27272a",
    surface: "#18181b",
    green: "#4ade80",
    yellow: "#facc15",
    red: "#f87171",
    blue: "#60a5fa",
    purple: "#a78bfa",
    cyan: "#22d3ee",
  },
  dracula: {
    bg: "#282a36",
    bgSecondary: "#1e1f29",
    text: "#f8f8f2",
    textMuted: "#6272a4",
    accent: "#bd93f9",
    accentSecondary: "#ff79c6",
    border: "#44475a",
    surface: "#343746",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    red: "#ff5555",
    blue: "#8be9fd",
    purple: "#bd93f9",
    cyan: "#8be9fd",
  },
  nord: {
    bg: "#2e3440",
    bgSecondary: "#272c36",
    text: "#eceff4",
    textMuted: "#7b88a1",
    accent: "#88c0d0",
    accentSecondary: "#81a1c1",
    border: "#3b4252",
    surface: "#3b4252",
    green: "#a3be8c",
    yellow: "#ebcb8b",
    red: "#bf616a",
    blue: "#81a1c1",
    purple: "#b48ead",
    cyan: "#88c0d0",
  },
  gruvbox: {
    bg: "#1d2021",
    bgSecondary: "#282828",
    text: "#ebdbb2",
    textMuted: "#928374",
    accent: "#fe8019",
    accentSecondary: "#fabd2f",
    border: "#3c3836",
    surface: "#32302f",
    green: "#b8bb26",
    yellow: "#fabd2f",
    red: "#fb4934",
    blue: "#83a598",
    purple: "#d3869b",
    cyan: "#8ec07c",
  },
  monokai: {
    bg: "#1e1f1c",
    bgSecondary: "#272822",
    text: "#f8f8f2",
    textMuted: "#75715e",
    accent: "#a6e22e",
    accentSecondary: "#f92672",
    border: "#3e3d32",
    surface: "#2d2e27",
    green: "#a6e22e",
    yellow: "#e6db74",
    red: "#f92672",
    blue: "#66d9ef",
    purple: "#ae81ff",
    cyan: "#66d9ef",
  },
};

export function getThemeCSS(variant: ThemeVariant): Record<string, string> {
  const colors = themeVariants[variant];
  return {
    "--color-bg": colors.bg,
    "--color-bg-secondary": colors.bgSecondary,
    "--color-text": colors.text,
    "--color-text-muted": colors.textMuted,
    "--color-accent": colors.accent,
    "--color-accent-secondary": colors.accentSecondary,
    "--color-border": colors.border,
    "--color-surface": colors.surface,
    "--color-green": colors.green,
    "--color-yellow": colors.yellow,
    "--color-red": colors.red,
    "--color-blue": colors.blue,
    "--color-purple": colors.purple,
    "--color-cyan": colors.cyan,
  };
}
