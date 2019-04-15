import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import Footer from "./Footer";

// GLOBAL CSS
import "./layout.scss";

export default ({ children, currentPath }) => {
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
        <Layout>
          <Header
            siteTitle={data.site.siteMetadata.title}
            currentPath={currentPath}
          />
          <Main>{children}</Main>
          <Footer />
        </Layout>
      )}
    />
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  font-family: "Ubuntu", "proxima-nova", "-apple-system", "Open Sans",
    "Noto Sans JP", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "sans-serif";
  color: black;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
  padding: 2rem 4rem;
  width: 100%;
  max-width: 960px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
