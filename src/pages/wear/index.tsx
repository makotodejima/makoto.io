import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/StyledComps';

const Wear = () => {
  return (
    <Layout>
      <SEO title="Wear" />
      <PageTitle>Wear</PageTitle>
    </Layout>
  );
};

export default Wear;
