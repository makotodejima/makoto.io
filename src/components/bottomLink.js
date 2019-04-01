import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  margin: 8rem auto;
  a {
    position: relative;

    color: grey;
    font-weight: lighter;
    text-decoration: none;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 100%;
      height: 1px;
      background-color: grey;
      transform: scaleX(0);
      transition: all 0.25s;
    }
    :hover::before {
      transform: scaleX(1);
    }
  }
`;

const BottomLink = props => {
  return (
    <StyledDiv>
      <Link to={props.path}>{props.linkText}</Link>
    </StyledDiv>
  );
};

export default BottomLink;
