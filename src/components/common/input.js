import styled from "styled-components"

export default styled.input`
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);

  width: ${props => (props.width ? props.width : "auto")};
  min-width: ${props => (props.minWidth ? props.minWidth : null)};
  max-width: ${props => (props.maxWidth ? props.maxWidth : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : "100%")};
  margin: ${props => (props.margin ? props.margin : null)};

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #5b0b0b;
  }
`
