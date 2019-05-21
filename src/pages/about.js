import React from "react";
import styled from "styled-components";
import { media } from "../components/StyledComps";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutImage from "../components/AboutImage";
import SocialLinks from "../components/SocialLinks";

function AboutPage(props) {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[
          `Makoto Dejima`,
          `Designer`,
          `Front-End Developer`,
          `Design`,
          `Graphic Design`,
          `JavaScript`,
          `React`
        ]}
      />

      <NameWrapper>
        <h3 className="name">
          <span className="en">Makoto Dejima</span>{" "}
          <span className="jp"> 出島 誠</span>
        </h3>

        <h3 className="title">
          <span className="en">Designer and Front-End Developer</span>
          <span className="jp"> ﾃﾞｻﾞｲﾅｰ ｱﾝﾄﾞ ﾌﾛﾝﾄｴﾝﾄﾞﾃﾞｨﾍﾞﾛｯﾊﾟｰ</span>
        </h3>
      </NameWrapper>

      <AboutContainer>
        <div className="wrapper">
          <p className="intro">
            Tokyo-born Graphic Designer and Front-End Developer who loves and
            cares about design. I used to cover tech industry as a journalist
            with Japanese media, and ended up putting myself in the world of
            tech as a software engineer due to strong interest in the web
            development. Also experienced in ad-tech, Japanese writing, editing
            and localization.
            <br />
            <span style={{ color: `grey` }}>
              Skills: React, Gatsby, Processing, Graphic and Motion Design
            </span>
          </p>
        </div>

        <AboutImage />
      </AboutContainer>
      <SocialLinks />
    </Layout>
  );
}

export default AboutPage;

const NameWrapper = styled.div`
  ${media.phone`
  margin-top:1.4rem;
`}

  .en {
    margin-right: 1.4rem;
  }
  span {
    ${media.tablet`
    display: block;
  `}
    &.en {
      ${media.tablet`
      margin-top: 3rem;
      margin-bottom: 1rem;
    `}
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 3rem 0;
  ${media.tablet`
    flex-direction: column;
    justify-content: flex-start;
  `}
  .wrapper {
    width: 50%;
    ${media.tablet`
      width: 100%;
      margin: auto;
    `}

    .intro {
      line-height: 1.6;
      border-left: 2px solid black;
      padding-left: 1rem;
      text-align: justify;
      ${media.tablet`
        border: none;
        padding-left: 0;
        flex-direction: column;
        justify-content: flex-start;
      `}
    }
  }
`;
