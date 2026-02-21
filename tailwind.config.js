module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["varela", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--bg)",
        alternate: "var(--bg-alt)",
        foreground: "var(--text)",
        surface: "var(--surface)",
        brand: "var(--primary)",
        border: "var(--border)",
        muted: "var(--muted)",
      },
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
