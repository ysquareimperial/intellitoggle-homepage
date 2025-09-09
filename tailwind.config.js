/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      // Montserrat: "Montserrat, sans-serif",
       dmSans: ["DM Sans", "sans-serif"], // new font
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [],
};
