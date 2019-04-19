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
        <Layout color="beige">
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
              Naotatsu Kaku is a visual artist who is born and raised in Tokyo.
              His family have their roots in Taiwan and his work represent his
              thought on the identity. He recently won the "New Cosmos of
              Photography Award" and is continuously working on his artwork with
              the support from Canon, a leading company in the photo and camera
              industry.
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
