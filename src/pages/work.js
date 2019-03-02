import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import CardLayout from "../components/cardLayout";
import Card from "../components/card";

import tpcsq from "../images/tpcsq.jpg";
import merasq from "../images/merasq.jpg";
import mpsq from "../images/mpsq.jpg";
import jasms from "../images/jasmssq.jpg";
import sattesq from "../images/sattesq.jpg";
import soreikesq from "../images/soreikesq.jpg";
import BottomLink from "../components/bottomLink";

function work() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <h3 className="font-light my-8 p-3">Work</h3>
      </div>

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
        <Card path="satte">
          <img
            src={sattesq}
            alt="Logo Design, Satte City"
            className="align-middle"
          />
        </Card>
        <Card path="soreike">
          <img
            src={soreikesq}
            alt="T-shirt Design, Soreike San Francisco Tee"
            className="align-middle"
          />
        </Card>
      </CardLayout>

      <BottomLink path="" linkText="Back" />
    </Layout>
  );
}

export default work;
