import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import {
  WorksListContainer,
  PageTitle,
  Label,
} from '../components/StyledComps';
import Layout from '../components/layout';
import Apps from '../components/Apps';
import { work } from '../data/data';
import WorkListItem from '../components/WorkListItem';
import Writing from '../components/Writing';

function WorkPage(props) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Work"
            keywords={[
              `Makoto Dejima`,
              `JavaScript`,
              `Design`,
              `React`,
              `Front-End Developer`,
              `Graphic Design`,
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
                    <video autoPlay loop muted playsInline>
                      <source
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
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(relativePath: { eq: "manhattan_portage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte: file(relativePath: { eq: "satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera: file(relativePath: { eq: "mera.jpg" }) {
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
    soreike: file(relativePath: { eq: "soreike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex: file(relativePath: { eq: "robotex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
