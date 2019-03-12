import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Card from "../components/card";

import styled from "styled-components";

import tpcsq from "../images/tpcsq.jpg";
import merasq from "../images/merasq.jpg";
import mpsq from "../images/mpsq.jpg";
import jasms from "../images/jasmssq.jpg";
import sattesq from "../images/sattesq.jpg";
import soreikesq from "../images/soreikesq.jpg";
import BottomLink from "../components/bottomLink";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function WorkPage() {
  return (
    <Layout>
      <SEO
        title="Work"
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

      <div className="text-center">
        <h3 className="font-light my-8 p-3">Work</h3>
      </div>

      <CardsContainer>
        <Card
          title="The Light of Tokyo"
          desc="Tokyo Postcard Award"
          path="the-light-of-tokyo"
        >
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            className="align-middle"
          />
        </Card>

        <Card title="808 MERA Farming System" desc="Logo Design" path="mera">
          <img
            src={merasq}
            alt="Logo design for indoor farming system, 808Mera"
            className="align-middle"
          />
        </Card>

        <Card
          title="Japan Society of Mountain Research"
          desc="Logo Design"
          path="jasms"
        >
          <img
            src={jasms}
            alt="Logo design, Japan Society of Mountain Research"
            className="align-middle"
          />
        </Card>

        <Card
          title="Manhattan Portage Art Collection"
          desc="Messenger Bag Design"
          path="manhattan-portage"
        >
          <img
            src={mpsq}
            alt="Messenger Bag, Manhattan Portage"
            className="align-middle"
          />
        </Card>
        <Card
          title="Satte City, Saitama Pref."
          desc="Promotion Logo Design"
          path="satte"
        >
          <img
            src={sattesq}
            alt="Logo Design, Satte City"
            className="align-middle"
          />
        </Card>
        <Card
          title="Soreike San Francisco Tee"
          desc="T-shirt Design"
          path="soreike"
        >
          <img
            src={soreikesq}
            alt="T-shirt Design, Soreike San Francisco Tee"
            className="align-middle"
          />
        </Card>
      </CardsContainer>

      <BottomLink path="/" linkText="Home" />
    </Layout>
  );
}

export default WorkPage;
