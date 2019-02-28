import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <h1 className="inline-block my-8 p-3">Makoto Dejima</h1>
        <p className="bg-blue-light mb-8">
          Front-end Developer / Graphic Designer
        </p>
      </div>
      <div className="flex flex-wrap justify-around bg-grey-lighter">
        <div className="w-1/3 h-64 m-4 p-2 bg-grey">
          <p className="text-lg text-center">1</p>
        </div>
        <div className="w-1/3 h-64 m-4 p-2 bg-grey">
          <p className="text-lg text-center">2</p>
        </div>
        <div className="w-1/3 h-64 m-4 p-2 bg-grey">
          <p className="text-lg text-center">3</p>
        </div>
        <div className="w-1/3 h-64 m-4 p-2 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
