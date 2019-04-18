import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { featured } from "../data/data";
import { WorksListContainer, Label } from "../components/StyledComps";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import WorkListItem from "../components/WorkListItem";
import Email from "../components/Email";
import Apps from "../components/Apps";
import vid from "../images/nao300.mp4";

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `Makoto Dejima`,
            `Designer`,
            `Front-End Developer`,
            `Graphic Design`,
            `React`,
            `JavaScript`
          ]}
        />

        <Hero />
        <Label>Featured Work</Label>
        <WorksListContainer>
          <WorkListItem
            key="naotatsu_kaku"
            title="Naotatsu Kaku's Portfolio Website"
            client="Visual Artist, Naotatsu Kaku"
            type="Design and development"
            keywords="React, Gatsby, Netlify CMS, Anime.js, SVG Animation"
            path="null"
          >
            <video style={{ width: `220px` }} autoPlay loop muted playsInline>
              <source src={vid} type="video/mp4" />
            </video>
          </WorkListItem>

          {Object.keys(featured).map(id => {
            return (
              <WorkListItem
                key={featured[id].id}
                title={featured[id].title}
                client={featured[id].client}
                type={featured[id].type}
                keywords={featured[id].keywords}
                path={featured[id].path}
              >
                <Img fluid={data[id].childImageSharp.fluid} />
              </WorkListItem>
            );
          })}
        </WorksListContainer>

        <Label>Apps</Label>
        <Apps />

        <Label>
          Interested in working together? Any question or something else?
        </Label>
        <p>
          I am always looking for interesting projects and people to collaborate
          with. Please feel free to get in touch with me. I would love to hear
          from you.
        </p>
        <Email />
      </Layout>
    )}
  />
);

export default IndexPage;

const query = graphql`
  query {
    the_light_of_tokyo: file(relativePath: { eq: "the_light_of_tokyo.jpg" }) {
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
    satte: file(relativePath: { eq: "satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
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
  }
`;
