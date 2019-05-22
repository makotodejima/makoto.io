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
              `JavaScript`,
              `Design`,
              `React`,
              `Front-End Developer`,
              `Graphic Design`
            ]}
          />
          <WorkTitle>Japan Society of Mountain Reseach</WorkTitle>
          <WorkDescription>Logo Design</WorkDescription>

          <WorkPageWrapper>
            <Img fluid={data.jasms01.childImageSharp.fluid} alt="JASMS - 01" />
            <Img fluid={data.jasms02.childImageSharp.fluid} alt="JASMS - 02" />
            <Img fluid={data.jasms03.childImageSharp.fluid} alt="JASMS - 03" />
            <Img fluid={data.jasms04.childImageSharp.fluid} alt="JASMS - 04" />
            <Img fluid={data.jasms05.childImageSharp.fluid} alt="JASMS - 05" />
          </WorkPageWrapper>
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
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms02: file(relativePath: { eq: "jasms02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms03: file(relativePath: { eq: "jasms03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms04: file(relativePath: { eq: "jasms04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms05: file(relativePath: { eq: "jasms05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
