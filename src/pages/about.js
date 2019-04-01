import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutImage from "../components/AboutImage";
import SocialLinks from "../components/SocialLinks";

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

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
          `React`,
          `Motion`
        ]}
      />

      <AboutContainer>
        <div className="md:w-1/2 md:mr-8">
          <p className="md:border-l-4 border-grey-darkest leading-loose md:pl-4 text-justify">
            Tokyo-born designer / front-end developer. Also experienced in
            ad-tech, Japanese writing and editing. Currently working with
            several companies to achieve their goals in Japanese market.
            <br />
            ウェブ広告、記事執筆・編集にも経験があります。現在はヨーロッパの会社を中心にマーケティングの仕事をしています。
          </p>

          <p className="font-bold mt-8 text-right text-xs uppercase">
            Makoto Dejima | 出島 誠
          </p>
        </div>

        <AboutImage />
      </AboutContainer>
      <SocialLinks />
    </Layout>
  );
}

export default AboutPage;
