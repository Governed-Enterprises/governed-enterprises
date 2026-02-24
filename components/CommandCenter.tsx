"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DIVISIONS, type DivisionCategory } from "@/lib/constants";
import DivisionCard from "@/components/DivisionCard";

type Filter = "ALL" | "LIVE" | "COMING SOON";

const FILTERS: Filter[] = ["ALL", "LIVE", "COMING SOON"];

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

function isHighlighted(status: string, filter: Filter): boolean {
  if (filter === "ALL") return true;
  if (filter === "LIVE") return status === "LIVE";
  return status === "COMING SOON" || status === "IN DEVELOPMENT";
}

export default function CommandCenter() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const groups = groupByCategory();

  return (
    <section
      id="command-center"
      className="relative bg-ge-background py-16 md:py-24 px-4 sm:px-6"
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

        {/* Filter bar */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6" role="tablist">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative text-xs uppercase tracking-wide pb-1.5 transition-colors duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "text-ge-gold"
                  : "text-ge-dim hover:text-ge-secondary"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-ge-gold"
                  layoutId="filter-underline"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Category groups */}
        <div className="mt-10 sm:mt-12 space-y-10 sm:space-y-12">
          {CATEGORY_ORDER.map((category) => {
            const divisions = groups.get(category);
            if (!divisions || divisions.length === 0) return null;

            return (
              <div key={category}>
                {/* Category label */}
                <motion.h3
                  className="text-sm font-semibold uppercase tracking-wide text-ge-gold text-center md:text-left mb-5 sm:mb-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {category}
                </motion.h3>

                {/* Division cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {divisions.map((division, i) => (
                    <motion.div
                      key={division.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-30px" }}
                    >
                      <motion.div
                        animate={{
                          opacity: isHighlighted(division.status, activeFilter) ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <DivisionCard division={division} />
                      </motion.div>
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
