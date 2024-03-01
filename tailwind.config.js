/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors:{
        "background": "#111",
        "background-secondary": "#1a1a1a",
        "foreground": "#ddd",
        "foreground-secondary": "#333",
        "primary": "#ab92bf",
        "secondary": "#8b729f",
        "tertiary": "#6f5b7b",
      },
      dropShadow:{
        "background": "0px 0px 13px rgba(0, 0, 0, 0.5)",
        "primary": "0px 0px 13px rgba(101, 90, 124, 0.5)",
        "secondary": "0px 0px 13px rgba(171, 146, 191, 0.5)",
        "tertiary": "0px 0px 13px rgba(111, 91, 123, 0.5)",
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
}

