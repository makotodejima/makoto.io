import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import clamp from 'lodash-es/clamp';

import poco from '../images/poco.png';

import { media } from './StyledComps';

const AboutImage = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 10 },
    });
  });

  const [mouseOnImage, toggle] = useState(false);

  return (
    <StaticQuery
      query={query}
      render={data => (
        <MeImageContainer
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        >
          <Img fluid={data.me.childImageSharp.fluid} alt="me" />
          <animated.img
            {...bind()}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`,
              ),
              position: 'absolute',
              left: '76px',
              top: '64px',
              width: '105px',
            }}
            draggable={false} // Prevent drag. without this, useGesture's 'down' is not captured correctly
            src={poco}
            className="poco"
            alt="Cute dog face"
          />
          <FadeOutText mouseOnImage={mouseOnImage}>
            Yes, you can drag my face.
          </FadeOutText>
        </MeImageContainer>
      )}
    />
  );
};

export default AboutImage;

const MeImageContainer = styled.div`
  position: relative;
  margin: 0;
  img {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    margin-bottom: 0;
    width: 250px;
  }
  .poco {
    cursor: grab;
    :active {
      cursor: grabbing;
    }
  }

  ${media.tablet`
    margin-top: 3rem;
  `}
`;

interface FadeOutTextProps {
  mouseOnImage: boolean;
}

const FadeOutText = styled.p<FadeOutTextProps>`
  position: absolute;
  letter-spacing: normal;
  font-size: 0.75rem;
  color: lightgray;
  margin-bottom: 1rem;
  left: 60px;
  top: 234px;
  transition: opacity 1500ms;
  opacity: ${props => (props.mouseOnImage ? 0 : 1)};

  @media (max-width: 576px) {
    letter-spacing: -0.05em;
  }
`;

const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          quality: 100
          traceSVG: { background: "black", color: "white" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
