"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useThemeStore } from "@/store/theme-store";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useThemeStore((s) => s.reducedMotion);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [x, y, visible, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
