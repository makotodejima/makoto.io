import React from "react";

import Layout from "../../components/layout";
import HomeWorkBtns from "../../components/homeWorkBtns";

import SEO from "../../components/seo";

import tpc01 from "../../images/tpc01.jpg";
import tpc02 from "../../images/tpc02.jpg";
import tpc03 from "../../images/tpc03.jpg";
import tpc04 from "../../images/tpc04.jpg";
import tpc05 from "../../images/tpc05.jpg";

function TheLightOfTokyo() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">
          Tokyo Postcard Award 2019 by Hotel Ryumeikan
        </h3>
        <h2 className="font-light my-4">The Light of Tokyo</h2>
      </div>

      <div className="work flex flex-col">
        <img src={tpc01} alt="" className="my-16" />
        <img src={tpc02} alt="" className="my-16" />
        <img src={tpc03} alt="" className="my-16" />
        <img src={tpc04} alt="" className="my-16" />
        <img src={tpc05} alt="" className="my-16" />
      </div>
      <HomeWorkBtns />
    </Layout>
  );
}

export default TheLightOfTokyo;
