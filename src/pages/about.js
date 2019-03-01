import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import me from "../images/me.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="flex flex-col items-center">
        <div className="intro flex flex-col md:flex-row justify-around item-center">
          <div className="md:w-1/2 md:mr-8">
            <p className="md:border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
              私は出島　誠と申します。東京で生まれた後、法律をまなびました。
              そのごIT企業にはいり広告の営業をやりました。その後、サンフランシスコにわたり、
              IT系などの主事あとかをしました。そのごベルリンにいきました。
              いまはデヴべロッパーとグラフィックデザイナーとして働いています。
            </p>

            <p className="font-bold mt-4 text-right text-xs uppercase">
              – Makoto Dejima
            </p>
          </div>

          <div className="w-2/3 md:w-1/3">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="links flex justify-between w-full bg-blue">
          <a href="#">Resume</a>
          <div className="social ">
            <a href="#">Dribbble</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
