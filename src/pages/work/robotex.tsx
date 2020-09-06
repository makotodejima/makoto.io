import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  Caption,
  TopImage,
  TopSection,
  WorkCopy,
  WorkDescription,
  WorkPageWrapper,
  WorkTag,
  WorkTitle,
} from "../../components/StyledComps";

const Robotex = ({ data }: any) => {
  return (
    <Layout headerTextColor="rgb(255, 255, 249)" headerBgColor="#CE1437">
      <SEO title="Robotex Japan" />
      <TopSection>
        <TopImage
          width="70%"
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
        <WorkDescription>
          Robotex International is a global robotics education network, focusing
          on robotics (including AI and Drones) education and startup training.
          Established back in 2001, Robotex has expanded the network to over 18
          countries. In October 2019, Robotex Japan will hold first big
          conference in Kyoto. Continuing to grow its presence in Japanese
          education scene.
        </WorkDescription>
      </TopSection>

      <WorkPageWrapper>
        <Img
          fluid={data.robotex_05.childImageSharp.fluid}
          alt="Robotex Japan - 05"
        />
        <Caption>Robotex Japan's website top page.</Caption>
        <Img
          fluid={data.robotex_06.childImageSharp.fluid}
          alt="Robotex Japan - 06"
        />
        <Caption>
          Content are created by the editors through Netlify CMS.
        </Caption>
        <Img
          fluid={data.robotex_01.childImageSharp.fluid}
          alt="Robotex Japan - 01"
        />
        <Caption>
          Set up UI component development environment and design guideline with
          Storybook, helping other developers to have consistency and efficiency
        </Caption>
        <Img
          fluid={data.robotex_04.childImageSharp.fluid}
          alt="Robotex Japan - 04"
        />
        <Caption>
          Storybook made easy to develop a component or a set of components in
          the independent environment. Resulting in resilient and reusable
          components.
        </Caption>
        <Img
          fluid={data.robotex_02.childImageSharp.fluid}
          alt="Robotex Japan - 02"
        />
        <Caption>
          Prototyping website mockup, graphic and brand visual identity.
        </Caption>
        <Img
          fluid={data.robotex_03.childImageSharp.fluid}
          alt="Robotex Japan - 03"
        />
        <Caption>Designed and illustrated the brand visual identity.</Caption>
      </WorkPageWrapper>
    </Layout>
  );
};

export default Robotex;

export const query = graphql`
  query PageQuery {
    robotex_00: file(relativePath: { eq: "robotex/robotex_cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_01: file(relativePath: { eq: "robotex/robotex_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_02: file(relativePath: { eq: "robotex/robotex_02.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_03: file(relativePath: { eq: "robotex/robotex_03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_04: file(relativePath: { eq: "robotex/robotex_04.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_05: file(relativePath: { eq: "robotex/robotex_05.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex_06: file(relativePath: { eq: "robotex/robotex_06.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
