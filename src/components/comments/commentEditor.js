import React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import { FlexRow } from "../common/container"
import DefaultUserImage from "../../images/defaultUserImage.svg"
import StyledButton from "../common/button"
import ResizableTextBox from "../common/resizableTextBox"
import UserCommentImage from "./userCommentImage"
import { isAuthenticated } from "../../services/authService"
import nanoid from "nanoid"
import Modal from "../common/modal"
import AuthenticationForm from "../authenticationForm"
import authenticatedImage from "../../images/authenticatedImage.jpg"

const CommentEditorContainer = styled.div`
  margin-bottom: 5%;
`

export default ({ postCommentAction, authenticationRequired }) => {
  const [buttonsHidden, setButtonsHidden] = useState(true)
  const [textAreaText, setTextAreaText] = useState("")
  const [displayLoginModal, setDisplayLoginModal] = useState(false)
  const [userImage, setUserImage] = useState(
    isAuthenticated() ? authenticatedImage : DefaultUserImage
  )
  const inputRef = useRef(null)

  const handleInputFocus = () => {
    if (!authenticationRequired) return

    if (isAuthenticated()) {
      setButtonsHidden(false)
    } else {
      setDisplayLoginModal(true)
      inputRef.current.blur()
    }
  }

  const handleCancelButtonClick = () => {
    setTextAreaText("")
    setButtonsHidden(true)
  }

  const handleCommentButtonClick = () => {
    postCommentAction({
      id: nanoid(),
      name: "Antonio Kristiceivc",
      content: textAreaText,
      image: authenticatedImage,
    })
    setTextAreaText("")
    setButtonsHidden(true)
  }

  return (
    <CommentEditorContainer>
      {displayLoginModal && (
        <Modal handleClose={() => setDisplayLoginModal(false)}>
          <AuthenticationForm
            onLogIn={() => {
              setDisplayLoginModal(false)
              setUserImage(authenticatedImage)
            }}
          />
        </Modal>
      )}
      <FlexRow alignItems="flex-start">
        <UserCommentImage alt="avatar" src={userImage} />
        <ResizableTextBox
          ref={inputRef}
          value={textAreaText}
          rows={1}
          placeholder="Add a public opinion"
          onChange={e => setTextAreaText(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={() => (!!textAreaText ? null : setButtonsHidden(true))}
        />
      </FlexRow>
      <FlexRow justifyContent="flex-end" hidden={buttonsHidden}>
        <StyledButton
          margin="0 2.5% 0 0"
          secondary="true"
          onClick={handleCancelButtonClick}
        >
          Cancel
        </StyledButton>
        <StyledButton onClick={handleCommentButtonClick}>Comment</StyledButton>
      </FlexRow>
    </CommentEditorContainer>
  )
}
