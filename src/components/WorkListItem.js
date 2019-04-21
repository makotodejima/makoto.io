import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { media } from "../components/StyledComps";

export default props => {
  return (
    <Wrapper>
      <Link to={`/work/${props.path}/`}>
        <ImgWrapper>{props.children}</ImgWrapper>
      </Link>
      <Description>
        <h2>{props.title}</h2>
        <h4>{`${props.type} | ${props.client}`}</h4>
        <p style={{ color: `grey` }}>{props.keywords}</p>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
  ${media.phone`
    flex-direction: column;
  `}
`;

const ImgWrapper = styled.div`
  width: 220px;
  margin-right: 2rem;
  border-radius: 5px;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in;

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

  ${media.phone`
    width: 280px;
    margin-bottom: 2rem;
  `}
`;

const Description = styled.div``;
