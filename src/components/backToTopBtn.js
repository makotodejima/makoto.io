import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function BackToTopBtn() {
  const [props, set, stop] = useSpring(() => ({ y: 0 }));

  const scroll = () => {
    set({ y: 150 });
  };

  //   const reachToTop = callback => {
  //     if (window.pageYOffset === 0) {
  //       console.log("It's 0 up here.");
  //     }
  //     callback();
  //   };

  return (
    <animated.button
      className="toTop"
      scrollTop={props.scroll}
      onClick={scroll}
    >
      Press to top
    </animated.button>
  );
}

export default BackToTopBtn;
