import React from "react";
import styled from "styled-components"
import Img from "gatsby-image"

import { hoverAnimationStyle } from "../common/container"
import Divider from "../common/divider"

const WineCard = ({ image, name, description }) => (
    <WineCardContainer>
        <div>
            <WineName>{name}</WineName>
            <Divider margin="0.75rem 50px" />
            <WineDescription>{description}</WineDescription>
        </div>
        <WineThumbnail fixed={image} />
    </WineCardContainer>
)

const WineCardContainer = styled.div`
    ${hoverAnimationStyle}    
    display: flex;    
    vertical-align: middle;
    box-sizing:content-box;

    width:440px;
    height:165px;
    border: 1px solid rgba(0,0,0,0.3);

    &:hover{
        cursor: pointer;
    }
`

const WineName = styled.h3`
    margin: 20px 0 0 50px;
`

const WineDescription = styled.p`
    margin: 0 0 0 50px;
    font-size:small;
`

const WineThumbnail = styled(Img)`
    margin:20px;
`

export default WineCard;