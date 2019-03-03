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
        <div className="intro flex flex-col md:flex-row justify-between item-center">
          <div className="md:w-1/2 md:mr-8">
            <p className="md:border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
              * 3+ years of experience as an account manager and a chief editor
              of publications for a U.S.-based Japanese media company * 2+ years
              of experience as an account manager for Rakuten, a Tokyo-based
              multi-industry company * Skilled at Japanese writing/edit- ing and
              design
            </p>

            <p className="font-bold mt-4 text-right text-xs uppercase">
              – Makoto Dejima
            </p>
          </div>

          <div className="w-2/3 md:w-1/3">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="links flex justify-between w-full mt-16 text-xl ">
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue-darker"
          >
            Background
          </a>
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
