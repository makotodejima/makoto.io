interface IWork {
  altText: string;
  client?: string;
  id: string;
  isVideo: boolean;
  keywords: string;
  path?: string;
  title: string;
  type: string;
  url?: string;
}

export const work: { [key: string]: IWork } = {
  robotex: {
    altText: 'Robotex Japan',
    client: 'Robotex International',
    id: 'robotex',
    isVideo: false,
    keywords:
      'React, Gatsby, GraphQL, Storybook, Netlify CMS, Styled-components, Illustrator',
    path: 'robotex',
    title: 'Robotex Japan Corporate Website',
    type: 'Design and Development',
  },
  naotatsu_kaku: {
    id: 'naotatsu_kaku',
    title: "Visual Artist's Portfolio Website",
    client: 'Naotatsu Kaku',
    type: 'Design and Development',
    keywords: 'React, Gatsby, Netlify CMS, Anime.js, SVG Animation',
    path: 'naotatsu-kaku',
    altText: 'Visual Artist, Naotatsu Kaku',
    isVideo: true,
  },
  the_light_of_tokyo: {
    id: 'the_light_of_tokyo',
    title: 'The Light of Tokyo',
    client: 'Hotel Ryumeikan Tokyo',
    type: 'Postcard Design',
    keywords: 'Graphic design, Won the "Tokyo Postcard Award"',
    path: 'the-light-of-tokyo',
    altText: 'Postcard, The light of Tokyo',
    isVideo: false,
  },
  manhattan_portage: {
    id: 'manhattan_portage',
    title: 'Manhattan Portage Art Collection',
    client: 'Manhattan Portage',
    type: 'Messenger Bag Design',
    keywords: 'Graphic design, Manhattan Portage Art Award 2019',
    path: 'manhattan-portage',
    altText: 'Messenger Bag, Manhattan Portage',
    isVideo: false,
  },
  satte: {
    id: 'satte',
    title: 'Satte City Logo',
    client: 'Satte City, Japan',
    type: 'Logo Design for a Local Government',
    keywords: 'Logo, Branding, Public sector',
    path: 'satte',
    altText: 'Satte City Logo Design',
    isVideo: false,
  },
  mera: {
    id: 'mera',
    title: 'Indoor Farming System Logo Design',
    client: 'Kyoritsu Lighting Systems',
    type: 'Product Logo Design',
    keywords: 'Logo Design, Branding',
    path: 'mera',
    altText: 'Logo design for indoor faming system',
    isVideo: false,
  },
  soreike: {
    id: 'soreike',
    title: 'Soreike San Francisco Tee',
    client: 'Nice neighbors',
    type: 'T-shirt Design',
    keywords: 'Japanese, Typography, T-shirt',
    path: 'soreike',
    altText: 'Soreike San Francisco Tee',
    isVideo: false,
  },
};

interface IApp {
  id: string;
  title: string;
  type: string;
  keywords: string;
  url: string;
  altText: string;
  isVideo: boolean;
}

export const apps: { [key: string]: IApp } = {
  sobasquare: {
    id: 'sobasquare',
    title: 'SOBASQUARE',
    type: 'Soba (buckwheat noodle) Restaurant Exploring App',
    keywords:
      'React, Redux, Foursquare API, Google Maps API, FLIP Animation, SCSS, Styled-components',
    url: 'https://soba.madmak.me',
    altText: 'Never stop exploring soba place',
    isVideo: true,
  },
  flashcard: {
    id: 'flashcard',
    title: 'Flashcard',
    type: 'Flashcard for EN/JP/GER words',
    keywords: 'React, Firebase, styled-components',
    url: 'http://clean-toothbrush.surge.sh',
    altText: 'Flashcard App, GER/ENG/JP',
    isVideo: false,
  },
  pomodoro: {
    id: 'pomodoro',
    title: 'Pomodoro Timer',
    type: 'Productivity app with cat face',
    keywords: 'React, Redux, Sass',
    url: 'https://pomodoro-with-catface.mkd.now.sh',
    altText: 'Pomodoro Timer with Cat Face',
    isVideo: false,
  },
};

export const featured: { [key: string]: IWork } = {
  sobasquare: apps.sobasquare,
  robotex: work.robotex,
  the_light_of_tokyo: work.the_light_of_tokyo,
  naotatsu_kaku: work.naotatsu_kaku,
};

interface INews {
  date: string;
  to: string;
  text: string;
  href?: string;
}

export const news: INews[] = [
  {
    date: 'Apr 2019 🗼🎊',
    to: '/work/the-light-of-tokyo',
    text: 'Awarded "Tokyo Post Card Award 2019"',
  },
];
