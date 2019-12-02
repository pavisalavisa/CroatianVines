import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title,
          description,
          author,
          menuItems{
            title,
            path
          }
        }
      }
       
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 128, height: 60) {
            ...GatsbyImageSharpFixed
          } 
        }
      }
  }  
  `)

  console.log(data.site.siteMetadata.menuItems)
  return (
    <>
      <Header logo={data.file.childImageSharp.fixed} menuItems={data.site.siteMetadata.menuItems} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer siteDescription={data.site.siteMetadata.description}
          siteAuthor={data.site.siteMetadata.author} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
