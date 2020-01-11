import React from "react";
import styled from "styled-components"
import Img from "gatsby-image"

import { hoverAnimationStyle } from "../common/container"
import Divider from "../common/divider"
import { EllipsisParagraph } from "../common/paragraphs"

export default ({ image, name, description }) => (
    <WineryCardContainer>
        <div>
            <WineryName>{name}</WineryName>
            <Divider margin="0.75rem 25px" />
            <WineryDescription lineNumber={7}>{description}</WineryDescription>
        </div>
        <WineryThumbnail fixed={image} />
    </WineryCardContainer>
)

const WineryCardContainer = styled.div`
    ${hoverAnimationStyle}    
    display: flex;    
    vertical-align: middle;
    box-sizing:content-box;

    border: 1px solid rgba(0,0,0,0.3);

    &:hover{
        cursor: pointer;
    }
`

const WineryName = styled.h3`
    margin: 25px 0 0 25px;
`

const WineryDescription = styled(EllipsisParagraph)`
    margin: 0 0 25px 25px;    
    font-size:medium;
`

const WineryThumbnail = styled(Img)`
    margin: 25px;
    min-width:250px;
`