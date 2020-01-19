import React from "react"
import styled from "styled-components"
import { hoverAnimationStyle } from "./container"

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
  ${hoverAnimationStyle}
  box-shadow: 0 0 10px 0 rgb(126, 34, 66, 0.3);
`

export const TransparentTextButton = styled.button`
  position: relative;
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: 0.5rem 2rem;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
  font-size: ${props => (props.fontSize ? props.fontSize : "100%")};
  border: none;
  border-radius: 6px;
  background: none;
  outline: none;
  color: black;
  mix-blend-mode: screen;
  box-shadow: 0 0 10px 0 rgb(126, 34, 66, 0.3);

  ${hoverAnimationStyle}

  &:hover {
    cursor: pointer;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    border-radius: 0.3em;
    content: "";
    mix-blend-mode: color-burn;
  }
`

export default StyledButton
