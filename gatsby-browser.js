import React from 'react';

import { ThemeContextProvider } from './src/theme/themeContext';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
