import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import HomeWorkBtns from "../../components/homeWorkBtns";

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

          <div className="hero flex flex-col justify-center text-center align-middle">
            <h3 className="font-light tracking-wide">Logo Design</h3>
            <h2 className="font-light my-4">Satte City Promotion Logo</h2>
          </div>

          <div className="work flex flex-col">
            <Img
              fluid={data.satte01.childImageSharp.fluid}
              alt="Satte City - 01"
              className="my-16"
            />
            <Img
              fluid={data.satte02.childImageSharp.fluid}
              alt="Satte City - 02"
              className="my-16"
            />
            <Img
              fluid={data.satte03.childImageSharp.fluid}
              alt="Satte City - 03"
              className="my-16"
            />
            <Img
              fluid={data.satte04.childImageSharp.fluid}
              alt="Satte City - 04"
              className="my-16"
            />
          </div>
          <HomeWorkBtns />
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
