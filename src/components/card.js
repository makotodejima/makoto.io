import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// this component works as image conteainer with animated overlay.
// Parent comp should pass in {children(image), path, title, desc }.

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246, 246, 246, 0.65);
  color: #1c3d5a;
  opacity: 0;
  transition: all 0.5s ease-out;

  h3,
  h5 {
    transform: translate3d(0, 7px, 0) scale(0.97);
    transition: all 0.5s ease-out;
  }

  :hover {
    opacity: 1;
    h3,
    h5 {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;

const Card = props => {
  return (
    <div className="w-full md:w-9/20 my-8 relative">
      <Link to={`/work/${props.path}/`}>
        {props.children}
        <Overlay>
          <div className="card-overlay flex flex-col justify-center h-full">
            <h3 className="text-center my-2">{props.title}</h3>
            <h5 className="text-center">{props.desc}</h5>
          </div>
        </Overlay>
      </Link>
    </div>
  );
};

export default Card;
