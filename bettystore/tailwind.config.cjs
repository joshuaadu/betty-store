/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],

  theme: {
    extend: {},
  },

  plugins: [
    // @ts-ignore
    require("preline/plugin"),
  ],
};

module.exports = config;
