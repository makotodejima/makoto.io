import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AppItem from './AppItem';
import { media } from './StyledComps';
import { apps } from '../data/data';

export default () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <AppsContainer>
          {Object.keys(apps).map(id => {
            return (
              <AppItem
                key={id}
                title={apps[id].title}
                type={apps[id].type}
                keywords={apps[id].keywords}
                url={apps[id].url}
                altText={apps[id].altText}
              >
                {apps[id].isVideo ? (
                  <video autoPlay loop muted playsInline>
                    <source
                      src={require(`../images/${id}.mp4`)}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Img
                    fluid={data.flashcards.childImageSharp.fluid}
                    alt={apps[id].title}
                  />
                )}
              </AppItem>
            );
          })}
        </AppsContainer>
      )}
    />
  );
};

const AppsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const query = graphql`
  query {
    flashcards: file(relativePath: { eq: "flashcards.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
