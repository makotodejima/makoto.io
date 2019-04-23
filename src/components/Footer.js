import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Footer = () => {
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
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  max-width: 50rem;
  /* justify-content: flex-end; */
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    /* flex-direction: column-reverse; */
    /* padding: 2.5rem; */
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
    height: 3px;
    background-color: grey;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
