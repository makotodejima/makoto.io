import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Carme',
      styles: ['400'],
    },
  ],
  headerFontFamily: [
    'Carme',

    'Ubuntu',
    'Helvetica',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    '游ゴシック',
    '游ゴシック体',
    'YuGothic',
  ],
  bodyFontFamily: [
    'Carme',
    'Ubuntu',
    'Helvetica',
    'Helvetica Neue',
    '游ゴシック',
    '游ゴシック体',
    'YuGothic',
  ],
  headerWeight: '700',
  bodyWeight: '400',
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
