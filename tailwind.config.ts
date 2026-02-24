import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ge-background": "#0f0f0f",
        "ge-background-alt": "#161616",
        "ge-gold": "#c9a84c",
        "ge-gold-muted": "#a08a3a",
        "ge-gold-bright": "#e0c060",
        "ge-primary": "#f5f5f5",
        "ge-secondary": "#888888",
        "ge-dim": "#555555",
        "ge-status-live": "#4ade80",
        "ge-status-dev": "#fbbf24",
        "ge-status-soon": "#666666",
        obsidian: "#0f0f0f",
        ivory: "#f5f5f5",
        gold: "#c9a84c",
        "gold-muted": "#a08a3a",
        "gold-bright": "#e0c060",
        steel: "#161616",
        slate: "#161616",
        secondary: "#888888",
        muted: "#555555",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "ticker-scroll": "ticker-scroll 30s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
        "status-pulse": "status-pulse 2s ease-in-out infinite",
        "status-pulse-slow": "status-pulse-slow 3s ease-in-out infinite",
      },
      keyframes: {
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
        "status-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
        "status-pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
