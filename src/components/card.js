import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// this component works as image container with animated overlay.
// Parent comp should pass in {children(image), path, title, desc }.

const Card = props => {
  return (
    <StyledCard>
      <Link to={`/work/${props.path}/`}>
        {props.children}
        <Overlay>
          <h3>{props.title}</h3>
          <div className="divider" />
          <h5>{props.desc}</h5>
        </Overlay>
      </Link>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 70%;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  @media (max-width: 576px) {
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246, 246, 246, 0.65);
  color: #1c3d5a;
  opacity: 0;
  transition: all 0.5s ease-out;

  .divider {
    margin: 12px auto 20px auto;
    height: 1px;
    width: 15%;
    background-color: #1c3d5a;
    transform: scaleX(0);
    transition: all 0.5s ease-out;
  }

  h3 {
    text-align: center;
    margin: 0.5rem auto;
    transform: translate3d(0, -7px, 0) scale(0.97);
    transition: all 0.5s ease-out;
  }

  h5 {
    text-align: center;
    transform: translate3d(0, 7px, 0) scale(0.97);
    transition: all 0.5s ease-out;
  }

  :hover {
    opacity: 1;
    box-shadow: 0px 0px 80px -50px rgba(0, 0, 0, 0.1);
    .divider {
      transform: scaleX(1);
    }

    h3,
    h5 {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;
