import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export default () => {
  const props = useSpring({
    year: 2019,
    from: { year: 1990 },
    config: { mass: 1, tension: 100, friction: 200 }
  });

  return (
    <StyledFooter>
      <div className="copyright">
        &copy;{" "}
        <animated.span>
          {props.year.interpolate(val => val.toFixed(0))}
        </animated.span>{" "}
        Makoto Dejima
      </div>
      <FooterLinks>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
      </FooterLinks>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  max-width: 50rem;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }

  a {
    color: grey;
    position: relative;
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    visibility: hidden;
    width: 100%;
    height: 1px;
    background-color: grey;
    bottom: -1px;
    left: 0;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
