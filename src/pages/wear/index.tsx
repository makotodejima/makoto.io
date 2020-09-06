import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { media } from "../../components/StyledComps";
import { wearItems } from "../../data/data";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  ${media.phone`
    height: 540px;
  `}
`;

const Switcher = styled.div`
  margin-bottom: 12px;
`;

const SwitcherLink = styled.a<{ current: boolean }>`
  margin-right: 24px;
  cursor: pointer;
  text-decoration: ${({ current }) => (current ? "underline" : "")};
  opacity: ${({ current }) => (current ? "0.6" : 1)};
  :hover {
    opacity: 0.4;
  }
`;

const AnimatedImage = ({ style, fluid, item, alt }: any) => (
  <animated.div style={{ ...style, position: "absolute", width: "100%" }}>
    <Img fluid={fluid} alt={alt} />
    <div>{item.desc}</div>
  </animated.div>
);

const Wear = ({ data }: any) => {
  const [index, setIndex] = useState(0);
  const currentItem = wearItems[index];

  const transitions = useTransition(currentItem, (p) => p.id, {
    from: { opacity: 0, transform: "translate3d(-1%,0%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(2,0%,0)" },
  });

  return (
    <Layout>
      <SEO title="Wear" />
      <Switcher>
        {wearItems.map((i, idx) => {
          const current = index === idx;
          return (
            <SwitcherLink
              current={current}
              key={i.id}
              onClick={() => setIndex(idx)}
            >
              {i.label}
            </SwitcherLink>
          );
        })}
      </Switcher>
      <div style={{ position: "relative" }}>
        <ImageContainer>
          {transitions.map(({ item, props, key }) => {
            return (
              <AnimatedImage
                key={key}
                style={props}
                item={item}
                fluid={data[item.id].childImageSharp.fluid}
                alt={item.label}
              />
            );
          })}
        </ImageContainer>
      </div>
    </Layout>
  );
};

export default Wear;

export const pageQuery = graphql`
  query {
    enjoy: file(relativePath: { eq: "wear/enjoy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    greenery: file(relativePath: { eq: "wear/greenery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berliner: file(relativePath: { eq: "wear/berliner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    masterclass: file(relativePath: { eq: "wear/masterclass.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike: file(relativePath: { eq: "soreike/soreike02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mean: file(relativePath: { eq: "wear/mean.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
