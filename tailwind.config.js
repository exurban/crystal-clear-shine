module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
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
