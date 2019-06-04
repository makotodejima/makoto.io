import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../components/StyledComps";
import Logo from "./Logo";
import News from "../components/News";

/* 
'color' props is passed down from Layout Comp
it defines header logo, text and hamburger color
*/

function Header({ color }) {
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
        <News />
        <Link className="link" to="/work/" activeStyle={{ color: `dimgrey` }}>
          Work
        </Link>

        <Link className="link" to="/about/" activeStyle={{ color: `dimgrey` }}>
          About
        </Link>

        <Link
          className="link"
          to="/contact/"
          activeStyle={{ color: `dimgrey` }}
        >
          Contact
        </Link>
      </HeaderLinks>

      <Overlay isExpanded={isExpanded}>
        <h1 className="close" onClick={() => toggleExpansion(!isExpanded)}>
          CLOSE
        </h1>
        <Link to="/" activeStyle={{ color: `dimgrey` }}>
          <h1>Home</h1>
        </Link>
        <Link to="/work/" activeStyle={{ color: `dimgrey` }}>
          <h1>Work</h1>
        </Link>
        <Link to="/about/" activeStyle={{ color: `dimgrey` }}>
          <h1>About</h1>
        </Link>

        <Link to="/contact/" activeStyle={{ color: `dimgrey` }}>
          <h1>Contact</h1>
        </Link>
      </Overlay>
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

  ${media.phone`
    padding: 1rem;
  `}
`;

const Hamburger = styled.button`
  display: none;
  align-items: center;
  padding: 0.8rem 0.75rem 0.3rem;
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
    color: ${props => props.color || "black"};
    margin-left: 1.5rem;
    text-decoration: none;
    &::before {
      content: "";
      position: absolute;
      visibility: hidden;
      width: 100%;
      height: 1.5px;
      background-color: ${props => props.color || "black"};
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
    text-align: center;
    width: 100%;
    /* display: ${props => (props.isExpanded ? `block` : `none`)}; */
    display: none;
    a {
      display: block;
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;

const Overlay = styled.div`
  visibility: hidden;
  transition: opacity 0.5s;
  @media (max-width: 576px) {
    visibility: ${props => (props.isExpanded ? "visible" : "hidden")};
    opacity: ${props => (props.isExpanded ? 0.98 : 0)};
  }

  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 249);
  overflow: auto;
  padding: 2rem;

  .close {
    text-align: right;
    margin-bottom: 6rem;
    color: grey;
    z-index: 999;
  }

  a {
    color: black;
    text-align: center;
    h1 {
      margin: 2rem 0;
    }
  }
`;
