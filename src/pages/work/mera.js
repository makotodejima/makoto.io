import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import mera01 from "../../images/mera01.jpg";
import mera02 from "../../images/mera02.jpg";
import mera03 from "../../images/mera03.jpg";
import mera04 from "../../images/mera04.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <p className="text-2xl bg-red my-8 p-3">MERA808</p>
      </div>

      <div className="work flex flex-col">
        <p className="bg-grey-darker text-lg text-center">Won an award</p>
        <img src={mera01} className="my-16" />
        <img src={mera02} className="my-16" />
        <img src={mera03} className="my-16" />
        <img src={mera04} className="my-16" />
      </div>
    </Layout>
  );
}

export default IndexPage;
