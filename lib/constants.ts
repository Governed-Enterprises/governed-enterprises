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
  hookStatement: "A man who governs himself can govern anything.",
  hookSubtext: "Est. 2025 — Eau Claire, Wisconsin",
  originParagraphs: [
    "It started with a realization most men avoid: no one was coming. No institution, no investor, no mentor with a master plan. The systems that were supposed to provide for a family like ours were either broken or never built for us in the first place. So the only option was to build — not one thing, but everything we needed, from the ground up.",
    "The foundation wasn't business theory — it was Torah. The same ancient framework that governed nations, households, and economies for thousands of years became the blueprint. Self-education replaced formal credentials. Discipline replaced motivation. Every skill acquired was a brick laid in a structure that would outlast a single generation.",
    "Governed Enterprises is not a single business — it is a system. A federation of divisions, each purpose-built to serve a specific function within the family economy. Culture, commerce, justice, operations — nothing is left to chance. Every entity answers to the same standard, and that standard is governance.",
    "What you see below is the command center — the living map of every division under this banner. Some are operational. Some are being forged. All of them are inevitable.",
  ],
  footerTagline: "An enterprise built for generational inheritance.",
  footerFounder: "Founded by Terry Taylor",
  copyright: "© 2025 Governed Enterprises. All rights reserved.",
} as const;

// ─── Ticker Items ───────────────────────────────────────────
export const TICKER_ITEMS = [
  { icon: "🎵", text: "GOVERNED album — coming soon on all platforms" },
  { icon: "📚", text: "The Halakah — enrollment opening soon" },
  { icon: "📈", text: "Governed Trader — in development" },
  { icon: "🌿", text: "Covenant Heritage Farm — land acquisition in progress" },
] as const;

// ─── Division Types ─────────────────────────────────────────
export type DivisionStatus = "LIVE" | "IN DEVELOPMENT" | "COMING SOON";
export type DivisionCategory = "CULTURE" | "COMMERCE" | "JUSTICE & OPERATIONS";

export interface Division {
  id: string;
  name: string;
  category: DivisionCategory;
  description: string;
  subdomain: string;
  status: DivisionStatus;
  icon: string;
  details: string[];
}

// ─── Divisions ──────────────────────────────────────────────
export const DIVISIONS: Division[] = [
  {
    id: "governed-man",
    name: "The Governed Man",
    category: "CULTURE",
    description: "Brand, media, and the public voice of Governed Enterprises.",
    subdomain: "brand.governedenterprises.com",
    status: "COMING SOON",
    icon: "crown",
    details: [
      "Music, content, and visual identity",
      "GOVERNED album and media catalog",
      "Brand partnerships and merchandise",
    ],
  },
  {
    id: "governed-man-institute",
    name: "The Governed Man Institute",
    category: "CULTURE",
    description: "Education rooted in Torah, discipline, and self-governance.",
    subdomain: "institute.governedenterprises.com",
    status: "COMING SOON",
    icon: "book-open",
    details: [
      "The Halakah curriculum and enrollment",
      "Structured learning paths for men and families",
      "Community mentorship framework",
    ],
  },
  {
    id: "governed-trader",
    name: "The Governed Trader",
    category: "COMMERCE",
    description: "Financial education, trading tools, and wealth-building systems.",
    subdomain: "trader.governedenterprises.com",
    status: "IN DEVELOPMENT",
    icon: "trending-up",
    details: [
      "Market analysis and trading education",
      "Proprietary strategy development",
      "Portfolio tracking tools",
    ],
  },
  {
    id: "tohar",
    name: "Tohar",
    category: "COMMERCE",
    description: "Health, purity, and clean living products for the set-apart household.",
    subdomain: "tohar.governedenterprises.com",
    status: "COMING SOON",
    icon: "leaf",
    details: [
      "Clean-ingredient personal care line",
      "Dietary guidance rooted in Torah",
      "Household purity standards",
    ],
  },
  {
    id: "3d-printing",
    name: "3D Printing Division",
    category: "COMMERCE",
    description: "Rapid prototyping and custom manufacturing for internal and client projects.",
    subdomain: "print.governedenterprises.com",
    status: "IN DEVELOPMENT",
    icon: "box",
    details: [
      "FDM and resin printing capabilities",
      "Product prototyping and small-batch runs",
      "Custom design and fulfillment",
    ],
  },
  {
    id: "covenant-heritage-farm",
    name: "Covenant Heritage Farm",
    category: "COMMERCE",
    description: "Agriculture and land stewardship for family sustenance and legacy.",
    subdomain: "farm.governedenterprises.com",
    status: "COMING SOON",
    icon: "sprout",
    details: [
      "Land acquisition and homestead planning",
      "Sustainable food production",
      "Generational land inheritance model",
    ],
  },
  {
    id: "legal-services",
    name: "Legal Services",
    category: "JUSTICE & OPERATIONS",
    description: "Entity structuring, compliance, and legal protection for the enterprise.",
    subdomain: "legal.governedenterprises.com",
    status: "COMING SOON",
    icon: "scale",
    details: [
      "LLC formation and corporate structuring",
      "Contract drafting and review",
      "Intellectual property protection",
    ],
  },
  {
    id: "ai-agent-workforce",
    name: "AI Agent Workforce",
    category: "JUSTICE & OPERATIONS",
    description: "Autonomous AI agents handling operations, research, and internal automation.",
    subdomain: "ai.governedenterprises.com",
    status: "IN DEVELOPMENT",
    icon: "bot",
    details: [
      "Custom AI agent development",
      "Workflow automation across divisions",
      "Internal research and data analysis",
    ],
  },
  {
    id: "digital-infrastructure",
    name: "Digital Infrastructure",
    category: "JUSTICE & OPERATIONS",
    description: "Websites, hosting, DevOps, and the technical backbone of the enterprise.",
    subdomain: "infra.governedenterprises.com",
    status: "IN DEVELOPMENT",
    icon: "server",
    details: [
      "Web development and hosting management",
      "CI/CD pipelines and deployment",
      "Domain, DNS, and security operations",
    ],
  },
];
