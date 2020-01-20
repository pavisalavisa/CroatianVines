import React, { useState } from "react"
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
  margin: ${props => props.margin};
`

const ErrorText = styled.p`
  color: red;
`

export default ({ onLogIn, margin, isAuth, setIsAuth }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(null)

  const onLogInButtonClick = () => {
    if (!username) {
      setAuthError("Username should not be empty.")
      return
    }
    if (!password) {
      setAuthError("Password should not be empty.")
      return
    }

    logIn(username, password)
    setIsAuth(true)
    onLogIn()
  }

  return (
    <LoginFormContainer margin={margin}>
      <h4>Please log in to proceed</h4>
      {authError ? <ErrorText>{authError}</ErrorText> : null}
      <Input
        margin="0 0 5% 0"
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        maxWidth="350px"
      />
      <Input
        margin="0 0 5% 0"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        maxWidth="350px"
      />
      <StyledButton onClick={onLogInButtonClick}>Log in</StyledButton>
    </LoginFormContainer>
  )
}
