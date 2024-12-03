/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#495e57",
          2: "#F4CE14",
        },
        secondary: {
          1: "#333333",
          2: "#EDEFEE",
        },
        price: "#EC6969",
      },
      fontFamily: {
        Markazi: ["Markazi Text", "serif"],
        Karla: ["Karla", "serif"],
      },
    },
  },
  plugins: [],
};
