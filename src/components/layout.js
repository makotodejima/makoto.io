import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import Header from "./header";
import Footer from "./Footer";

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
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest items-stretch">
          <Header
            siteTitle={data.site.siteMetadata.title}
            currentPath={currentPath}
          />

          <Main>{children}</Main>
          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
