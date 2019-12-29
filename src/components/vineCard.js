import React from "react";
import styled from "styled-components"
import Image from "gatsby-image"

import hoverAnimationStyle from "../components/common/container"

const VineCard = ({ image, name, description }) => (
    <VineCardContainer>
        <ContentContainer>
            <h2>{name}</h2>
            <p>{description}</p>
        </ContentContainer>
        <Image fixed={image} />
    </VineCardContainer>
)

const VineCardContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    ${hoverAnimationStyle}
    
    box-sizing:content-box;

    width:350px;
    height:380px;
    border: 1px solid rgba(0,0,0,0.3);
`

const ContentContainer = styled.div``

export default VineCard;