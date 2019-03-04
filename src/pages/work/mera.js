import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import mera01 from "../../images/mera01.jpg";
import mera02 from "../../images/mera02.jpg";
import mera03 from "../../images/mera03.jpg";
import mera04 from "../../images/mera04.jpg";

import HomeWorkBtns from "../../components/homeWorkBtns";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="808MERA"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">
          Logo Design for Indoor Farming System
        </h3>
        <h2 className="font-light my-4">808 MERA</h2>
      </div>

      <div className="work flex flex-col">
        <img src={mera01} alt="" className="my-16" />
        <img src={mera02} alt="" className="my-16" />
        <img src={mera03} alt="" className="my-16" />
        <img src={mera04} alt="" className="my-16" />
      </div>
      <HomeWorkBtns />
    </Layout>
  );
}

export default IndexPage;
