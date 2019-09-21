import React from 'react';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';

import Header from '../components/Header/Header';

export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'Header contains links and News blinker and Darkmode switcher',
  },
};

export const header = () => {
  const bg = color('Background', '#fff');
  const text = color('Text', '#000');

  return <Header headerBgColor={bg} headerTextColor={text} />;
};

export const darkMode = () => (
  <Header headerTextColor="white" headerBgColor="black" />
);

export const highContrast = () => (
  <Header headerTextColor="blue" headerBgColor="tomato" />
);
