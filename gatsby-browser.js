const React = require('react');

const { ThemeContextProvider } = require('./src/theme/themeContext');

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
