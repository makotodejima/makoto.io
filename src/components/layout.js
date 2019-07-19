import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { light, dark } from '../theme/theme';
import ThemeContext from '../theme/themeContext';

import Footer from './Footer';
import Header from './Header';
import { media } from './StyledComps';
import './layout.scss';

const Layout = ({ children, headerColor }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const style = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { mass: 1, tension: 150, friction: 30 },
  });

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <StyledLayout>
        <Header color={headerColor} />
        <AnimatedMain style={style}>{children}</AnimatedMain>
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
  h4 {
    font-size: 16px;
  }
`;

const AnimatedMain = styled(animated.div)`
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
