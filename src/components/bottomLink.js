import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledSpan = styled.span`
  ::after {
    content: "";
    position: absolute;
    left: 20%;
    bottom: 10px;
    width: 60%;
    height: 1px;
    background-color: #3d4852;
    transform: scaleX(0);
    transition: all 0.25s;
  }

  :hover::after {
    transform: scaleX(1);
  }
`;

const BottomLink = props => {
  return (
    <div className="text-center my-20 mx-4">
      <Link
        to={props.path}
        className="relative border border-grey-darkest text-grey-darkest font-hairline py-2 px-4 no-underline"
      >
        <StyledSpan>{props.linkText}</StyledSpan>
      </Link>
    </div>
  );
};

export default BottomLink;
