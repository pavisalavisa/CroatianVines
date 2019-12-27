import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          author
          menuItems {
            text
            path
            partiallyActive
          }
        }
      }

      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 128, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        logo={data.file.childImageSharp.fixed}
        menuItems={data.site.siteMetadata.menuItems}
      />
      <main>{children}</main>
      <Footer
        logo={data.file.childImageSharp.fixed}
        siteDescription={data.site.siteMetadata.description}
        siteAuthor={data.site.siteMetadata.author}
        navigationItems={data.site.siteMetadata.menuItems}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
