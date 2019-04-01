import React from "react";
import News from "./News";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  h3 {
    letter-spacing: 0.2rem;
  }

  h2 {
    letter-spacing: 0.05rem;
    margin: 1rem auto;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <h3>Makoto Dejima</h3>
      <h2>Designer / Front-End Developer</h2>
      {/* <News /> */}
    </Wrapper>
  );
};

export default Hero;
