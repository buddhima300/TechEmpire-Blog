/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Add paths to your files
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-pink": "#C11574", // Example custom color
        "custom-purple": "#6941C6", // Example custom color
        "custom-blue": "#3538CD", // Example custom color
      },
    },
  },
  plugins: [],
};
