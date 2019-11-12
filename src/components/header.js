import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledHeader = styled.header`
background:white;
margin: 0.5rem;
padding:0 0 0 0;
`

const FlexRow = styled.div`
  display: flex;
`

const Header = ({ logo, menuItems }) => (
  <StyledHeader>
    <FlexRow>
      <Link to="/">
        <Img fixed={logo} />
      </Link>
    </FlexRow>
    {
      menuItems.map(menuItem =>
      <Link to={menuItem.path}>{menuItem.Name}</Link>)
      }
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
