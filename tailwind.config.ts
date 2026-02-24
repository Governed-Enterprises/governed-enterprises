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
        background: "var(--color-background)",
        "background-alt": "var(--color-background-alt)",
        gold: "var(--color-gold)",
        "gold-muted": "var(--color-gold-muted)",
        "gold-bright": "var(--color-gold-bright)",
        foreground: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-dim)",
        "status-live": "var(--color-status-live)",
        "status-dev": "var(--color-status-dev)",
        "status-soon": "var(--color-status-soon)",
        // Legacy aliases
        obsidian: "var(--color-background)",
        ivory: "var(--color-text-primary)",
        steel: "var(--color-background-alt)",
        slate: "var(--color-background-alt)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
