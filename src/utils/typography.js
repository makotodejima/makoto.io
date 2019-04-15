import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Noto Sans JP",
      styles: ["400"]
    }
  ],
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "aller",
    "Helvetica",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["aller", "Noto Sans JP", "serif"],
  headerWeight: "300",
  bodyWeight: "400"
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
