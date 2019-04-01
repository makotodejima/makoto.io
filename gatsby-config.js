module.exports = {
  siteMetadata: {
    title: `Makoto Dejima`,
    description: `Makoto Dejima | Designer and Front-End Developer`,
    url: "madmak.me",
    author: `@mak84sasami`
  },
  plugins: [
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
        theme_color: `#1C3D5A`,
        display: `minimal-ui`,
        icon: `src/images/mdicon.svg`,
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/svg`
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/svg`
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135555172-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
