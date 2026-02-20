module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
        surface: "var(--card)",
        brand: "var(--primary)",
        border: "var(--border)",
        muted: "var(--muted)",
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
