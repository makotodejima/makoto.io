import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: "Cousine",
      styles: ["400"],
    },
  ],
  headerFontFamily: [
    "Cousine",
    "Helvetica",
    "Helvetica Neue",
    "游ゴシック",
    "游ゴシック体",
    "YuGothic",
  ],
  bodyFontFamily: [
    "Cousine",
    "Helvetica",
    "Helvetica Neue",
    "游ゴシック",
    "游ゴシック体",
    "YuGothic",
  ],
  headerWeight: "400",
  bodyWeight: "400",
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
