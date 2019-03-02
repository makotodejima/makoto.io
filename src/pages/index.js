import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Card from "../components/card";

import tpcsq from "../images/tpcsq.jpg";
import merasq from "../images/merasq.jpg";
import mpsq from "../images/mpsq.jpg";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero />

      <div className="label bg-yellow flex justify-between">
        <p>Latest works</p>
        <p>View more...</p>
      </div>

      <div className="boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
        <Card path="tokyo-postcard">
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            // Remove wierd 1px on the bottom of imgs
            className="align-middle"
          />
        </Card>

        <Card path="mera">
          <img
            src={merasq}
            alt="Logo design for indoor faming, 808Mera"
            className="align-middle"
          />
        </Card>

        <Card path="tokyo-postcard">
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            className="align-middle"
          />
        </Card>

        <Card path="manhattan-portage">
          <img
            src={mpsq}
            alt="Messenger bag design, Manhattan Portage"
            className="align-middle"
          />
        </Card>

        <Card path="tokyo-postcard">
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            className="w-full h-full align-middle"
          />
        </Card>
      </div>

      <div className="label bg-yellow flex justify-between">
        <p>Writings</p>
      </div>
      <div className="half-boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
        <div className="half-box w-2/5 h-48 m-4 p-4 bg-grey">
          <a href="https://medium.com/this-week-in-america" target="_blank">
            <p className="text-lg text-center">1</p>
          </a>
        </div>
        <div className="half-box w-2/5 h-48 m-4 p-4 bg-grey">
          <a
            href="https://weq.com/category/%E6%97%A5%E6%9C%AC/"
            target="_blank"
          >
            <p className="text-lg text-center">2</p>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
