import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

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
  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
  }
`;

const ImgWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  }

  img,
  video {
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    margin-right: 2rem;
  }
`;

const Description = styled.div``;
