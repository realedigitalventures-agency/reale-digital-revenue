import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        brand: {
          teal: "rgb(var(--brand-teal) / <alpha-value>)",
          blue: "rgb(var(--brand-blue) / <alpha-value>)",
          violet: "rgb(var(--brand-violet) / <alpha-value>)"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--border) / 0.6), 0 10px 30px -12px rgb(var(--brand-teal) / 0.25)"
      }
    }
  },
  plugins: []
} satisfies Config;
