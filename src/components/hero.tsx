import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <h3>{'Makoto Dejima'}</h3>
      <h2>Developer / Designer</h2>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-top: 5rem;
    margin-bottom: 0.3rem;
  }

  h2 {
    margin-bottom: 8rem;
  }
`;
