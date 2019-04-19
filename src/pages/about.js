import React from "react";
import styled from "styled-components";

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
      <h4 className="name">Makoto Dejima</h4>
      <h4 className="name">出島 誠</h4>

      <h3>Designer and Front-End Developer</h3>

      <h3>ﾃﾞｻﾞｲﾅｰ ｱﾝﾄﾞ ﾌﾛﾝﾄｴﾝﾄﾞﾃﾞｨﾍﾞﾛｯﾊﾟｰ</h3>
      {/* <h3>デザイナー・アンド・フロントエンドデベロッパー</h3> */}
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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  .wrapper {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
      margin: auto;
    }

    .intro {
      line-height: 1.6;
      border-left: 2px solid black;
      padding-left: 1rem;
      text-align: justify;
      @media (max-width: 768px) {
        border: none;
        flex-direction: column;
        justify-content: flex-start;
      }
    }

    .name {
      margin-top: 2rem;
      text-align: right;
    }
  }
`;

// font-bold mt-8 text-right text-xs uppercase
