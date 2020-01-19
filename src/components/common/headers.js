import styled from "styled-components"

export const StyledH1 = styled.h1`
  color: ${props => (props.secondaryColor ? "#ffffff" : "#333333")};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-size: ${props => (props.fontSize ? props.fontSize : null)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
`
