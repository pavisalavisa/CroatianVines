module.exports = {
  siteMetadata: {
    title: `CroatianVines`,
    description: `Where passion brings people together`,
    author: `@KristicevicAntonio`,
    menuItems: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Explore",
        path: "/explore",
      },
      {
        title: "Learn",
        path: "/learn",
      },
      {
        title: "Experience",
        path: "/experience",
      },
      {
        title: "Reviews",
        path: "/reviews",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
