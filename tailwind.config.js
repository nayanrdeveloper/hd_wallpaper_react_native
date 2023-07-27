/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        otpBox: "rgba(240, 240, 240, 0.55)",
        header: "#ffffff21",
        subHeader: "#064851",
      },
    },
  },
  plugins: [],
};
