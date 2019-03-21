import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const wiggle = keyframes`
  0% { transform: translate(1px, 0); }
  10% { transform: translate(-2px, 0); }
  20% { transform: translate(1px, 0); }
  30% { transform: translate(-2px, 0); }
  40% { transform: translate(2px, 0); }
  50% { transform: translate(-2px, 0); }
  60% { transform: translate(1px, 0); }
  70% { transform: translate(-1px, 0); }
  80% { transform: translate(3px, 0); }
  90% { transform: translate(-1px, 0); }
  100% { transform: translate(0, 0); }
`;

const Emoji = styled.span`
  display: inline-block;
  animation: ${wiggle} 1s linear 6;
  @media (max-width: 767px) {
    visibility: visible;
    margin-top: 10px;
    font-size: 0.85rem;
  }
`;

const Balloon = styled.div`
  opacity: ${props => (props.hover ? 1 : 0)};
  visibility: ${props => (props.hover ? "visible" : "hidden")};
  transition: all 0.5s ease-out;
  position: absolute;
  line-height: 1.8;
  font-size: 0.9rem;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 0.5rem;
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

const News = () => {
  const [hover, toggleHover] = useState(false);

  return (
    <div
      style={{
        position: `relative`,
        marginTop: `50px`
      }}
    >
      <span
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <h3 style={{ display: "inline" }}>
          <Emoji role="img" aria-label="recent news">
            📣 🙌 🎉
          </Emoji>
        </h3>

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
    </div>
  );
};

export default News;
