import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import HomeWorkBtns from "../../components/homeWorkBtns";
import WorkHeader from "../../components/workHeader";

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
              `Designer`,
              `Front-End Developer`,
              `Design`,
              `Graphic Design`,
              `JavaScript`,
              `React`,
              `Motion`
            ]}
          />

          <WorkHeader
            title="808 MERA"
            desc="Logo Design for Indoor Farming System"
          />

          <div className="work flex flex-col">
            <Img
              fluid={data.mera01.childImageSharp.fluid}
              alt="808 MERA - 01"
              className="my-16"
            />
            <Img
              fluid={data.mera02.childImageSharp.fluid}
              alt="808 MERA - 02"
              className="my-16"
            />
            <Img
              fluid={data.mera03.childImageSharp.fluid}
              alt="808 MERA - 03"
              className="my-16"
            />
            <Img
              fluid={data.mera04.childImageSharp.fluid}
              alt="808 MERA - 04"
              className="my-16"
            />
          </div>
          <HomeWorkBtns />
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
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera02: file(relativePath: { eq: "mera02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera03: file(relativePath: { eq: "mera03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera04: file(relativePath: { eq: "mera04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
