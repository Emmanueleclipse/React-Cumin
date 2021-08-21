module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#A2A2A2",
          900: "#161616",
        },

        pink: {
          800: "#F91382",
        },
      },

      screens: {
        xxl: "1920px",
      },

      maxWidth: {
        "9xl": "1650px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
