import styled from "styled-components"
import React from "react"

export const StyledParagraph = styled.p`
  text-align: ${props => (props.centered ? "center" : "left")};
  font-size: ${props => (props.fontSize ? props.fontSize : null)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const CenteredParagraph = styled.p`
  text-align: center;
`

export const SubscriptParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: small;
`

export const EllipsisParagraph = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.lineNumber ? props.lineNumber : null)};
  -webkit-box-orient: vertical;
`

export const ParagraphWithLineBreaks = props =>
  props.string.split("\n").map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      <StyledParagraph {...props}>{text}</StyledParagraph>
      <br />
    </React.Fragment>
  ))
