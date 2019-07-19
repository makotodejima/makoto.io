import React, { useRef } from 'react';
import { useSpring, useSprings, useChain, animated } from 'react-spring';
import { Link } from 'gatsby';
import styled from 'styled-components';

import DarkModeSwitcher from './DarkModeSwitcher';

const items = [
  { text: 'Home', to: '/' },
  { text: 'Work', to: '/work/' },
  { text: 'About', to: '/about/' },
  { text: 'Contact', to: '/contact/' },
];

const MobileMenu = ({ style, isExpanded }) => {
  const fadeRef = useRef();
  const fade = useSpring({
    from: { opacity: 0, transform: `translateX(-80%)` },
    to: { opacity: 1, transform: `translateX(0%)` },
    ref: fadeRef,
  });

  const springsRef = useRef();
  const springs = useSprings(
    items.length,
    items.map((item, idx) => ({
      from: { opacity: 0, transform: `translateX(-100%)` },
      to: { opacity: 1, transform: `translateX(${idx * 10 - 20}%)` },
      delay: idx * 50,
      ref: springsRef,
    })),
  );

  useChain([springsRef, fadeRef], [0, 0.4]);

  return (
    <Overlay style={style}>
      {springs.map((props, i) => (
        <Link
          key={items[i].to}
          className="item"
          to={items[i].to}
          activeClassName="active"
        >
          <animated.span style={props}>{items[i].text}</animated.span>
        </Link>
      ))}

      <animated.div style={fade} className="switchWrap">
        <DarkModeSwitcher />
      </animated.div>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(animated.div)`
  visibility: hidden;
  @media (max-width: 576px) {
    visibility: visible;
  }

  z-index: -1;
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  /* becuase it is reversed, not flex-end */
  justify-content: flex-start;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  transition: background-color 500ms;
  padding-bottom: 4rem;

  a {
    /* border-top: 1px solid black; */
    text-decoration: none;
  }

  .active span {
    /* Conflicting with spring opacity animation */
    opacity: 0.4 !important;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0.4rem;
  }

  /* DarkModeSwitcher style */
  .switchWrap {
    position: absolute;
    bottom: 240px;
    left: 40px;
  }
`;
