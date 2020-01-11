import React from "react";
import styled from "styled-components"
import Img from "gatsby-image"

import { hoverAnimationStyle } from "../common/container"
import Divider from "../common/divider"

export default ({ image, name, description }) => (
    <WineryCardContainer>
        <div>
            <WineryName>{name}</WineryName>
            <Divider margin="0.75rem 50px" />
            <WineryDescription>{description}</WineryDescription>
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
    margin: 20px 0 0 50px;
`

const WineryDescription = styled.p`
    margin: 0 0 20px 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:medium;
`

const WineryThumbnail = styled(Img)`
    margin: 20px 50px;
    min-width:250px;
`