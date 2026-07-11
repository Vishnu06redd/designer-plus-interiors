"use client";

import { motion, type Variants } from "framer-motion";

type LogoMarkProps = {
  size?: number;
  animate?: boolean;
  className?: string;
};

const piece: Variants = {
  hidden: (i: number) => ({ opacity: 0, scale: 0.4, y: i % 2 === 0 ? -14 : 14 }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Reconstructs the three hexagon segments + isometric cube from the
 * Designer Plus Interiors mark as independently animatable SVG pieces.
 */
export function LogoMark({ size = 56, animate = true, className }: LogoMarkProps) {
  const segments = [
    { d: "M50 4 L90 26 L50 48 L10 26 Z", fill: "url(#dpi-crimson)", i: 0 },
    { d: "M90 26 L90 74 L50 96 L50 48 Z", fill: "url(#dpi-orange)", i: 1 },
    { d: "M10 26 L10 74 L50 96 L50 48 Z", fill: "url(#dpi-burgundy)", i: 2 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      role="img"
      aria-label="Designer Plus Interiors mark"
    >
      <defs>
        <linearGradient id="dpi-crimson" x1="10" y1="4" x2="90" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4a2c" />
          <stop offset="1" stopColor="#d92818" />
        </linearGradient>
        <linearGradient id="dpi-orange" x1="50" y1="26" x2="90" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f9a13a" />
          <stop offset="1" stopColor="#f2811e" />
        </linearGradient>
        <linearGradient id="dpi-burgundy" x1="10" y1="26" x2="50" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7a1730" />
          <stop offset="1" stopColor="#5c0f22" />
        </linearGradient>
      </defs>

      {segments.map((s) => (
        <motion.path
          key={s.d}
          d={s.d}
          fill={s.fill}
          custom={s.i}
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          variants={piece}
        />
      ))}

      {/* inner cube */}
      <motion.g
        custom={3}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        variants={piece}
      >
        <path d="M50 34 L66 43 L50 52 L34 43 Z" fill="#f3b53d" />
        <path d="M34 43 L50 52 L50 70 L34 61 Z" fill="#f2811e" />
        <path d="M66 43 L50 52 L50 70 L66 61 Z" fill="#d92818" />
      </motion.g>
    </svg>
  );
}
