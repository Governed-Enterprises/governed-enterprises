// ─── Color Palette ──────────────────────────────────────────
export const COLOR_PALETTE = {
  background: "#0f0f0f",
  backgroundAlt: "#161616",
  gold: "#c9a84c",
  goldMuted: "#a08a3a",
  goldBright: "#e0c060",
  textPrimary: "#f5f5f5",
  textSecondary: "#888888",
  textDim: "#555555",
  statusLive: "#4ade80",
  statusDev: "#fbbf24",
  statusSoon: "#666666",
} as const;

// ─── Typography ─────────────────────────────────────────────
export const TYPOGRAPHY = {
  headingFont: "Montserrat",
  bodyFont: "Inter",
  monoFont: "JetBrains Mono",
} as const;

// ─── Site Content ───────────────────────────────────────────
export const SITE_CONTENT = {
  hookStatement: "Governed Enterprises",
  hookSubtext: "Building systems that serve people instead of exploiting them.",
  originParagraphs: [
    "Governed Enterprises was founded on a simple conviction: the systems people depend on should serve them, not extract from them. What started as one man's refusal to accept broken institutions became a blueprint for building better ones — from the ground up, with no corners cut.",
    "Every division exists to help people reclaim authority over a specific area of their lives. We started with legal, because that's where people lose the most ground. We're expanding as the mission demands — deliberately, and only when it's real.",
    "We don't exaggerate what we've built. We don't list what doesn't exist yet. What you see here is what's operational or nearly so. New divisions are added when they're ready — not before.",
  ],
  footerTagline: "Established under authority. Built to serve.",
  footerFounder: "Founded by Terry Taylor",
  footerLocation: "Eau Claire, Wisconsin",
  copyright: "© 2025 Governed Enterprises. All rights reserved.",
} as const;

// ─── Ticker Items ───────────────────────────────────────────
export const TICKER_ITEMS = [
  { icon: "⚖️", text: "Plumbline Legal — Now Live" },
  { icon: "🎵", text: "The Governed Man — Album Available on All Platforms" },
  { icon: "🏛️", text: "Governed Enterprises — Built to Serve" },
] as const;

// ─── Division Types ─────────────────────────────────────────
export type DivisionStatus = "LIVE" | "COMING SOON";
export type DivisionCategory = "JUSTICE" | "CULTURE";

export interface Division {
  id: string;
  name: string;
  category: DivisionCategory;
  description: string;
  url: string;
  status: DivisionStatus;
  icon: string;
  flagship?: boolean;
  details: string[];
}

// ─── Divisions ──────────────────────────────────────────────
export const DIVISIONS: Division[] = [
  {
    id: "plumbline-legal",
    name: "Plumbline Legal",
    category: "JUSTICE",
    description:
      "Legal document preparation and consumer protection services. Helping people reclaim authority over their legal standing.",
    url: "https://plumbline-legal.com",
    status: "LIVE",
    icon: "scale",
    flagship: true,
    details: [
      "Legal document preparation",
      "Consumer protection services",
      "Empowering people to take control of their legal standing",
    ],
  },
  {
    id: "ge-music",
    name: "GE Music",
    category: "CULTURE",
    description:
      "Original music rooted in truth. The Governed Man album available now on all platforms.",
    url: "",
    status: "COMING SOON",
    icon: "music",
    details: [
      "The Governed Man album",
      "Available on all major streaming platforms",
      "Original music that stands for something",
    ],
  },
];
