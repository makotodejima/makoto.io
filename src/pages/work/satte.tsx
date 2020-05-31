import { graphql, StaticQuery } from 'gatsby';
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

function TheLightOfTokyo() {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Layout headerTextColor="#FFFFFF" headerBgColor="#FFADC1">
          <SEO title="Satte City" />
          <TopSection>
            <TopImage
              width="80%"
              className="top-image"
              fluid={data.satte01.childImageSharp.fluid}
              alt="Manhattan Portage - 00"
            />
            <WorkTitle>Satte City Promotion Logo</WorkTitle>
            <WorkCopy>Promotion Logo Design</WorkCopy>
            <WorkTag>Logo, Trademark, Local Government</WorkTag>
            <WorkDescription>
              Satte city is residential region located in Saitama Prefecture.
              The city hall was seeking the catchy and symbolic logo for use of
              city promotion. The name means "Happy" and "Hand". The city is
              also famous for cherry-blossom.
            </WorkDescription>
          </TopSection>

          <WorkPageWrapper>
            <Img
              fluid={data.satte01.childImageSharp.fluid}
              alt="Satte City - 01"
            />
            <Caption>Drawing hand shape with a subtle line.</Caption>
            <Img
              fluid={data.satte02.childImageSharp.fluid}
              alt="Satte City - 02"
            />
            <Img
              fluid={data.satte03.childImageSharp.fluid}
              alt="Satte City - 03"
            />
            <Img
              fluid={data.satte04.childImageSharp.fluid}
              alt="Satte City - 04"
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
    satte01: file(relativePath: { eq: "satte/satte01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte02: file(relativePath: { eq: "satte/satte02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte03: file(relativePath: { eq: "satte/satte03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte04: file(relativePath: { eq: "satte/satte04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
