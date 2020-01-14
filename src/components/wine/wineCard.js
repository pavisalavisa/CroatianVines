import React from "react";
import styled from "styled-components"
import Img from "gatsby-image"
import { navigate } from '@reach/router';

import { hoverAnimationStyle } from "../common/container"
import { EllipsisParagraph } from "../common/paragraphs"

const WineCard = ({ image, name, description, link }) => (
    <WineCardContainer onClick={link ? () => navigate(`/wine/${link}`) : null}>
        <div>
            <WineName>{name}</WineName>
            <WineDescription lineNumber={3}>{description}</WineDescription>
        </div>
        <WineThumbnail fixed={image} />
    </WineCardContainer>
)

const WineCardContainer = styled.div`
    ${hoverAnimationStyle}    
    display: flex;    
    vertical-align: middle;
    box-sizing:content-box;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius:6px;

    &:hover{
        cursor: pointer;
        box-shadow:0 0 3px #5B0B0B;
    }
`

const WineName = styled.h3`
    margin: 7.5% 0 0 7.5%;
`

const WineDescription = styled(EllipsisParagraph)`
    margin: 7.5%;
    font-size: 85%;
`

const WineThumbnail = styled(Img)`
    margin:7.5% ;
`

export default WineCard;