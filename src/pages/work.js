import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function work() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <p className="text-2xl bg-red my-8 p-3">Work</p>
      </div>

      <div className="boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
        <div className="box relative w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="absolute pin-b bg-grey-darker text-lg text-center">1</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">2</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">3</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
        <div className="box w-2/5 h-20rem m-4 p-4 bg-grey">
          <p className="text-lg text-center">4</p>
        </div>
      </div>
    </Layout>
  );
}

export default work;
