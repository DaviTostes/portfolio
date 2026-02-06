"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/animations/cursor-glow";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";
import { ExperienceSection } from "@/sections/experience";
import { ContactSection } from "@/sections/contact";

export default function Home() {
  return (
    <ThemeProvider>
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
