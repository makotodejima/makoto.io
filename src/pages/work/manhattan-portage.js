import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  TopCoverColor,
  TopImage,
  TopSection,
  ExtLink,
  WorkTitle,
  WorkCopy,
  WorkTag,
  WorkDescription,
  WorkPageWrapper
} from "../../components/StyledComps";

function ManhattanPortage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout headerColor="beige">
          <SEO
            title="Manhattan Portage"
            keywords={[
              `Makoto Dejima`,
              `JavaScript`,
              `Design`,
              `React`,
              `Front-End Developer`,
              `Graphic Design`
            ]}
          />

          <TopSection>
            <TopCoverColor color="#D83038" />
            <TopImage
              width="80%"
              className="top-image"
              fluid={data.manhattan_portage_00.childImageSharp.fluid}
              alt="Manhattan Portage - 00"
            />
            <WorkTitle>Manhattan Portage Art Collection</WorkTitle>
            <WorkCopy>Messenger Bag Design | Manhattan Portage</WorkCopy>
            <WorkTag>Textile, Print, Graphic Design, Apparel</WorkTag>
            <WorkDescription>
              Manhattan Portage is one of the most well-known messenger bag
              brand and manufacturer in the world. They started from New York
              City in 1983. The simple philosophy they set out to achieve back
              in 1983, is "New York Tough." Their outdoor gear and packs are
              crafted with materials like CORDURA brand nylon and high quality
              plastic Delrin buckles. "Manhattan Portage Art Award" is held
              every year and artists create design that matches Manhattan
              Portage's culture, materials and philosophy of "New York Tough".
            </WorkDescription>
          </TopSection>

          <WorkPageWrapper>
            <Img
              fluid={data.manhattan_portage_01.childImageSharp.fluid}
              alt="Manhattan Portage - 01"
            />
            <Img
              fluid={data.manhattan_portage_02.childImageSharp.fluid}
              alt="Manhattan Portage - 02"
            />

            <Img
              fluid={data.manhattan_portage_03.childImageSharp.fluid}
              alt="Manhattan Portage - 03"
            />
            <Img
              fluid={data.manhattan_portage_04.childImageSharp.fluid}
              alt="Manhattan Portage - 04"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default ManhattanPortage;

const query = graphql`
  query {
    manhattan_portage_00: file(
      relativePath: { eq: "manhattan_portage_00.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_01: file(
      relativePath: { eq: "manhattan_portage_01.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_02: file(
      relativePath: { eq: "manhattan_portage_02.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_03: file(
      relativePath: { eq: "manhattan_portage_03.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_04: file(
      relativePath: { eq: "manhattan_portage_04.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
