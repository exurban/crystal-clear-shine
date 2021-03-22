const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home-button": "url('/images/css-logo.svg')",
        "hero-bkd": "url('/images/ccs-hero-xl.jpg')"
      }),
      colors: {
        "brand-100": "#EE3B23",
        "brand-200": "#F36B29",
        "brand-300": "#F9AA61",
        "brand-400": "#F7D7A0",
        "brand-500": "#6BAD9D",
        "brand-600": "#11909E",
        "brand-700": "#146E93",
        "brand-800": "#17214D",
        success: "#0070f3",
        cyan: "#79FFE1"
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        hero: ["Lobster", ...fontFamily.sans]
      },
      spacing: {
        28: "7rem"
      },
      letterSpacing: {
        tighter: "-.04em"
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem"
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
