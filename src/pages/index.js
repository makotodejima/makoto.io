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
                desc={featured[id].type}
                path={featured[id].path}
              >
                <Img fluid={data[id].childImageSharp.fluid} />
              </WorkListItem>
            );
          })}

          {/* <WorkListItem
          //   title="The Light of Tokyo"
          //   desc="Tokyo Postcard Award"
          //   path="the-light-of-tokyo"
          // >
          //   <Img
          //     fluid={data[key].childImageSharp.fluid}
          //     alt="Postcard, The light of Tokyo"
          //   />
          // </WorkListItem>

          // <WorkListItem
          //   title="Manhattan Portage Art Collection"
          //   desc="Messenger Bag Design"
          //   path="manhattan-portage"
          // >
          //   <Img
          //     fluid={data.mpsq.childImageSharp.fluid}
          //     alt="Messenger Bag, Manhattan Portage"
          //   />
          // </WorkListItem>

          // <WorkListItem
          //   title="808 MERA Farming System"
          //   desc="Logo Design"
          //   path="mera"
          // >
          //   <Img
          //     fluid={data.merasq.childImageSharp.fluid}
          //     alt="Logo design for indoor faming, 808Mera"
          //   />
          // </WorkListItem>

          // <WorkListItem
          //   title="Japan Society of Mountain Research"
          //   desc="Logo Design"
          //   path="jasms"
          // >
          //   <Img
          //     fluid={data.jasmssq.childImageSharp.fluid}
          //     alt="Logo design, Japan Society of Mountain Research"
          //   />
          // </WorkListItem> */}
        </WorksListContainer>

        <Label>Writing</Label>

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
        </WritingLink>
      </Layout>
    )}
  />
);

export default IndexPage;

const query = graphql`
  query {
    the_light_of_tokyo: file(relativePath: { eq: "tpcsq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
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
    satte: file(relativePath: { eq: "sattesq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(relativePath: { eq: "mpsq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
