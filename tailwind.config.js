/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        accent: {
          50: "hsl(216, 100%, 90%)",
          100: "hsl(219, 100%, 91%)",
          200: "hsl(217, 100%, 92%)",
          300: "hsl(218, 100%, 85%)",
          400: "hsl(219, 100%, 68%)",
          500: "hsl(225, 100%, 60%)",
          600: "hsl(230, 100%, 52%)",
          700: "hsl(233, 100%, 41%)",
          800: "hsl(234, 100%, 33%)",
          900: "hsl(236, 100%, 26%)",
          DEFAULT: "hsl(240, 100%, 3%)",
        },
        primary: {
          50: "hsl(280, 53%, 97%)",
          100: "hsl(280, 48%, 94%)",
          200: "hsl(281, 51%, 89%)",
          300: "hsl(283, 48%, 82%)",
          400: "hsl(288, 46%, 74%)",
          500: "hsl(292, 44%, 67%)",
          600: "hsl(296, 38%, 59%)",
          700: "hsl(298, 30%, 51%)",
          800: "hsl(298, 28%, 41%)",
          900: "hsl(296, 25%, 34%)",
          950: "hsl(297, 24%, 19%)",
        },
        secondary: {
          50: "hsl(51, 100%, 96%)",
          100: "hsl(50, 96%, 89%)",
          200: "hsl(51, 98%, 77%)",
          300: "hsl(48, 98%, 65%)",
          400: "hsl(46, 98%, 56%)",
          500: "hsl(40, 94%, 50%)",
          600: "hsl(34, 96%, 44%)",
          DEFAULT: "hsl(28, 92%, 34%)",
          800: "hsl(25, 84%, 31%)",
          900: "hsl(24, 79%, 26%)",
          950: "hsl(24, 94%, 14%)",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
