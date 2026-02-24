"use client";

import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TICKER_ITEMS } from "@/lib/constants";

const Ticker = memo(function Ticker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = TICKER_ITEMS[currentIndex];

  return (
    <div
      className="relative h-full flex items-center overflow-hidden min-w-0"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="text-ge-secondary text-xs sm:text-sm tracking-wide whitespace-nowrap overflow-hidden text-ellipsis will-change-transform"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          role="status"
        >
          {currentItem.icon} {currentItem.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
});

export default function TopBar() {
  return (
    <motion.header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-[#0a0a0a] border-b border-ge-gold/20 will-change-transform"
      initial={{ y: -36 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="h-full flex items-center justify-between px-4 sm:px-5 md:px-6 gap-4">
        <span className="text-ge-gold font-semibold text-sm tracking-wide shrink-0">
          <span className="hidden sm:inline">Governed Enterprises</span>
          <span className="sm:hidden">GE</span>
        </span>

        <Ticker />
      </div>
    </motion.header>
  );
}
