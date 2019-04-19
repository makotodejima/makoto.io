import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  TopCoverColor,
  TopImage,
  TopSection,
  ExtLink,
  WorkTitle,
  WorkCopy,
  WorkTag,
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
        <Layout color="white">
          <SEO
            title="Naotatsu Kaku"
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

          <TopSection>
            <TopCoverColor color="black" />
            <TopImage
              width="80%"
              className="top-image"
              fluid={data.naotatsu_kaku_00.childImageSharp.fluid}
              alt="Naotatsu Kaku - 00"
            />
            <WorkTitle>Naotatsu Kaku's Portfolio Website</WorkTitle>
            <WorkCopy>Visual Artist, Naotatsu Kaku</WorkCopy>
            <WorkTag>
              React, Gatsby, Netlify CMS, Anime.js, SVG Animation, Sass
            </WorkTag>
            <WorkDescription>
              Naotatsu Kaku is a visual artist who is born and raised in Tokyo.
              His family have their roots in Taiwan and his work represent his
              thought on the identity. He recently won the "New Cosmos of
              Photography Award" and is continuously working on his artwork with
              the support from Canon, a leading company in the photo and camera
              industry.
            </WorkDescription>
            <ExtLink>
              <a
                href="http://naotatsukaku.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit: www.naotatsukaku.com
              </a>
            </ExtLink>
          </TopSection>

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
              fluid={data.naotatsu_kaku_01.childImageSharp.fluid}
              alt="Naotatsu Kaku - 01"
            />
            <Img
              fluid={data.naotatsu_kaku_02.childImageSharp.fluid}
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
    naotatsu_kaku_00: file(relativePath: { eq: "naotatsu_kaku_00.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naotatsu_kaku_01: file(relativePath: { eq: "naotatsu_kaku_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naotatsu_kaku_02: file(relativePath: { eq: "naotatsu_kaku_02.png" }) {
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
