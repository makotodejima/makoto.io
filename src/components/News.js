import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { news } from "../../src/data/data";

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
        {news.map(n => (
          <div className="item">
            <div className="date">{n.date}</div>
            {n.href && (
              <a href={n.href} target="_blank" rel="noopener noreferrer">
                {n.text}
              </a>
            )}
            {n.to && <Link to={n.to}>{n.text}</Link>}
          </div>
        ))}
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
  padding: 5px;
`;

const Blinker = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: rgba(79, 227, 218);
  border-radius: 100%;
  -webkit-animation: scaleOut 3s infinite ease-in-out;
  animation: scaleOut 3s infinite ease-in-out;
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
    margin-bottom: 0.6rem;
  }

  .item {
    margin-bottom: 0.6rem;
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
