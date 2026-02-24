"use client";

import { motion } from "framer-motion";
import { TICKER_ITEMS } from "@/lib/constants";

export default function TopBar() {
  const tickerText = TICKER_ITEMS.map((item) => `${item.icon} ${item.text}`).join("   ·   ");

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-obsidian/95 backdrop-blur-sm border-b border-gold/20">
      <div className="overflow-hidden h-8 flex items-center">
        <motion.div
          className="whitespace-nowrap text-xs tracking-[0.2em] uppercase text-gold"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {tickerText}   ·   {tickerText}
        </motion.div>
      </div>
    </div>
  );
}
