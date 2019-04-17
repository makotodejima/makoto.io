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
      <AboutContainer>
        <div className="wrapper">
          <p className="intro">
            Tokyo-born designer / front-end developer. Also experienced in
            ad-tech, Japanese writing and editing. Currently working with
            several companies to achieve their goals in Japanese market.
            <br />
            ウェブ広告、記事執筆・編集にも経験があります。現在はヨーロッパの会社を中心にマーケティングの仕事をしています。
          </p>

          {/* <p className="name">Makoto Dejima | 出島 誠</p> */}
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

  margin-bottom: 3rem;
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
      line-height: 2;
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
