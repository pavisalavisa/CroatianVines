import React from "react"
import styled from "styled-components"

const StyledButton = styled(props => <button {...props} />)`
  color:${props => props.primary ? "#5B0B0B" : "white"};
  background:${props => props.primary ? "white" : "#5B0B0B"};
  border:3px solid #5B0B0B;
  border-radius:6px;
  padding:0.5rem 2.25rem;
  margin: ${props => props.margin ? props.margin : "0rem"}
`

export default StyledButton