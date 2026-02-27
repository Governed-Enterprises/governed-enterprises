"use client";

import { motion } from "framer-motion";
import { DIVISIONS } from "@/lib/constants";
import DivisionCard from "@/components/DivisionCard";

export default function CommandCenter() {
  return (
    <section
      id="command-center"
      className="relative bg-ge-background py-16 md:py-24 px-4 sm:px-6"
      aria-label="Division command center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Gold divider */}
        <motion.div
          className="w-[60%] mx-auto h-px bg-ge-gold/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        />

        {/* Section label */}
        <motion.p
          className="mt-8 text-center text-xs tracking-[0.3em] uppercase text-ge-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Divisions
        </motion.p>

        {/* Division card — single centered */}
        <div className="mt-10 sm:mt-12 max-w-md mx-auto">
          {DIVISIONS.map((division, i) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <DivisionCard division={division} />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-ge-dim"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          New divisions are added as they&apos;re built. We ship what&apos;s real.
        </motion.p>
      </div>
    </section>
  );
}
