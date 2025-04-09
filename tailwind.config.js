/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "*.{js,ts,jsx,tsx,mdx}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
            },

        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // Nigerian flag colors
          "ng-green": "#008751",
          "ng-black": "#000000",
          "ng-white": "#FFFFFF",
          // Shades of green
          "ng-green-light": "#00a65a",
          "ng-green-dark": "#006940",
          // Shades of gray for text and borders
          "ng-gray-100": "#f3f4f6",
          "ng-gray-200": "#e5e7eb",
          "ng-gray-300": "#d1d5db",
          "ng-gray-400": "#9ca3af",
          "ng-gray-500": "#6b7280",
          "ng-gray-600": "#4b5563",
          "ng-gray-700": "#374151",
          "ng-gray-800": "#1f2937",
          "ng-gray-900": "#111827",
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  