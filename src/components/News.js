import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const scaleOut = keyframes`
 0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 
  100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;

const News = () => {
  const [hover, toggleHover] = useState(false);

  return (
    <BlinkerContainer>
      <span
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <Blinker />

        <Balloon hover={hover}>
          <p>
            <span className="text-grey-dark">2019.3 </span>
            <Link to="/work/the-light-of-tokyo" className="text-red-light">
              Won "Tokyo Post Card Award 2019"
            </Link>
          </p>

          <p>
            <span className="text-grey-dark">2019.4 </span>
            <Link to="/work/manhattan-portage" className="text-red-light">
              Finalist "Manhattan Portage Art Award"
            </Link>
          </p>
        </Balloon>
      </span>
    </BlinkerContainer>
  );
};

export default News;

const BlinkerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
`;

const Blinker = styled.div`
  width: 12px;
  height: 12px;
  margin: 6px auto 6px;
  background-color: rgb(80, 227, 194);
  border-radius: 100%;
  -webkit-animation: ${scaleOut} 2s infinite ease-in-out;
  animation: ${scaleOut} 2s infinite ease-in-out;
`;

const Balloon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.9rem;
  opacity: ${props => (props.hover ? 1 : 0)};
  visibility: ${props => (props.hover ? "visible" : "hidden")};
  padding: 10px 20px;
  line-height: 1.8;
  transform: translateX(-50%);
  /* margin-top: 20px; */
  border-radius: 0.5rem;
  transition: all 0.5s ease-out;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translate(-50%, -100%);
    box-shadow: 0px 2px 50px -15px rgba(0, 0, 0, 0.5);
    @media (max-width: 767px) {
      visibility: hidden;
    }
  }
  box-shadow: 0px 2px 40px -15px rgba(0, 0, 0, 0.5);
  @media (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 20px;
    opacity: 1;
    visibility: visible;
    position: relative;
    box-shadow: none;
    font-size: 0.8rem;
  }
`;
