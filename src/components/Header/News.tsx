import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { news } from '../../data/data';
import ThemeContext from '../../theme/themeContext';

const News = () => {
  const [hover, toggleHover] = useState(false);
  const { toggleDarkMode } = useContext(ThemeContext);

  return (
    <BlinkerContainer
      ara-label="Latest news and announcement"
      tabIndex={0}
      onFocus={() => toggleHover(true)}
      onBlur={() => toggleHover(false)}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <Blinker />
      <Blinker delay />

      <Balloon hover={hover}>
        <div className="heading">What&#39;s new</div>
        <div className="item">
          <div className="date">
            Jul 2019{' '}
            <span role="img" aria-label="Sun and moon emojis">
              🌤🌘👀
            </span>
          </div>
          <a
            onKeyPress={e => {
              if (e.key === 'Enter') {
                toggleDarkMode();
              }
            }}
            tabIndex={0}
            aria-label="Switch dark and light mode"
            onClick={toggleDarkMode}
          >
            Yes, I did it. Like everybody else. It's here. DARK MODE!!
          </a>
        </div>

        {news.map(n => (
          <div key={n.text} className="item">
            <div className="date">{n.date}</div>
            {n.href && (
              <a href={n.href} target="_blank" rel="noopener noreferrer">
                {n.text}
              </a>
            )}
            {n.to && <Link to={n.to}>{n.text}</Link>}
          </div>
        ))}
      </Balloon>
    </BlinkerContainer>
  );
};

export default News;

const BlinkerContainer = styled.div`
  outline: none;
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  padding: 5px;
`;

interface BlinkerProps {
  readonly delay?: boolean;
}

const Blinker = styled.div<BlinkerProps>`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: rgba(79, 227, 218);
  border-radius: 50%;
  -webkit-animation: scaleOut 3s infinite ease-in-out;
  animation: scaleOut 3s infinite ease-in-out;
  animation-delay: ${props => props.delay && '1500ms'};
`;

interface BaloonProps {
  readonly hover: boolean;
}

const Balloon = styled.div<BaloonProps>`
  position: absolute;
  z-index: 999;
  top: 32px;
  left: -9px;
  width: 245px;
  font-size: 0.9rem;
  opacity: ${props => (props.hover ? 1 : 0)};
  visibility: ${props => (props.hover ? 'visible' : 'hidden')};
  transform: ${props => (props.hover ? 'translateY(0)' : 'translateY(5px)')};
  padding: 10px 20px;
  line-height: 1.8;
  background-color: ${props => props.theme.modalColor};
  border-radius: 0.2rem;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 250ms ease-out;

  .heading {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .item {
    margin-bottom: 0.6rem;
    a {
      text-decoration: none;
      color: ${props => props.theme.link};
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    border-bottom: 10px solid ${props => props.theme.modalColor};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translate(-50%, -100%);
    transition: all 250ms ease-out;
    @media (max-width: 768px) {
      visibility: hidden;
    }
  }
`;
