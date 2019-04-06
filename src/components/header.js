import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

function Header({ currentPath }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const [logoHover, toggleLogoHover] = useState(false);

  const opacity = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.gentle
  });

  return (
    <nav className="bg-white">
      <animated.div
        style={opacity}
        className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"
      >
        <Link to="/" className="w-16 h-11">
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
              <line
                x1="42.2"
                x2="42.2"
                y1="12.17"
                y2="37.83"
                className="line"
              />
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
              <line
                x1="57.8"
                x2="57.8"
                y1="12.17"
                y2="37.83"
                className="line"
              />
            </g>
          </svg>
        </Link>

        <button
          className="block md:hidden border border-black flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

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
      </animated.div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
