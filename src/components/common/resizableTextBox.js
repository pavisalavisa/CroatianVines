import React, { forwardRef } from "react"
import styled from "styled-components"
import TextareaAutosize from "react-autosize-textarea"

const StyledTextArea = styled(TextareaAutosize)`
  padding: 0.5rem;
  resize: none;
  overflow-y: hidden;
  position: relative;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  flex-grow: 1;
  color: #333333;
  font-size: ${props => (props.fontSize ? props.fontSize : "100%")};
  margin: 25px 0 25px 0;
  &:focus {
    border-bottom: 2px solid #333333;
  }
`

export default forwardRef((props, ref) => (
  <StyledTextArea
    ref={ref}
    rows={props.rows}
    onChange={props.onChange}
    {...props}
  />
))
