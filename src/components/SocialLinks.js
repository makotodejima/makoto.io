import React from "react";
import styled from "styled-components";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDribbble,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faDribbble, faLinkedin);

const SocialLinks = () => (
  <SocialLinksContainer>
    <a
      href="https://dribbble.com/mak84sasami"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", "dribbble"]} />
    </a>
    <a
      href="https://www.instagram.com/dejimako/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", "instagram"]} />
    </a>
    <a
      href="https://www.linkedin.com/in/mak84sasami/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </a>
  </SocialLinksContainer>
);

export default SocialLinks;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  a {
    transition: all 0.25s ease-in-out;
    color: #1c3d5a;
    margin: 0 1rem;
  }
  a:hover {
    transform: scale(1.1);
  }
  a::before {
    content: "";
    position: absolute;
    visibility: hidden;
    width: 100%;
    height: 1px;
    background-color: #1c3d5a;
    bottom: -1px;
    left: 0;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out;
  }
  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
