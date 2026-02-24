"use client";

import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";

export default function OriginStory() {
  return (
    <section className="relative py-32 px-6 bg-slate">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-ivory mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The Origin
        </motion.h2>

        <div className="space-y-6">
          {SITE_CONTENT.originParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-base md:text-lg text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Accent line */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />
      </div>
    </section>
  );
}
