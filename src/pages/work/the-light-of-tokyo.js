import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../../components/seo";
import Layout from "../../components/layout";
import {
  TopSection,
  WorkTitle,
  WorkCopy,
  WorkTag,
  WorkDescription,
  WorkPageWrapper
} from "../../components/StyledComps";

function TheLightOfTokyo() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="The Light of Tokyo"
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
            <div className="background" />
            <Img
              className="top-image"
              fluid={data.lot_top.childImageSharp.fluid}
              alt="The Light of Tokyo - top"
            />
            <WorkTitle>The Light of Tokyo</WorkTitle>
            <WorkCopy>Tokyo Postcard Award 2019 by Hotel Ryumeikan</WorkCopy>
            <WorkTag>Print, Illustration, Awarded</WorkTag>
            <WorkDescription>
              I designed the postcard for the hotel chain, Hotel Ryumeikan
              Tokyo. It is offered to the guests as an amenity in every single
              room. Ryumeikan Tokyo has over a hundred years of history and now
              owns 4 locations in the central part of Tokyo. As the letters
              written in the card, they start to get dissolved into the night
              scape as the light of Tokyo printed with dark grey color. I won
              the “Tokyo Postcard Award 2019” which started back in 2012.{" "}
            </WorkDescription>
          </TopSection>

          <WorkPageWrapper>
            <Img
              fluid={data.tpc01.childImageSharp.fluid}
              alt="The Light of Tokyo - 01"
            />
            <Img
              fluid={data.tpc02.childImageSharp.fluid}
              alt="The Light of Tokyo - 02"
            />
            <Img
              fluid={data.tpc03.childImageSharp.fluid}
              alt="The Light of Tokyo - 03"
            />
            <Img
              fluid={data.tpc04.childImageSharp.fluid}
              alt="The Light of Tokyo - 04"
            />
            <Img
              fluid={data.tpc05.childImageSharp.fluid}
              alt="The Light of Tokyo - 05"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default TheLightOfTokyo;

const query = graphql`
  query {
    lot_top: file(relativePath: { eq: "lot_top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc01: file(relativePath: { eq: "tpc01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc02: file(relativePath: { eq: "tpc02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc03: file(relativePath: { eq: "tpc03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc04: file(relativePath: { eq: "tpc04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc05: file(relativePath: { eq: "tpc05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
