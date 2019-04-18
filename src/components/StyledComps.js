import styled from "styled-components";

// Index
export const Label = styled.div`
  font-size: 1.25rem;
  margin: 2rem 0 2rem;
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
export const WorksListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
  }
`;

export const PageTitle = styled.h2`
  margin: 2rem 0;
`;

// Work
export const WorkTitle = styled.h2`
  margin: 7rem 0 0.6rem;
`;

export const WorkDescription = styled.div`
  margin-bottom: 7rem;
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

// h3 {
//   font-weight: lighter;
//   letter-spacing: 0.2rem;
//   margin-top: 5rem;
//   margin-bottom: 0.3rem;
// }

// h2 {
//   letter-spacing: 0.05rem;
//   margin-bottom: 7rem;
// }
// `;
