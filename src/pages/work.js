import React from "react";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout";
import Card from "../components/card";
import BottomLink from "../components/bottomLink";

// Issue: This container lose style after reloaded.
// For now, writing as CSS-in-JS
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function WorkPage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
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

          <div className="text-center">
            <h3 className="font-light my-8 p-3">Work</h3>
          </div>

          <div
            style={{
              display: `flex`,
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Card
              title="The Light of Tokyo"
              desc="Tokyo Postcard Award"
              path="the-light-of-tokyo"
            >
              <Img
                fluid={data.tpcsq.childImageSharp.fluid}
                alt="Postcard, The light of Tokyo"
                className="align-middle" // Remove wierd 1px on the bottom of imgs
              />
            </Card>

            <Card
              title="808 MERA Farming System"
              desc="Logo Design"
              path="mera"
            >
              <Img
                fluid={data.merasq.childImageSharp.fluid}
                className="align-middle"
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
                className="align-middle"
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
                className="align-middle"
              />
            </Card>
            <Card
              title="Satte City, Saitama Pref."
              desc="Promotion Logo Design"
              path="satte"
            >
              <Img
                fluid={data.sattesq.childImageSharp.fluid}
                alt="Satte City, Saitama - Promotion Logo"
                className="align-middle"
              />
            </Card>
            <Card
              title="Soreike San Francisco Tee"
              desc="T-shirt Design"
              path="soreike"
            >
              <Img
                fluid={data.soreikesq.childImageSharp.fluid}
                alt="Soreike San Francisco Tee"
                className="align-middle"
              />
            </Card>
          </div>

          <BottomLink path="/" linkText="Home" />
        </Layout>
      )}
    />
  );
}

export default WorkPage;

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
