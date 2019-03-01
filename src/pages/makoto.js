import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import tpcsq from "../images/tpcsq.jpg";
import merasq from "../images/merasq.jpg";
import mpsq from "../images/mpsq.jpg";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <p className="text-2xl bg-red my-8 p-3">Makoto Dejima</p>
        <p className="bg-blue-light mb-8">
          Front-end Developer / Graphic Designer
        </p>
      </div>
      <div className="label bg-yellow flex justify-between">
        <p>Latest works</p>
        <p>View more...</p>
      </div>
      <div className="boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
        <Link to="/work/tokyo-postcard" className="w-2/5 my-8">
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            className="align-middle"
          />
        </Link>
        <Link to="/work/mera" className="w-2/5 my-8">
          <img src={merasq} alt="Logo design, Mera" className="align-middle" />
        </Link>
        <Link to="/work/manhattan-portage" className="w-2/5 my-8">
          <img
            src={mpsq}
            alt="Messenger bag design, Manhattan Portage"
            className="align-middle"
          />
        </Link>
        <Link to="/work/tokyo-postcard" className="w-2/5 my-8">
          <img
            src={tpcsq}
            alt="Postcard, The light of Tokyo"
            className="align-middle"
          />
        </Link>
      </div>

      <div className="label bg-yellow flex justify-between">
        <p>Writings</p>
        <p>View more...</p>
      </div>
      <div className="half-boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
        <div className="half-box w-2/5 h-48 m-4 p-4 bg-grey">
          <p className="text-lg text-center">1</p>
        </div>
        <div className="half-box w-2/5 h-48 m-4 p-4 bg-grey">
          <p className="text-lg text-center">1</p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
