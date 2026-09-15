module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        accent: "#00f0ff",
        cyan: "#00e5ff",
        violet: "#8b5cf6",
        glass: "rgba(255,255,255,0.04)"
      },
      backgroundImage: {
        'subtle-grid': "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
