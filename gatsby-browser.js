import React from 'react';

import { ThemeContextProvider } from './src/theme/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
