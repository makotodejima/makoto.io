import React from "react";
import { graphql } from "gatsby";
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
  WorkPageWrapper,
  Caption
} from "../../components/StyledComps";

function Robotex({ data }) {
  return (
    <Layout headerColor="rgb(255, 255, 249)">
      <SEO
        title="Robotex Japan"
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
        <TopCoverColor color="#CE1437" />
        <TopImage
          width="65%"
          className="top-image"
          fluid={data.robotex_00.childImageSharp.fluid}
          alt="Naotatsu Kaku - 00"
        />
        <WorkTitle>Robotex Japan Corporate Website</WorkTitle>
        <WorkCopy>
          Global robotics education network originated in Estonia
        </WorkCopy>
        <WorkTag>
          Gatsby, React, GraphQL, Storybook, Netlify CMS, Styled-components
        </WorkTag>
        <ExtLink color="#CE1437">
          <a
            href="https://robotex.or.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
          </a>
        </ExtLink>
        <WorkDescription>
          Naotatsu Kaku is a visual artist who was born and raised in Tokyo. His
          family have their roots in Taiwan and some of the works represent his
          thoughts on his own identity. He won the "New Cosmos of Photography
          Award" and now is working with the support from Canon, a leading
          company in the photo and camera industry.
        </WorkDescription>
      </TopSection>

      <WorkPageWrapper>
        {/* <Img /> */}
        <Caption>
          Experimenting different patterns of animation. Animation is shown to
          only new visitors.
        </Caption>
        <Img
          fluid={data.robotex_01.childImageSharp.fluid}
          alt="Robotex Japan - 01"
        />
        <Caption>
          As his artworks feature transition between images, pictures are set in
          beautiful slideshow form.
        </Caption>
        <Img
          fluid={data.robotex_02.childImageSharp.fluid}
          alt="Robotex Japan - 02"
        />
        <Caption>Animated with SVGs, Anime.js and styled-components.</Caption>
        <Img
          fluid={data.robotex_03.childImageSharp.fluid}
          alt="Robotex Japan - 03"
        />
      </WorkPageWrapper>
    </Layout>
  );
}

export default Robotex;

export const query = graphql`
  query PageQuery {
    robotex_00: file(relativePath: { eq: "robotex_cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_01: file(relativePath: { eq: "robotex_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_02: file(relativePath: { eq: "robotex_02.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_03: file(relativePath: { eq: "robotex_03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
