import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

import FlexRow from "../common/container"
import { AnchorLink } from "../common/link"

const FeaturedWineryContainer = styled(FlexRow)`
    
`
const ContentContainer = styled.div`
    max-width:1000px;
`
const WineryImage = styled(Img)`
    min-width:500px;
`

export default ({ name, description, image }) => (
    <FeaturedWineryContainer>
        <ContentContainer>
            <h2>Featured winery: {name}</h2>
            <p>{description}</p>
            <AnchorLink>Learn more</AnchorLink>
        </ContentContainer>
        <WineryImage fluid={image} />
    </FeaturedWineryContainer>
)