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
          className="text-ge-secondary text-xs tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-[#0a0a0a] border-b border-ge-gold/20"
    >
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        <span className="text-ge-gold font-semibold text-sm tracking-wide shrink-0">
          <span className="hidden sm:inline">Governed Enterprises</span>
          <span className="sm:hidden">GE</span>
        </span>

        <Ticker />
      </div>
    </header>
  );
}
