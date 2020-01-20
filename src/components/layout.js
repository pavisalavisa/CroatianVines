import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"
import { isAuthenticated } from "../services/authService"

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
  const [isAuth, setIsAuth] = useState(isAuthenticated())

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

  let menuItems = data.site.siteMetadata.menuItems
  if (isAuth) {
    menuItems = menuItems.filter(x => !x.text.includes("Login"))
    menuItems.push({
      text: "Logout",
      path: "/logout",
      partiallyActive: true,
    })
  }

  return (
    <>
      <Navigation
        logo={data.file.childImageSharp.fixed}
        menuItems={menuItems}
      />
      <StyledMain>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map(child => React.cloneElement(child, { isAuth, setIsAuth }))}
      </StyledMain>
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
