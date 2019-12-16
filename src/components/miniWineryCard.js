import React from "react";
import styled from "styled-components"
import Image from "gatsby-image"

const MiniWineryCard = ({ image, name, description }) => (
    <MiniWineryCardContainer>
        <Image fixed={image} />
        <h2>{name}</h2>
        <p>{description}</p>
    </MiniWineryCardContainer>
)

const MiniWineryCardContainer = styled.div`
    /* TODO: make a smoother animation */
    &:hover{
        -webkit-transform: scale(1.15);
        -ms-transform: scale(1.15);
        transform: scale(1.15);
    }
    width:440px;
    height:480px;
    border: 1px solid rgba(0,0,0,0.3);
`

export default MiniWineryCard;