export const work = {
  robotex: {
    id: "robotex",
    title: "Robotex Japan Corporate Website",
    client: "Robotex International",
    type: "Design and Development",
    keywords:
      "React, Gatsby, GraphQL, Storybook, Netlify CMS, Styled-components, Illustrator",
    path: "robotex",
    altText: "Robotex Japan"
  },
  naotatsu_kaku: {
    id: "naotatsu_kaku",
    title: "Visual Artist's Portfolio Website",
    client: "Naotatsu Kaku",
    type: "Design and Development",
    keywords: "React, Gatsby, Netlify CMS, Anime.js, SVG Animation",
    path: "naotatsu-kaku",
    altText: "Visual Artist, Naotatsu Kaku",
    isVideo: true
  },
  the_light_of_tokyo: {
    id: "the_light_of_tokyo",
    title: "The Light of Tokyo",
    client: "Hotel Ryumeikan Tokyo",
    type: "Postcard Design",
    keywords: 'Graphic design, Won the "Tokyo Postcard Award"',
    path: "the-light-of-tokyo",
    altText: "Postcard, The light of Tokyo"
  },
  manhattan_portage: {
    id: "manhattan_portage",
    title: "Manhattan Portage Art Collection",
    client: "Manhattan Portage",
    type: "Messenger Bag Design",
    keywords: "Graphic design, Manhattan Portage Art Award 2019",
    path: "manhattan-portage",
    altText: "Messenger Bag, Manhattan Portage"
  },
  satte: {
    id: "satte",
    title: "Satte City Logo",
    client: "Satte City, Japan",
    type: "Logo Design for a Local Government",
    keywords: "Logo, Branding, Public sector",
    path: "satte",
    altText: "Satte City Logo Design"
  },
  mera: {
    id: "mera",
    title: "Indoor Farming System Logo Design",
    client: "Kyoritsu Lighting Systems",
    type: "Product Logo Design",
    keywords: "Logo Design, Branding",
    path: "mera",
    altText: "Logo design for indoor faming system"
  },
  // jasms: {
  //   id: "jasms",
  //   title: "Japan Society of Mountain Research",
  //   client: "Japan Society of Mountain Research",
  //   type: "Logo Design",
  //   keywords: "",
  //   path: "jasms",
  //   altText: "Logo design, Japan Society of Mountain Research"
  // },

  soreike: {
    id: "soreike",
    title: "Soreike San Francisco Tee",
    client: "Nice neighbors",
    type: "T-shirt Design",
    keywords: "Japanese, Typography, T-shirt",
    path: "soreike",
    altText: "Soreike San Francisco Tee"
  }
};

export const apps = {
  sobasquare: {
    id: "sobasquare",
    title: "SOBASQUARE",
    type: "Soba (buckwheat noodle) Restaurant Exploring App",
    keywords:
      "React, Redux, Foursquare API, Google Maps API, FLIP Animation, SCSS, Styled-components",
    url: "https://soba.madmak.me",
    altText: "Never stop exploring soba place",
    isVideo: true
  },
  flashcard: {
    id: "flashcard",
    title: "Flashcard",
    type: "Flashcard for EN/JP/GER words",
    keywords: "React, Firebase, styled-components",
    url: "http://clean-toothbrush.surge.sh",
    altText: "Flashcard App, GER/ENG/JP"
  },
  pomodoro: {
    id: "pomodoro",
    title: "Pomodoro Timer",
    type: "Productivity app with cat face",
    keywords: "React, Redux, Sass",
    url: "https://pomodoro-with-catface.mkd.now.sh",
    altText: "Pomodoro Timer with Cat Face",
    isVideo: true
  }
};

export const news = [
  {
    date: "Jun 2019 🔍✨",
    href: "https://soba.madmak.me",
    text: "New Instant Search feature on SOBASQUARE!!"
  },
  // {
  //   date: "Jun 2019",
  //   to: "/work/robotex",
  //   text: "🤖Robotex Japan corporate website released"
  // },
  {
    date: "Apr 2019 🗼🎊",
    to: "/work/the-light-of-tokyo",
    text: 'Awarded "Tokyo Post Card Award 2019"'
  }
];

export const featured = {
  sobasquare: {
    ...apps.sobasquare,
    isVideo: true
  },
  robotex: {
    ...work.robotex
  },
  the_light_of_tokyo: {
    ...work.the_light_of_tokyo
  },
  naotatsu_kaku: {
    ...work.naotatsu_kaku
  }
};
