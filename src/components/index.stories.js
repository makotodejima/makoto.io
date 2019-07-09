import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

import WorkListItem from './WorkListItem';
import Logo from './Logo';
import Header from './Header';
import SocialLinks from './SocialLinks';
import vid from '../images/nao300.mp4';
import AboutImage from './AboutImage';
import AppItem from './AppItem';
import Email from './Email';
import Footer from './Footer';
import News from './News';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
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

storiesOf('Socail Link', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'This is social links used in ABOUT page',

      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('Three of the,🥳', () => <SocialLinks />);

storiesOf('WorkListItem', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'Need to wrap image or video',

      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('standard', () => (
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

storiesOf('Logo', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'Logo rendered with SVG file',

      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('original', () => <Logo />);

storiesOf('Header', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'Header',

      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('Default Black', () => <Header />)
  .add('Red', () => <Header color="red" />);

storiesOf('About Image', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'About',
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('About image', () => <AboutImage />);

storiesOf('App Item', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'App Item',
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('App Item', () => (
    <AppItem
      title="Here goes title"
      type="work type"
      keywords="keywords"
      path="this is path"
      altText="this is alt text"
    >
      <video autoPlay loop muted playsInline>
        <source src={vid} type="video/mp4" />
      </video>
    </AppItem>
  ));

storiesOf('Email with copyBtn', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'Email address',
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
    },
  })
  .add('Email', () => <Email />);

storiesOf('Footer')
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'Footer',
      inline: true,
    },
  })
  .add('Footer', () => <Footer />);

storiesOf('News')
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'News',
      inline: true,
    },
  })
  .add('News', () => <News />);
