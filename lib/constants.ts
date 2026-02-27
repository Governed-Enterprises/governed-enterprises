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
  hookSubtext: "Helping people reclaim governance over their own lives.",
  originParagraphs: [
    "The systems people depend on — for justice, for health, for shelter, for survival — were not built to serve them. They were built to extract from them. Governed Enterprises exists to build the alternative. Every subsidiary addresses a specific system that holds people captive, and builds something that actually frees them.",
    "We remove weight. We clear paths. A man drowning in debt doesn't need a lecture — he needs someone to help him breathe. A family being failed by the system doesn't need to understand the system first — they need a way out. That's what we build.",
    "The first subsidiary is Plumbline Legal — helping people reclaim authority over their legal standing. Others will follow as they're called into existence. No subsidiary operates outside the standard. No subsidiary exists for its own sake. Everything here is built to serve.",
  ],
  footerTagline: "Established under authority. Built to serve.",
  footerFounder: "Founded by Terry Taylor",
  footerLocation: "Eau Claire, Wisconsin",
  copyright: "© 2026 Governed Enterprises. All rights reserved.",
} as const;

// ─── Ticker Items ───────────────────────────────────────────
export const TICKER_ITEMS = [
  { icon: "⚖️", text: "Plumbline Legal — Now Live" },
  { icon: "🏛️", text: "Governed Enterprises — Built to Serve" },
] as const;

// ─── Division Types ─────────────────────────────────────────
export type DivisionStatus = "LIVE";
export type DivisionCategory = "JUSTICE";

export interface Division {
  id: string;
  name: string;
  category: DivisionCategory;
  description: string;
  url: string;
  status: DivisionStatus;
  icon: string;
  established: string;
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
    established: "2026",
    flagship: true,
    details: [
      "Legal document preparation",
      "Consumer protection services",
      "Empowering people to take control of their legal standing",
    ],
  },
];
