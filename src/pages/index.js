import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Card from "../components/card";
import CardLayout from "../components/cardLayout";
import Label from "../components/label";
import BottomLink from "../components/bottomLink";

import tpcsq from "../images/tpcsq.jpg";
import merasq from "../images/merasq.jpg";
import mpsq from "../images/mpsq.jpg";
import jasms from "../images/jasmssq.jpg";
import weq from "../images/weq.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Makoto Dejima`,
          `Designer`,
          `Front-End Developer`,
          `Graphic Design`,
          `JavaScript`,
          `React`,
          `Motion`
        ]}
      />

      <Hero />
      <Label />

      <CardLayout>
        <Card path="the-light-of-tokyo">
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

        <Card path="jasms">
          <img
            src={jasms}
            alt="Logo design, Japan Society of Mountain Research"
            className="align-middle"
          />
        </Card>

        <Card path="manhattan-portage">
          <img
            src={mpsq}
            alt="Messenger Bag, Manhattan Portage"
            className="align-middle"
          />
        </Card>
      </CardLayout>

      <BottomLink path="/work/" linkText="Show more" />

      <div className="label text-xl mt-12 mb-8">
        <p>Writing</p>
      </div>

      <p className="leading-loose">
        <a
          href="https://medium.com/this-week-in-america"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-blue"
        >
          Tech and politics / テクノロジーと政治
        </a>
        <br />I am writing about technology, startups, and politics.
      </p>
      <p className="my-12  leading-loose">
        <a
          href="https://weq.com/category/%E6%97%A5%E6%9C%AC/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-blue"
        >
          WeQ Japanese PR <img className="h-3 mx-2" src={weq} alt="WeQ" />
        </a>
        <br />
        I'm working with German global ad-tech company to accelerate their
        growth in Japanese market.
      </p>
    </Layout>
  );
}

export default IndexPage;
