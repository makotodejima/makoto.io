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
        <Layout color="white">
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
              fluid={data.the_light_of_tokyo_00.childImageSharp.fluid}
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
              fluid={data.the_light_of_tokyo_02.childImageSharp.fluid}
              alt="The Light of Tokyo - 02"
            />
            <Img
              fluid={data.the_light_of_tokyo_05.childImageSharp.fluid}
              alt="The Light of Tokyo - 05"
            />
            <Img
              fluid={data.the_light_of_tokyo_01.childImageSharp.fluid}
              alt="The Light of Tokyo - 01"
            />

            <Img
              fluid={data.the_light_of_tokyo_03.childImageSharp.fluid}
              alt="The Light of Tokyo - 03"
            />
            <Img
              fluid={data.the_light_of_tokyo_04.childImageSharp.fluid}
              alt="The Light of Tokyo - 04"
            />
            <Img
              fluid={data.the_light_of_tokyo_06.childImageSharp.fluid}
              alt="The Light of Tokyo - 06"
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
    the_light_of_tokyo_00: file(
      relativePath: { eq: "the_light_of_tokyo_00.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_01: file(
      relativePath: { eq: "the_light_of_tokyo_01.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_02: file(
      relativePath: { eq: "the_light_of_tokyo_02.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_03: file(
      relativePath: { eq: "the_light_of_tokyo_03.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_04: file(
      relativePath: { eq: "the_light_of_tokyo_04.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_05: file(
      relativePath: { eq: "the_light_of_tokyo_05.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    the_light_of_tokyo_06: file(
      relativePath: { eq: "the_light_of_tokyo_06.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
