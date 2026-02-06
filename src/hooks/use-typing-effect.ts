"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export function useTypingEffect({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  loop = true,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length + 1));

      if (displayText.length === currentText.length) {
        if (!loop && textIndex === texts.length - 1) {
          setIsComplete(true);
          return;
        }
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentText.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime, loop]);

  useEffect(() => {
    if (isComplete) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, isComplete]);

  return { displayText, isComplete, isDeleting };
}
