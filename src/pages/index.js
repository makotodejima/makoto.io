import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { featured } from '../data/data';
import { WorksListContainer, Label } from '../components/StyledComps';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import WorkListItem from '../components/WorkListItem';
import Email from '../components/Email';
import SocialLinks from '../components/SocialLinks';
import Apps from '../components/Apps';

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <SEO
          title="Makoto Dejima | Design and Development"
          keywords={[
            `Makoto Dejima`,
            `JavaScript`,
            `Design`,
            `React`,
            `Front-End Developer`,
            `Graphic Design`,
          ]}
        />

        <Hero />

        <Label>
          Featured Work <Link to="/work/">Show All Works</Link>
        </Label>

        <WorksListContainer>
          {Object.keys(featured).map(id => {
            return (
              <WorkListItem
                key={featured[id].id}
                title={featured[id].title}
                client={featured[id].client}
                type={featured[id].type}
                keywords={featured[id].keywords}
                path={featured[id].path}
                url={featured[id].url}
              >
                {featured[id].isVideo ? (
                  <video autoPlay loop muted playsInline>
                    <source
                      src={require(`../images/${featured[id].id}.mp4`)}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Img fluid={data[id].childImageSharp.fluid} />
                )}
              </WorkListItem>
            );
          })}
        </WorksListContainer>
        <Label>Apps</Label>
        <Apps />
        <div style={{ marginBottom: `4rem` }}>
          <h3 style={{ marginTop: 0 }}>
            Interested in working together? Get in touch.
          </h3>
          <p>
            I am always looking for interesting projects and people to
            collaborate with. Please feel free to get in touch with me. I would
            love to hear from you.
          </p>
          <Email />
          <SocialLinks />
        </div>
      </Layout>
    )}
  />
);

export default IndexPage;

const query = graphql`
  query {
    the_light_of_tokyo: file(relativePath: { eq: "the_light_of_tokyo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera: file(relativePath: { eq: "mera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte: file(relativePath: { eq: "satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(relativePath: { eq: "manhattan_portage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex: file(relativePath: { eq: "robotex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
