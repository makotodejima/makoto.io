import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  Caption,
  TopImage,
  TopSection,
  WorkCopy,
  WorkDescription,
  WorkPageWrapper,
  WorkTag,
  WorkTitle,
} from '../../components/StyledComps';

const ManhattanPortage = ({ data }: any) => {
  return (
    <Layout headerTextColor="beige" headerBgColor="#D83038">
      <SEO title="Manhattan Portage" />
      <TopSection>
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
          Manhattan Portage is one of the most well-known messenger bag brand
          and manufacturer in the world. They started from New York City in
          1983. The philosophy they set out to achieve back in 1983, is "New
          York Tough." Their outdoor gear and packs are crafted with materials
          like CORDURA brand nylon. "Manhattan Portage Art Award" is held every
          year and artists create design that matches Manhattan Portage's
          culture, materials and philosophy of "New York Tough".
        </WorkDescription>
      </TopSection>

      <WorkPageWrapper>
        <Img
          fluid={data.manhattan_portage_01.childImageSharp.fluid}
          alt="Manhattan Portage - 01"
        />
        <Caption>
          The biker strongly running through the New York City, representing the
          history of Manhattan Portage that thrives in competitive market.
        </Caption>
        <Img
          fluid={data.manhattan_portage_02.childImageSharp.fluid}
          alt="Manhattan Portage - 02"
        />
        <Caption>The philosophy, "New York Tough" on the bottom.</Caption>
        <Img
          fluid={data.manhattan_portage_03.childImageSharp.fluid}
          alt="Manhattan Portage - 03"
        />
        <Caption>
          Experimenting different colors and allocation of city icons.
        </Caption>
        <Img
          fluid={data.manhattan_portage_04.childImageSharp.fluid}
          alt="Manhattan Portage - 04"
        />
        <Caption>Final proof</Caption>
      </WorkPageWrapper>
    </Layout>
  );
};

export default ManhattanPortage;

export const query = graphql`
  query {
    manhattan_portage_00: file(
      relativePath: { eq: "manhattan_portage_00.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_01: file(
      relativePath: { eq: "manhattan_portage_01.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_02: file(
      relativePath: { eq: "manhattan_portage_02.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_03: file(
      relativePath: { eq: "manhattan_portage_03.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage_04: file(
      relativePath: { eq: "manhattan_portage_04.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
