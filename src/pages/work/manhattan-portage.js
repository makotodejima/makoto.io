import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import mp01 from "../../images/mp01.jpg";
import mp02 from "../../images/mp02.jpg";
import mp03 from "../../images/mp03.jpg";
import mp04 from "../../images/mp04.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="hero flex flex-col justify-center text-center align-middle">
        <h3 className="font-light tracking-wide">Messenger Bag Design</h3>
        <h2 className="font-light my-4">Manhattan Portage Art Collection</h2>
      </div>

      <div className="work flex flex-col">
        <img src={mp01} alt="" className="my-16" />
        <img src={mp02} alt="" className="my-16" />
        <img src={mp03} alt="" className="my-16" />
        <img src={mp04} alt="" className="my-16" />
      </div>
    </Layout>
  );
}

export default IndexPage;
