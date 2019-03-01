import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import postcard from "../../images/post-card.jpg";
import tpc01 from "../../images/tpc01.jpg";
import tpc02 from "../../images/tpc02.jpg";
import tpc03 from "../../images/tpc03.jpg";
import tpc04 from "../../images/tpc04.jpg";
import tpc05 from "../../images/tpc05.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <p className="text-2xl bg-red my-8 p-3">Tokyo Post Card Award</p>
      </div>

      <div className="work flex flex-col">
        <p className="bg-grey-darker text-lg text-center">Won an award</p>
        <img src={tpc01} className="my-16 shadow" />
        <img src={tpc02} className="my-16 shadow" />
        <img src={tpc03} className="my-16 shadow" />
        <img src={tpc04} className="my-16 shadow" />
        <img src={tpc05} className="my-16 shadow" />
      </div>
    </Layout>
  );
}

export default IndexPage;
