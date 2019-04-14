import styled from "styled-components";

// Index
export const Label = styled.div`
  font-size: 1.25rem;
`;

export const WritingLink = styled.p`
  line-height: 2;
  a {
    color: navy;
    img {
      height: 0.8rem;
      margin-left: 0.5rem;
    }
  }
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

export const PageTitle = styled.h2`
  text-align: center;
  margin: 2rem auto;
`;

// Work
export const WorkTitle = styled.h2`
  margin: 1rem auto;
`;
export const WorkDescription = styled.div`
  margin: 1rem auto;
  letter-spacing: 0.05em;
  font-weight: lighter;
`;

export const WorkPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin: 2rem auto;
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

export const FadeOutText = styled.p`
  position: absolute;
  text-align: center;
  letter-spacing: normal;
  font-size: 0.75rem;
  width: 100%;
  color: lightgray;
  padding-bottom: 0.5rem;
  bottom: 0;
  transition: opacity 1500ms;
  opacity: ${props => (props.mouseOnImage ? 0 : 1)};

  @media (max-width: 576px) {
    letter-spacing: -0.05em;
  }
`;
