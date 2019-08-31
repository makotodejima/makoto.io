import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Button, Welcome } from '@storybook/react/demo';

import WorkListItem from '../components/WorkListItem';
import Logo from '../components/Logo';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import AboutImage from '../components/AboutImage';
import AppItem from '../components/AppItem';
import Email from '../components/Email';
import Footer from '../components/Footer';
import News from '../components/News';

import vid from '../images/naotatsu_kaku.mp4';

storiesOf('Button', module)
  .add(
    'with text',
    () => <Button onClick={action('clicked')}>Hello Button</Button>,
    {
      notes: 'A very simple example of addon notes',
    },
  )
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Socail Link', module).add('Three of the,🥳', () => <SocialLinks />);

storiesOf('WorkListItem', module).add('standard', () => (
  <WorkListItem
    key="naotatsu_kaku"
    title="Naotatsu Kaku's Portfolio Website"
    client="Visual Artist, Naotatsu Kaku"
    type="Design and development"
    keywords="React, Gatsby, Netlify CMS, Anime.js, SVG Animation"
    path="naotatsu-kaku"
  >
    <video autoPlay loop muted playsInline>
      <source src={vid} type="video/mp4" />
    </video>
  </WorkListItem>
));
