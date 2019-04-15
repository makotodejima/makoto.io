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

function Soreike() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Soreike SF Tee"
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
          <WorkTitle>Soreike San Francisco Tee</WorkTitle>
          <WorkDescription>T-shirt Design</WorkDescription>

          <WorkPageWrapper>
            <Img
              fluid={data.soreike01.childImageSharp.fluid}
              alt="Soreike SF Tee - 01"
            />
            <Img
              fluid={data.soreike02.childImageSharp.fluid}
              alt="Soreike SF Tee - 02"
            />
            <Img
              fluid={data.soreike03.childImageSharp.fluid}
              alt="Soreike SF Tee - 03"
            />
            <Img
              fluid={data.soreike04.childImageSharp.fluid}
              alt="Soreike SF Tee - 04"
            />
            <Img
              fluid={data.soreike05.childImageSharp.fluid}
              alt="Soreike SF Tee - 05"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default Soreike;

const query = graphql`
  query {
    soreike01: file(relativePath: { eq: "soreike01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike02: file(relativePath: { eq: "soreike02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike03: file(relativePath: { eq: "soreike03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike04: file(relativePath: { eq: "soreike04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike05: file(relativePath: { eq: "soreike05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
