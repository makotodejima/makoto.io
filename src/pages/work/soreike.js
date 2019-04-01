import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import BottomLink from "../../components/bottomLink";
import WorkHeader from "../../components/workHeader";

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
          <WorkHeader title="Soreike San Francisco Tee" desc="T-shirt Design" />
          <div className="work flex flex-col">
            <Img
              fluid={data.soreike01.childImageSharp.fluid}
              alt="Soreike SF Tee - 01"
              className="my-16"
            />
            <Img
              fluid={data.soreike02.childImageSharp.fluid}
              alt="Soreike SF Tee - 02"
              className="my-16"
            />
            <Img
              fluid={data.soreike03.childImageSharp.fluid}
              alt="Soreike SF Tee - 03"
              className="my-16"
            />
            <Img
              fluid={data.soreike04.childImageSharp.fluid}
              alt="Soreike SF Tee - 04"
              className="my-16"
            />
            <Img
              fluid={data.soreike05.childImageSharp.fluid}
              alt="Soreike SF Tee - 05"
              className="my-16"
            />
          </div>
          <BottomLink path="/" linkText="Home" />
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
