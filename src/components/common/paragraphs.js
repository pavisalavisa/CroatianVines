import styled from "styled-components"

export const CenteredParagraph = styled.p`
    text-align:center;
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