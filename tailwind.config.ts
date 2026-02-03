import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { "2xl": "1400px" } },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "#1391B9", foreground: "#ffffff" }, // Azul personalizado
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "#F8FAFC", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "#1391B9", foreground: "#ffffff" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#1391B9",
        navy: "#0F172A", // Navy más profundo
        teal: {
          50: "#E6F7FC",
          100: "#CCEFF9",
          200: "#99DFF3",
          300: "#66CFED",
          400: "#33BFE7",
          500: "#1391B9",
          600: "#0F7494",
          700: "#0B566F",
          800: "#07394A",
          900: "#041C25",
        },
      },
      borderRadius: { lg: "1rem", md: "0.75rem", sm: "0.5rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "2rem" },
      boxShadow: {
        "soft": "0 4px 20px rgba(0,0,0,0.06)",
        "soft-lg": "0 8px 30px rgba(0,0,0,0.08)",
        "card": "0 10px 40px rgba(0,0,0,0.1)",
        "card-hover": "0 20px 50px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-delay-500": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s",
        "pulse-delay-1000": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%) rotate(12deg)" },
          "100%": { transform: "translateX(100%) rotate(12deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
