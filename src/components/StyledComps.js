import styled from "styled-components";

// Index
export const Label = styled.div`
  font-size: 1.25rem;
`;

// Index and Works
export const GridCardContainer = styled.div`
  display: grid;
  /* This card wrapper is using CSS Grid
  do not set gap with relative value (%), it refers to window and screw up */
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  margin: 1rem 0;

  @media (max-width: 375spx) {
    grid-template-columns: 1fr;
  }
`;

// About Page
export const MeImageContainer = styled.div`
  position: relative;
  margin: auto;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;
