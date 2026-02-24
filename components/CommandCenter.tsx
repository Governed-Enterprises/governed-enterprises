"use client";

import { motion } from "framer-motion";
import { DIVISIONS, type DivisionCategory } from "@/lib/constants";

const CATEGORY_ORDER: DivisionCategory[] = [
  "CULTURE",
  "COMMERCE",
  "JUSTICE & OPERATIONS",
];

function groupByCategory() {
  const groups = new Map<DivisionCategory, typeof DIVISIONS>();
  for (const cat of CATEGORY_ORDER) {
    groups.set(
      cat,
      DIVISIONS.filter((d) => d.category === cat)
    );
  }
  return groups;
}

export default function CommandCenter() {
  const groups = groupByCategory();

  return (
    <section
      id="command-center"
      className="relative bg-ge-background py-16 md:py-24 px-6"
      aria-label="Division command center"
    >
      <div className="max-w-5xl mx-auto">
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

        {/* Category groups */}
        <div className="mt-12 space-y-12">
          {CATEGORY_ORDER.map((category) => {
            const divisions = groups.get(category);
            if (!divisions || divisions.length === 0) return null;

            return (
              <div key={category}>
                {/* Category label */}
                <motion.h3
                  className="text-sm font-semibold uppercase tracking-wide text-ge-gold text-center md:text-left mb-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {category}
                </motion.h3>

                {/* Division cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {divisions.map((division, i) => (
                    <motion.div
                      key={division.id}
                      className="border border-ge-gold/10 rounded-lg p-6 bg-ge-background-alt min-h-[120px] flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-30px" }}
                    >
                      <span className="text-ge-primary text-sm font-medium">
                        {division.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
