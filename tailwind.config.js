/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      us: ["0.625rem", { lineHeight: "1.5rem" }],
      xs: ["0.75rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      fine: ["0.9375rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.5rem" }],
      xl: ["1.25rem", { lineHeight: "1.5rem" }],
      "2xl": ["1.5rem", { lineHeight: "1.5rem" }],
      "3xl": ["1.875rem", { lineHeight: "1.5rem" }],
      "4xl": ["2.25rem", { lineHeight: "1.5rem" }],
      "5xl": ["3rem", { lineHeight: "1.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1.5rem" }],
      "7xl": ["4.5rem", { lineHeight: "1.5rem" }],
      "8xl": ["6rem", { lineHeight: "1.5rem" }],
      "9xl": ["8rem", { lineHeight: "1.5rem" }]
    },
    extend: {
      colors: {
        "x-green": "#00401A",
        "light-blue": "#CDE4F2",
        "dark-blue": "#213046",
        "light-yellow": "#FABE64",
        "gray-muted": "#4C6475"
      },
      fontSize: {
        "3.5xl": "2rem"
      }
    }
  },
  plugins: []
};
