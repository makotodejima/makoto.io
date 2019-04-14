import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import Footer from "./Footer";

// GLOBAL CSS
import "./layout.scss";

function Layout({ children, currentPath }) {
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
        <LayoutDiv>
          <Header
            siteTitle={data.site.siteMetadata.title}
            currentPath={currentPath}
          />
          <Main>{children}</Main>
          <Footer />
        </LayoutDiv>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu-Bold";
  min-height: 100vh;
  color: blue;
  align-items: stretch;
`;

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
