import { Link } from "gatsby"
import { useRef, useState, useEffect } from "react"
import {
  useResponsiveMenu,
  useOnOutsideEvent,
} from "../hooks/use-responsive-menu"

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { ImageLink } from "./common/link"
import StyledButton from "./common/button"
import { FlexRow, underlinedContainerStyle } from "./common/container"
import more from "../images/more.svg"

const StyledHeader = styled.header`
  background: white;
  padding: 0;
  box-shadow: 0 0 14px 0 rgb(126, 34, 66, 0.3);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`

const StyledMenuItem = styled(Link)`
  ${underlinedContainerStyle}

  color: #5B0B0B;
  padding: 0.5rem;
  text-decoration: none;
`

const StyledNav = styled.nav`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  flex: 1 1 auto;
  visibility: ${props => props.visibility};
  overflow-x: hidden;
`

const Triangle = styled.div`
  position: absolute;
  top: -12px;
  right: 13px;
  width: 22px;
  height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transform: rotate(135deg);
  background-color: white;
`

const MoreButtonContainer = styled(props => <div {...props} />)`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : "50px")};
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: #5b0b0b;
  }
`

const MoreButtonIcon = styled.img`
  stroke: red;
  height: 5vh;
  max-width: 1rem;
  margin: 0;
`

const MoreButton = props => (
  <MoreButtonContainer {...props}>
    <MoreButtonIcon src={more} />
  </MoreButtonContainer>
)

const HiddenItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${props => props.menu.offset + props.spaceForTriangle}px;
  padding: 2px;
  z-index: ${props => props.zIndex};
  min-width: ${props => props.minWidth}px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const VisibleItems = ({ visibleItems }) =>
  visibleItems.map(menuItem => (
    <StyledMenuItem key={visibleItems.indexOf(menuItem)} to={menuItem.path}>
      {menuItem.text.toUpperCase()}
    </StyledMenuItem>
  ))

const HiddenItems = ({
  menu,
  handleOutsideClick,
  minWidth = 120,
  spaceForTriangle = 16,
  zIndex = 999,
}) => {
  const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)

  return (
    <HiddenItemsContainer
      ref={innerBorderRef}
      menu={menu}
      minWidth={minWidth}
      spaceForTriangle={spaceForTriangle}
      zIndex={zIndex}
    >
      <Triangle />
      {menu.hiddenItems.map(menuItem => (
        <StyledMenuItem
          key={menuItem.path}
          to={menuItem.path}
          partiallyActive={menuItem.partiallyActive}
        >
          {menuItem.text}
        </StyledMenuItem>
      ))}
    </HiddenItemsContainer>
  )
}

const MenuItems = ({ menuItems }) => {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [visibility, setVisibility] = useState("hidden")

  const { menu } = useResponsiveMenu({ containerRef, menuItems })

  // to prevent a flash of the responsive nav bar
  // we hide it initially (using the "visibility" property)
  // until a resized version is ready to be shown
  useEffect(() => {
    setVisibility("visible")
  }, [visibility])

  const isHiddenEmpty = menu.hiddenItems.length === 0

  const handleMoreClick = () => setOpen(true)
  const handleOutsideClick = () => setOpen(false)

  return (
    <StyledNav ref={containerRef}>
      <VisibleItems visibleItems={menu.visibleItems} />
      {!isHiddenEmpty && <MoreButton onClick={handleMoreClick} />}
      {!isHiddenEmpty && open && (
        <HiddenItems menu={menu} handleOutsideClick={handleOutsideClick} />
      )}
    </StyledNav>
  )
}

const loggedIn = true

const AccountSection = () =>
  loggedIn ? (
    <FlexRow>
      <StyledButton
        margin="0.5rem"
        primary
        onClick={() => console.log("Clicked log in!")}
      >
        Log in
      </StyledButton>
      <StyledButton
        margin="0.5rem"
        onClick={() => console.log("Clicked register!")}
      >
        Register
      </StyledButton>
    </FlexRow>
  ) : (
    <FlexRow>
      <StyledButton
        margin={"0.5rem"}
        primary
        onClick={() => console.log("Clicked log out!")}
      >
        Log out
      </StyledButton>
    </FlexRow>
  )

const Navigation = ({ logo, menuItems }) => (
  <StyledHeader>
    <FlexRow margin="0 2rem 0rem 2rem" flexWrap="nowrap">
      <ImageLink to="/" imagePath={logo} />
      <MenuItems menuItems={menuItems} />
    </FlexRow>
  </StyledHeader>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
