import React from "react";
import styled from "styled-components";
import AboutImage from "../components/AboutImage";
import Layout from "../components/layout";
import RandomLetter from "../components/RandomLetter";
import SEO from "../components/seo";
import SocialLinks from "../components/SocialLinks";
import { media } from "../components/StyledComps";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <NameWrapper>
        <h3 className="name">
          <span className="en">Makoto Dejima</span>
          <span className="jp"> 出島 誠</span>
        </h3>
        <h3 className="title">
          <span className="en">
            <RandomLetter>Developer</RandomLetter> and Designer
          </span>
          <span className="jp">ﾃﾞｨﾍﾞﾛｯﾊﾟｰ ｱﾝﾄﾞ ﾃﾞｻﾞｲﾅｰ</span>
        </h3>
      </NameWrapper>
      <AboutContainer>
        <div className="wrapper">
          <div className="intro">
            Tokyo-born developer and designer who loves and cares about design
            and user experience. After spending a few years in San Francisco,
            became a software engineer due to strong interest in the web.
            <br />
            <br />
            Tokyo -&gt; San Francisco -&gt; Berlin 🈁
            <br />
            <br />
            <div className="skills">Web Development</div>
            <div className="skills">Graphic Design</div>
            <div className="skills">Law & Cats　（訳: 法と猫）</div>
          </div>
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
      text-align: justify;
      .skills {
        color: ${(props) => props.theme.secondary};
      }
      ${media.tablet`
        border: none;
        padding-left: 0;
        flex-direction: column;
        justify-content: flex-start;
      `}
    }
  }
`;
