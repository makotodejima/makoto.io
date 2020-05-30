import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { dark, light } from '../theme/theme';
import ThemeContext from '../theme/themeContext';
import Footer from './Footer';
import Header from './Header/Header';
import './layout.scss';
import { media } from './StyledComps';

interface Props {
  children: React.ReactNode;
  headerTextColor?: string;
  headerBgColor?: string;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bg}
  }
`;

const Layout = ({ children, headerTextColor, headerBgColor }: Props) => {
  const { isDarkMode } = useContext(ThemeContext);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    opacity: 1,
    transform: 'translateY(0px)',
    config: { mass: 1, tension: 150, friction: 30 },
  });

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <StyledLayout>
        <GlobalStyle />
        <Header
          headerTextColor={headerTextColor}
          headerBgColor={headerBgColor}
        />
        <AnimatedMain style={fadeIn}>{children}</AnimatedMain>
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
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.primary};
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
