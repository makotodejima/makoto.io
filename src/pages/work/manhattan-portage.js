import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import HomeWorkBtns from "../../components/homeWorkBtns";

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

          <div className="hero flex flex-col justify-center text-center align-middle">
            <h3 className="font-light tracking-wide">Messenger Bag Design</h3>
            <h2 className="font-light my-4">
              Manhattan Portage Art Collection
            </h2>
          </div>

          <div className="work flex flex-col">
            <Img
              fluid={data.mp01.childImageSharp.fluid}
              alt="Manhattan Portage - 01"
              className="my-16"
            />
            <Img
              fluid={data.mp02.childImageSharp.fluid}
              alt="Manhattan Portage - 02"
              className="my-16"
            />
            <Img
              fluid={data.mp03.childImageSharp.fluid}
              alt="Manhattan Portage - 03"
              className="my-16"
            />
            <Img
              fluid={data.mp04.childImageSharp.fluid}
              alt="Manhattan Portage - 04"
              className="my-16"
            />
          </div>
          <HomeWorkBtns />
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
