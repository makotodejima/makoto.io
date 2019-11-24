import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  TopImage,
  TopSection,
  ExtLink,
  WorkTitle,
  WorkCopy,
  WorkTag,
  WorkDescription,
  WorkPageWrapper,
  Caption,
} from '../../components/StyledComps';
import vid_1 from '../../images/naotatsu_v1.mp4';
import vid_2 from '../../images/naotatsu_v2.mp4';

function ManhattanPortage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout headerTextColor="white" headerBgColor="#000">
          <SEO title="Naotatsu Kaku" />
          <TopSection>
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
            <ExtLink color="black">
              <a
                href="http://naotatsukaku.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </ExtLink>
            <WorkDescription>
              Naotatsu Kaku is a visual artist who was born and raised in Tokyo.
              His family have their roots in Taiwan and some of the works
              represent his thoughts on his own identity. He won the "New Cosmos
              of Photography Award" and now is working with the support from
              Canon, a leading company in the photo and camera industry.
            </WorkDescription>
          </TopSection>

          <WorkPageWrapper>
            <div style={{ display: `flex`, justifyContent: `space-between` }}>
              <video loop autoPlay muted playsInline>
                <source src={vid_2} type="video/mp4" />
              </video>
              <video loop autoPlay muted playsInline>
                <source src={vid_1} type="video/mp4" />
              </video>
            </div>
            <Caption>
              Experimenting different patterns of animation. Animation is shown
              to only new visitors.
            </Caption>
            <Img
              fluid={data.naotatsu_kaku_01.childImageSharp.fluid}
              alt="Naotatsu Kaku - 01"
            />
            <Caption>
              As his artworks feature transition between images, pictures are
              set in beautiful slideshow form.
            </Caption>
            <Img
              fluid={data.naotatsu_kaku_02.childImageSharp.fluid}
              alt="Naotatsu Kaku - 02"
            />
            <Caption>
              Animated with SVGs, Anime.js and styled-components.
            </Caption>
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
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naotatsu_kaku_01: file(relativePath: { eq: "naotatsu_kaku_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naotatsu_kaku_02: file(relativePath: { eq: "naotatsu_kaku_02.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp03: file(relativePath: { eq: "mp03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mp04: file(relativePath: { eq: "mp04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
