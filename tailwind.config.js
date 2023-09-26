module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Darker Grotesque", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#00091f",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #626d78 12.53%, #041A6F 101.69%)",
        designColor: "#88F0E5",
        skyblue: "#88F0E5", // Custom skyblue color
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #030712, -10px -10px 19px #0f172a",
      },
    },
  },
  plugins: [],
};