import React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import { FlexRow } from "../common/container"
import DefaultUserImage from "../../images/defaultUserImage.svg"
import StyledButton from "../common/button"
import ResizableTextBox from "../common/resizableTextBox"
import UserCommentImage from "./userCommentImage"
import { isAuthenticated } from "../../services/authService"

const CommentEditorContainer = styled.div`
margin-bottom:5%;
`

export default ({ postCommentAction }) => {
    const [buttonsHidden, setButtonsHidden] = useState(true)
    const [textAreaText, setTextAreaText] = useState("")
    const inputRef = useRef(null)

    const handleInputFocus = () => {
        if (isAuthenticated()) {
            setButtonsHidden(false)
        }
        else {
            // displayLogInForm()
            inputRef.current.blur()
        }
    }

    const handleCancelButtonClick = () => {
        setTextAreaText("")
        setButtonsHidden(true)
    }

    const handleCommentButtonClick = () => {
        postCommentAction({ name: 'Antonio Kristiceivc', content: textAreaText })
        setTextAreaText("")
        setButtonsHidden(true)
    }

    return (<CommentEditorContainer>
        <FlexRow alignItems="flex-start">
            <UserCommentImage alt="avatar" src={DefaultUserImage} />
            <ResizableTextBox
                ref={inputRef}
                value={textAreaText}
                rows={1}
                placeholder="Add a public opinion"
                onChange={(e) => setTextAreaText(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={() => !!textAreaText ? null : setButtonsHidden(true)} />
        </FlexRow>
        <FlexRow justifyContent="flex-end" hidden={buttonsHidden}>
            <StyledButton
                margin="0 2.5% 0 0"
                secondary="true"
                onClick={handleCancelButtonClick}>
                Cancel
            </StyledButton>
            <StyledButton onClick={handleCommentButtonClick}>
                Comment
            </StyledButton>
        </FlexRow>
    </CommentEditorContainer>)
}