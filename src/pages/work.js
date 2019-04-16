import React from "react";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { WorksListContainer, PageTitle } from "../components/StyledComps";
import Layout from "../components/layout";
import Card from "../components/card";
import WorkListItem from "../components/WorkListItem";

function WorkPage(props) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout currentPath={props.location.pathname}>
          <SEO
            title="Work"
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

          <PageTitle>Work</PageTitle>

          <WorksListContainer>
            <WorkListItem
              title="The Light of Tokyo"
              desc="Tokyo Postcard Award"
              path="the-light-of-tokyo"
            >
              <Img
                fluid={data.tpcsq.childImageSharp.fluid}
                alt="Postcard, The light of Tokyo"
              />
            </WorkListItem>
            <WorkListItem
              title="808 MERA Farming System"
              desc="Logo Design"
              path="mera"
            >
              <Img
                fluid={data.merasq.childImageSharp.fluid}
                alt="Logo design for indoor faming, 808Mera"
              />
            </WorkListItem>
            <WorkListItem
              title="Japan Society of Mountain Research"
              desc="Logo Design"
              path="jasms"
            >
              <Img
                fluid={data.jasmssq.childImageSharp.fluid}
                alt="Logo design, Japan Society of Mountain Research"
              />
            </WorkListItem>
            <WorkListItem
              title="Manhattan Portage Art Collection"
              desc="Messenger Bag Design"
              path="manhattan-portage"
            >
              <Img
                fluid={data.mpsq.childImageSharp.fluid}
                alt="Messenger Bag, Manhattan Portage"
              />
            </WorkListItem>
            <WorkListItem
              title="Satte City, Saitama Pref."
              desc="Promotion Logo Design"
              path="satte"
            >
              <Img
                fluid={data.sattesq.childImageSharp.fluid}
                alt="Satte City, Saitama - Promotion Logo"
              />
            </WorkListItem>
            <WorkListItem
              title="Soreike San Francisco Tee"
              desc="T-shirt Design"
              path="soreike"
            >
              <Img
                fluid={data.soreikesq.childImageSharp.fluid}
                alt="Soreike San Francisco Tee"
              />
            </WorkListItem>
          </WorksListContainer>
        </Layout>
      )}
    />
  );
}

export default WorkPage;

const query = graphql`
  query {
    tpcsq: file(relativePath: { eq: "test.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    merasq: file(relativePath: { eq: "merasq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasmssq: file(relativePath: { eq: "jasmssq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mpsq: file(relativePath: { eq: "mpsq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sattesq: file(relativePath: { eq: "sattesq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreikesq: file(relativePath: { eq: "soreikesq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
