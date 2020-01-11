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
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover, &:focus, &:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        cursor: pointer;
    }

    & > h2,p{
        margin:1rem;
    }
    
    box-sizing:content-box;

    width:440px;
    height:480px;
    border: 1px solid rgba(0,0,0,0.3);
`

export default MiniWineryCard;