import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import me from "../images/me.jpg";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDribbble,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faDribbble, faLinkedin);

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="flex flex-col">
        <div className="intro flex flex-col md:flex-row md:justify-between items-center">
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

          <div className="w-1/2 mt-12 md:m-auto md:w-1/3">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="links flex justify-center w-full my-8 md:mt-16 text-2xl">
          {/* <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue-darker"
          >
            Background
          </a> */}
          <div className="socials">
            <a
              href="https://dribbble.com/mak84sasami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-darker"
            >
              <FontAwesomeIcon icon={["fab", "dribbble"]} />
            </a>
            <a
              href="https://www.instagram.com/dejimako/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-darker mx-8"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/mak84sasami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-darker"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
