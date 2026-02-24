"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { DIVISIONS } from "@/lib/constants";

/**
 * CommandCenter — Division grid placeholder for Phase 2.
 * Will be populated with interactive division cards.
 */
export default function CommandCenter() {
  return (
    <section className="relative py-32 px-6 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-ivory mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Command Center
        </motion.h2>

        <motion.p
          className="text-center text-secondary mb-16 tracking-widest uppercase text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Division access — Phase 2
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.id}
              className="border border-gold/10 rounded-lg p-6 bg-steel/30 flex flex-col items-center justify-center text-center min-h-[200px] cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Lock className="w-8 h-8 text-gold/30 mb-4" />
              <h3 className="text-ivory font-semibold mb-1">
                {division.name}
              </h3>
              <p className="text-muted text-sm">{division.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
