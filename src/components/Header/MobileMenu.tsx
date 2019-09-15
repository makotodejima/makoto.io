import React, { useRef } from 'react';
import { useSpring, useSprings, useChain, animated } from 'react-spring';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './Logo';
import DarkModeSwitcher from './DarkModeSwitcher';

const items: any[] = [
  { text: 'Home', to: '/' },
  { text: 'Work', to: '/work/' },
  { text: 'About', to: '/about/' },
  { text: 'Contact', to: '/contact/' },
  <Logo />,
];

interface Props {
  style?: any;
}

const MobileMenu = ({ style }: Props) => {
  const fadeRef = useRef<HTMLElement>(null);
  // @ts-ignore
  const fade = useSpring({
    // @ts-ignore
    from: { opacity: 0, transform: `translateX(-80%)` },
    to: { opacity: 1, transform: `translateX(0%)` },
    ref: fadeRef,
  });

  const springsRef = useRef<HTMLElement>();
  const springs = useSprings(
    items.length,
    items.map((item, idx) => ({
      from: { opacity: 0, transform: `translateX(-100%)` },
      to: { opacity: 1, transform: `translateX(${idx * 10 - 20}%)` },
      delay: idx * 30,
      ref: springsRef,
    })),
  );
  // @ts-ignore
  useChain([springsRef, fadeRef], [0, 0.4]);

  return (
    <Overlay style={style}>
      {springs.map((props, i) => {
        if (i === 4)
          return (
            <animated.span key="logo" style={props}>
              {items[i]}
            </animated.span>
          );

        return (
          <Link
            key={items[i].to}
            className="item"
            to={items[i].to}
            activeClassName="active"
          >
            <animated.span style={props}>{items[i].text}</animated.span>
          </Link>
        );
      })}

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

  z-index: 1;
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
  padding-bottom: 5.5rem;

  a {
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
    margin: 0.45rem;
  }

  /* DarkModeSwitcher style */
  .switchWrap {
    position: absolute;
    bottom: 120px;
    right: 49px;
  }
`;
