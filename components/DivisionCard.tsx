"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Division } from "@/lib/constants";

const ICON_MAP: Record<string, string> = {
  scale: "⚖️",
};

function StatusBadge({ status }: { status: Division["status"] }) {
  const config = {
    LIVE: { color: "#4ade80", label: "Live", dotClass: "animate-status-pulse" },
  }[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-xs uppercase shrink-0"
      style={{
        color: config.color,
        border: `1px solid ${config.color}33`,
      }}
    >
      {config.dotClass && (
        <span
          className={`w-1.5 h-1.5 rounded-full will-change-transform ${config.dotClass}`}
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
  const isLive = division.status === "LIVE";

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const handleNavigate = () => {
    if (isLive && division.url) {
      window.open(division.url, "_blank", "noopener");
    }
  };

  return (
    <motion.div
      className={`relative rounded-xl p-5 sm:p-6 min-h-[180px] sm:min-h-[200px] cursor-pointer flex flex-col group will-change-transform`}
      style={{
        backgroundColor: "#1a1a1a",
        border: division.flagship
          ? "1px solid rgba(201,168,76,0.4)"
          : "1px solid #2a2a2a",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(201,168,76,0.4)",
        boxShadow: division.flagship
          ? "0 4px 24px rgba(201,168,76,0.2)"
          : "0 4px 20px rgba(201,168,76,0.15)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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

      {/* Established date */}
      <p className="mt-2 text-[10px] sm:text-xs text-ge-dim font-mono">
        Est. {division.established}
      </p>

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-sm text-ge-secondary leading-relaxed">
        {division.description}
      </p>

      {/* Link for live divisions */}
      {isLive && division.url && (
        <a
          href={division.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-[10px] sm:text-xs text-ge-gold hover:text-ge-gold-bright transition-colors font-mono"
          onClick={(e) => e.stopPropagation()}
        >
          {division.url.replace("https://", "")} ↗
        </a>
      )}

      {/* Expandable details */}
      <DetailLines details={division.details} isVisible={expanded} />

      {/* Desktop: hover hint */}
      {!expanded && (
        <p className="hidden md:block mt-auto pt-3 text-xs text-ge-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to expand details
        </p>
      )}
    </motion.div>
  );
}
