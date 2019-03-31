import React from "react";
import styled from "styled-components";

// This card wrapper is using CSS Grid
// do not set gap with relative value (%), it refers to window and screw up

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 30px;
  grid-column-gap: 20px;

  margin: 1rem 0;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const CardGridContainer = ({ children }) => <Container>{children}</Container>;

export default CardGridContainer;
