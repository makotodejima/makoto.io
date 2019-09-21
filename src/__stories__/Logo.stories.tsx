import React from 'react';
import Logo from '../components/Header/Logo';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';

export default {
  title: 'Assets/Logo',
  component: Logo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Logo animated ',
  },
};

export const header = () => {
  const cl = color('Color', '#000');
  return <Logo color={cl} />;
};
