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
import { FlexRow, underlinedContainerStyle } from "./common/container"
import more from "../images/more.svg"
import { Location } from "@reach/router"

const StyledHeader = styled.header`
  background: white;
  padding: 0;
  box-shadow: 0 0 10px 0 rgb(126, 34, 66, 0.3);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`

const StyledMenuItem = styled(Link)`
  border-bottom: ${props => (props.isActive ? "4px solid #5b0b0b" : null)};
  ${underlinedContainerStyle};

  font-size: 125%;
  color: #5b0b0b;
  padding: 0.5rem;
  text-decoration: none;
`

const MenuItem = props => (
  <Location>
    {({ location }) => (
      <StyledMenuItem
        isActive={
          location.pathname.replace("/", "") === props.to.replace("/", "")
        }
        {...props}
      >
        {props.children}
      </StyledMenuItem>
    )}
  </Location>
)

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

const MoreButtonContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : "50px")};
  padding: 0 1rem;
  cursor: pointer;
`

const MoreButtonIcon = styled.img`
  filter: invert(17%) sepia(19%) saturate(4506%) hue-rotate(330deg)
    brightness(82%) contrast(113%);
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
    <MenuItem key={visibleItems.indexOf(menuItem)} to={menuItem.path}>
      {menuItem.text.toUpperCase()}
    </MenuItem>
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
        <MenuItem
          key={menuItem.path}
          to={menuItem.path}
          partiallyActive={menuItem.partiallyActive}
        >
          {menuItem.text}
        </MenuItem>
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
