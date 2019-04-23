import React from "react";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import {
  WorksListContainer,
  PageTitle,
  Label
} from "../components/StyledComps";
import Layout from "../components/layout";
import Apps from "../components/Apps";
import { work } from "../data/data";
import WorkListItem from "../components/WorkListItem";
import Writing from "../components/Writing";

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
            {Object.keys(work).map(id => {
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
                    <video
                      poster={require(`../images/${work[id].id}_poster.png`)}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        poster="../images/naotatsu_kaku_poster.png"
                        src={require(`../images/${work[id].id}.mp4`)}
                        type="video/mp4"
                      />
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
          <Writing />
        </Layout>
      )}
    />
  );
}

export default WorkPage;

const query = graphql`
  query {
    the_light_of_tokyo: file(relativePath: { eq: "the_light_of_tokyo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(relativePath: { eq: "manhattan_portage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte: file(relativePath: { eq: "satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera: file(relativePath: { eq: "mera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasms: file(relativePath: { eq: "jasms.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike: file(relativePath: { eq: "soreike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
