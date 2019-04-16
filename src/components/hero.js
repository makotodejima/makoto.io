import React from "react";
import News from "./News";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <h4>MAKOTO DEJIMA</h4>
      <h2>Designer / Front-End Developer</h2>
      {/* <News /> */}
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    margin-top: 4rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    letter-spacing: 0.05rem;
    margin-bottom: 6rem;
  }
`;
