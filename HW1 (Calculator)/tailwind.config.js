/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: {
        normal: "#F4A460",
        hover: "#E78A40",
      },
      green: {
        normal: "#4CAF50",
        hover: "#45a049",
      },
      blue: {
        normal: "#4267B2",
        hover: "#365899",
      },
    },
  },
  plugins: [],
};
