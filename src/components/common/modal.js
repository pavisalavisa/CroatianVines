import React from "react"
import styled from "styled-components"

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display:${props => props.show ? "block" : "none"};
`

const ModalContentContainer = styled.div`
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

export default ({ handleClose, show, children }) => {

    return (
        <ModalContainer show={show}>
            <ModalContentContainer>
                {children}
                <StyledButton secondary onClick={handleClose}>Close</StyledButton>
            </ModalContentContainer>
        </ModalContainer>
    )
}