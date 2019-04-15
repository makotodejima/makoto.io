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

function TheLightOfTokyo() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Satte City"
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

          <WorkTitle>Satte City Promotion Logo</WorkTitle>
          <WorkDescription>Logo Design</WorkDescription>

          <WorkPageWrapper>
            <Img
              fluid={data.satte01.childImageSharp.fluid}
              alt="Satte City - 01"
            />
            <Img
              fluid={data.satte02.childImageSharp.fluid}
              alt="Satte City - 02"
            />
            <Img
              fluid={data.satte03.childImageSharp.fluid}
              alt="Satte City - 03"
            />
            <Img
              fluid={data.satte04.childImageSharp.fluid}
              alt="Satte City - 04"
            />
          </WorkPageWrapper>
          <BottomLink path="/" linkText="Home" />
        </Layout>
      )}
    />
  );
}

export default TheLightOfTokyo;

const query = graphql`
  query {
    satte01: file(relativePath: { eq: "satte01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte02: file(relativePath: { eq: "satte02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte03: file(relativePath: { eq: "satte03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte04: file(relativePath: { eq: "satte04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
