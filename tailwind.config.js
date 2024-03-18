/** @type {import('tailwindcss').Config} */

import keepPreset from "keep-react/preset";

export default {
  content: [
    "index.html",
    "./src/**/*.{css,js,jsx,ts,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,css,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
