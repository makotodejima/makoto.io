import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <h3>MAKOTO DEJIMA</h3>
      <h2>Front-End Developer / Designer</h2>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    margin-top: 5rem;
    margin-bottom: 0.3rem;
  }

  h2 {
    letter-spacing: 0.05rem;
    margin-bottom: 8rem;
  }
`;
