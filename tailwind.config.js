module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-1": "hsl(207, 26%, 17%)",
        "very-dark-blue-2": "hsl(200, 15%, 8%)",
        "dark-gray": " hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        "petit": "14px",
        "normal": "16px",
      }
    },
  },
  plugins: [],
}
