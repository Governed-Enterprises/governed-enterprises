"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SITE_CONTENT } from "@/lib/constants";

function GEEmblem() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-20 h-[93px] md:w-[120px] md:h-[140px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield / hexagon shape */}
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
      {/* GE monogram */}
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
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_65%)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            filter: "drop-shadow(0 0 20px rgba(201,168,76,0.15))",
          }}
        >
          <GEEmblem />
        </motion.div>

        {/* Hook statement */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-ge-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          {SITE_CONTENT.hookStatement}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-sm tracking-[0.15em] uppercase text-ge-gold-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {SITE_CONTENT.hookSubtext}
        </motion.p>
      </div>

      {/* Scroll-down arrow */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToOrigin}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        aria-label="Scroll to origin story"
      >
        <ChevronDown className="w-6 h-6 text-ge-gold/60 animate-pulse-gentle" />
      </motion.button>
    </section>
  );
}
