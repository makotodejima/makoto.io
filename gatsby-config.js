module.exports = {
  siteMetadata: {
    title: `Makoto Dejima`,
    description: `Tokyo-born developer and designer based in Berlin.`,
    url: "www.madmak.me",
    author: `@mdejima`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Makoto Dejima | Designer and Front-End Developer`,
        short_name: `Makoto Dejima`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `rgb(255, 255, 248)`,
        display: `minimal-ui`,
        icon: `src/images/mdfavicon.svg`,
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/svg`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/svg`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135555172-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
