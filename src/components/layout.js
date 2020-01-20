import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > * {
    width: 80%;
    margin-top: 10%;
  }

  @media screen and (max-width: 640px) {
    > * {
      width: 90%;
    }
  }
`

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
          fixed(width: 128, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Navigation
        logo={data.file.childImageSharp.fixed}
        menuItems={data.site.siteMetadata.menuItems}
      />
      <StyledMain>{children}</StyledMain>
      <Footer
        siteDescription={data.site.siteMetadata.description}
        siteAuthor={data.site.siteMetadata.author}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
