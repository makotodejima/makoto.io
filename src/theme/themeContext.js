import React, { useState, useEffect } from 'react';

const defaultState = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const ThemeContext = React.createContext(defaultState);

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.

// const supportsDarkMode = () =>
//   window.matchMedia('(prefers-color-scheme: dark)').matches === true;

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('isDarkMode'));
    setDarkMode(stored);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;