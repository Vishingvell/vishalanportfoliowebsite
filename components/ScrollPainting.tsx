"use client";

import { useEffect, useRef } from "react";

export function ScrollPainting() {
  const colour = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? window.scrollY / distance : 1;
      if (colour.current) colour.current.style.opacity = String(motion.matches ? 1 : Math.min(1, Math.max(0, progress * 1.4)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-painting" aria-hidden="true"><div className="scroll-painting-ink" /><div className="scroll-painting-colour" ref={colour} /></div>;
}
