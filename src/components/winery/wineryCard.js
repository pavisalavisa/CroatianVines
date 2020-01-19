import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { hoverAnimationStyle } from "../common/container"
import { EllipsisParagraph } from "../common/paragraphs"

const WineryCardContainer = styled.div`
  ${hoverAnimationStyle}
  display: flex;
  vertical-align: middle;
  box-sizing: content-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px #5b0b0b;
  }
`

const WineryName = styled.h3`
  margin: 2.5% 0 2.5% 2.5%;
`

const WineryDescription = styled(EllipsisParagraph)`
  margin: 0 0 2.5% 2.5%;
  font-size: 100%;
`

const WineryThumbnail = styled(Img)`
  margin: 2.5%;
  flex-grow: 1;
`

const ContentContainer = styled.div`
  max-width: 60%;
`

export default ({ image, name, description }) => (
  <WineryCardContainer>
    <ContentContainer>
      <WineryName>{name}</WineryName>
      <WineryDescription lineNumber={7}>{description}</WineryDescription>
    </ContentContainer>
    <WineryThumbnail fixed={image} />
  </WineryCardContainer>
)
