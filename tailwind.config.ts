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
        // Governed Enterprises namespaced palette
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
        // Legacy aliases for existing components
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
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "ticker-scroll": "ticker-scroll 30s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
