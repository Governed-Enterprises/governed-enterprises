"use client";

import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";

export default function OriginStory() {
  const paragraphs = SITE_CONTENT.originParagraphs;
  const lastIndex = paragraphs.length - 1;

  return (
    <section
      id="origin"
      className="relative bg-ge-background-alt"
      aria-label="Origin story"
    >
      {/* Gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-ge-background to-transparent" />

      {/* Bottom gradient blend into CommandCenter */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-ge-background" />

      <div className="py-16 md:py-24 px-5 sm:px-6">
        <div className="w-full sm:max-w-[580px] md:max-w-[640px] mx-auto">
          {/* Thin gold divider line */}
          <motion.div
            className="w-[60%] mx-auto h-px bg-ge-gold/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          />

          {/* Spacing below line */}
          <div className="h-10 sm:h-12" />

          {/* Paragraphs */}
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className={`text-base md:text-lg leading-relaxed ${
                i < lastIndex ? "mb-6 sm:mb-8 text-ge-primary" : "text-ge-gold"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
