import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import { MeImageContainer, FadeOutText } from "../components/StyledComps";
import clamp from "lodash-es/clamp";
import me from "../images/me.jpg";
import poco from "../images/poco.png";

const AboutImage = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 10 }
    });
  });
  const [mouseOnImage, toggle] = useState(false);

  return (
    <MeImageContainer
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      <img src={me} alt="me" />
      <animated.img
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
          position: "absolute",
          left: "76px",
          top: "64px",
          width: "105px"
        }}
        draggable="false" // Prevent drag. without this, useGesture's 'down' is not captured correctly
        src={poco}
        alt="Cute dog face"
      />
      <FadeOutText mouseOnImage={mouseOnImage}>
        Yes, you can drag my face.
      </FadeOutText>
    </MeImageContainer>
  );
};

export default AboutImage;
