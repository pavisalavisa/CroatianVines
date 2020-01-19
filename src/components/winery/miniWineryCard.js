import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { EllipsisParagraph } from "../common/paragraphs"
import { hoverAnimationStyle } from "../common/container"

const WineryImage = styled(Image)`
  height: 250px;
  max-height: 250px;
`

const MiniWineryCardContainer = styled.div`
  ${hoverAnimationStyle}
  display: inline-block;
  vertical-align: middle;
  box-sizing: content-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px #5b0b0b;
  }

  & > h2,
  p {
    margin: 1rem;
  }
`

const MiniWineryCard = ({ image, name, description }) => (
  <MiniWineryCardContainer>
    <WineryImage fluid={image} />
    <h2>{name}</h2>
    <EllipsisParagraph lineNumber={3}>{description}</EllipsisParagraph>
  </MiniWineryCardContainer>
)

export default MiniWineryCard
