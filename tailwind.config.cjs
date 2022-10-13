/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        primaryText: "#556987",
        secondaryText: "#2A3342",
        lightGreen: "#DCFCE7",
        green: "#22C55E",
        darkGrey: "#4D5F7A",
        lightGrey: "#8896AB",
        secBtnText: "#333F51",
        primaryBtnText: "#F0FDF4",
        borderColor: "#D5DAE1",
        darkBg: "#232B37",
        greyBg: "#F7F8F9",
      },
      maxWidth: {
        128: "1200px",
      },
    },
  },
  plugins: [],
};
