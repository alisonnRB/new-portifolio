/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        filter: "rgba(255, 255, 255, 0.15)",
        border: "rgba(255, 255, 255, 0.25)",
        fontCol: "rgba(255, 255, 255, 0.5)"
      },
    },
  },
  plugins: [],
}

