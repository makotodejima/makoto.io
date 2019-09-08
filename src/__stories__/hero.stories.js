import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Hero from '../components/hero';

const stories = storiesOf('Hero', module);

stories.addDecorator(withKnobs);

stories.add('Hero', () => <Hero />);

stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
));

stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
});
