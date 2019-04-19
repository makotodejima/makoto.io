import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

/* 
'color' props is passed down from Layout Comp
it defines header logo, text and hamburger color
*/

function Header({ color, currentPath }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StyledNav>
      <Link to="/">
        <Logo color={color} />
      </Link>
      <Hamburger color={color} onClick={() => toggleExpansion(!isExpanded)}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v1H0V3zm0 6h20v1H0V9zm0 6h20v1H0v-2z" />
        </svg>
      </Hamburger>

      <HeaderLinks color={color} isExpanded={isExpanded}>
        <Link to="/work/" className={currentPath === "/work/" ? `current` : ""}>
          Work
        </Link>

        <Link
          to="/about/"
          className={currentPath === "/about/" ? `current` : ``}
        >
          About
        </Link>

        <Link
          to="/contact/"
          className={currentPath === "/contact/" ? `current` : ``}
        >
          Contact
        </Link>
      </HeaderLinks>
    </StyledNav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Makoto Dejima | Designer and Front-End Developer`
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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  align-items: center;
  padding: 0.3rem 0.75rem;
  width: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  path {
    stroke: ${props => props.color || "black"};
  }

  :focus {
    outline: 0;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderLinks = styled.div`
  align-items: center;
  font-size: 1rem;

  a {
    display: inline-block;
    position: relative;
    color: ${props => props.color || "black"};
    margin-left: 1.5rem;
    text-decoration: none;
    &.current {
      color: grey;
    }
    &::before {
      content: "";
      position: absolute;
      visibility: hidden;
      width: 100%;
      height: 1.5px;
      background-color: #3d4852;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transition: all 0.25s ease-in-out 0s;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: ${props => (props.isExpanded ? `block` : `none`)};
    a {
      display: block;
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
