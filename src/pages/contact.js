import React from "react";
import * as typeformEmbed from "@typeform/embed";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ContactPage extends React.Component {
  componentDidMount() {
    const el = document.querySelector(".typeform");
    typeformEmbed.makeWidget(
      el,
      "https://makotodejima.typeform.com/to/o0WY9t",
      { hideFooter: true, opacity: 0 }
    );
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />
        <div className="text-center leading-loose">
          <p className="m-4">
            I love to design, develop, and write. <br />
            Please feel free to contact me at makotodejima@gmail.com. or using
            the form below.
          </p>
          <p className="m-4">
            デザイン、開発、執筆が好きです。
            <br />
            Eメール、または下記のフォームからどうぞお気軽にご連絡ください。
          </p>
          <h4 className="m-8">makotodejima@gmail.com</h4>
        </div>
        <div className="typeform w-2/3 h-64 mx-auto" />
      </Layout>
    );
  }
}
export default ContactPage;
