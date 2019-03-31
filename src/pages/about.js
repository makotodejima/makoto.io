import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutImage from "../components/AboutImage";
import SocialLinks from "../components/SocialLinks";

// FontAwesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faDribbble,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";
// library.add(faInstagram, faDribbble, faLinkedin);

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
      {/* <div className="social-links flex justify-center text-2xl z-10 w-full mt-8 md:mt-16">
        <a
          href="https://dribbble.com/mak84sasami"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-darker relative"
        >
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
        </a>
        <a
          href="https://www.instagram.com/dejimako/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-darker mx-8 relative"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/mak84sasami/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-darker relative"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div> */}
    </Layout>
  );
}

export default AboutPage;
