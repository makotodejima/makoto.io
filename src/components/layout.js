import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import { media } from './StyledComps';
import './layout.scss';

const Layout = ({ children, headerColor }) => {
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
          />
          <Main>{children}</Main>
          <Footer />
        </StyledLayout>
      )}
    />
  );
};

export default Layout;

Layout.propTypes = {
  headerColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

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

  ${media.phone`
    padding: 1rem;
  `}
`;
