import React from "react";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import poco from "../images/poco.png";

const NotFoundPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <SEO title="404: Not found" />
        <div>
          <h3 className="block my-4 p-3 text-center">Hi, it's me, Poco.</h3>
          <Img
            fluid={data.poco.childImageSharp.fluid}
            className="block mx-auto w-1/6"
          />
          <h2 className="block mt-4 mb-24 p-3 text-center">
            Looks like you've come to wrong place...
          </h2>
        </div>
      </Layout>
    )}
  />
);

export default NotFoundPage;

const query = graphql`
  query {
    poco: file(relativePath: { eq: "poco.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
