// ─── Brand Colors ───────────────────────────────────────────
export const COLORS = {
  // Primary palette
  obsidian: "#0A0A0A",
  ivory: "#F5F0E8",
  gold: "#C9A84C",
  goldLight: "#D4B965",
  goldDark: "#A8893A",

  // Accent
  crimson: "#8B0000",
  steel: "#2C2C2C",
  slate: "#1A1A1A",

  // Text
  textPrimary: "#F5F0E8",
  textSecondary: "#A3A3A3",
  textMuted: "#6B6B6B",
} as const;

// ─── Site Content ───────────────────────────────────────────
export const SITE_META = {
  title: "Governed Enterprises",
  description:
    "A federation of purpose-built divisions, each engineered for dominance in its domain.",
  tagline: "Structure. Discipline. Dominance.",
};

export const TICKER_MESSAGES = [
  "GOVERNED ENTERPRISES — Now Operational",
  "Division Intake Open — Apply Within",
  "Structure. Discipline. Dominance.",
  "Phase 2 Command Center — Coming Soon",
];

export const HOOK_CONTENT = {
  headline: "Governed Enterprises",
  subheadline: "Structure. Discipline. Dominance.",
  description:
    "A federation of purpose-built divisions, each engineered for dominance in its domain. We don't chase trends — we set the standard.",
};

export const ORIGIN_STORY = {
  heading: "The Origin",
  paragraphs: [
    "Governed Enterprises wasn't born in a boardroom. It was forged from a simple conviction: that scattered effort leads to scattered results.",
    "Every division under this banner operates with surgical precision — purpose-built, self-sustaining, and accountable. No bloated hierarchies. No wasted motion.",
    "This is governance by design. Each entity is a spoke in a wheel that never stops turning.",
  ],
};

// ─── Division Data (Phase 2 Placeholder) ────────────────────
export interface Division {
  id: string;
  name: string;
  tagline: string;
  status: "active" | "coming_soon" | "classified";
}

export const DIVISIONS: Division[] = [
  {
    id: "div-001",
    name: "Division Alpha",
    tagline: "Placeholder — Phase 2",
    status: "coming_soon",
  },
  {
    id: "div-002",
    name: "Division Bravo",
    tagline: "Placeholder — Phase 2",
    status: "coming_soon",
  },
  {
    id: "div-003",
    name: "Division Charlie",
    tagline: "Placeholder — Phase 2",
    status: "coming_soon",
  },
  {
    id: "div-004",
    name: "Division Delta",
    tagline: "Placeholder — Phase 2",
    status: "coming_soon",
  },
];

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} Governed Enterprises. All rights reserved.`,
  tagline: "Structure. Discipline. Dominance.",
};
