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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography`,
      },
    },
  ],
}
