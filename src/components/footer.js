import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FlexRow, underlinedContainerStyle } from "./common/container"
import Image from "gatsby-image"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  margin:5%;
  width:90%;
`
const SocialMediaContainer = styled.div`
`
const StyledMenuItem = styled(props => <Link {...props} />)`
  ${underlinedContainerStyle}
  color: #5B0B0B;
  padding:0.5rem;
  text-decoration:none;
`;
const CopyrightContainer = styled.div`
  text-align:center;
`

const StyledFooterNavigation = styled(FlexRow)`
  padding-bottom:1rem;
  border-bottom:1px solid rgba(0,0,0, .5);
`

const NavigationItemGroup = ({ items }) =>
  (
    <FlexRow>
      {items.map(menuItem => (
        <StyledMenuItem key={items.indexOf(menuItem)} to={menuItem.path}>
          {menuItem.text.toUpperCase()}
        </StyledMenuItem>)
      )}
    </FlexRow>
  )

const FooterNavigation = ({ logo, navigationItems }) => (
  <StyledFooterNavigation>
    <NavigationItemGroup items={navigationItems.slice(0, Math.ceil(navigationItems.length / 2))}></NavigationItemGroup>
    <Image fixed={logo} />
    <NavigationItemGroup items={navigationItems.slice(Math.ceil(navigationItems.length / 2))}></NavigationItemGroup>
  </StyledFooterNavigation>
)

const Footer = ({ logo, siteDescription, siteAuthor, navigationItems }) => (
  <StyledFooter>
    <FooterNavigation logo={logo} navigationItems={navigationItems} />
    <SocialMediaContainer></SocialMediaContainer>
    <CopyrightContainer>
      © {new Date().getFullYear()} Croatian Vines, {siteDescription} {siteAuthor}
    </CopyrightContainer>
  </StyledFooter>
)

Footer.propTypes = {
  siteDescription: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteDescription: ``,
  siteAuthor: ``,
}

export default Footer
