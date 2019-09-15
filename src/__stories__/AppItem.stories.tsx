import React from 'react';
import { storiesOf } from '@storybook/react';

import testimg from '../images/pomodoro.png';

import AppItem from '../components/App/AppItem';
import { apps } from '../data/data';

const testId = 'pomodoro';
const testApp = apps[testId];

storiesOf('AppItem', module).add('Default', () => {
  return (
    <AppItem
      key={testId}
      url={testApp.url}
      type={testApp.type}
      title={testApp.title}
      keywords={testApp.keywords}
    >
      <img src={testimg} />
    </AppItem>
  );
});
