import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import {
  GridCardContainer,
  Label,
  WritingHeader
} from "../components/StyledComps";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Card from "../components/card";

import BottomLink from "../components/BottomLink";
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
            `JavaScript`,
            `React`,
            `Motion`
          ]}
        />

        <Hero />
        <Label>Latest</Label>

        <GridCardContainer>
          <Card
            title="The Light of Tokyo"
            desc="Tokyo Postcard Award"
            path="the-light-of-tokyo"
          >
            <Img
              fluid={data.tpcsq.childImageSharp.fluid}
              alt="Postcard, The light of Tokyo"
            />
          </Card>

          <Card title="808 MERA Farming System" desc="Logo Design" path="mera">
            <Img
              fluid={data.merasq.childImageSharp.fluid}
              alt="Logo design for indoor faming, 808Mera"
            />
          </Card>

          <Card
            title="Japan Society of Mountain Research"
            desc="Logo Design"
            path="jasms"
          >
            <Img
              fluid={data.jasmssq.childImageSharp.fluid}
              alt="Logo design, Japan Society of Mountain Research"
            />
          </Card>

          <Card
            title="Manhattan Portage Art Collection"
            desc="Messenger Bag Design"
            path="manhattan-portage"
          >
            <Img
              fluid={data.mpsq.childImageSharp.fluid}
              alt="Messenger Bag, Manhattan Portage"
            />
          </Card>
        </GridCardContainer>

        <BottomLink path="/work/" linkText="More" />

        <Label>Writing</Label>

        <p className="leading-loose">
          <a
            href="https://medium.com/this-week-in-america"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue"
          >
            Tech and politics / テクノロジーと政治
          </a>
          <br />I am writing about technology, startups, and politics.
        </p>
        <p className="my-12  leading-loose">
          <a
            href="https://weq.com/category/%E6%97%A5%E6%9C%AC/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue"
          >
            WeQ Japanese PR <img className="h-3 mx-2" src={weq} alt="WeQ" />
          </a>
          <br />
          I'm working with German global ad-tech company to accelerate their
          growth in Japanese market.
        </p>
      </Layout>
    )}
  />
);

export default IndexPage;

const query = graphql`
  query {
    tpcsq: file(relativePath: { eq: "tpcsq.jpg" }) {
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
  }
`;
