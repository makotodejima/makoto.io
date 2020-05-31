import React from 'react';
import styled from 'styled-components';
import { media } from '../StyledComps';

interface AppItemProps {
  url: string;
  type: string;
  title: string;
  keywords: string;
  children: React.ReactNode;
}

const AppItem = ({ url, type, title, keywords, children }: AppItemProps) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <a
          aria-label={`Learn more about ${title}, ${type}`}
          tabIndex={-1}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </ImgWrapper>
      <Description>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
        </a>
        <h4>{type}</h4>
        {/* <p>{keywords}</p> */}
      </Description>
    </Wrapper>
  );
};

export default AppItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-bottom: 4rem;
  ${media.tablet`
    flex-direction: row;
    width: auto;
  `}
  ${media.phone`
    flex-direction: column;
  `}
`;

const ImgWrapper = styled.div`
  min-width: 220px;
  width: 220px;
  height: 165px;
  margin-bottom: 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: box-shadow 0.2s ease-in;

  ${media.tablet`
    margin-bottom: 0;
    margin-right: 2rem;
  `}
  ${media.phone`
    width: 280px;
    height: 210px;
    margin-bottom: 2rem;
  `}

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }

  img,
  video {
    vertical-align: middle;
    width: 220px;
    height: 165px;
    ${media.phone`
    width: 280px;
    height: 210.22px;  
  `}
  }
`;

const Description = styled.div`
  max-width: 380px;
  a {
    text-decoration: none;
    .title {
      color: ${(props) => props.theme.primary};
      position: relative;
      display: inline-block;
      transition: text-shadow 0.2s ease-in;
      :hover {
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${(props) => props.theme.primary};
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 0.3s ease-in;
      }
      &:hover::before {
        transform: scaleY(1);
      }
    }
  }
  p {
    color: ${(props) => props.theme.secondary};
  }
`;
