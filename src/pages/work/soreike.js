import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import soreike01 from "../../images/soreike01.jpg";
import soreike02 from "../../images/soreike02.jpg";
import soreike03 from "../../images/soreike03.jpg";
import soreike04 from "../../images/soreike04.jpg";
import soreike05 from "../../images/soreike05.jpg";

import HomeWorkBtns from "../../components/homeWorkBtns";

function Soreike() {
  return (
    <Layout>
      <SEO
        title="Soreike SF Tee"
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

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">T-shirt Design</h3>
        <h2 className="font-light my-4">Soreike San Francisco Tee</h2>
      </div>

      <div className="work flex flex-col">
        <img src={soreike01} alt="" className="my-16" />
        <img src={soreike02} alt="" className="my-16" />
        <img src={soreike03} alt="" className="my-16" />
        <img src={soreike04} alt="" className="my-16" />
        <img src={soreike05} alt="" className="my-16" />
      </div>
      <HomeWorkBtns />
    </Layout>
  );
}

export default Soreike;
