import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTransition, config } from 'react-spring';

import DarkModeSwitcher from './DarkModeSwitcher';
import { media } from './StyledComps';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import News from './News';

/* 
'color' props is passed down from Layout Comp
it defines header logo, text and hamburger color
*/

function Header({ color }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const transition = useTransition(isExpanded, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // config: config.slow,
  });

  return (
    <StyledNav isExpanded={isExpanded}>
      <Link to="/" aria-label="Home">
        <Logo color={color} />
      </Link>

      <Hamburger color={color} onClick={() => toggleExpansion(!isExpanded)}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v1H0V3zm0 6h20v1H0V9zm0 6h20v1H0v-1z" />
        </svg>
      </Hamburger>

      <HeaderLinks color={color}>
        <News />
        <Link className="link" to="/work/" activeStyle={{ opacity: 0.4 }}>
          Work
        </Link>

        <Link className="link" to="/about/" activeStyle={{ opacity: 0.4 }}>
          About
        </Link>

        <Link className="link" to="/contact/" activeStyle={{ opacity: 0.4 }}>
          Contact
        </Link>
        <DarkModeSwitcher color={color} />
      </HeaderLinks>

      {transition.map(
        ({ item, key, props }) =>
          item && (
            <MobileMenu key={key} style={props} isExpanded={isExpanded} />
          ),
      )}
    </StyledNav>
  );
}

Header.defaultProps = {
  siteTitle: `Makoto Dejima | Designer and Front-End Developer`,
};

Header.propTypes = {
  color: PropTypes.string,
  siteTitle: PropTypes.string,
};

export default Header;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  z-index: 10;
  ${media.phone`
    padding: 1rem;
  `};
`;

const Hamburger = styled.button`
  display: none;
  align-items: center;
  padding: 0.8rem 0.75rem 0.4rem;
  width: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: transparent;
  /* z-index: 10; */
  cursor: pointer;
  path {
    stroke: ${props => props.color || props.theme.primary};
  }

  :focus {
    outline: 0;
  }

  ${media.phone`
    display: block;
  `}
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  a.link {
    display: inline-block;
    position: relative;
    color: ${props => props.color || props.theme.primary};
    margin-left: 1.5rem;
    text-decoration: none;
    &::before {
      content: '';
      position: absolute;
      visibility: hidden;
      width: 100%;
      height: 1px;
      background-color: ${props => props.color || props.theme.primary};
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transition: all 0.25s ease-in-out 0s;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
      ${media.tablet`
        display:none;
      `}
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
