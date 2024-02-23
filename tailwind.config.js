/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors:{
        "background": "#111",
        "primary": "#1A1A1A",
        "secondary": "#D9D9D9",
      }
    },
  },
  plugins: [],
}

