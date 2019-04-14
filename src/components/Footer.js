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
      <div className="footer-link contacts w-48 mb-4 md:m-0 flex justify-between">
        <Link to="/" className="relative md:no-underline">
          Home
        </Link>
        <Link to="/about/" className="relative md:no-underline">
          About
        </Link>

        <Link to="/contact/" className="relative md:no-underline">
          Contact
        </Link>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  max-width: 60rem;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  a {
    color: grey;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2.5rem;
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
