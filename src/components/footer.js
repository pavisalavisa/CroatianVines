import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledFooter= styled.footer`
background:red;
marginBottom:1.45rem;
`

const Footer = ({ siteDescription, siteAuthor }) => (
    <StyledFooter>
            © {new Date().getFullYear()} Croatian Vines, {siteDescription} {siteAuthor}
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
