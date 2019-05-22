import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { media } from "../components/StyledComps";

const WorkListItem = props => {
  return (
    <Wrapper>
      <Link to={`/work/${props.path}/`}>
        <ImgWrapper>{props.children}</ImgWrapper>
      </Link>
      <Description>
        <Link to={`/work/${props.path}/`}>
          <h2 className="title">{props.title}</h2>
        </Link>
        <h4>{`${props.type} | ${props.client}`}</h4>
        <p style={{ color: `grey` }}>{props.keywords}</p>
      </Description>
    </Wrapper>
  );
};

export default WorkListItem;

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
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 3px 3px 25px 0px rgba(0, 0, 0, 0.3);
  }

  img,
  video {
    vertical-align: middle;
    width: 220px;
    height: 165px;

    ${media.phone`
      width: 280px;  
      height: 210.22px;
    `}
  }

  ${media.phone`
    width: 280px;
    margin-bottom: 2rem;
  `}
`;

const Description = styled.div`
  a {
    text-decoration: none;
    .title {
      color: black;
      position: relative;
      display: inline-block;
      transition: text-shadow 0.2s ease-in;
      :hover {
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: #000000;
        transform: scaleY(0);
        transform-origin: left bottom;
        transition: transform 0.3s ease-in;
        z-index: -1;
      }
      &:hover::before {
        transform: scaleY(1);
      }
    }
  }
`;
