/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    portrait: { raw: "(orientation: portrait)" },
    landscape: { raw: "(orientation: landscape)" },
    ...require("tailwindcss/defaultTheme").screens,
  },
};
