import { graphql, StaticQuery } from 'gatsby';
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

function Soreike() {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Layout headerTextColor="#EFFFFF" headerBgColor="#65C6BA">
          <SEO title="Soreike SF Tee" />
          <TopSection>
            <TopImage
              width="70%"
              className="top-image"
              fluid={data.soreike02.childImageSharp.fluid}
              alt="Soreike Tee - 00"
            />
            <WorkTitle>Soreike San Francisco Tee</WorkTitle>
            <WorkCopy>T-shirt Design</WorkCopy>
            <WorkTag>Japanese, Typography, T-shirt</WorkTag>
          </TopSection>
          <WorkPageWrapper>
            <Img
              fluid={data.soreike01.childImageSharp.fluid}
              alt="Soreike SF Tee - 01"
            />
            <Img
              fluid={data.soreike03.childImageSharp.fluid}
              alt="Soreike SF Tee - 03"
            />
            <Img
              fluid={data.soreike04.childImageSharp.fluid}
              alt="Soreike SF Tee - 04"
            />
            <Img
              fluid={data.soreike05.childImageSharp.fluid}
              alt="Soreike SF Tee - 05"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default Soreike;

const query = graphql`
  query {
    soreike01: file(relativePath: { eq: "soreike/soreike01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike02: file(relativePath: { eq: "soreike/soreike02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike03: file(relativePath: { eq: "soreike/soreike03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike04: file(relativePath: { eq: "soreike/soreike04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike05: file(relativePath: { eq: "soreike/soreike05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
