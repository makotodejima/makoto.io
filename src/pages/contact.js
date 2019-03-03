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
        <h3 className="m-auto mb-4">どうぞお気軽にご連絡ください。</h3>
        <div className="typeform w-4/5 h-64 relative m-auto">
          <p className="m-auto text-center">makotodejima@gmail.com</p>
        </div>
      </Layout>
    );
  }
}
export default ContactPage;
