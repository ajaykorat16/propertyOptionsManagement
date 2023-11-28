module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          500: "#a5a5a5",
          800: "#404040",
          900: "#052029",
          "900_02": "#051f28",
          "900_03": "#05202b",
          "500_7f": "#a5a5a57f",
          "500_4c": "#a5a5a54c",
          "900_01": "#00282d",
          "900_a2": "#051f28a2",
          "900_90": "#05202b90",
        },
        blue_gray: {
          100: "#d9d9d9",
          "900_a2": "#214145a2",
          "900_90": "#21414590",
        },
        blue: { A700: "#306aff" },
        white: { A700_90: "#ffffff90", A700: "#ffffff" },
        light_blue: { 500: "#0d99ff" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_26": "#00000026" },
        red: { A400: "#ff0d2a" },
      },
      boxShadow: {
        bs1: "0px 2px  4px 0px #0000003f",
        bs: "0px 2px  4px 0px #00000026",
      },
      fontFamily: { montserrat: "Montserrat", orbitron: "Orbitron" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
