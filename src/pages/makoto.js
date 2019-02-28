import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <h1 className="inline-block my-8 p-3">Makoto Dejima</h1>

        <p className="">
          Front-end Developer / Graphic Designer{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-grey-darkest"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
