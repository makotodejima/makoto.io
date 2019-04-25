import styled, { css } from "styled-components";
import Img from "gatsby-image";

// media template

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Index
export const Label = styled.div`
  font-size: 1.25rem;
  margin: 0 0 2rem;
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
  margin: 2rem 0 4rem;
`;

// Across work pages

export const TopCoverColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.color};
  width: 100%;
  height: 400px;
  z-index: -1;
  ${media.phone`
  height: 240px;
  `}
`;

export const TopSection = styled.div`
  margin-bottom: 3rem;
  ${media.phone`   
  margin-bottom: 0;
  `}
`;

export const TopImage = styled(Img)`
  width: ${props => props.width || `50%`};
  margin: 40px auto 5rem;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.18);
`;

export const ExtLink = styled.div`
  width: 100%;
  text-align: center;
  background-color: transparent;
  margin-bottom: 4rem;
  a {
    margin: 0 auto;
    padding: 5px 12px;
    border: 2px solid black;
    border-radius: 30px;
    text-decoration: none;
    color: black;
    transition: all 0.2s;
    &:hover {
      color: white;
      background-color: black;
    }
    :active {
      transform: scale(0.9);
    }
  }
`;

export const WorkTitle = styled.h2`
  margin: 0 0 0.6rem;
  text-align: center;
`;

export const WorkCopy = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: lighter;
`;

export const WorkTag = styled.p`
  font-size: 1.1rem;
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
  ${media.phone`
    width: 80%;
  `}
`;

export const WorkPageWrapper = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: 3rem;
  }
`;

export const Caption = styled.div`
  margin: 1rem auto 8rem;
  text-align: center;
  color: grey;
`;
