import React from "react"
import styled from "styled-components"
import StyledButton from "../common/button"

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: ${props => (props.show ? "block" : "none")};
`

const ModalContentContainer = styled.div`
  position: fixed;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 500px;
`

export default ({ handleClose, show, children }) => (
  <ModalContainer show={show}>
    <ModalContentContainer>
      {children}
      <StyledButton margin="0 0 10% 0" secondary onClick={handleClose}>
        Close
      </StyledButton>
    </ModalContentContainer>
  </ModalContainer>
)
