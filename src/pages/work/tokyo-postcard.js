import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import postcard from "../../images/post-card.jpg";

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
        <p className="bg-grey-darker text-lg text-center">1</p>
        <img src={postcard} />
        <p>gmlfdkgjaidfsjglsdkajgflkndsnfkls</p>
      </div>
    </Layout>
  );
}

export default IndexPage;
