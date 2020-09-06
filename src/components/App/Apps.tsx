import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { apps } from "../../data/data";
import { media } from "../StyledComps";
import AppItem from "./AppItem";

export default () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <AppsContainer>
          {Object.keys(apps).map((id) => {
            return (
              <AppItem
                key={id}
                title={apps[id].title}
                type={apps[id].type}
                keywords={apps[id].keywords}
                url={apps[id].url}
              >
                {apps[id].isVideo ? (
                  <video autoPlay loop muted playsInline>
                    <source src={data[id].publicURL} type="video/mp4" />
                  </video>
                ) : (
                  <Img
                    fluid={data[id].childImageSharp.fluid}
                    alt={apps[id].altText}
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
    flashcard: file(relativePath: { eq: "flashcard.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pomodoro: file(relativePath: { eq: "pomodoro.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sobasquare: file(relativePath: { eq: "sobasquare.mp4" }) {
      publicURL
    }
  }
`;
