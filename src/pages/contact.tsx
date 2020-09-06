import React from "react";
import Email from "../components/Email";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialLinks from "../components/SocialLinks";
import { ContactWrapper } from "../components/StyledComps";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactWrapper>
        <Email />
        <SocialLinks />
      </ContactWrapper>
    </Layout>
  );
};

export default ContactPage;
