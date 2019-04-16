import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default props => {
  return (
    <Wrapper>
      <Link to={`/work/${props.path}/`}>
        <ImgWrapper>{props.children}</ImgWrapper>
      </Link>
      <Description>
        <h2>{props.title}</h2>
        <h4>{props.desc}</h4>
        <p>
          The extraction of the light of the city Tokyo. Won the Tokyo postcatd
          award.
        </p>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  width: 220px;
  margin-right: 2rem;
  border-radius: 5px;
  overflow: hidden;
`;

const Description = styled.div``;
