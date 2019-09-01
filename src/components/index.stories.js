import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Button, Welcome } from '@storybook/react/demo';

import WorkListItem from './WorkListItem';
import Logo from './Logo';
import Header from './Header';
import SocialLinks from './SocialLinks';
import AboutImage from './AboutImage';
import AppItem from './AppItem';
import Email from './Email';
import Footer from './Footer';
import News from './News';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

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
    {/* <video autoPlay loop muted playsInline>
        <source src={vid} type="video/mp4" />
      </video> */}
  </WorkListItem>
));
