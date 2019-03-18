import React from "react";
import styled from "styled-components";

const Balloon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 25px;
  padding: 10px 20px;
  border-radius: 0.5rem;
  border: dotted 1px red;
  visibility: hidden;
`;

const News = () => (
  <div style={{ position: `relative` }}>
    <h3 style={{ marginTop: `70px` }}>📣 🙌 🎉</h3>

    <Balloon>
      <p>2019.4 | なんかの賞を取りましてん</p>
      <p>2019.5 | またまたなんかにだしましてんよ〜</p>
    </Balloon>
  </div>
);

export default News;
