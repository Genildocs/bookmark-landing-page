/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        soft_blue: "#5267DF",
        blue_dark: "#242A45",
      },
      boxShadow: {
        sh_gray: "0px 8px 8px -4px rgba(73, 93, 207, 0.20)",
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
