/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#ffa500",
        themeColor2: "#E44A3B",
        themeColor3: "#96b300",
        bgColor: "#3406b3",
        bgColor2: "#4a08ff",
        btnColor: "",
        textColor: "#fff",
        light: "#fff",
        dark: "#000",
      },
      backgroundColor: {
        flower: "url('/images/flower.jpg')",
        wood: "url('/images/wood.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
