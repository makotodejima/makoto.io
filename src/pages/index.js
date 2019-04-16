import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import {
  WorksListContainer,
  Label,
  WritingLink
} from "../components/StyledComps";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import WorkListItem from "../components/WorkListItem";
import { featured } from "../data/data";

import weq from "../images/weq.jpg";

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

        {/* <Label>Writing</Label>

        <WritingLink>
          <a
            href="https://medium.com/this-week-in-america"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tech and politics / テクノロジーと政治
          </a>
          <br />I am writing about technology, startups, and politics.
        </WritingLink>
        <WritingLink>
          <a
            href="https://weq.com/category/%E6%97%A5%E6%9C%AC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeQ Japanese PR <img src={weq} alt="WeQ" />
          </a>
          <br />
          I'm working with German global ad-tech company to accelerate their
          growth in Japanese market.
        </WritingLink> */}
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
