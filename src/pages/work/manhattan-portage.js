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

import BottomLink from "../../components/BottomLink";

function ManhattanPortage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Manhattan Portage"
            keywords={[
              `Makoto Dejima`,
              `Designer`,
              `Front-End Developer`,
              `Design`,
              `Graphic Design`,
              `JavaScript`,
              `React`,
              `Motion`
            ]}
          />

          <WorkTitle>Manhattan Portage Art Collection</WorkTitle>
          <WorkDescription>Messenger Bag Design</WorkDescription>

          <WorkPageWrapper>
            <Img
              fluid={data.mp01.childImageSharp.fluid}
              alt="Manhattan Portage - 01"
            />
            <Img
              fluid={data.mp02.childImageSharp.fluid}
              alt="Manhattan Portage - 02"
            />
            <Img
              fluid={data.mp03.childImageSharp.fluid}
              alt="Manhattan Portage - 03"
            />
            <Img
              fluid={data.mp04.childImageSharp.fluid}
              alt="Manhattan Portage - 04"
            />
          </WorkPageWrapper>
          <BottomLink path="/" linkText="Home" />
        </Layout>
      )}
    />
  );
}

export default ManhattanPortage;

const query = graphql`
  query {
    mp01: file(relativePath: { eq: "mp01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp02: file(relativePath: { eq: "mp02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp03: file(relativePath: { eq: "mp03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp04: file(relativePath: { eq: "mp04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
