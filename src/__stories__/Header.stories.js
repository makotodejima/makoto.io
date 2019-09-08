import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Header from '../components/Header';

const groupId = 'GROUP-ID1';

const stories = storiesOf('Header', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default', () => <Header />);
stories.add('Default', () => (
  <Header
    headerTextColor={color('Text Color', 'black')}
    headerBgColor={color('Background Color', 'white')}
  />
));
