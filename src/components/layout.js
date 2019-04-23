import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// GLOBAL CSS
import "./layout.scss";

export default ({ children, headerColor, currentPath }) => {
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
        <StyledLayout>
          <Header
            color={headerColor}
            siteTitle={data.site.siteMetadata.title}
            currentPath={currentPath}
          />
          <Main>{children}</Main>
          <Footer />
        </StyledLayout>
      )}
    />
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  color: black;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
  padding: 2rem 2rem;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
