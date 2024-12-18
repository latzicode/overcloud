/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#2E2EFF',    // Bleu électrique principal
          300: '#FF2EFF',    // Rose néon
          400: '#2EFFF4',    // Cyan brillant
        },
        'dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}