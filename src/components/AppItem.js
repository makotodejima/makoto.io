import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { media } from "../components/StyledComps";

export default props => {
  return (
    <Wrapper>
      <a href={props.path} target="_blank" rel="noopener noreferrer">
        <ImgWrapper>{props.children}</ImgWrapper>
      </a>
      <Description>
        <h2>{props.title}</h2>
        <h4>{props.type}</h4>
        <i>{props.keywords}</i>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-bottom: 4rem;
  ${media.tablet`
    flex-direction: row;
    width: auto;
  `}
  ${media.phone`
    flex-direction: column;
  `}
`;

const ImgWrapper = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 5px;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in;

  ${media.tablet`
    margin-bottom: 0;
    margin-right: 2rem;
  `}
  ${media.phone`
    width: 280px;
    margin-bottom: 2rem;
  `}

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  }

  img,
  video {
    vertical-align: middle;
    ${media.desktop`
    width: 220px;  
  `}
    ${media.phone`
    width: 280px;  
  `}
  }
`;

const Description = styled.div``;
