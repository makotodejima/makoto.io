import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import Header from "./header";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 4rem;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function Layout({ children, currentPath }) {
  const props = useSpring({
    year: 2019,
    from: { year: 1990 },
    config: { mass: 1, tension: 100, friction: 200 }
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
          <Header
            siteTitle={data.site.siteMetadata.title}
            currentPath={currentPath}
          />

          <Main>{children}</Main>

          <footer className="bg-blue-darker">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-xl mx-auto mx-auto p-6 md:p-8 text-sm">
              <div className="copyright text-white">
                &copy;{" "}
                <animated.span>
                  {props.year.interpolate(val => val.toFixed(0))}
                </animated.span>{" "}
                Makoto Dejima
              </div>
              <div className="footer-link contacts w-48 mb-4 md:m-0 flex justify-between">
                <Link to="/" className="relative md:no-underline text-white">
                  Home
                </Link>
                <Link
                  to="/about/"
                  className="relative md:no-underline text-white"
                >
                  About
                </Link>

                <Link
                  to="/contact/"
                  className="relative md:no-underline text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
