"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigationStore } from "@/store/navigation-store";

export function useSectionObserver(sectionId: string, threshold = 0.3) {
  const setActiveSection = useNavigationStore((s) => s.setActiveSection);

  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-80px 0px -40% 0px",
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection]);

  return { ref, inView };
}
