import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import jasms01 from "../../images/jasms01.jpg";
import jasms02 from "../../images/jasms02.jpg";
import jasms03 from "../../images/jasms03.jpg";
import jasms04 from "../../images/jasms04.jpg";
import jasms05 from "../../images/jasms05.jpg";

import HomeWorkBtns from "../../components/homeWorkBtns";

function Jasms() {
  return (
    <Layout>
      <SEO
        title="JASMS"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">Logo Design</h3>
        <h2 className="font-light my-4">Japan Society of Mountain Reseach</h2>
      </div>

      <div className="work flex flex-col">
        <img src={jasms01} alt="" className="my-16" />
        <img src={jasms02} alt="" className="my-16" />
        <img src={jasms03} alt="" className="my-16" />
        <img src={jasms04} alt="" className="my-16" />
        <img src={jasms05} alt="" className="my-16" />
      </div>

      <HomeWorkBtns />
    </Layout>
  );
}

export default Jasms;
