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
        <p>{props.keywords}</p>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  width: 220px;
`;

const ImgWrapper = styled.div`
  margin-bottom: 2rem;
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
`;

const Description = styled.div``;
