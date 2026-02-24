"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HOOK_CONTENT } from "@/lib/constants";

export default function HookSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-obsidian overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {HOOK_CONTENT.headline}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl tracking-[0.3em] uppercase text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {HOOK_CONTENT.subheadline}
        </motion.p>

        <motion.p
          className="mt-8 text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {HOOK_CONTENT.description}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-gold/50" />
      </motion.div>
    </section>
  );
}
