import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

import FlexRow from "../common/container"
import { AnchorLink } from "../common/link"
import { EllipsisParagraph } from "../common/paragraphs"

const FeaturedWineryContainer = styled(FlexRow)`
    flex-wrap:nowrap;
    align-items:flex-start;
`

const ContentContainer = styled.div`
    width:50%;
`

const WineryImage = styled(Img)`
    width:40%;
`

export default ({ name, description, image }) => (
    <FeaturedWineryContainer>
        <ContentContainer>
            <h2>Featured winery: {name}</h2>
            <EllipsisParagraph lineNumber={5}>{description}</EllipsisParagraph>
            <AnchorLink>Learn more</AnchorLink>
        </ContentContainer>
        <WineryImage fluid={image} />
    </FeaturedWineryContainer>
)