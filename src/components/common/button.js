import React from "react"
import styled from "styled-components"

const StyledButton = styled(props => <button {...props} />)`
  color:${props => props.primary ? "#5B0B0B" : "white"};
  background:${props => props.primary ? "white" : "#5B0B0B"};
  border:${props => props.primary ? "3px solid #5B0B0B" : "none"};
  border-radius:6px;
  padding:0.5rem 2.25rem;
  margin: ${props => props.margin ? props.margin : "0rem"};
  font-size:${props => props.fontSize ? props.fontSize : "medium"};
  z-index:${props => props.toFront ? 999 : 0};
  cursor:pointer;
`

export default StyledButton