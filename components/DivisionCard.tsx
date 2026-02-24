"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Division } from "@/lib/constants";

const ICON_MAP: Record<string, string> = {
  crown: "👑",
  "book-open": "📖",
  "trending-up": "📈",
  leaf: "🌿",
  box: "📦",
  sprout: "🌱",
  scale: "⚖️",
  bot: "🤖",
  server: "🖥️",
};

function StatusBadge({ status }: { status: Division["status"] }) {
  const config = {
    LIVE: { color: "#4ade80", label: "Live", showDot: true },
    "IN DEVELOPMENT": { color: "#fbbf24", label: "In Dev", showDot: true },
    "COMING SOON": { color: "#666666", label: "Soon", showDot: false },
  }[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-xs uppercase shrink-0"
      style={{
        color: config.color,
        border: `1px solid ${config.color}33`,
      }}
    >
      {config.showDot && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: config.color }}
        />
      )}
      {config.label}
    </span>
  );
}

function DetailLines({ details, isVisible }: { details: string[]; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="mt-3 space-y-1.5 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {details.map((detail, i) => (
            <motion.p
              key={i}
              className="text-xs text-ge-secondary flex items-start gap-2"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            >
              <span className="text-ge-gold mt-px shrink-0">—</span>
              {detail}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DivisionCard({ division }: { division: Division }) {
  const [expanded, setExpanded] = useState(false);
  const [toast, setToast] = useState(false);
  const isLive = division.status === "LIVE";

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const handleNavigate = () => {
    if (isLive) {
      window.open(`https://${division.subdomain}`, "_blank", "noopener");
    } else {
      setToast(true);
      setTimeout(() => setToast(false), 2500);
    }
  };

  return (
    <motion.div
      className="relative rounded-xl p-5 sm:p-6 min-h-[160px] sm:min-h-[180px] cursor-pointer flex flex-col group"
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid #2a2a2a",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(201,168,76,0.4)",
        boxShadow: "0 4px 20px rgba(201,168,76,0.15)",
      }}
      transition={{ duration: 0.25 }}
      onClick={handleClick}
      onDoubleClick={handleNavigate}
      role="article"
      aria-label={`${division.name} — ${division.status}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
          {ICON_MAP[division.icon] || "📌"}
        </span>
        <StatusBadge status={division.status} />
      </div>

      {/* Name and category */}
      <div className="mt-3 sm:mt-4">
        <h4 className="text-base sm:text-lg font-semibold text-ge-primary">{division.name}</h4>
        <p className="text-[10px] sm:text-xs uppercase tracking-wide text-ge-gold mt-1">
          {division.category}
        </p>
      </div>

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-sm text-ge-secondary leading-relaxed">
        {division.description}
      </p>

      {/* Subdomain */}
      <p className="mt-2 text-[10px] sm:text-xs text-ge-dim font-mono">{division.subdomain}</p>

      {/* Expandable details */}
      <DetailLines details={division.details} isVisible={expanded} />

      {/* Desktop: hover hint */}
      {!expanded && (
        <p className="hidden md:block mt-auto pt-3 text-xs text-ge-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to expand details
        </p>
      )}

      {/* Toast for non-live divisions */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="absolute bottom-3 left-3 right-3 bg-ge-background-alt border border-ge-gold/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-center z-10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[10px] sm:text-xs text-ge-secondary">
              Coming soon — <span className="text-ge-gold">{division.name}</span> is in development
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
