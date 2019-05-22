import Typography from "typography";

const typography = new Typography({
  baseFontSize: "15px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "aller",
    "Ubuntu",
    "Helvetica",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "aller",
    "Ubuntu",
    "Helvetica",
    "Helvetica Neue",
    "游ゴシック",
    "游ゴシック体",
    "YuGothic"
  ],
  headerWeight: "700",
  bodyWeight: "400"
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
