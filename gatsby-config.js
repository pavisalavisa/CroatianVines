module.exports = {
  siteMetadata: {
    title: `CroatianVines`,
    description: `Where passion brings people together`,
    author: `@KristicevicAntonio`,
    menuItems: [
      {
        text: "Home",
        path: "/",
        partiallyActive: true,
      },
      {
        text: "Collection",
        path: "/collection",
        partiallyActive: true,
      },
      {
        text: "Learn",
        path: "/learn",
        partiallyActive: true,
      },
      {
        text: "Experience",
        path: "/experience",
        partiallyActive: true,
      },
      {
        text: "Reviews",
        path: "/reviews",
        partiallyActive: true,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
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
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `app1YxhjCyOseAVb1`,
            tableName: `Wines`,
            mapping: { Image: `fileNode` },
            tableLinks: [`Contents`],
          },
          {
            baseId: `app1YxhjCyOseAVb1`,
            tableName: `Wineries`,
            mapping: { Image: `fileNode` },
          },
          {
            baseId: `app1YxhjCyOseAVb1`,
            tableName: `Contents`,
            mapping: { Image: `fileNode` }
          }
        ]
      }
    }
  ],
}
