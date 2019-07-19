import React from 'react';
import { useSpring, useSprings, animated } from 'react-spring';
import { Link } from 'gatsby';
import styled from 'styled-components';

const items = [
  { text: 'Home', to: '/' },
  { text: 'Work', to: '/work/' },
  { text: 'About', to: '/about/' },
  { text: 'Contact', to: '/contact/' },
];

const MobileMenu = ({ style }) => {
  const slide = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(-40%)' },
  });

  const springs = useSprings(
    items.length,
    items.map((item, idx) => ({
      from: { opacity: 0, transform: `translateX(-100%)` },
      //   to: { transform: `translateX(${idx * 10 + 20})` },
      to: { opacity: 1, transform: `translateX(${idx * 10 - 20}%)` },
      delay: idx * 50,
    })),
  );

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
  background: ${({ theme }) => theme.bg};
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
`;
