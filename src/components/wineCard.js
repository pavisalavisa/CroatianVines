import React from "react";
import styled from "styled-components"
import Image from "gatsby-image"

import { hoverAnimationStyle } from "./common/container"
import Divider from "./common/divider"

const WineCard = ({ image, name, description }) => (
    <WineCardContainer>
        <div>
            <WineName>{name}</WineName>
            <Divider margin="0.75rem 50px" />
            <WineDescription>{description}</WineDescription>
        </div>
        <Image fixed={image} />
    </WineCardContainer>
)

const WineCardContainer = styled.div`
    ${hoverAnimationStyle}    
    display: inline-block;    
    vertical-align: middle;
    box-sizing:content-box;

    width:400px;
    height:165px;
    border: 1px solid rgba(0,0,0,0.3);
`

const WineName = styled.h3`
    margin: 20px 0 0 50px;
`

const WineDescription = styled.p`
    margin: 0 0 0 50px;
    font-size:small;
`

export default WineCard;