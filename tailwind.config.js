module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        brand: "#FFAA00",
        surface: "#0D0D0D",
        lightTheme: "#F1F5F9",
        muted: { light: "#6B7280", dark: "#9CA3AF" },
      },
      theme: {},

      spacing: {
        pxmobile: "1.5rem",
      },
      scale: {
        zoom: "1.05",
      },
      transitionDuration: {
        default: "200ms",
      },
    },
  },
  plugins: [],
};
