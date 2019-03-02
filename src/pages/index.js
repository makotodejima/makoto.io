import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Card from "../components/card";
import CardLayout from "../components/cardLayout";
import Label from "../components/label";
import BottomLink from "../components/bottomLink";
import HalfCard from "../components/halfCard";

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
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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

      <div className="label">
        <p>Writings</p>
      </div>
      <CardLayout>
        <HalfCard url="https://medium.com/this-week-in-america">
          <h3>
            テクノロジーと政治
            <br />
            Tech and politics
          </h3>
        </HalfCard>
        <HalfCard url="https://weq.com/category/%E6%97%A5%E6%9C%AC/">
          <img src={weq} alt="WeQ" />
        </HalfCard>
      </CardLayout>
    </Layout>
  );
}

export default IndexPage;
