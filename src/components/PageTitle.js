import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  text-align: center;
  margin: 2rem auto;
`;

const PageTitle = ({ children }) => (
  <StyledHeader>
    <h2>{children}</h2>
  </StyledHeader>
);

export default PageTitle;
