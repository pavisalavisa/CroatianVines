import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ImageLink from "./common/imageLink"
import StyledButton from "./common/button"
import FlexRow from "./common/container"

const StyledHeader = styled.header`
  background:white;
  margin: 0.75rem 2rem;
  padding:0 0 0 0;
`

const StyledMenuItem = styled(props => <Link {...props} />)`
  color: #5B0B0B;
  padding:0.5rem;
  &:hover {
    border-bottom:3px solid #5B0B0B;
    padding:-3px;
  }
  text-decoration:none;
`;

const MenuItems = ({ items }) => (
  items.map(menuItem => (
    <StyledMenuItem key={items.indexOf(menuItem)} to={menuItem.path}>
      {menuItem.title.toUpperCase()}
    </StyledMenuItem>)
  )
)

const loggedIn = true;

const AccountSection = () => (
  loggedIn ?
    <FlexRow>
      <StyledButton margin={"0.5rem"} primary onClick={() => console.log('Clicked log in!')}>Log in</StyledButton>
      <StyledButton margin={"0.5rem"} onClick={() => console.log('Clicked register!')}>Register</StyledButton>
    </FlexRow>
    :
    <FlexRow>
      <StyledButton margin={"0.5rem"} primary onClick={() => console.log('Clicked log out!')}>Log out</StyledButton>
    </FlexRow>
)


const Header = ({ logo, menuItems }) => (
  <StyledHeader>
    <FlexRow>
      <ImageLink to="/" imagePath={logo} />
      <MenuItems items={menuItems} />
      <AccountSection />
    </FlexRow>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
