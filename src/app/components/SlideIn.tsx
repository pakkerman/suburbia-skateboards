"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export default function SlideIn({
  children,
  duration = 0.6,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curr = ref.current;
    if (!curr) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          curr.style.animation = `slide-in ${duration}s ease ${delay}s forwards`;
          observer.unobserve(curr);
        }
      },
      { threshold: 0, rootMargin: "-150px" },
    );

    observer.observe(curr);

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div ref={ref} className="slide-in-hidden">
      {children}
    </div>
  );
}
