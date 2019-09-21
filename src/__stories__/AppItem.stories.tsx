import React from 'react';
import AppItem from '../components/App/AppItem';
import { withKnobs, select, color, number } from '@storybook/addon-knobs';
import { apps } from '../data/data';

import pomodoro_img from '../images/pomodoro.png';
// import sobasquare_img from '../images/sobasquare.png';
import flashcard_img from '../images/flashcard.png';

const defaultValue = 'pomodoro';
const options = {
  pomodoro: 'pomodoro',
  sobasquare: 'sobasquare',
  flashcard: 'flashcard',
};

export default {
  title: 'AppItem',
  component: AppItem,
  decorators: [withKnobs],
};

const getImg = (appId: string) => {
  switch (appId) {
    case 'pomodoro':
      return pomodoro_img;
    case 'sobasquare':
      return pomodoro_img;
    case 'flashcard':
      return flashcard_img;
  }
};

export const appItem = () => {
  const appId = select('App ID', options, defaultValue);
  const testApp = apps[appId];

  return (
    <AppItem
      url={testApp.url}
      type={testApp.type}
      title={testApp.title}
      keywords={testApp.keywords}
    >
      <img src={getImg(appId)} />
    </AppItem>
  );
};
