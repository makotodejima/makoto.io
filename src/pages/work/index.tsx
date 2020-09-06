import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Apps from "../../components/App/Apps";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  Label,
  PageTitle,
  WorksListContainer,
} from "../../components/StyledComps";
import WorkListItem from "../../components/WorkListItem";
import { work } from "../../data/data";

function WorkPage({ data }: any) {
  return (
    <Layout>
      <SEO title="Work" />
      <PageTitle>Work</PageTitle>
      <WorksListContainer>
        {Object.keys(work).map((id) => {
          return (
            <WorkListItem
              key={work[id].id}
              title={work[id].title}
              client={work[id].client}
              type={work[id].type}
              keywords={work[id].keywords}
              path={work[id].path}
            >
              {work[id].isVideo ? (
                <video autoPlay loop muted playsInline>
                  <source src={data[id].publicURL} type="video/mp4" />
                </video>
              ) : (
                <Img
                  fluid={data[id].childImageSharp.fluid}
                  alt={work[id].altText}
                />
              )}
            </WorkListItem>
          );
        })}
      </WorksListContainer>
      <Label>Apps</Label>
      <Apps />
    </Layout>
  );
}

export default WorkPage;

export const query = graphql`
  query {
    the_light_of_tokyo: file(
      relativePath: { eq: "the_light_of_tokyo/the_light_of_tokyo.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(
      relativePath: { eq: "manhattan_portage/manhattan_portage.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte: file(relativePath: { eq: "satte/satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera: file(relativePath: { eq: "mera/mera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms: file(relativePath: { eq: "jasms.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike: file(relativePath: { eq: "soreike/soreike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex: file(relativePath: { eq: "robotex/robotex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sobasquare: file(relativePath: { eq: "sobasquare.mp4" }) {
      publicURL
    }
    naotatsu_kaku: file(relativePath: { eq: "naotatsu_kaku.mp4" }) {
      publicURL
    }
  }
`;
