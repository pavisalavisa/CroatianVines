import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

export const ImageLink = ({ imagePath, to }) => (
  <Link to={to}>
    <Img fixed={imagePath} />
  </Link>
)

export const AnchorLink = styled.a`
  color: #5b0b0b;
  font-weight: bold;
  cursor: pointer;
  padding: 2rem 2rem 2rem 0;
`
