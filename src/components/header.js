import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

function Header({ currentPath }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StyledNav>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="logo"
          data-name="Layer 1"
          viewBox="0 0 100 50"
        >
          <g>
            <line
              x1="26.61"
              x2="26.61"
              y1="16.51"
              y2="33.49"
              className="line"
            />
            <line x1="42.2" x2="42.2" y1="12.17" y2="37.83" className="line" />
            <line
              x1="11.01"
              x2="11.01"
              y1="13.72"
              y2="36.28"
              className="line"
            />
            <line
              x1="73.39"
              x2="73.39"
              y1="16.33"
              y2="33.67"
              className="line"
            />
            <line
              x1="88.99"
              x2="88.99"
              y1="21.55"
              y2="28.45"
              className="line"
            />
            <line x1="57.8" x2="57.8" y1="12.17" y2="37.83" className="line" />
          </g>
        </svg>
      </Link>

      <Hamburger onClick={() => toggleExpansion(!isExpanded)}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v1H0V3zm0 6h20v1H0V9zm0 6h20v1H0v-2z" />
        </svg>
      </Hamburger>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:flex md:items-center w-full md:w-auto text-center`}
      >
        <div className="header-link text-sm">
          <Link
            to="/work/"
            className={`relative block mt-4 md:inline-block md:mt-0 md:mr-8 no-underline ${
              currentPath === "/work/" ? `text-grey` : `text-grey-darkest`
            } `}
          >
            Work
          </Link>

          <Link
            to="/about/"
            className={`relative block md:inline-block mt-4 md:mt-0 md:mr-8 no-underline ${
              currentPath === "/about/" ? `text-grey` : `text-grey-darkest`
            } `}
          >
            About
          </Link>

          <Link
            to="/contact/"
            className={`relative block md:inline-block mt-4 md:mt-0 no-underline ${
              currentPath === "/contact/" ? `text-grey` : `text-grey-darkest`
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </StyledNav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 60rem;
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

  :focus {
    outline: 0;
  }
  @media (max-width: 768px) {
    display: block;
  }

  /* className="block md:hidden border border-black flex items-center px-3 py-2 rounded text-black" */
`;
