import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

import { AnchorLink } from "../common/link"
import { EllipsisParagraph } from "../common/paragraphs"

const FeaturedWineryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 5vw;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
  }
`

export default ({ name, description, image }) => (
  <FeaturedWineryContainer>
    <div>
      <h2>Featured winery: {name}</h2>
      <EllipsisParagraph lineNumber={5}>{description}</EllipsisParagraph>
      <AnchorLink>Learn more</AnchorLink>
    </div>
    <Img fluid={image} />
  </FeaturedWineryContainer>
)
