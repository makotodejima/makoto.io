import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  TopImage,
  TopSection,
  WorkCopy,
  WorkPageWrapper,
  WorkTag,
  WorkTitle,
} from '../../components/StyledComps';

const Mera = ({ data }: any) => {
  return (
    <Layout headerTextColor="#FAF0E1" headerBgColor="#00646A">
      <SEO
        title="Farming System Logo Design"
        keywords={[`Makoto Dejima`, `Design`, `React`, `Graphic Design`]}
      />

      <TopSection>
        <TopImage
          width="80%"
          className="top-image"
          fluid={data.mera01.childImageSharp.fluid}
          alt="Farming System Logo"
        />
        <WorkTitle>Indoor Farming System Logo Design</WorkTitle>
        <WorkCopy>Logo design for farming system brand</WorkCopy>
        <WorkTag>Logo, Branding, Graphic design</WorkTag>
      </TopSection>

      <WorkPageWrapper>
        <Img
          fluid={data.mera02.childImageSharp.fluid}
          alt="Farming System Logo - 02"
        />
        <Img
          fluid={data.mera03.childImageSharp.fluid}
          alt="Farming System Logo - 03"
        />
        <Img
          fluid={data.mera04.childImageSharp.fluid}
          alt="Farming System Logo - 04"
        />
      </WorkPageWrapper>
    </Layout>
  );
};

export default Mera;

export const query = graphql`
  query {
    mera01: file(relativePath: { eq: "mera/mera01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera02: file(relativePath: { eq: "mera/mera02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera03: file(relativePath: { eq: "mera/mera03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera04: file(relativePath: { eq: "mera/mera04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
