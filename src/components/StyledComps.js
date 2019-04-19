import styled from "styled-components";

// Index
export const Label = styled.div`
  font-size: 1.25rem;
  margin: 0 0 2rem;
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

// Index and Work top
export const WorksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (max-width: 375px) {
  }
`;

export const PageTitle = styled.h2`
  margin: 2rem 0;
`;

// In Each works

export const TopSection = styled.div``;

export const WorkTitle = styled.h2`
  margin: 0 0 0.6rem;
  text-align: center;
`;

export const WorkCopy = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: lighter;
`;

export const WorkTag = styled.p`
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: lighter;
  color: grey;
`;
export const WorkDescription = styled.div`
  width: 33%;
  margin: 0 auto 3rem;
  font-size: 0.9rem;
`;

export const WorkPageWrapper = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: 3rem;
  }
`;
