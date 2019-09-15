import React from 'react';
import styled from 'styled-components';
import { useGesture } from 'react-use-gesture';
import { animated, useSpring } from 'react-spring';

import { media } from '../StyledComps';

interface Props {
  isExpanded: boolean;
  toggleExpansion: any;
}

const Hamburger = ({ isExpanded, toggleExpansion }: Props) => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
  }));

  const bind = useGesture({
    onDrag: ({ local }) => {
      set({ xy: local });
    },
  });

  return (
    <HamburgerWrap
      {...bind()}
      style={{
        transform: xy.interpolate(
          // @ts-ignore
          (x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`,
        ),
      }}
      onClick={toggleExpansion}
      aria-label="Open and close menu"
      data-testid="hamburger-menu"
    >
      {isExpanded ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          id="close"
        >
          <title data-testid="close">Close</title>
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" />
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <title data-testid="hamburger">Hamburger</title>
          <path d="M1.005 10.755c.039-5.636 5.304-8.755 11.098-8.755 5.572 0 10.925 3.019 10.892 8.755.592.527.96 1.277 1.001 2.088.041.802-.24 1.567-.761 2.151.45.504.726 1.154.761 1.849.048.931-.338 1.812-1.031 2.418.276 2.333-.924 3.656-2.871 3.725-.6.009-14.933.021-16.188.009-2.168-.068-3.111-1.549-2.88-3.743-.69-.606-1.07-1.485-1.022-2.409.035-.695.311-1.346.762-1.849-.524-.585-.804-1.351-.762-2.151.041-.811.409-1.561 1.001-2.088zm1.989 9.241h-.002c.031.791.267.979.954.999 1.241.013 15.514 0 16.098-.009.679-.022.92-.269.96-.943 0 0-11.384.036-18.01-.047zm9.452-3.996c-.522.003-.988.277-1.296.459-.89.522-1.587 1.049-2.652 1.038-1.184-.012-1.822-.551-2.57-1.023-.289-.182-.63-.477-1.143-.474h-1.861c-.54.046-.899.472-.923.943-.026.523.354 1.033 1.005 1.053h18.008c.645-.034 1.01-.539.985-1.053-.026-.476-.39-.899-.925-.944-.024.001-7.017-.01-8.628.001zm-.661-3.996l-8.779-.008c-.585.008-.98.453-1.005.947-.026.523.354 1.033 1.005 1.053 0 0 1.028-.002 1.994.004 1.443.009 2.422 1.672 3.508 1.666.968-.005 2.284-1.663 3.715-1.666 1.471-.003 8.791-.004 8.791-.004.645-.034 1.01-.539.985-1.053-.027-.49-.412-.946-.973-.947l-1.58.008c-.522.003-.988.277-1.296.459-.89.522-1.587 1.049-2.652 1.038-1.184-.012-1.822-.551-2.57-1.023-.289-.182-.63-.477-1.143-.474zm-2.285-5.007c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm4 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-12 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-8-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm7.5 5c-.872-4.683-5.35-6.013-9-5.997-3.926.017-8.258 1.748-9 6 0 0 8.701.002 9 .004 1.443.009 2.422 1.672 3.508 1.666.968-.005 2.284-1.664 3.715-1.666l1.777-.007z" />
        </svg>
      )}
    </HamburgerWrap>
  );
};

export default Hamburger;

const HamburgerWrap = styled(animated.div)`
  z-index: 2;
  position: fixed;
  right: 28px;
  bottom: 35px;
  text-align: center;
  padding: 12px;

  -webkit-appearance: none;
  -moz-appearance: none;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${props => props.theme.modalColor};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  path {
    fill: ${props => props.theme.primary};
  }

  :focus {
    outline: 0;
  }

  display: none;
  ${media.phone`
    display: block;
  `}
`;
