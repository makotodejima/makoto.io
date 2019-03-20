import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import HomeWorkBtns from "../../components/homeWorkBtns";
import WorkHeader from "../../components/workHeader";

function Jasms() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="JASMS"
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
            title="Japan Society of Mountain Reseach"
            desc="Logo Design"
          />

          <div className="work flex flex-col">
            <Img
              fluid={data.jasms01.childImageSharp.fluid}
              alt="JASMS - 01"
              className="my-16"
            />
            <Img
              fluid={data.jasms02.childImageSharp.fluid}
              alt="JASMS - 02"
              className="my-16"
            />
            <Img
              fluid={data.jasms03.childImageSharp.fluid}
              alt="JASMS - 03"
              className="my-16"
            />
            <Img
              fluid={data.jasms04.childImageSharp.fluid}
              alt="JASMS - 04"
              className="my-16"
            />
            <Img
              fluid={data.jasms05.childImageSharp.fluid}
              alt="JASMS - 05"
              className="my-16"
            />
          </div>

          <HomeWorkBtns />
        </Layout>
      )}
    />
  );
}

export default Jasms;

const query = graphql`
  query {
    jasms01: file(relativePath: { eq: "jasms01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms02: file(relativePath: { eq: "jasms02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms03: file(relativePath: { eq: "jasms03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms04: file(relativePath: { eq: "jasms04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms05: file(relativePath: { eq: "jasms05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
