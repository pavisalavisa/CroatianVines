import React from "react"
import styled from "styled-components"
import { logIn } from "../services/authService"
import StyledButton from "../components/common/button"
import Input from "./common/input"

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15%;
  align-items: center;
`

export default () => (
  <LoginFormContainer>
    <h4>Please log in to proceed</h4>
    <Input
      margin="0 0 5% 0"
      type="text"
      placeholder="Username"
      maxWidth="350px"
    />
    <Input
      margin="0 0 5% 0"
      type="password"
      placeholder="Password"
      maxWidth="350px"
    />
    <StyledButton>Log in</StyledButton>
  </LoginFormContainer>
)
