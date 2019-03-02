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

      <div className="text-center">
        <p className="text-2xl bg-red my-8 p-3">Manhattan Portage</p>
      </div>

      <div className="work flex flex-col">
        <p className="bg-grey-darker text-lg text-center">Won an award</p>
        <img src={mp01} alt="" className="my-16" />
        <img src={mp02} alt="" className="my-16" />
        <img src={mp03} alt="" className="my-16" />
        <img src={mp04} alt="" className="my-16" />
      </div>
    </Layout>
  );
}

export default IndexPage;
