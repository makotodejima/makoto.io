import React from "react";
import styled from "styled-components";
import { media } from "../components/StyledComps";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutImage from "../components/AboutImage";
import SocialLinks from "../components/SocialLinks";

function AboutPage(props) {
  return (
    <Layout currentPath={props.location.pathname}>
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
      <h4 className="name">
        <span>Makoto Dejima </span> <span> 出島 誠</span>
      </h4>

      <h3 className="title">
        <span>Designer and Front-End Developer</span>
        <span> ﾃﾞｻﾞｲﾅｰ ｱﾝﾄﾞ ﾌﾛﾝﾄｴﾝﾄﾞﾃﾞｨﾍﾞﾛｯﾊﾟｰ</span>
      </h3>

      <AboutContainer>
        <div className="wrapper">
          <p className="intro">
            Tokyo-born Graphic Designer and Front-End Developer who loves and
            cares about design. I used to covered tech industry as a journalist
            with Japanese media, and ended up putting myself in the world of
            tech as a software engineer due to strong interest in the web
            development. Also experienced in ad-tech, Japanese writing, editing
            and localization.
            <br /> Skills:{" "}
            <i>React, Gatsby, Angular, Graphic and Motion Design</i>
          </p>
        </div>

        <AboutImage />
      </AboutContainer>
      <SocialLinks />
    </Layout>
  );
}

export default AboutPage;

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
