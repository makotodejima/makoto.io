/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { media } from './StyledComps';

interface WorkListItemProps {
  title: string;
  client: string;
  type: string;
  keywords: string;
  path?: string;
  url?: string;
  children: React.ReactNode;
}

const WorkListItem = (props: WorkListItemProps) => {
  return (
    <Wrapper>
      <ImgWrapper>
        {props.path ? (
          <Link
            aria-label={`Learn more about ${props.title}, ${props.type}`}
            tabIndex={-1}
            to={`/work/${props.path}/`}
          >
            {props.children}
          </Link>
        ) : (
          <a
            tabIndex={-1}
            aria-label={`Learn more about ${props.title}, ${props.type}`}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.children}
          </a>
        )}
      </ImgWrapper>
      <Description>
        {props.path ? (
          <Link to={`/work/${props.path}/`}>
            <h2 className="title">{props.title}</h2>
          </Link>
        ) : (
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <h2 className="title">{props.title}</h2>
          </a>
        )}

        <h4>
          {props.type} {props.client ? `| ${props.client}` : ''}
        </h4>
        <p className="keywords">{props.keywords}</p>
      </Description>
    </Wrapper>
  );
};

export default WorkListItem;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
  ${media.phone`
    flex-direction: column;
  `}
`;

const ImgWrapper = styled.div`
  min-width: 220px;
  width: 220px;
  height: 165px;
  margin-right: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: ${props => props.theme.boxShadowHover};
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

  ${media.phone`
    width: 280px;
    height: 210px;
    margin-bottom: 2rem;
  `}
`;

const Description = styled.div`
  .keywords {
    margin-bottom: 0;
    color: ${props => props.theme.secondary};
    ${media.phone`
    margin-bottom: 1.5rem;
    `}
  }
  a {
    text-decoration: none;
    .title {
      color: ${props => props.theme.primary};
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
        background-color: ${props => props.theme.primary};
        transform: scaleY(0);
        transform-origin: left bottom;
        transition: transform 0.3s ease-in;
      }
      &:hover::before {
        transform: scaleY(1);
      }
    }
  }
`;
