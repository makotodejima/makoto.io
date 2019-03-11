import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import poco from "../images/poco.png";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          src={poco}
          className="block mx-auto w-1/6"
          alt="Poco's cute face"
        />
        <h2 className="block my-8 p-3 text-center">
          Looks like you came to wrong place...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
