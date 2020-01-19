import React from "react"
import styled from "styled-components"

const StyledButton = styled(props => <button {...props} />)`
  color: ${props => (props.secondary ? "#5B0B0B" : "white")};
  background: ${props => (props.secondary ? "white" : "#5B0B0B")};
  border: 3px solid #5b0b0b;
  border-radius: 6px;
  padding: 0.5rem 2rem;
  margin: ${props => (props.margin ? props.margin : "0")};
  font-size: ${props => (props.fontSize ? props.fontSize : "100%")};
  z-index: ${props => (props.toFront ? 999 : 0)};
  cursor: pointer;
`

export default StyledButton
