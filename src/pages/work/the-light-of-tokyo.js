import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../../components/seo";
import Layout from "../../components/layout";
import {
  TopCoverColor,
  TopImage,
  TopSection,
  WorkTitle,
  WorkCopy,
  WorkTag,
  WorkDescription,
  WorkPageWrapper,
  Caption
} from "../../components/StyledComps";

function TheLightOfTokyo() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout headerColor="white">
          <SEO
            title="The Light of Tokyo"
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
            <TopCoverColor color="#0a3d62" />
            <TopImage
              className="top-image"
              fluid={data.the_light_of_tokyo_00.childImageSharp.fluid}
              alt="The Light of Tokyo - top"
            />
            <WorkTitle>The Light of Tokyo</WorkTitle>
            <WorkCopy>Tokyo Postcard Award 2019 by Hotel Ryumeikan</WorkCopy>
            <WorkTag>Print, Illustration, Award-winning</WorkTag>
            <WorkDescription>
              I designed the postcard for the hotel chain, Hotel Ryumeikan
              Tokyo. This postcard is being offered to their guests as an
              amenity in every single room. Ryumeikan Tokyo has over a hundred
              years of history and now owns 4 locations in the central part of
              Tokyo. As the message written in the card, each letters start to
              get dissolved into the night scape as the light coming out of
              buildings are printed with dark grey color. Won the “Tokyo
              Postcard Award 2019”.
            </WorkDescription>
          </TopSection>

          <WorkPageWrapper>
            <Img
              fluid={data.the_light_of_tokyo_02.childImageSharp.fluid}
              alt="The Light of Tokyo - 02"
            />
            <Caption>Awarding ceremony</Caption>
            <Img
              fluid={data.the_light_of_tokyo_05.childImageSharp.fluid}
              alt="The Light of Tokyo - 05"
            />
            <Caption>Original illustration</Caption>

            <Img
              fluid={data.the_light_of_tokyo_03.childImageSharp.fluid}
              alt="The Light of Tokyo - 03"
            />
            <Caption>Media coverage. Photo of me giving a talk.</Caption>
            <Img
              fluid={data.the_light_of_tokyo_01.childImageSharp.fluid}
              alt="The Light of Tokyo - 01"
            />
            <Caption>
              Study for the light coming out of diffrent buiildings.
            </Caption>
            <Img
              fluid={data.the_light_of_tokyo_04.childImageSharp.fluid}
              alt="The Light of Tokyo - 04"
            />
            <Caption>Variation of color combiations. Sunset. Clouds.</Caption>

            <Img
              fluid={data.the_light_of_tokyo_06.childImageSharp.fluid}
              alt="The Light of Tokyo - 06"
            />
            <Caption>
              Everything comes together when you write down message.
            </Caption>
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default TheLightOfTokyo;

const query = graphql`
  query {
    the_light_of_tokyo_00: file(
      relativePath: { eq: "the_light_of_tokyo_00.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_01: file(
      relativePath: { eq: "the_light_of_tokyo_01.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_02: file(
      relativePath: { eq: "the_light_of_tokyo_02.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_03: file(
      relativePath: { eq: "the_light_of_tokyo_03.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_04: file(
      relativePath: { eq: "the_light_of_tokyo_04.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_05: file(
      relativePath: { eq: "the_light_of_tokyo_05.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_06: file(
      relativePath: { eq: "the_light_of_tokyo_06.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
