import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTransition } from 'react-spring';

import Hamburger from './Hamburger';
import DarkModeSwitcher from './DarkModeSwitcher';
import { media, TopCoverColor } from './StyledComps';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import News from './News';

/* 
"color" props is passed down from Layout Comp
it defines header logo, text and hamburger color
*/

interface HeaderProps {
  headerTextColor: string;
  headerBgColor: string;
}

function Header({ headerTextColor, headerBgColor }: HeaderProps) {
  const [isExpanded, toggleExpansion] = useState<boolean>(false);

  const mobileMenuTransition = useTransition(isExpanded, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <StyledNav isExpanded={isExpanded}>
      <Logo color={headerTextColor} />

      {headerBgColor && <TopCoverColor color={headerBgColor} />}

      <Hamburger
        color={headerTextColor}
        isExpanded={isExpanded}
        toggleExpansion={() => toggleExpansion(!isExpanded)}
      />

      <HeaderLinks color={headerTextColor}>
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
        <DarkModeSwitcher color={headerTextColor} />
      </HeaderLinks>

      {mobileMenuTransition.map(
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
  ${media.phone`
    padding: 1rem;
  `};
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
