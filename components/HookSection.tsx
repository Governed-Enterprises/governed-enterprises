"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SITE_CONTENT } from "@/lib/constants";

function GEEmblem() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-16 h-[75px] sm:w-20 sm:h-[93px] lg:w-[120px] lg:h-[140px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 4L112 30V85C112 102 90 122 60 136C30 122 8 102 8 85V30L60 4Z"
        stroke="#c9a84c"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M60 12L106 35V84C106 98 86 116 60 129C34 116 14 98 14 84V35L60 12Z"
        fill="#c9a84c"
        fillOpacity="0.06"
      />
      <text
        x="60"
        y="80"
        textAnchor="middle"
        className="font-heading"
        fontSize="38"
        fontWeight="700"
        fill="#c9a84c"
        letterSpacing="2"
      >
        GE
      </text>
    </svg>
  );
}

export default function HookSection() {
  const scrollToOrigin = () => {
    document.getElementById("origin")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-ge-background"
      style={{ height: "calc(100vh - 36px)", marginTop: "36px" }}
      aria-label="Introduction"
    >
      {/* Radial focus gradient — draws eye to center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#141414_0%,_#0f0f0f_70%)]" />

      {/* Subtle gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_65%)]" />

      {/* Geometric hexagonal pattern (Torah-inspired) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex-pattern" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path
              d="M28 2L54 18V50L28 66L2 50V18Z"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.5"
            />
            <path
              d="M28 34L54 50V82L28 98L2 82V50Z"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>

      {/* Bottom gradient blend into OriginStory */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-ge-background-alt" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8 will-change-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 20px rgba(201,168,76,0.15))",
          }}
        >
          <GEEmblem />
        </motion.div>

        {/* Hook statement */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-ge-primary will-change-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {SITE_CONTENT.hookStatement}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-ge-secondary max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {SITE_CONTENT.hookSubtext}
        </motion.p>

        <motion.p
          className="mt-3 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-ge-gold-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Est. 2024 · Eau Claire, Wisconsin
        </motion.p>
      </div>

      {/* Scroll-down arrow */}
      <motion.button
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-2 z-10 will-change-transform"
        onClick={scrollToOrigin}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.9 }}
        aria-label="Scroll to origin story"
      >
        <ChevronDown className="w-6 h-6 text-ge-gold/60 animate-pulse-gentle" />
      </motion.button>
    </section>
  );
}
