import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  WorkTitle,
  WorkDescription,
  WorkPageWrapper
} from "../../components/StyledComps";

function IndexPage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="808MERA"
            keywords={[
              `Makoto Dejima`,
              `JavaScript`,
              `Design`,
              `React`,
              `Front-End Developer`,
              `Graphic Design`
            ]}
          />
          <WorkTitle>808 MERA</WorkTitle>
          <WorkDescription>
            Logo Design for Indoor Farming System
          </WorkDescription>
          <WorkPageWrapper>
            <Img
              fluid={data.mera01.childImageSharp.fluid}
              alt="808 MERA - 01"
            />
            <Img
              fluid={data.mera02.childImageSharp.fluid}
              alt="808 MERA - 02"
            />
            <Img
              fluid={data.mera03.childImageSharp.fluid}
              alt="808 MERA - 03"
            />
            <Img
              fluid={data.mera04.childImageSharp.fluid}
              alt="808 MERA - 04"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default IndexPage;

const query = graphql`
  query {
    mera01: file(relativePath: { eq: "mera01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera02: file(relativePath: { eq: "mera02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera03: file(relativePath: { eq: "mera03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera04: file(relativePath: { eq: "mera04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
