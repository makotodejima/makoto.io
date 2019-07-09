import React from 'react';
import styled from 'styled-components';

import weq from '../images/weq.jpg';

import { Label } from './StyledComps';

export default () => (
  <>
    <Label>Writing</Label>
    <WritingLink>
      <a
        href="https://medium.com/this-week-in-america"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tech and politics / テクノロジーと政治
      </a>
      <br />
      Technology, startups, and politics.
    </WritingLink>
    <WritingLink>
      <a
        href="https://weq.com/category/%E6%97%A5%E6%9C%AC/"
        target="_blank"
        rel="noopener noreferrer"
      >
        WeQ Japanese PR <img src={weq} alt="WeQ" />
      </a>
      <br />
      Working with German global ad-tech company to accelerate their growth in
      Japanese market.
    </WritingLink>
    <div style={{ height: `3rem` }} />
  </>
);

const WritingLink = styled.p`
  line-height: 2;
  a {
    color: darkcyan;
    img {
      height: 0.8rem;
      margin-left: 0.5rem;
    }
  }
`;
