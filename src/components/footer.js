import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FlexRow } from "./common/container"
import { useStaticQuery, graphql } from "gatsby"
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

const CopyrightContainer = styled.div`
  text-align: center;
  padding-bottom: 5%;
`

const SocialMediaIcon = styled.img`
  ${hoverAnimationStyle}
`

const Footer = ({ siteDescription, siteAuthor }) => {
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
          {siteDescription}
          <br />© {new Date().getFullYear()} Croatian Vines
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
