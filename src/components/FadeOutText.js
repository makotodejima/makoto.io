import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  position: absolute;
  text-align: center;
  letter-spacing: normal;
  font-size: 0.75rem;
  width: 100%;
  color: lightgray;
  padding-bottom: 0.5rem;
  bottom: 0;
  opacity: ${props => (props.mouseOnImage ? 0 : 1)};

  @media (max-width: 576px) {
    letter-spacing: -0.05em;
  }
`;

const FadeOutText = props => (
  <StyledP mouseOnImage={props.mouseOnImage}>
    Yes, dog face is draggable.
  </StyledP>
);

export default FadeOutText;
