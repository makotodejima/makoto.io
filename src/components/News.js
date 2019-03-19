import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Balloon = styled.div`
  opacity: ${props => (props.hover ? 1 : 0)};
  visibility: ${props => (props.hover ? "visible" : "hidden")};
  transition: all 0.5s ease-out;
  position: absolute;
  line-height: 1.4;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 25px;
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
  }
  box-shadow: 0px 2px 40px -15px rgba(0, 0, 0, 0.5);
`;

const Emoji = styled.span``;

const News = () => {
  const [hover, toggleHover] = useState(false);

  return (
    <div style={{ position: `relative`, marginTop: `50px` }}>
      <span
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <h3 style={{ display: "inline" }}>
          <Emoji>📣 🙌 🎉</Emoji>
        </h3>

        <Balloon hover={hover}>
          <Link to="/" className="no-underline">
            <p>2019.4 | なんかの賞を取りましてん</p>
          </Link>
          <Link to="/" className="no-underline">
            <p>2019.5 | またまたなんかにだしましてんよ〜</p>
          </Link>
        </Balloon>
      </span>
    </div>
  );
};

export default News;
