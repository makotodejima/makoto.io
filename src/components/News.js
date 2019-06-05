import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const scaleOut = keyframes`
 0% { 
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
    opacity: 0.6;
  } 
  50% {

    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0.2;
  }
`;

const News = () => {
  const [hover, toggleHover] = useState(false);

  return (
    <BlinkerContainer
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <Blinker />
      <Blinker delay />

      <Balloon hover={hover}>
        <div className="heading">What's new</div>
        <div className="item">
          <div className="date">2019.5</div>
          <a
            href="https://sobasquare.mkdjm.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobasquare got new Instant Search feature!
          </a>
        </div>
        <div className="item">
          <div className="date">2019.6</div>
          <Link to="/work/robotex">Robotex Japan corporate site released</Link>
        </div>
        <div className="item">
          <div className="date">2019.3</div>
          <Link to="/work/the-light-of-tokyo">
            Awarded "Tokyo Post Card Award 2019"
          </Link>
        </div>
      </Balloon>
    </BlinkerContainer>
  );
};

export default News;

const BlinkerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  padding: 4px;
`;

const Blinker = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: rgba(79, 227, 218);
  border-radius: 100%;
  -webkit-animation: ${scaleOut} 3s infinite ease-in-out;
  animation: ${scaleOut} 3s infinite ease-in-out;
  animation-delay: ${props => props.delay && "1500ms"};
`;

const Balloon = styled.div`
  position: absolute;
  z-index: 999;
  top: 35px;
  left: -9px;
  width: 245px;
  font-size: 0.9rem;
  opacity: ${props => (props.hover ? 1 : 0)};
  visibility: ${props => (props.hover ? "visible" : "hidden")};
  padding: 10px 20px;
  line-height: 1.8;
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;

  .heading {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .item {
    a {
      color: #0076ff;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translate(-50%, -100%);
    @media (max-width: 767px) {
      visibility: hidden;
    }
  }
  /* @media (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 20px;
    opacity: 1;
    visibility: visible;
    position: relative;
    box-shadow: none;
    font-size: 0.8rem;
  } */
`;
