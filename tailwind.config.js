/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#232423",
        textSecondary: "#565856",
        borderSecondary:"#EAEBEA",
        green: "#3EA03B",
        buttonSecondary: "#565856",
        textTertiary:"#7A7C79",
        borderPrimary:"#D5D8D5",
        errorPrimary:"#D92D20",
      
       
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        stix: ["STIX Two Text", "serif"],
        bellefair: ["Bellefair", "serif"],
        poppin: ["Poppins", "sans-serif"],
        baskerville: ["Baskervville", "serif"],
        rubik: ["Rubik", "sans-serif"],
        cardo: ["Cardo", "serif"],
      },
      boxShadow: {
        "3xl": "7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)",
        "4xl": "4px 4px 64px rgba(0, 0, 0, 0.1)",
        "5xl": "2px 2px 32px rgba(0, 0, 0, 0.1)",
        "6xl": "4.68154px 4.68154px 7.02232px rgba(0, 0, 0, 0.15)",
        "7xl": "0px 3.55556px 10.6667px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
