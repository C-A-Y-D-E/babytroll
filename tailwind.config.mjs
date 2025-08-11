/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikBubbles: ["var(--font-rubik-bubbles)"],
        rubikDoodle: ["var(--font-rubik-doodle)"],
      },
    },
  },
  plugins: [],
};
