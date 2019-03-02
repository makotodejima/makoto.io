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

      <div className="flex flex-col items-center">
        <div className="intro flex flex-col md:flex-row justify-around item-center">
          <div className="md:w-1/2 md:mr-8">
            <p className="md:border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
              私は出島　誠と申します。東京で生まれた後、法律をまなびました。
              そのごIT企業にはいり広告の営業をやりました。その後、サンフランシスコにわたり、
              IT系などの主事あとかをしました。そのごベルリンにいきました。
              いまはデヴべロッパーとグラフィックデザイナーとして働いています。
            </p>

            <p className="font-bold mt-4 text-right text-xs uppercase">
              – Makoto Dejima
            </p>
          </div>

          <div className="w-2/3 md:w-1/3">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="links flex justify-between w-full bg-blue">
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="socials">
            <a
              href="https://dribbble.com/mak84sasami"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "dribbble"]} />
            </a>
            <a
              className="mx-8"
              href="https://www.instagram.com/dejimako/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/mak84sasami/"
              target="_blank"
              rel="noopener noreferrer"
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
