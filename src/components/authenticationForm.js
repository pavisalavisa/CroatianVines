import React from "react"
import styled from "styled-components"
import { logIn } from "../services/authService"

const LoginFormContaienr = styled.div`
    position:absolute;
`

export default () => (
    <LoginFormContainer>
        <h4>Username:</h4>
        <input />
        <h4>Password:</h4>
        <input />
    </LoginFormContainer>
)