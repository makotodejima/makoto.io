import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data }: any) => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
      <h3>Hi, it's me, Poco.</h3>
      <Img
        fixed={data.poco.childImageSharp.fixed}
        style={{ marginBottom: `1.8rem` }}
      />
      <h2>Looks like you've come to wrong place...</h2>
    </div>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query {
    poco: file(relativePath: { eq: "poco.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
