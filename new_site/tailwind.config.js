module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#A9A9A9",
        quaternary: "#000000",
      },
      screens: {
        xs: "450px",
        "3xl": "2160px",
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('./assets/siteBackground.svg')",
      },
      keyframes: {
        textRotate1: {
          "0%, 50%": { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
          "60%, 100%": {
            transform: "translate3d(0, -100%, 0) rotateX(-90deg)",
          },
        },
        textRotate2: {
          "0%, 50%": { transform: "translate3d(0, 100%, 0) rotateX(-90deg)" },
          "60%, 100%": { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
        },
      },
      animation: {
        textRotate1: "textRotate1 2.4s infinite alternate",
        textRotate2: "textRotate2 2.4s infinite alternate",
      },
    },
  },
  plugins: [],
};
