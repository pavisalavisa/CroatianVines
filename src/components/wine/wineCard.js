import React from "react";
import styled from "styled-components"
import Img from "gatsby-image"
import { navigate } from '@reach/router';

import { hoverAnimationStyle } from "../common/container"
import Divider from "../common/divider"
import { EllipsisParagraph } from "../common/paragraphs"

const WineCard = ({ image, name, description, link }) => (
    <WineCardContainer onClick={link ? () => navigate(`/wine/${link}`) : null}>
        <div>
            <WineName>{name}</WineName>
            <Divider margin="0.75rem 50px" />
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
    height:180px;
    border: 1px solid rgba(0,0,0,0.3);

    &:hover{
        cursor: pointer;
    }
`

const WineName = styled.h3`
    margin: 20px 0 0 50px;
`

const WineDescription = styled(EllipsisParagraph)`
    margin: 0 0 0 50px;
    font-size: medium;
`

const WineThumbnail = styled(Img)`
    margin:20px;
`

export default WineCard;