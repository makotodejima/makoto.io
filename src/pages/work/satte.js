import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import satte01 from "../../images/satte01.jpg";
import satte02 from "../../images/satte02.jpg";
import satte03 from "../../images/satte03.jpg";
import satte04 from "../../images/satte04.jpg";

import HomeWorkBtns from "../../components/homeWorkBtns";

function TheLightOfTokyo() {
  return (
    <Layout>
      <SEO
        title="Satte City"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">Logo Design</h3>
        <h2 className="font-light my-4">Satte City Promotion Logo</h2>
      </div>

      <div className="work flex flex-col">
        <img src={satte01} alt="" className="my-16" />
        <img src={satte02} alt="" className="my-16" />
        <img src={satte03} alt="" className="my-16" />
        <img src={satte04} alt="" className="my-16" />
      </div>
      <HomeWorkBtns />
    </Layout>
  );
}

export default TheLightOfTokyo;
