import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { light, dark } from '../utils/theme';

import Footer from './Footer';
import Header from './Header';
import { media } from './StyledComps';
import './layout.scss';

const Layout = ({ children, headerColor }) => {
  let stored;
  if (typeof window !== 'undefined') {
    stored = JSON.parse(localStorage.getItem('isDarkMode'));
  }
  const [isDarkMode, toggleDarkMode] = useState(stored);

  useEffect(() => {
    toggleDarkMode(stored);
  });

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <StyledLayout>
        <Header
          color={headerColor}
          toggleDarkMode={() => {
            toggleDarkMode(!isDarkMode);
            localStorage.setItem('isDarkMode', !isDarkMode);
          }}
        />
        <Main>{children}</Main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  headerColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const StyledLayout = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  transition: background-color 500ms;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
  padding: 2rem 2rem;
  width: 100%;
  max-width: 50rem;

  ${media.phone`
    padding: 1rem;
  `}
`;
