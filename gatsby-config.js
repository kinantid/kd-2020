module.exports = {
  siteMetadata: {
    title: `Kina's Design Portfolio Site`,
    description: ``,
    author: `Kinanti D`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 2018934,
        sv: 6,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'kd2020',
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
          header_and_footer: require('./src/schemas/header_and_footer.json'),
          ideas: require('./src/schemas/ideas.json'),
          project: require('./src/schemas/project.json'),
          post: require('./src/schemas/post.json'),
          contact: require('./src/schemas/contact.json')
        },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kinanti D Portfolio Website`,
        short_name: `Kina's portfolio`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#1a1a1a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
