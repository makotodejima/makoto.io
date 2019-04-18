import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  WorkTitle,
  WorkDescription,
  WorkPageWrapper
} from "../../components/StyledComps";

import vid_1 from "../../images/naotatsu_v1.mp4";
import vid_2 from "../../images/naotatsu_v2.mp4";

function ManhattanPortage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Manhattan Portage"
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

          <WorkTitle>Naotatsu Kaku's Portfolio Website</WorkTitle>
          <WorkDescription>Visual Artist, Naotatsu Kaku</WorkDescription>

          <WorkPageWrapper>
            <div style={{ display: `flex`, justifyContent: `space-between` }}>
              <video width="47%" height="310px" loop autoPlay muted playsInline>
                <source src={vid_2} type="video/mp4" />
              </video>
              <video width="47%" height="310px" loop autoPlay muted playsInline>
                <source src={vid_1} type="video/mp4" />
              </video>
            </div>
            <Img
              fluid={data.naotatsu_01.childImageSharp.fluid}
              alt="Naotatsu Kaku - 01"
            />
            <Img
              fluid={data.naotatsu_02.childImageSharp.fluid}
              alt="Naotatsu Kaku - 02"
            />
          </WorkPageWrapper>
        </Layout>
      )}
    />
  );
}

export default ManhattanPortage;

const query = graphql`
  query {
    naotatsu_01: file(relativePath: { eq: "naotatsu_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naotatsu_02: file(relativePath: { eq: "naotatsu_02.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp03: file(relativePath: { eq: "mp03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp04: file(relativePath: { eq: "mp04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
