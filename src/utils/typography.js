import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Noto Sans JP",
      styles: ["400"]
    }
    // {
    //   name: "Merriweather",
    //   styles: ["400", "400i", "700", "700i"]
    // }
  ],
  baseFontSize: "14px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Ubuntu", "Noto Sans JP", "serif"]
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
