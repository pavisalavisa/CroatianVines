import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FlexRow, underlinedContainerStyle } from "./common/container"
import Image from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { hoverAnimationStyle } from "./common/container"

const StyledFooter = styled.footer`
  padding-top: 5%;
  margin-top: 10%;
  width: 100%;
  background-color: rgba(191, 148, 148, 0.2);

  & > div {
    margin: 0 10%;
  }
`
const StyledMenuItem = styled(props => <Link {...props} />)`
  ${underlinedContainerStyle}
  color: #5B0B0B;
  padding: 0.5rem;
  text-decoration: none;
`
const CopyrightContainer = styled.div`
  text-align: center;
  padding-bottom: 5%;
`

const StyledFooterNavigation = styled(FlexRow)`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const SocialMediaIcon = styled.img`
  ${hoverAnimationStyle}
`

const NavigationItemGroup = ({ items }) => (
  <FlexRow>
    {items.map(menuItem => (
      <StyledMenuItem key={items.indexOf(menuItem)} to={menuItem.path}>
        {menuItem.text.toUpperCase()}
      </StyledMenuItem>
    ))}
  </FlexRow>
)

const FooterNavigation = ({ logo, navigationItems }) => (
  <StyledFooterNavigation>
    <NavigationItemGroup
      items={navigationItems.slice(0, Math.ceil(navigationItems.length / 2))}
    ></NavigationItemGroup>
    <Image fixed={logo} />
    <NavigationItemGroup
      items={navigationItems.slice(Math.ceil(navigationItems.length / 2))}
    ></NavigationItemGroup>
  </StyledFooterNavigation>
)

const Footer = ({ logo, siteDescription, siteAuthor, navigationItems }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      socialMediaIcons: allFile(
        filter: { relativePath: { regex: "/socialMedia/" } }
      ) {
        nodes {
          childImageSharp {
            fixed(quality: 100, width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <div>
        <FlexRow justifyContent="center" margin="2.5% 0 ">
          <FlexRow justifyContent="space-around" width="300px" maxWidth="100%">
            {data.socialMediaIcons.nodes.map(icon => (
              <SocialMediaIcon src={icon.childImageSharp.fixed.src} />
            ))}
          </FlexRow>
        </FlexRow>
        <CopyrightContainer>
          © {new Date().getFullYear()} Croatian Vines, {siteDescription}{" "}
          {siteAuthor}
        </CopyrightContainer>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  siteDescription: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteDescription: ``,
  siteAuthor: ``,
}

export default Footer
