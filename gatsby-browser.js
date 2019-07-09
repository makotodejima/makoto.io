const { ThemeProvider } = require('styled-components');
const React = require('react');

const light = {
  a: 'blue',
  b: 'grey',
  c: 'red',
};

const dark = {
  a: 'blue',
  b: 'grey',
  c: 'red',
};

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>;
};
