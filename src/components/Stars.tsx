import type { CSSProperties } from "react";

const STARS = [
  { top: "12%", left: "8%", dur: "4.6s", delay: "0s" },
  { top: "18%", left: "78%", dur: "5.2s", delay: "0.4s" },
  { top: "28%", left: "22%", dur: "6s", delay: "1.1s" },
  { top: "35%", left: "88%", dur: "4.2s", delay: "0.7s" },
  { top: "48%", left: "12%", dur: "5.8s", delay: "1.6s" },
  { top: "55%", left: "64%", dur: "4.9s", delay: "0.2s" },
  { top: "68%", left: "40%", dur: "6.4s", delay: "1.3s" },
  { top: "22%", left: "52%", dur: "5.5s", delay: "0.9s" },
  { top: "74%", left: "82%", dur: "4.4s", delay: "1.8s" },
  { top: "8%", left: "42%", dur: "5s", delay: "0.5s" },
] as const;

export function Stars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              top: star.top,
              left: star.left,
              "--dur": star.dur,
              "--delay": star.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
