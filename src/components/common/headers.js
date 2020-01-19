import styled from "styled-components"

export const StyledH1 = styled.h1`
    color: ${props => props.secondaryColor ? '#ffffff' : '#333333'};
    text-align: ${props => props.centered ? 'center' : 'left'}
`

export const SubscriptParagraph = styled.p`
    color:rgba(0,0,0,0.5);
    font-size:small;
`

export const EllipsisParagraph = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.lineNumber ? props.lineNumber : null};
    -webkit-box-orient: vertical;  
`