import React from "react";
import styled from "styled-components";
import AppItem from "../components/AppItem";

import { apps } from "../data/data";

export default () => {
  return (
    <AppsContainer>
      {Object.keys(apps).map(id => {
        return (
          <AppItem
            key={id}
            title={apps[id].title}
            type={apps[id].type}
            keywords={apps[id].keywords}
            path={apps[id].path}
            altText={apps[id].altText}
          >
            <video style={{ width: `220px` }} autoPlay loop muted playsInline>
              <source src={require(`../images/${id}.mp4`)} type="video/mp4" />
            </video>
          </AppItem>
        );
      })}
    </AppsContainer>
  );
};

const AppsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
